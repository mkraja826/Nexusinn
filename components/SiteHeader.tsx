"use client";

import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const menus = [
  {
    label: "GCC Solutions",
    href: "/gcc-solutions",
    items: [
      ["GCC Overview", "/gcc-solutions", "Strategy, operating model and capability design"],
      ["Build-Operate-Transfer", "/gcc-solutions/build-operate-transfer", "Launch with a structured path to ownership"],
      ["Hybrid Captive", "/gcc-solutions/hybrid-captive", "Combine enterprise control with partner execution"],
      ["Joint Venture", "/gcc-solutions/joint-venture", "Shared investment, governance and capability growth"],
    ],
  },
  {
    label: "AI & ML",
    href: "/ai-ml-services",
    items: [
      ["AI & ML Overview", "/ai-ml-services", "End-to-end enterprise AI transformation"],
      ["AI Strategy", "/ai-ml-services/ai-strategy", "Prioritize opportunities and define the roadmap"],
      ["AI Readiness", "/ai-ml-services/ai-readiness", "Assess data, platforms, governance and talent"],
      ["ML Engineering", "/ai-ml-services/ml-engineering", "Production models, pipelines and MLOps"],
      ["Intelligent Automation", "/ai-ml-services/intelligent-automation", "AI-enabled workflows and decision support"],
      ["Generative AI", "/ai-ml-services/generative-ai", "Enterprise copilots, RAG and GenAI integration"],
      ["Responsible AI", "/ai-ml-services/responsible-ai", "Governance, oversight and model-risk controls"],
    ],
  },
  {
    label: "Insurance",
    href: "/insurance-solutions",
    items: [
      ["Insurance Overview", "/insurance-solutions", "Technology modernization for regulated insurance"],
      ["Claims Automation", "/insurance-solutions/claims-automation", "Digitize intake, triage and adjuster workflows"],
      ["Underwriting AI", "/insurance-solutions/underwriting-ai", "Explainable decision support for risk teams"],
      ["InsurTech Platforms", "/insurance-solutions/insurtech-platforms", "Composable digital insurance platforms"],
      ["Compliance & RegTech", "/insurance-solutions/compliance-regtech", "Controls, evidence and regulatory workflows"],
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    items: [
      ["All Insights", "/insights", "Perspectives across GCC, AI and insurance transformation"],
      ["GCC Perspectives", "/insights#GCC", "Operating models, scale and capability-center strategy"],
      ["AI Perspectives", "/insights#AI", "Enterprise AI, automation and responsible adoption"],
      ["Insurance Perspectives", "/insights#Insurance", "Claims, underwriting, platforms and governance"],
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="topbar site-topbar"><div className="shell"><span>Enterprise technology, global capability & insurance transformation</span><div className="topbar-links"><a href="/faq">FAQ</a><a href="/contact">Contact</a></div></div></div>
      <header className="nav site-nav">
        <div className="shell navinner">
          <a href="/" className="logo" aria-label="Nexusinn home"><img src="/nexusinn-logo-exact.webp" alt="Nexusinn — Innovation, Talent, Impact" style={{display:"block",width:"clamp(185px,19vw,250px)",height:"auto",borderRadius:"6px"}} /></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {menus.map((menu) => <div className="mega" key={menu.label}><a className="mega-trigger" href={menu.href}>{menu.label}<ChevronDown size={14}/></a><div className="mega-panel"><div className="mega-intro"><span className="eyebrow">{menu.label}</span><p>Explore Nexusinn capabilities and perspectives designed for enterprise transformation, execution and scale.</p><a className="link" href={menu.href}>View all {menu.label} →</a></div><div className="mega-links">{menu.items.map(([title, href, text]) => <a href={href} key={href}><b>{title}</b><span>{text}</span></a>)}</div></div></div>)}
            <a href="/careers">Careers</a><a href="/about">About</a>
          </nav>
          <div className="actions"><a className="btn btn-primary desktop-contact" href="/contact">Talk to an Expert <ArrowRight size={15}/></a><button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
        </div>
        {open && <div className="mobile-drawer" id="mobile-navigation"><div className="shell mobile-drawer-inner">{menus.map(menu => <details key={menu.label}><summary>{menu.label}<ChevronDown size={16}/></summary><div className="mobile-submenu">{menu.items.map(([title, href]) => <a href={href} onClick={() => setOpen(false)} key={href}>{title}</a>)}</div></details>)}<a href="/careers" onClick={() => setOpen(false)}>Careers</a><a href="/about" onClick={() => setOpen(false)}>About</a><a href="/faq" onClick={() => setOpen(false)}>FAQ</a><a href="/contact" onClick={() => setOpen(false)}>Contact</a><a className="btn btn-primary mobile-contact" href="/contact" onClick={() => setOpen(false)}>Talk to an Expert <ArrowRight size={15}/></a></div></div>}
      </header>
    </>
  );
}
