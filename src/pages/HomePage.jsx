import { useEffect, useState } from "react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { ThemeButton } from "../components/ThemeButton.jsx";
import { LegalContent } from "../content/legalContent.jsx";
import { useMaintenanceCheck } from "../hooks/useMaintenanceCheck.js";
import { usePreventZoom } from "../hooks/usePreventZoom.js";

const heroCardStyle = {
  position: "relative",
  overflow: "hidden",
  background: "rgba(30, 41, 59, 0.5)",
  padding: 60,
  borderRadius: 40,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(20px)",
  textAlign: "center",
  maxWidth: 800,
  width: "100%",
  animation: "fadeIn 0.8s ease-out",
};

const playButtonBaseStyle = {
  display: "inline-block",
  textDecoration: "none",
  color: "white",
  padding: "22px 55px",
  borderRadius: 99,
  fontSize: 22,
  fontWeight: 800,
  transition: "all 0.3s ease",
  boxShadow: "0 15px 35px rgba(56, 189, 248, 0.3)",
  border: "none",
  cursor: "pointer",
};

export function HomePage() {
  const [targetGame, setTargetGame] = useState(null);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [legalModal, setLegalModal] = useState(null);

  usePreventZoom();
  useMaintenanceCheck("Startseite");

  useEffect(() => {
    document.body.dataset.page = "Startseite";
    document.body.classList.add("react-page-shell");
    window.showLegal = (type) => {
      setLegalModal(type);
      document.body.classList.add("modal-open");
    };
    window.closeLegalModal = () => closeLegalModal();

    return () => {
      delete document.body.dataset.page;
      document.body.classList.remove("react-page-shell", "modal-open");
      delete window.showLegal;
      delete window.closeLegalModal;
    };
  }, []);

  function startGame(game) {
    setTargetGame(game);
    setCookieAccepted(false);
    document.body.classList.add("modal-open");
  }

  function acceptCookies() {
    localStorage.setItem("cookieConsentAccepted", "true");
    document.body.classList.remove("modal-open");
    if (targetGame === "E-Commerce") window.location.href = "E-Commerce/";
    if (targetGame === "Büromanagement") window.location.href = "Büromanagement/";
  }

  function closeLegalModal() {
    setLegalModal(null);
    if (!targetGame) document.body.classList.remove("modal-open");
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .home-hero-card::before {
          content: "";
          position: absolute;
          z-index: 1;
          left: 50%;
          top: 50%;
          width: 150%;
          height: 300%;
          background: conic-gradient(from 0deg, #38bdf8, #a855f7, #38bdf8, #a855f7, #38bdf8);
          animation: rotate-border 4s linear infinite;
          transform: translate(-50%, -50%);
        }
        .home-hero-card::after {
          content: "";
          position: absolute;
          z-index: 2;
          inset: 4px;
          background: #111827;
          border-radius: 36px;
        }
        .home-hero-card > * {
          position: relative;
          z-index: 10;
        }
        .home-play-button:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 45px rgba(168, 85, 247, 0.4);
        }
      `}</style>
      <Header variant="home" basePath="." />
      <ThemeButton />
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "140px 20px 60px 20px",
          background: "radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)",
        }}
      >
        <div className="home-hero-card" style={heroCardStyle}>
          <h1
            style={{
              fontSize: 56,
              marginBottom: 24,
              background: "none",
              WebkitTextFillColor: "initial",
              color: "white",
              fontWeight: 900,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "block",
              }}
            >
              Willkommen
            </span>
            <span
              style={{
                fontSize: "0.7em",
                opacity: 0.9,
                color: "white",
                display: "block",
                marginTop: 10,
              }}
            >
              bei der ALO Academy
            </span>
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.8,
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: 40,
            }}
          >
            Tauche ein in die Welt der Ausbildungsberufe! In diesen interaktiven Lernspielen erfährst du alles über die Berufe, die in der Annedore-Leber-Oberschule unterrichtet werden. Wähle deinen Beruf und starte die Simulation!
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 30 }}>
            <button
              className="home-play-button"
              onClick={() => startGame("E-Commerce")}
              style={{
                ...playButtonBaseStyle,
                background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
              }}
            >
              ðŸ›’ E-Commerce
            </button>
            <button
              className="home-play-button"
              onClick={() => startGame("Büromanagement")}
              style={{
                ...playButtonBaseStyle,
                background: "linear-gradient(135deg, #a855f7, #9333ea)",
              }}
            >
               Büromanagement
            </button>
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 30,
              justifyContent: "center",
              opacity: 0.6,
              fontSize: 14,
            }}
          >
            <span>ðŸŽ® Praxis-Simulation</span>
            <span> Berufsorientierung</span>
            <span title="Hinweis: Dies ist ein spielinternes Zertifikat zur Lernbestätigung, kein offiziell anerkannter Abschluss.">
              ðŸ† Zertifikat erhalten*
            </span>
          </div>
          <p style={{ fontSize: 12, opacity: 0.4, marginTop: 15 }}>
            * spielinternes Zertifikat zur Lernbestätigung
          </p>
        </div>
      </main>
      <Footer variant="home" />

      {targetGame && (
        <div className="modal-overlay" style={{ display: "flex", zIndex: 20000 }}>
          <div className="modal">
            <div className="modal-content-scroll">
              <h3>Willkommen bei der Academy</h3>
              <p>
                Um fortfahren zu können, stimme bitte unseren{" "}
                <span
                  onClick={() => setLegalModal("datenschutz")}
                  style={{ color: "#38bdf8", cursor: "pointer", textDecoration: "underline" }}
                >
                  Datenschutzbestimmungen
                </span>{" "}
                und{" "}
                <span
                  onClick={() => setLegalModal("nutzung")}
                  style={{ color: "#a855f7", cursor: "pointer", textDecoration: "underline" }}
                >
                  Nutzungsbedingungen
                </span>{" "}
                zu.
              </p>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: 20,
                  borderRadius: 15,
                  marginBottom: 25,
                  textAlign: "left",
                  fontSize: 16,
                }}
              >
                <label style={{ display: "flex", alignItems: "center", gap: 15, cursor: "pointer", userSelect: "none" }}>
                  <input
                    type="checkbox"
                    checked={cookieAccepted}
                    onChange={(event) => setCookieAccepted(event.target.checked)}
                    style={{ width: 25, height: 25, margin: 0, cursor: "pointer", accentColor: "#38bdf8", appearance: "auto" }}
                  />
                  <span style={{ cursor: "pointer" }}>Ich habe alles gelesen und stimme zu.</span>
                </label>
              </div>
              <button
                className="modal-btn"
                onClick={acceptCookies}
                disabled={!cookieAccepted}
                style={{
                  opacity: cookieAccepted ? 1 : 0.5,
                  pointerEvents: cookieAccepted ? "all" : "none",
                  width: "100%",
                }}
              >
                Zustimmen & Loslegen
              </button>
            </div>
          </div>
        </div>
      )}

      {legalModal && (
        <div className="modal-overlay" style={{ display: "flex" }}>
          <div className="modal">
            <div className="modal-content-scroll" style={{ padding: 50 }}>
              <LegalContent type={legalModal} />
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <button className="modal-btn" onClick={closeLegalModal}>
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
