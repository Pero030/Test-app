const modalButtonRow = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
};

export function EcommerceOverlays() {
  return (
    <>
      <div
        id="restartConfirmModal"
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="restartConfirmTitle"
      >
        <div className="modal">
          <div className="modal-content-scroll">
            <h3 id="restartConfirmTitle">Spiel Beenden?</h3>
            <p>
              Möchtest du wirklich das Spiel beenden? Dein aktueller Fortschritt
              im laufenden Spiel geht dann verloren.
            </p>
            <div style={modalButtonRow}>
              <button
                className="modal-btn"
                onClick={() => window.handleRestartConfirm?.()}
                style={{ background: "#22c55e", color: "white" }}
              >
                Ja
              </button>
              <button
                className="modal-btn"
                onClick={() => window.closeRestartModal?.()}
                style={{ background: "#ef4444", color: "white" }}
              >
                Nein
              </button>
            </div>
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

      <div
        id="statInfoModal"
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="statInfoTitle"
      >
        <div
          className="modal"
          style={{
            maxWidth: 600,
            width: "90%",
            maxHeight: "85vh",
            textAlign: "left",
          }}
        >
          <div className="modal-content-scroll" style={{ padding: 50 }}>
            <h3
              id="statInfoTitle"
              style={{
                fontSize: 28,
                color: "#38bdf8",
                marginBottom: 25,
              }}
            />
            <div
              id="statInfoContent"
              style={{
                color: "#ffffff",
                lineHeight: 1.8,
                fontSize: 18,
              }}
            />
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button
                className="modal-btn"
                onClick={() => window.closeStatInfoModal?.()}
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="builderPinModal"
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="builderPinTitle"
      >
        <div
          className="modal"
          style={{
            maxWidth: 500,
            width: "90%",
            maxHeight: "85vh",
            textAlign: "center",
          }}
        >
          <div className="modal-content-scroll" style={{ padding: 50 }}>
            <h3
              id="builderPinTitle"
              style={{
                fontSize: 28,
                color: "#a855f7",
                marginBottom: 25,
              }}
            >
              Builder Test
            </h3>
            <p
              style={{
                color: "#ffffff",
                lineHeight: 1.8,
                fontSize: 18,
                marginBottom: 25,
              }}
            >
              Bitte gib die PIN ein, um den Builder Test zu starten:
            </p>
            <input
              type="password"
              id="settingsPinInput"
              placeholder="PIN eingeben"
              style={{
                width: "100%",
                padding: 15,
                borderRadius: 12,
                border: "2px solid #a855f7",
                background: "rgba(168, 85, 247, 0.1)",
                color: "#ffffff",
                fontSize: 18,
                textAlign: "center",
                marginBottom: 25,
                outline: "none",
              }}
            />
            <div
              id="pinErrorMessage"
              style={{
                color: "#ef4444",
                fontSize: 16,
                marginBottom: 20,
                display: "none",
              }}
            >
              Falsche PIN!
            </div>
            <div style={modalButtonRow}>
              <button
                className="modal-btn"
                onClick={() => window.submitBuilderPin?.()}
                style={{ background: "#a855f7", color: "white" }}
              >
                Bestätigen
              </button>
              <button
                className="modal-btn"
                onClick={() => window.closeBuilderPinModal?.()}
                style={{ background: "#ef4444", color: "white" }}
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
