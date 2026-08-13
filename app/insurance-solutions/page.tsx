import { ArrowRight } from "lucide-react";

const solutions = [
  ["Claims Automation", "Streamline intake, triage, document handling, fraud signals and adjuster workflows without losing human oversight.", "/insurance-solutions/claims-automation"],
  ["Underwriting AI", "Use data, decision support and explainable models to improve risk assessment and underwriting productivity.", "/insurance-solutions/underwriting-ai"],
  ["InsurTech Platforms", "Modernize customer, policy and operations experiences with modular, API-ready insurance technology.", "/insurance-solutions/insurtech-platforms"],
  ["Compliance & Regulatory Tech", "Embed auditability, data controls, governance and regulatory workflows into insurance technology foundations.", "/insurance-solutions/compliance-regtech"],
];

export default function InsuranceSolutionsPage() {
  return (
    <main>
      <section className="service-hero">
        <div className="shell service-hero-grid">
          <div>
            <a href="/" className="service-back">← Nexusinn</a>
            <div className="eyebrow">Insurance Solutions</div>
            <h1>Modern insurance operations.<br/><span>Built for intelligence and control.</span></h1>
            <p className="lead">Nexusinn helps insurers improve claims, underwriting, policy operations and digital platforms using AI-enabled technology designed around security, governance and regulated-industry realities.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#insurance-services">Explore Insurance Services <ArrowRight size={16}/></a><a className="btn btn-outline" href="/#contact">Discuss Your Roadmap</a></div>
          </div>
          <div className="service-panel">
            <span className="service-panel-kicker">Insurance transformation model</span>
            <div className="service-panel-flow"><b>Assess</b><span>→</span><b>Modernize</b><span>→</span><b>Automate</b><span>→</span><b>Govern</b></div>
            <p>Connect business process redesign, AI engineering, platform modernization and compliance controls in one transformation roadmap.</p>
          </div>
        </div>
      </section>

      <section className="section" id="insurance-services">
        <div className="shell">
          <div className="section-head"><div className="eyebrow">Core capabilities</div><h2>Technology for the workflows that define insurer performance.</h2><p>We focus on high-value insurance processes where better data, automation and decision support can improve speed while preserving review, traceability and control.</p></div>
          <div className="service-card-grid">
            {solutions.map(([title, text, href], i) => <article className="service-card" key={title}><div className="number">0{i+1}</div><h3>{title}</h3><p>{text}</p><a className="link" href={href}>Explore capability →</a></article>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell service-two-col">
          <div><div className="eyebrow">Insurance by design</div><h2>Modernization without treating regulation as an afterthought.</h2></div>
          <div className="service-checks"><p>Human oversight for consequential decisions</p><p>Explainability and model governance foundations</p><p>Data access, privacy and retention controls</p><p>Audit trails across automated workflows</p><p>Integration with existing policy, claims and data systems</p><p>Progressive rollout instead of disruptive replacement</p></div>
        </div>
      </section>

      <section className="section"><div className="shell"><div className="cta"><h2>Modernize insurance workflows with intelligence, governance and measurable business value.</h2><div className="hero-actions"><a className="btn btn-primary" href="/#contact">Talk to Experts <ArrowRight size={16}/></a><a className="btn btn-outline" href="/ai-ml-services">Explore AI & ML</a></div></div></div></section>
    </main>
  );
}
