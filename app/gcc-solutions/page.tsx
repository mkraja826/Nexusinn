import Link from "next/link";
import { ArrowRight, Building2, GitBranch, Network, ShieldCheck } from "lucide-react";

const models = [
  {
    icon: Building2,
    title: "Build-Operate-Transfer",
    text: "Launch a capability center with an experienced operating partner, stabilize delivery, and transition ownership through defined maturity gates.",
    href: "/gcc-solutions/build-operate-transfer",
  },
  {
    icon: Network,
    title: "Hybrid Captive",
    text: "Combine enterprise-owned strategic capability with partner-managed execution to balance control, speed and operating flexibility.",
    href: "/gcc-solutions/hybrid-captive",
  },
  {
    icon: GitBranch,
    title: "Joint Venture",
    text: "Create a shared operating structure for strategic capability development where both parties contribute expertise, investment and governance.",
    href: "/gcc-solutions/joint-venture",
  },
];

const capabilities = [
  "Location and operating-model strategy",
  "Entity, governance and control design",
  "Talent acquisition and workforce planning",
  "Technology and workplace enablement",
  "Security, compliance and risk controls",
  "Transition and knowledge-transfer planning",
  "Performance management and service governance",
  "Capability expansion and maturity roadmaps",
];

export const metadata = {
  title: "GCC Solutions | Nexusinn",
  description: "Design, build, operate and scale Global Capability Centers with Nexusinn across BOT, hybrid captive and joint venture models.",
};

export default function GCCSolutionsPage() {
  return (
    <main>
      <section className="service-hero">
        <div className="shell">
          <Link className="back-link" href="/">← Nexusinn</Link>
          <div className="service-hero-grid">
            <div>
              <div className="eyebrow">Global Capability Centers</div>
              <h1>Build capability that becomes a strategic extension of your enterprise.</h1>
              <p className="lead">Nexusinn helps organizations move from GCC ambition to an operating model built for control, talent quality, measurable performance and long-term scale.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#models">Explore GCC Models <ArrowRight size={16}/></a>
                <a className="btn btn-outline" href="#contact">Discuss Your GCC Roadmap</a>
              </div>
            </div>
            <div className="service-panel">
              <span>GCC lifecycle</span>
              <div className="lifecycle"><b>01</b><p><strong>Design</strong>Strategy, location, capability scope and economics.</p></div>
              <div className="lifecycle"><b>02</b><p><strong>Build</strong>Talent, technology, controls and operating foundations.</p></div>
              <div className="lifecycle"><b>03</b><p><strong>Operate</strong>Governance, performance, risk and continuous improvement.</p></div>
              <div className="lifecycle"><b>04</b><p><strong>Scale</strong>Expand capability, ownership and strategic contribution.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="models">
        <div className="shell">
          <div className="section-head"><div className="eyebrow">Operating models</div><h2>Choose the ownership model that matches your transformation goals.</h2><p>There is no single GCC model for every enterprise. We structure the path around desired control, speed, investment profile, internal maturity and transition intent.</p></div>
          <div className="model-grid">
            {models.map(({icon: Icon, title, text, href}) => (
              <article className="model-card" key={title}>
                <div className="model-icon"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><Link href={href} className="link">Explore model →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell split-section">
          <div><div className="eyebrow">End-to-end enablement</div><h2>From boardroom strategy to operating rhythm.</h2><p className="lead-small">Our GCC approach connects business case, workforce, controls, technology and governance so the center is designed as an enterprise capability—not simply a lower-cost delivery location.</p></div>
          <div className="capability-list">{capabilities.map((item) => <div key={item}><ShieldCheck size={18}/><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="section"><div className="shell"><div className="cta" id="contact"><div><div className="eyebrow">Start with the operating model</div><h2>Plan a GCC that can mature with your business.</h2></div><a className="btn btn-primary" href="mailto:contact@nexusinn.com">Talk to GCC Experts <ArrowRight size={16}/></a></div></div></section>
    </main>
  );
}
