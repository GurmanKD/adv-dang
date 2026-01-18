import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Advocate in Rudrapur | Advocate Dharmendra Singh Dang",
  description:
    "Advocate Dharmendra Singh Dang in Rudrapur. Criminal law, cheque bounce cases and family matters. District & Sessions Court Rudrapur.",
};

export default function RudrapurLocationPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Advocate in Rudrapur
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              Advocate Dharmendra Singh Dang has been practicing since {site.practicingSince} and
              regularly appears before the District & Sessions Court, Rudrapur.
            </p>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Legal Services in Rudrapur
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>Criminal law matters</li>
                  <li>Cheque bounce (NI Act 138)</li>
                  <li>Family disputes and divorce</li>
                  <li>Consumer court matters</li>
                  <li>Motor accident claim cases</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Consultation & Office
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  {site.chamber}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Working hours: {site.hours}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">
                    Free Consultation
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phones[0]}`} variant="secondary">
                    Call Now
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
