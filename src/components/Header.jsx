import { openInfoBell, openSettingsPin } from "../services/chrome.js";

const logoSrc = (basePath) => (basePath === ".." ? "../assets/images/Logo/Logo.png" : "assets/images/Logo/Logo.png");

function InfoButton() {
  return (
    <button onClick={openInfoBell} aria-label="Infos anzeigen" title="Infos" style={{ position: "relative", background: "rgba(56, 189, 248, 0.15)", color: "white", width: 46, height: 46, padding: 0, borderRadius: 12, fontSize: 22, border: "1px solid rgba(56,189,248,0.4)", cursor: "pointer", fontWeight: "bold" }}>
      🔔<span data-info-count style={{ display: "none", position: "absolute", top: -7, right: -7, minWidth: 20, height: 20, padding: "0 6px", borderRadius: 999, background: "#ef4444", color: "white", fontSize: 11, lineHeight: "20px", fontWeight: 900 }} />
    </button>
  );
}

function SettingsButton({ basePath }) {
  return (
    <button onClick={() => openSettingsPin(basePath)} aria-label="Einstellungen" title="Einstellungen" style={{ background: "rgba(168, 85, 247, 0.18)", color: "white", width: 46, height: 46, padding: 0, borderRadius: 12, fontSize: 22, border: "1px solid rgba(168,85,247,0.45)", cursor: "pointer", fontWeight: "bold" }}>
      ⚙️
    </button>
  );
}

function HomeButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Zur Startseite" style={{ background: "#38bdf8", color: "white", padding: "10px 20px", borderRadius: 12, fontSize: 14, border: "none", cursor: "pointer", fontWeight: "bold" }}>
      🏠 Zur Startseite
    </button>
  );
}

export function Header({ variant, basePath }) {
  const isNested = basePath === "..";
  const logo = <img src={logoSrc(basePath)} alt="ALO Academy Logo" className="main-logo" />;
  const goHome = () => {
    if (variant === "settings") sessionStorage.removeItem("aloAcademySettingsUnlocked");
    window.location.href = isNested ? "../" : "./";
  };

  return (
    <header className="topbar">
      {isNested ? (
        <a href="../" className="logo-area" aria-label="Zur Startseite" role="link">{logo}</a>
      ) : (
        <div className="logo-area" onClick={goHome} style={{ cursor: "pointer" }}>{logo}</div>
      )}
      <div className="topbar-right">
        <InfoButton />
        {variant === "settings" ? (
          <HomeButton onClick={goHome} />
        ) : (
          <>
            <SettingsButton basePath={basePath} />
            {(variant === "ecommerce" || variant === "buero") && <HomeButton onClick={() => window.confirmRestart ? window.confirmRestart("home") : (window.location.href = "../")} />}
            {variant === "wartung" && <HomeButton onClick={() => (window.location.href = "../")} />}
            {variant === "ecommerce" && (
              <button onClick={() => window.checkBuilderPin?.()} aria-label="Builder Test starten" style={{ background: "#a855f7", color: "white", padding: "10px 20px", borderRadius: 12, fontSize: 14, marginLeft: 10, cursor: "pointer", border: "none", fontWeight: "bold" }}>
                🛠️ Builder Test
              </button>
            )}
          </>
        )}
      </div>
    </header>
  );
}
