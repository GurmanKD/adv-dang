import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Cheque Bounce Lawyer in Rudrapur | NI Act 138",
  description:
    "Cheque bounce lawyer in Rudrapur handling Section 138 NI Act cases, notices and court representation.",
};

export default function ChequeBounceRudrapurPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Cheque Bounce Lawyer in Rudrapur
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-700">
              Legal assistance for cheque dishonour cases under Section 138 of the NI Act
              before courts in Rudrapur.
            </p>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Cheque Bounce Case Support
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Legal notice drafting</li>
                <li>Filing and court representation</li>
                <li>Step-by-step guidance</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Consult Now
                </ButtonLink>
                <ButtonLink href={`tel:${site.phones[0]}`} variant="secondary">
                  Call Now
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
