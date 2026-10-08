import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Inverse rounded corner used to carve "folder tab" notches out of a panel.
 * Fill colour comes from the --cut CSS variable, size from --r.
 * `at` is where the transparent quarter-circle is centred (e.g. "100% 100%").
 */
export function Corner({ at, className }: { at: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute h-[var(--r)] w-[var(--r)]", className)}
      style={{ background: `radial-gradient(circle at ${at}, transparent calc(var(--r) - 0.5px), var(--cut) var(--r))` }}
    />
  );
}

/** Folder-tab notch for the top-left of a card/panel. Parent must set --cut and --r. */
export function TabNotch({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("absolute left-0 top-0 z-10 rounded-br-[var(--r)] bg-[var(--cut)]", className)}>
      {children}
      <Corner at="100% 100%" className="left-full top-0" />
      <Corner at="100% 100%" className="left-0 top-full" />
    </div>
  );
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    if (el.classList.contains("reveal")) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Section({
  id,
  className,
  children,
  as: Tag = "section",
  ...rest
}: { id?: string; className?: string; children: ReactNode; as?: ElementType; "aria-labelledby"?: string }) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag id={id} ref={ref} className={cn("relative scroll-mt-20", className)} {...rest}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-primary", className)}>
      <span className="h-px w-8 bg-primary" aria-hidden />
      {children}
    </p>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "link";
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", className }: BtnProps) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    primary: "bg-primary px-7 text-primary-foreground hover:shadow-red hover:-translate-y-0.5",
    outline: "border border-foreground/40 px-7 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
    link: "min-h-0 text-foreground hover:text-primary",
  };
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </a>
  );
}
