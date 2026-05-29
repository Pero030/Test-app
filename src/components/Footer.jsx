const logoSrc = (variant) => (variant === "academy" ? "../assets/images/Logo/Logo.png" : "assets/images/Logo/Logo.png");

export function Footer({ variant }) {
  return (
    <footer className="global-footer" style={variant === "home" ? { background: "rgba(15, 23, 42, 0.9)", borderTop: "1px solid rgba(255,255,255,0.05)" } : undefined}>
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logoSrc(variant)} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-text">
          <div className="footer-links" style={variant === "academy" ? { display: "flex", gap: 20, alignItems: "center", justifyContent: "flex-end" } : undefined}>
            <span onClick={() => window.showLegal?.("datenschutz")} style={{ cursor: "pointer" }}>Datenschutz</span>
            <span onClick={() => window.showLegal?.("impressum")} style={{ color: "#a855f7", cursor: "pointer" }}>Impressum</span>
            <span onClick={() => window.showLegal?.("nutzung")} style={{ cursor: "pointer" }}>Nutzungsbedingungen</span>
            <span onClick={() => window.open("https://aloberlin.4lima.de/", "_blank")} style={{ color: "#a855f7", cursor: "pointer" }}>ALOBERLIN WEBSITE</span>
          </div>
          <span className="copyright-text">© 2026 Annedore-Leber-Oberschule. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
}
