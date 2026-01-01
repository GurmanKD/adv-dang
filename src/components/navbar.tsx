import Link from "next/link";
import { Container } from "./container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Adv. Dharmendra Singh Dang
          </Link>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="hover:text-slate-900">
                {i.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Consultation
          </Link>
        </div>
      </Container>
    </header>
  );
}
