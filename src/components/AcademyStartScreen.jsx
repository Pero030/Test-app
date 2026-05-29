const titleStyle = {
  fontSize: 52,
  marginBottom: 20,
  background: "linear-gradient(135deg, #38bdf8, #a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: 900,
  whiteSpace: "nowrap",
  paddingRight: "0.2em",
  display: "inline-block",
  position: "relative",
  zIndex: 1,
};

const textStyle = {
  fontSize: 20,
  lineHeight: 1.8,
  color: "rgba(255, 255, 255, 0.8)",
  margin: "auto",
  whiteSpace: "nowrap",
  padding: "0 20px",
  position: "relative",
  zIndex: 1,
};

const actionsStyle = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
  marginTop: 40,
  flexWrap: "wrap",
  position: "relative",
  zIndex: 1,
};

const buttonStyle = {
  minWidth: 320,
  fontSize: 20,
  padding: "18px 45px",
};

export function AcademyStartScreen({ title }) {
  return (
    <div
      id="startScreen"
      style={{ display: "none" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="startScreenTitle"
    >
      <div className="start-screen-card">
        <h1 id="startScreenTitle" style={titleStyle}>
          {title}
        </h1>

        <p style={textStyle}>
          Möchtest du das Tutorial machen oder direkt mit deiner ersten Mission
          starten?
        </p>

        <div style={actionsStyle}>
          <button
            className="primary-btn"
            onClick={() => window.startTutorialSinglePage?.()}
            aria-label="Tutorial starten"
            style={buttonStyle}
          >
            Tutorial starten
          </button>

          <button
            className="purple-btn"
            onClick={() => window.skipTutorialSinglePage?.()}
            aria-label="Tutorial überspringen"
            style={buttonStyle}
          >
            Tutorial überspringen
          </button>
        </div>
      </div>
    </div>
  );
}
