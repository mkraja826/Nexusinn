const insights = [
  ["GCC Strategy", "Choosing the right GCC operating model: BOT, hybrid captive or joint venture", "A decision framework for balancing control, speed, capability maturity and ownership."],
  ["Enterprise AI", "From AI pilots to production systems", "What changes when AI must operate reliably inside enterprise workflows, governance and security constraints."],
  ["Insurance AI", "Designing human oversight into claims and underwriting automation", "How to create faster workflows without turning consequential decisions into black boxes."],
  ["Responsible AI", "Governance that enables scale instead of slowing it down", "A practical way to connect model risk, data controls, monitoring and accountability."],
  ["Platform Modernization", "Modernizing insurance technology without a big-bang core replacement", "Composable architecture and API layers can create room for progressive transformation."],
  ["GCC + AI", "Why GCCs are becoming enterprise AI capability engines", "How global capability centers can combine domain talent, data engineering and AI operations into a durable strategic function."],
];

export default function InsightsPage(){
  return <main>
    <section className="service-hero"><div className="shell"><a href="/" className="service-back">← Nexusinn</a><div className="eyebrow">Insights</div><h1>Ideas for building <span>enterprise capability.</span></h1><p className="lead">Perspectives on GCC strategy, enterprise AI, insurance modernization, governance and the operating decisions behind sustainable transformation.</p></div></section>
    <section className="section"><div className="shell"><div className="service-card-grid">{insights.map(([category,title,text])=><article className="service-card" key={title}><span className="case-label">{category}</span><h3>{title}</h3><p>{text}</p><span className="link">Article coming soon</span></article>)}</div></div></section>
  </main>
}
