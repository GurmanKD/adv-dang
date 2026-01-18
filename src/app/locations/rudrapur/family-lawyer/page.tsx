import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Family Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
  description:
    "Family lawyer in Rudrapur handling divorce, maintenance and family disputes with confidentiality.",
};

export default function FamilyLawyerRudrapurPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Family Lawyer in Rudrapur
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-700">
              Handling family disputes, divorce matters and maintenance cases
              with a practical and confidential approach.
            </p>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Family Law Services
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Divorce and matrimonial disputes</li>
                <li>Maintenance matters</li>
                <li>Family litigation</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Book Consultation
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
