import { Container } from "./container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container>
        <div className="py-10 text-sm text-slate-600">
          <div className="font-medium text-slate-900">{site.name}</div>
          <div className="mt-2">
            {site.chamber} • {site.hours}
          </div>
          <div className="mt-6 text-xs leading-relaxed text-slate-500">
            Disclaimer: As per the rules of the Bar Council of India, this website
            does not solicit or advertise. The information provided is for general
            informational purposes only and should not be treated as legal advice.
          </div>
          <div className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
