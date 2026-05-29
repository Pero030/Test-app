import { useEffect, useMemo, useState } from "react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { ThemeButton } from "../components/ThemeButton.jsx";
import { LegalContent } from "../content/legalContent.jsx";
import {
  addDoc,
  collection,
  db,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "../services/firebase.js";
import { updateInfoBadge } from "../services/chrome.js";

const maintenancePages = [
  { value: "global", label: "Gesamte Website" },
  { value: "Startseite", label: "Startseite" },
  { value: "Ecommerce", label: "Ecommerce" },
  { value: "Büromanagement", label: "Büromanagement" },
];

const emptyMaintenance = {
  enabled: false,
  message: "",
  date: "",
  duration: "",
  type: "",
};

function escapeText(value) {
  return String(value || "");
}

async function loadInfos() {
  const snapshot = await getDocs(query(collection(db, "infos")));
  const infos = [];
  snapshot.forEach((docItem) => {
    infos.push({ firebaseId: docItem.id, ...docItem.data() });
  });
  return infos.reverse();
}

export function SettingsPage() {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("aloAcademySettingsUnlocked") === "true",
  );
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [activeSection, setActiveSection] = useState("mitteilungen");
  const [infos, setInfos] = useState([]);
  const [infoTitle, setInfoTitle] = useState("");
  const [infoText, setInfoText] = useState("");
  const [saveFeedback, setSaveFeedback] = useState(false);
  const [helperButtonsEnabled, setHelperButtonsEnabled] = useState(false);
  const [maintenancePage, setMaintenancePage] = useState("");
  const [maintenance, setMaintenance] = useState(emptyMaintenance);
  const [activeMaintenance, setActiveMaintenance] = useState(null);
  const [maintenanceDetailsOpen, setMaintenanceDetailsOpen] = useState(false);
  const [maintenanceInfoOpen, setMaintenanceInfoOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null);

  const selectedMaintenanceLabel = useMemo(() => {
    return maintenancePages.find((page) => page.value === maintenancePage)?.label || maintenancePage;
  }, [maintenancePage]);

  useEffect(() => {
    document.body.dataset.page = "settings";
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

  useEffect(() => {
    if (!unlocked) return;
    refreshInfos();
    refreshActiveMaintenance();
    loadEcommerceHelperButtonsSetting();
  }, [unlocked]);

  async function getSettingsPin() {
    const snapshot = await getDoc(doc(db, "settings", "security"));
    return snapshot.exists() ? snapshot.data().settingsPin : null;
  }

  async function unlockSettingsPage() {
    const settingsPin = await getSettingsPin();
    if (pin === settingsPin) {
      sessionStorage.setItem("aloAcademySettingsUnlocked", "true");
      setUnlocked(true);
      setPinError(false);
      return;
    }
    setPin("");
    setPinError(true);
  }

  async function refreshInfos() {
    setInfos(await loadInfos());
    updateInfoBadge().catch(console.error);
  }

  async function saveInfo() {
    if (!infoTitle.trim() || !infoText.trim()) {
      alert("Bitte Titel und Text ausfüllen.");
      return;
    }

    await addDoc(collection(db, "infos"), {
      title: infoTitle.trim(),
      text: infoText.trim(),
      date: new Date().toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      createdAt: Date.now(),
    });

    setInfoTitle("");
    setInfoText("");
    setSaveFeedback(true);
    window.setTimeout(() => setSaveFeedback(false), 1800);
    await refreshInfos();
  }

  async function deleteInfo(firebaseId) {
    await deleteDoc(doc(db, "infos", firebaseId));
    await refreshInfos();
  }

  async function clearInfos() {
    if (!confirm("Alle Infos löschen?")) return;
    for (const info of infos) {
      await deleteDoc(doc(db, "infos", info.firebaseId));
    }
    await refreshInfos();
  }

  async function loadEcommerceHelperButtonsSetting() {
    const snapshot = await getDoc(doc(db, "settings", "ecommerce"));
    setHelperButtonsEnabled(snapshot.exists() ? Boolean(snapshot.data().helperButtonsEnabled) : false);
  }

  async function saveEcommerceHelperButtonsSetting(nextValue) {
    setHelperButtonsEnabled(nextValue);
    await setDoc(
      doc(db, "settings", "ecommerce"),
      { helperButtonsEnabled: nextValue },
      { merge: true },
    );
    alert("Einstellung gespeichert");
  }

  async function loadMaintenanceSettings(page) {
    setMaintenancePage(page);
    if (!page) {
      setMaintenance(emptyMaintenance);
      return;
    }

    const snapshot = await getDoc(doc(db, "maintenance", page));
    setMaintenance(snapshot.exists() ? { ...emptyMaintenance, ...snapshot.data() } : emptyMaintenance);
    await refreshActiveMaintenance();
  }

  async function refreshActiveMaintenance() {
    for (const page of maintenancePages.map((item) => item.value)) {
      const snapshot = await getDoc(doc(db, "maintenance", page));
      if (snapshot.exists() && snapshot.data().enabled) {
        setActiveMaintenance({ page, ...snapshot.data() });
        return;
      }
    }
    setActiveMaintenance(null);
  }

  async function saveMaintenanceSettings() {
    if (!maintenancePage) {
      alert("Bitte eine Seite auswählen.");
      return;
    }

    const payload = {
      enabled: true,
      message: maintenance.message,
      date: maintenance.date,
      duration: maintenance.duration,
      type: maintenance.type,
    };

    await setDoc(doc(db, "maintenance", maintenancePage), payload);
    alert("Wartung gespeichert");
    await refreshActiveMaintenance();
  }

  async function disableMaintenanceForPage(page) {
    await setDoc(doc(db, "maintenance", page), emptyMaintenance);
    if (page === maintenancePage) setMaintenance(emptyMaintenance);
    await refreshActiveMaintenance();
    alert("Wartung beendet");
  }

  function closeLegalModal() {
    setLegalModal(null);
    document.body.classList.remove("modal-open");
  }

  return (
    <>
      <Header variant="settings" basePath="." />
      <ThemeButton />
      <main style={{ minHeight: "calc(100vh - 250px)", padding: "70px 30px" }}>
        <section className="section" style={{ maxWidth: 1400, margin: "0 0 0 auto", display: "block" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1
              style={{
                fontSize: 52,
                fontWeight: 900,
                background: "linear-gradient(135deg, #38bdf8, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Einstellungen
            </h1>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.82)" }}>
              Infos erstellen, die über die Glocke angezeigt werden.
            </p>
          </div>

          {!unlocked ? (
            <div style={{ textAlign: "center", padding: 40 }}>
              <h2>Zugriff geschützt</h2>
              <p>Bitte gib den PIN ein.</p>
              <input
                value={pin}
                onChange={(event) => setPin(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") unlockSettingsPage();
                }}
                type="password"
                placeholder="PIN"
                style={{ maxWidth: 320, textAlign: "center" }}
              />
              <div style={{ marginTop: 24 }}>
                <button className="primary-btn" onClick={unlockSettingsPage}>
                  Entsperren
                </button>
                <button className="secondary-btn" onClick={() => (window.location.href = "./")} style={{ marginLeft: 12 }}>
                  Zur Startseite
                </button>
              </div>
              {pinError && <p style={{ color: "#fca5a5", marginTop: 20 }}>Falscher PIN.</p>}
            </div>
          ) : (
            <div className="layout" style={{ gridTemplateColumns: "32px 1fr", gap: 10 }}>
              <aside className="sidebar">
                <h2>Einstellungen</h2>
                {[
                  ["mitteilungen", "ðŸ“¢ Mitteilungen", "blue-border"],
                  ["wartung", "ðŸ› ï¸ Wartung", "purple-border"],
                  ["ecommerce", "ðŸ›’ E-Commerce", "blue-border"],
                ].map(([section, label, borderClass]) => (
                  <div
                    key={section}
                    className={`mission ${borderClass} ${activeSection === section ? "active" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveSection(section)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveSection(section);
                      }
                    }}
                  >
                    {label}
                  </div>
                ))}
              </aside>

              <div className="content" style={{ marginLeft: -40 }}>
                {activeSection === "mitteilungen" && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px,1fr))", gap: 30, alignItems: "start" }}>
                    <div className="glass-card blue-theme" style={{ padding: 35 }}>
                      <h2>Neue Info</h2>
                      <label htmlFor="infoTitle" style={{ display: "block", color: "#38bdf8", fontWeight: 800, marginBottom: 6 }}>
                        Titel
                      </label>
                      <input id="infoTitle" value={infoTitle} onChange={(event) => setInfoTitle(event.target.value)} type="text" placeholder="z.B. Wartung am Freitag" />
                      <label htmlFor="infoText" style={{ display: "block", color: "#38bdf8", fontWeight: 800, margin: "22px 0 6px" }}>
                        Text
                      </label>
                      <textarea id="infoText" value={infoText} onChange={(event) => setInfoText(event.target.value)} rows={7} placeholder="Schreibe hier die Information..." />
                      <button className="primary-btn" onClick={saveInfo} style={{ marginTop: 24, width: "100%" }}>
                        Info speichern
                      </button>
                      {saveFeedback && <p style={{ color: "#86efac", marginTop: 18 }}>Info gespeichert.</p>}
                    </div>

                    <div className="glass-card purple-theme" style={{ padding: 35 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, marginBottom: 18 }}>
                        <h2 style={{ margin: 0 }}>Aktuelle Infos</h2>
                        <button onClick={clearInfos} style={{ background: "#ef4444", color: "white", padding: "10px 16px", borderRadius: 12, fontSize: 14 }}>
                          Alle löschen
                        </button>
                      </div>
                      {infos.length ? (
                        infos.map((info) => (
                          <div key={info.firebaseId} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: 20, marginBottom: 14 }}>
                            <h3 style={{ fontSize: 22, marginBottom: 8 }}>{escapeText(info.title)}</h3>
                            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.82)", whiteSpace: "pre-wrap" }}>{escapeText(info.text)}</p>
                            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 14 }}>{escapeText(info.date)}</p>
                            <button onClick={() => deleteInfo(info.firebaseId)} style={{ background: "#ef4444", color: "white", padding: "9px 14px", borderRadius: 10, fontSize: 13 }}>
                              Löschen
                            </button>
                          </div>
                        ))
                      ) : (
                        <p style={{ color: "rgba(255,255,255,0.72)" }}>Noch keine Infos vorhanden.</p>
                      )}
                    </div>
                  </div>
                )}

                {activeSection === "ecommerce" && (
                  <div className="glass-card blue-theme" style={{ padding: 35, width: "100%" }}>
                    <h2 style={{ marginBottom: 25 }}>E-Commerce Einstellungen</h2>
                    <div style={{ display: "flex", alignItems: "center", gap: 15, padding: 25, background: "rgba(56,189,248,0.08)", borderRadius: 15, border: "1px solid rgba(56,189,248,0.2)" }}>
                      <label style={{ position: "relative", display: "inline-block", width: 50, height: 26 }}>
                        <input
                          type="checkbox"
                          checked={helperButtonsEnabled}
                          onChange={(event) => saveEcommerceHelperButtonsSetting(event.target.checked)}
                          style={{ opacity: 0, width: 0, height: 0 }}
                        />
                        <span style={{ position: "absolute", cursor: "pointer", inset: 0, backgroundColor: helperButtonsEnabled ? "#22c55e" : "#ef4444", transition: "0.4s", borderRadius: 26 }} />
                        <span style={{ position: "absolute", height: 20, width: 20, left: 3, bottom: 3, backgroundColor: "white", transition: "0.4s", borderRadius: "50%", transform: helperButtonsEnabled ? "translateX(24px)" : "translateX(0)" }} />
                      </label>
                      <span style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                        Hilfe-Buttons bei E-Commerce anzeigen
                      </span>
                    </div>
                  </div>
                )}

                {activeSection === "wartung" && (
                  <div style={{ display: "grid", gridTemplateColumns: "auto fit-content", gap: 30, justifyContent: "start", width: "100%" }}>
                    <div className="glass-card purple-theme" style={{ padding: 35 }}>
                      <h2 style={{ marginBottom: 25 }}>ðŸ› ï¸ Wartungsmodus</h2>
                      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                        <select value={maintenancePage} onChange={(event) => loadMaintenanceSettings(event.target.value)} style={{ flex: 1 }}>
                          <option value="" disabled>Seite wählen</option>
                          {maintenancePages.map((page) => (
                            <option key={page.value} value={page.value}>{page.label}</option>
                          ))}
                        </select>
                        <button onClick={() => setMaintenanceInfoOpen(true)} style={{ background: "rgba(56,189,248,0.15)", color: "white", padding: "0 20px", height: 46, borderRadius: 12, fontSize: 16, border: "1px solid rgba(56,189,248,0.4)", cursor: "pointer", fontWeight: "bold" }}>
                          INFO
                        </button>
                      </div>
                      <textarea rows={5} placeholder="Detalierte Begründung" value={maintenance.message} onChange={(event) => setMaintenance({ ...maintenance, message: event.target.value })} />
                      <input type="text" placeholder="Dauer der Wartung (Datum oder Zeit)" value={maintenance.duration} onChange={(event) => setMaintenance({ ...maintenance, duration: event.target.value })} style={{ marginTop: 20 }} />
                      <input type="text" placeholder="Grund der Wartung" value={maintenance.type} onChange={(event) => setMaintenance({ ...maintenance, type: event.target.value })} style={{ marginTop: 20 }} />
                      <input type="text" placeholder="Aktuelles Datum (TT.MM.JJ)" value={maintenance.date} onChange={(event) => setMaintenance({ ...maintenance, date: event.target.value })} style={{ marginTop: 20 }} />
                      <button className="primary-btn" onClick={saveMaintenanceSettings} style={{ width: "100%", marginTop: 25 }}>
                        Wartung Aktivieren
                      </button>
                    </div>

                    <div className="glass-card blue-theme" style={{ padding: 35 }}>
                      <h2 style={{ marginBottom: 25 }}>ðŸ“‹ Wartungs-Info</h2>
                      <div style={{ padding: 25, borderRadius: 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                        {activeMaintenance ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                            <div>
                              <h3 style={{ color: "#38bdf8", fontSize: 24, marginBottom: 8 }}>{activeMaintenance.page}</h3>
                              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15 }}>{activeMaintenance.date || "-"}</p>
                            </div>
                            <div style={{ display: "flex", gap: 12 }}>
                              <button onClick={() => setMaintenanceDetailsOpen(true)} style={{ flex: 1, background: "#0ea5e9", color: "white", padding: 12, border: "none", borderRadius: 14, fontWeight: 800, cursor: "pointer" }}>
                                INFO
                              </button>
                              <button onClick={() => disableMaintenanceForPage(activeMaintenance.page)} style={{ flex: 1, background: "#ef4444", color: "white", padding: 12, border: "none", borderRadius: 14, fontWeight: 800, cursor: "pointer" }}>
                                Beenden
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ padding: 25, textAlign: "center", color: "rgba(255,255,255,0.65)" }}>Keine aktive Wartung</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer variant="home" />

      {maintenanceDetailsOpen && (
        <div className="modal-overlay" style={{ display: "flex" }}>
          <div className="modal" style={{ maxWidth: 700 }}>
            <div className="modal-content-scroll" style={{ padding: 50 }}>
              <h2 style={{ color: "#38bdf8", marginBottom: 30 }}>ðŸ“‹ Wartungsdetails</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div><strong>Seite:</strong><br />{activeMaintenance?.page || selectedMaintenanceLabel || "-"}</div>
                <div><strong>Datum:</strong><br />{activeMaintenance?.date || maintenance.date || "-"}</div>
                <div><strong>Dauer:</strong><br />{activeMaintenance?.duration || maintenance.duration || "-"}</div>
                <div><strong>Art:</strong><br />{activeMaintenance?.type || maintenance.type || "-"}</div>
                <div><strong>Nachricht:</strong><br />{activeMaintenance?.message || maintenance.message || "-"}</div>
              </div>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <button className="modal-btn" onClick={() => setMaintenanceDetailsOpen(false)}>Schließen</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {maintenanceInfoOpen && (
        <div className="modal-overlay" style={{ display: "flex" }}>
          <div className="modal" style={{ maxWidth: 800 }}>
            <div className="modal-content-scroll" style={{ padding: 60 }}>
              <h3 style={{ color: "#38bdf8", marginBottom: 30, fontSize: 28 }}>â„¹ï¸ Wartungsmodus Info</h3>
              <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: 18 }}>
                Um eine Seite oder die gesamte Website in den Wartungsmodus zu versetzen, wähle im Dropdown-Menü die jeweilige Seite aus und fülle anschließend die Eingabefelder mit den entsprechenden Informationen aus.
              </p>
              <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: 18, marginTop: 20 }}>
                Befindet sich eine Seite bereits im Wartungsmodus, wird dies in der Infokarte angezeigt.
              </p>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <button className="modal-btn" onClick={() => setMaintenanceInfoOpen(false)}>Schließen</button>
              </div>
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
                <button className="modal-btn" onClick={closeLegalModal}>Schließen</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
