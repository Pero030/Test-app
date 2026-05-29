import { toggleTheme } from "../services/chrome.js";

export function ThemeButton() {
  return (
    <button onClick={toggleTheme} aria-label="Farbdesign wechseln" title="Farbdesign wechseln" style={{ position: "fixed", top: 27, right: 140, background: "rgba(251, 191, 36, 0.18)", color: "white", width: 46, height: 46, padding: 0, borderRadius: 12, fontSize: 22, border: "1px solid rgba(251,191,36,0.45)", cursor: "pointer", fontWeight: "bold", zIndex: 99999 }}>
      🎨
    </button>
  );
}
