import { ArrowRight } from "lucide-react";

const principles = [
  ["Business before technology", "Start with the operating problem, value case and constraints before selecting platforms or models."],
  ["Governance by design", "Security, data ownership, review controls and accountability belong inside the delivery model."],
  ["Build for adoption", "Transformation succeeds only when people, processes and technology move together."],
  ["Scale what proves value", "Use measurable milestones to expand capabilities rather than forcing big-bang transformation."],
];

export default function AboutPage(){
  return <main>
    <section className="service-hero"><div className="shell service-hero-grid"><div><a href="/" className="service-back">← Nexusinn</a><div className="eyebrow">About Nexusinn</div><h1>Connecting global capability, AI and insurance <span>transformation.</span></h1><p className="lead">Nexusinn is being built around a simple idea: enterprises should not have to treat capability centers, artificial intelligence and regulated-industry modernization as disconnected programs. We connect operating-model strategy with engineering, governance and domain-aware execution.</p><div className="hero-actions"><a className="btn btn-primary" href="/contact">Start a conversation <ArrowRight size={16}/></a><a className="btn btn-outline" href="/gcc-solutions">Explore our capabilities</a></div></div><div className="service-panel"><span className="service-panel-kicker">Our focus</span><div className="service-panel-flow"><b>Capability</b><span>+</span><b>Intelligence</b><span>+</span><b>Industry</b></div><p>One transformation mindset spanning GCC strategy, AI/ML delivery and insurance technology.</p></div></div></section>
    <section className="section"><div className="shell"><div className="section-head"><div className="eyebrow">How we work</div><h2>Enterprise transformation should be practical, accountable and built to last.</h2><p>Our approach combines strategic clarity with production-minded delivery. We design around real operating constraints, existing systems, governance needs and measurable outcomes.</p></div><div className="service-card-grid">{principles.map(([title,text])=><article className="service-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section section-soft"><div className="shell service-two-col"><div><div className="eyebrow">Three connected pillars</div><h2>Capability, intelligence and regulated-industry execution.</h2></div><div className="service-checks"><p>Global Capability Center design and operating models</p><p>AI strategy, ML engineering and intelligent automation</p><p>Insurance claims, underwriting and platform modernization</p><p>Responsible AI, security and governance foundations</p><p>Enterprise delivery designed for progressive scale</p><p>Long-term capability building rather than one-off implementation</p></div></div></section>
  </main>
}
