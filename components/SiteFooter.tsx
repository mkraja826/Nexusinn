import NexusinnLogo from "./NexusinnLogo";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <NexusinnLogo className="footer-brand-logo" variant="footer" />
            <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 290 }}>
              Global capability centers, enterprise AI and insurance technology — connected by one transformation mindset.
            </p>
          </div>
          <div>
            <h4>GCC Solutions</h4>
            <a href="/gcc-solutions">Overview</a>
          </div>
          <div>
            <h4>AI & ML</h4>
            <a href="/ai-ml-services">Overview</a>
          </div>
          <div>
            <h4>Insurance</h4>
            <a href="/insurance-solutions">Overview</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/insights">Insights</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nexusinn. All rights reserved.</span>
          <span>Privacy · Terms · Responsible AI</span>
        </div>
      </div>
    </footer>
  );
}
