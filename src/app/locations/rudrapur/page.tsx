import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";
import Image from "next/image";
import { Badge } from "@/components/badge";

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

        <section className="py-16">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">

              {/* LEFT: Text */}
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>District & Sessions Court, Rudrapur</Badge>
                  <Badge>High Court, Nainital</Badge>
                  <Badge>Practicing since {site.practicingSince}</Badge>
                </div>

                <h1 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  {site.name}
                </h1>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                  Criminal matters, cheque bounce cases (NI Act 138) and family disputes — 
                  with courtroom-focused guidance and representation.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">
                    Free Initial Consultation
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phones[0]}`} variant="secondary">
                    Call: {site.phones[0]}
                  </ButtonLink>
                </div>
              </div>

              {/* RIGHT: Advocate Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative h-[340px] w-[260px] md:h-[380px] md:w-[300px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <Image
                    src="/images/advocate.jpg"
                    alt="Advocate Dharmendra Singh Dang"
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    priority
                    className="object-cover"
                  />
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
