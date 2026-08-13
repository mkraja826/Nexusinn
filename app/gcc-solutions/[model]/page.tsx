import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const modelData = {
  "build-operate-transfer": {
    title: "Build-Operate-Transfer",
    kicker: "GCC operating model",
    summary: "A phased model for enterprises that want rapid GCC launch with a defined path to internal ownership.",
    intro: "Nexusinn structures the launch, operating stabilization and eventual transfer around explicit capability, governance and maturity gates so ownership changes without disrupting delivery.",
    outcomes: ["Faster launch with structured execution", "Defined transition criteria and knowledge transfer", "Enterprise governance from day one", "Progressive internal ownership and capability maturity"],
    phases: ["Design the business case, scope and transfer roadmap", "Build talent, technology and operating foundations", "Operate against agreed service and maturity metrics", "Transfer teams, processes and governance in controlled stages"],
  },
  "hybrid-captive": {
    title: "Hybrid Captive",
    kicker: "GCC operating model",
    summary: "Balance enterprise control with partner-managed execution across selected capabilities and functions.",
    intro: "A hybrid captive can protect strategic ownership while using external operating leverage where speed, specialized talent or elastic capacity matter most.",
    outcomes: ["Control over strategic capabilities", "Flexible access to specialist talent", "Reduced operational concentration risk", "Ability to evolve the ownership mix over time"],
    phases: ["Segment capabilities by strategic importance and control", "Define enterprise-owned and partner-operated responsibilities", "Establish shared governance and service measures", "Continuously rebalance as internal maturity increases"],
  },
  "joint-venture": {
    title: "Joint Venture",
    kicker: "GCC operating model",
    summary: "Create shared ownership for capability development where both organizations contribute assets, expertise and governance.",
    intro: "The joint-venture model is suited to transformations where strategic alignment, shared investment or market-specific operating expertise makes a collaborative structure valuable.",
    outcomes: ["Shared investment and execution responsibility", "Access to complementary expertise", "Joint governance and aligned incentives", "A platform for longer-term capability expansion"],
    phases: ["Define the strategic rationale and partner contributions", "Design ownership, governance and decision rights", "Stand up the operating entity and delivery model", "Scale capabilities against jointly defined business outcomes"],
  },
} as const;

type ModelKey = keyof typeof modelData;

export function generateStaticParams() {
  return Object.keys(modelData).map((model) => ({ model }));
}

export default async function GCCModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const data = modelData[model as ModelKey];
  if (!data) notFound();

  return (
    <main>
      <section className="service-hero compact-hero">
        <div className="shell">
          <Link className="back-link" href="/gcc-solutions">← GCC Solutions</Link>
          <div className="eyebrow">{data.kicker}</div>
          <h1>{data.title}</h1>
          <p className="lead service-lead">{data.summary}</p>
        </div>
      </section>

      <section className="section"><div className="shell split-section">
        <div><div className="eyebrow">How it works</div><h2>Designed around ownership, control and maturity.</h2><p className="lead-small">{data.intro}</p></div>
        <div className="phase-list">{data.phases.map((phase, index) => <div className="phase" key={phase}><span>0{index + 1}</span><p>{phase}</p></div>)}</div>
      </div></section>

      <section className="section section-soft"><div className="shell"><div className="section-head"><div className="eyebrow">Designed outcomes</div><h2>What this model is intended to enable.</h2></div><div className="outcome-grid">{data.outcomes.map((outcome) => <div className="outcome" key={outcome}><CheckCircle2 size={20}/><span>{outcome}</span></div>)}</div></div></section>

      <section className="section"><div className="shell"><div className="cta"><div><div className="eyebrow">GCC strategy</div><h2>Assess whether {data.title} fits your enterprise.</h2></div><a className="btn btn-primary" href="mailto:contact@nexusinn.com">Discuss the Model <ArrowRight size={16}/></a></div></div></section>
    </main>
  );
}
