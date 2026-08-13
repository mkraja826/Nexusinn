import { ArrowRight } from "lucide-react";

const tracks = [
  ["GCC & Transformation", "Operating-model strategy, program delivery, talent and capability-center execution."],
  ["AI & ML Engineering", "Machine learning, data engineering, GenAI integration, MLOps and intelligent automation."],
  ["Insurance Technology", "Claims, underwriting, platform modernization, integrations and regulated-workflow design."],
  ["Security & Governance", "Data governance, responsible AI, controls, auditability and enterprise risk foundations."],
];

export default function CareersPage(){
  return <main>
    <section className="service-hero"><div className="shell service-hero-grid"><div><a href="/" className="service-back">← Nexusinn</a><div className="eyebrow">Careers</div><h1>Build capabilities that <span>shape enterprises.</span></h1><p className="lead">Nexusinn is creating teams around global capability centers, enterprise AI and insurance technology. Our careers section is designed to grow with the company without publishing roles that are not genuinely open.</p><div className="hero-actions"><a className="btn btn-primary" href="/contact">Register your interest <ArrowRight size={16}/></a></div></div><div className="service-panel"><span className="service-panel-kicker">Talent focus</span><div className="service-panel-flow"><b>Domain</b><span>+</span><b>Engineering</b><span>+</span><b>Delivery</b></div><p>We value people who can connect technology with business context, operating realities and measurable outcomes.</p></div></div></section>
    <section className="section"><div className="shell"><div className="section-head"><div className="eyebrow">Capability tracks</div><h2>Where future opportunities will grow.</h2><p>We are not inventing vacancy counts or job openings. These are the capability areas Nexusinn is being designed around.</p></div><div className="service-card-grid">{tracks.map(([title,text])=><article className="service-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  </main>
}
