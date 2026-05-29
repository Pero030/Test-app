export function BueroOverlays() {
  return (
    <>
      <div id="skipNameModal" className="modal-overlay" style={{ zIndex: 15000 }}>
        <div className="modal">
          <div className="modal-content-scroll">
            <h3>Willkommen!</h3>
            <p>Bevor du startest, verrate uns bitte deinen Namen:</p>
            <input
              type="text"
              id="skipPlayerNameInput"
              placeholder="Dein Name..."
              style={{
                marginBottom: 20,
                border: "1px solid #38bdf8",
                padding: 12,
                borderRadius: 10,
                width: "100%",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
              }}
            />
            <button
              className="modal-btn"
              onClick={() => window.submitSkipName?.()}
            >
              Mission starten
            </button>
          </div>
        </div>
      </div>

      <div
        id="legalModal"
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legalModalTitle"
      >
        <div
          className="modal"
          style={{
            maxWidth: 800,
            width: "90%",
            maxHeight: "85vh",
            textAlign: "left",
          }}
        >
          <div className="modal-content-scroll" style={{ padding: 50 }}>
            <h3 id="legalModalTitle" style={{ display: "none" }}>
              Rechtliche Informationen
            </h3>
            <div
              id="legalContent"
              style={{ color: "#ffffff", lineHeight: 1.8 }}
            />
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button
                className="modal-btn"
                onClick={() => window.closeLegalModal?.()}
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="modalOverlay" className="modal-overlay" style={{ display: "none" }}>
        <div className="modal">
          <div className="modal-content-scroll">
            <h3
              id="modalTitle"
              style={{ color: "#38bdf8", marginBottom: 20, fontSize: 28 }}
            >
              Titel
            </h3>
            <p
              id="modalText"
              style={{ color: "white", fontSize: 16, lineHeight: 1.6 }}
            >
              Text
            </p>
            <button
              id="modalActionBtn"
              className="modal-btn"
              style={{ marginTop: 30 }}
            >
              Verstanden
            </button>
          </div>
        </div>
      </div>

      <div id="statInfoModal" className="modal-overlay" style={{ display: "none" }}>
        <div className="modal">
          <div className="modal-content-scroll">
            <h3
              id="statInfoTitle"
              style={{ color: "#38bdf8", marginBottom: 20, fontSize: 28 }}
            >
              Titel
            </h3>
            <p
              id="statInfoContent"
              style={{ color: "white", fontSize: 16, lineHeight: 1.6 }}
            >
              Inhalt
            </p>
            <button
              id="statInfoCloseBtn"
              className="modal-btn"
              style={{ marginTop: 30 }}
              onClick={() => window.closeStatInfo?.()}
            >
              Schließen
            </button>
          </div>
        </div>
      </div>

      <div
        id="restartConfirmModal"
        className="modal-overlay"
        style={{ zIndex: 2000, display: "none" }}
      >
        <div className="modal">
          <div className="modal-content-scroll">
            <h3 id="restartConfirmTitle">Spiel neu starten?</h3>
            <p>
              Möchtest du wirklich das Spiel neu starten? Dein Fortschritt geht
              verloren.
            </p>
            <div style={{ display: "flex", gap: 15, justifyContent: "center" }}>
              <button
                id="restartConfirmBtn"
                className="modal-btn"
                style={{ background: "#ef4444", color: "white" }}
              >
                Ja, neu starten
              </button>
              <button
                id="restartCancelBtn"
                className="modal-btn"
                style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
