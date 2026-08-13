import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | GCC, AI & Insurance Transformation",
  description:
    "Answers to common questions about GCC setup, enterprise AI implementation, Generative AI, insurance AI oversight and InsurTech modernization.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  ["GCC Setup", "Which GCC model should an enterprise choose?", "The right model depends on control, speed, ownership, investment appetite, capability maturity and long-term strategic intent. Nexusinn supports Build-Operate-Transfer, Hybrid Captive and Joint Venture structures."],
  ["GCC Setup", "Can a GCC start small and scale later?", "Yes. A phased capability model can begin with focused functions and expand once governance, talent, delivery performance and ownership mechanisms are proven."],
  ["AI Implementation", "How do you move AI beyond proof of concept?", "Production AI requires more than a model. Data quality, integrations, monitoring, security, workflow ownership, human review and measurable adoption all need to be designed together."],
  ["AI Implementation", "Does Nexusinn support Generative AI?", "Yes. The AI/ML architecture includes strategy, readiness, ML engineering, intelligent automation, Generative AI integration and responsible AI governance."],
  ["Insurance Compliance", "How is human oversight handled in insurance AI?", "Our current design position is to preserve human authority for consequential decisions and use AI as governed decision support where appropriate, with traceability and review controls."],
  ["Insurance Compliance", "Can modernization work with existing core systems?", "Yes. The InsurTech platform approach is designed around modular architecture, APIs and progressive modernization rather than assuming a disruptive full-core replacement."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([, question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FAQPage(){
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="service-hero"><div className="shell"><a href="/" className="service-back">← Nexusinn</a><div className="eyebrow">FAQ</div><h1>Common questions about <span>transformation.</span></h1><p className="lead">A practical starting point for GCC setup, enterprise AI implementation and insurance technology modernization.</p></div></section>
    <section className="section"><div className="shell"><div className="faq-list">{faqs.map(([category,q,a])=><details className="faq-item" key={q}><summary><span><small>{category}</small>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section>
  </main>
}
