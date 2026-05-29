import { useEffect, useMemo, useState } from "react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { ThemeButton } from "../components/ThemeButton.jsx";
import { LegalContent } from "../content/legalContent.jsx";

export function WartungPage() {
  const [legalModal, setLegalModal] = useState(null);
  const data = useMemo(() => {
    try {
      return JSON.parse(sessionStorage.getItem("maintenanceData") || "{}");
    } catch {
      return {};
    }
  }, []);

  useEffect(() => {
    document.body.dataset.page = "Wartung";
    document.body.classList.add("react-page-shell");
    window.showLegal = (type) => {
      setLegalModal(type);
      document.body.classList.add("modal-open");
    };
    window.closeLegalModal = () => {
      setLegalModal(null);
      document.body.classList.remove("modal-open");
    };

    return () => {
      delete document.body.dataset.page;
      document.body.classList.remove("react-page-shell", "modal-open");
      delete window.showLegal;
      delete window.closeLegalModal;
    };
  }, []);

  function closeLegalModal() {
    setLegalModal(null);
    document.body.classList.remove("modal-open");
  }

  return (
    <>
      <Header variant="wartung" basePath=".." />
      <ThemeButton />
      <main
        style={{
          minHeight: "calc(100vh - 250px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            maxWidth: 700,
            width: "100%",
            background: "rgba(15,23,42,0.9)",
            border: "2px solid #a855f7",
            borderRadius: 30,
            padding: 50,
            textAlign: "center",
            color: "white",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
          }}
        >
          <h1
            style={{
              fontSize: 52,
              marginBottom: 20,
              background: "linear-gradient(135deg, #38bdf8, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Wartung
          </h1>

          <h2
            style={{
              fontSize: 32,
              marginBottom: 20,
              color: "#38bdf8",
            }}
          >
            {data.type || "Wartung"}
          </h2>

          <p
            style={{
              fontSize: 22,
              lineHeight: 1.8,
              opacity: 0.9,
            }}
          >
            {data.message || ""}
          </p>

          <p
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "#a855f7",
              fontWeight: 700,
            }}
          >
            {data.duration ? `â³ ${data.duration}` : ""}
          </p>

          <p
            style={{
              marginTop: 25,
              opacity: 0.7,
              fontSize: 18,
            }}
          >
            {data.date || ""}
          </p>
        </div>
      </main>
      <Footer variant="academy" />

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
