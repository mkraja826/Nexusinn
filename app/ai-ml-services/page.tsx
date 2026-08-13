import { ArrowRight, BrainCircuit, Database, Workflow, ShieldCheck, Sparkles, Gauge } from "lucide-react";

const services = [
  {icon: BrainCircuit, title:"AI Strategy & Roadmap", text:"Prioritize AI opportunities, define target operating models, and build an investment roadmap tied to business outcomes.", href:"/ai-ml-services/ai-strategy"},
  {icon: Gauge, title:"AI Readiness & Assessment", text:"Assess data, platforms, processes, governance and talent to identify what is production-ready and what needs strengthening.", href:"/ai-ml-services/ai-readiness"},
  {icon: Database, title:"ML Engineering", text:"Design, train, deploy and monitor machine-learning systems with robust data pipelines and production lifecycle controls.", href:"/ai-ml-services/ml-engineering"},
  {icon: Workflow, title:"Intelligent Automation", text:"Combine workflow automation, decisioning and AI to reduce repetitive work and improve operational consistency.", href:"/ai-ml-services/intelligent-automation"},
  {icon: Sparkles, title:"Generative AI Integration", text:"Integrate copilots, retrieval systems and domain-aware GenAI experiences into enterprise workflows and products.", href:"/ai-ml-services/generative-ai"},
  {icon: ShieldCheck, title:"Responsible AI & Governance", text:"Establish controls for privacy, security, model risk, human oversight, explainability and AI lifecycle governance.", href:"/ai-ml-services/responsible-ai"},
];

export default function AIMLServicesPage(){
  return <main>
    <section className="service-hero">
      <div className="shell service-hero-grid">
        <div>
          <div className="eyebrow">AI & ML Services</div>
          <h1>Move AI from experimentation to <span>enterprise execution.</span></h1>
          <p className="lead">Nexusinn helps enterprises identify the right use cases, prepare their data and platforms, engineer production-grade AI systems, and establish governance that supports responsible scale.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#services">Explore AI capabilities <ArrowRight size={16}/></a><a className="btn btn-outline" href="/#contact">Discuss your AI roadmap</a></div>
        </div>
        <div className="service-visual ai-visual" aria-hidden="true">
          <div className="ai-core">AI</div>
          <span className="node n1">Strategy</span><span className="node n2">Data</span><span className="node n3">Models</span><span className="node n4">Automation</span><span className="node n5">Governance</span>
        </div>
      </div>
    </section>

    <section className="section" id="services"><div className="shell">
      <div className="section-head"><div className="eyebrow">End-to-end capability</div><h2>One AI lifecycle, from opportunity discovery through production governance.</h2><p>Our AI services are structured around the practical work required to move from ideas and proofs of concept into reliable systems embedded in business operations.</p></div>
      <div className="service-card-grid">{services.map(({icon:Icon,title,text,href})=><a className="service-card" href={href} key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p><span className="link">Explore capability →</span></a>)}</div>
    </div></section>

    <section className="section section-soft"><div className="shell">
      <div className="section-head"><div className="eyebrow">How we approach AI</div><h2>Business-first. Production-minded. Governed by design.</h2></div>
      <div className="process-grid">
        <div className="process-step"><b>01</b><h3>Prioritize</h3><p>Identify opportunities where AI can improve revenue, cost, speed, risk or customer experience.</p></div>
        <div className="process-step"><b>02</b><h3>Prepare</h3><p>Assess data quality, architecture, security, processes, ownership and operating readiness.</p></div>
        <div className="process-step"><b>03</b><h3>Engineer</h3><p>Build models, integrations, automation and experiences with production reliability in mind.</p></div>
        <div className="process-step"><b>04</b><h3>Govern & Scale</h3><p>Monitor performance, risk and adoption while expanding proven use cases across the enterprise.</p></div>
      </div>
    </div></section>

    <section className="section"><div className="shell"><div className="cta"><h2>Build AI capabilities that can survive production, regulation and scale.</h2><div className="hero-actions"><a className="btn btn-primary" href="/#contact">Talk to AI experts <ArrowRight size={16}/></a><a className="btn btn-outline" href="/insurance-solutions">Explore Insurance AI</a></div></div></div></section>
  </main>
}
