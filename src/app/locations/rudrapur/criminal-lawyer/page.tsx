import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Criminal Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
  description:
    "Criminal lawyer in Rudrapur handling bail matters, criminal complaints and trials. District & Sessions Court Rudrapur.",
};

export default function CriminalLawyerRudrapurPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Criminal Lawyer in Rudrapur
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-700">
              Handling criminal matters including bail, complaints and trial representation
              before the District & Sessions Court, Rudrapur and High Court, Nainital.
            </p>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                How Criminal Matters Are Handled
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Bail applications and urgent hearings</li>
                <li>Criminal complaints and defence</li>
                <li>Trial-stage representation</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Consult Criminal Lawyer
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
