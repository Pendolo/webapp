import Link from "next/link";

export function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 font-semibold tracking-tight">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
        P
      </span>
      <span className="text-lg text-foreground">Pendolo</span>
    </Link>
  );
}
