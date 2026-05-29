import { globalEvent } from "../utils/globalEvent.js";

export function BueroGame() {
  return (
    <div>
      <div className="layout" id="gameContent" style={{display: 'none'}}>
        <aside className="sidebar" role="complementary" aria-labelledby="lernpfadTitle">
          <h2 id="lernpfadTitle">Lernpfad</h2>
          <div className="mission blue-border" id="menu1" role="button" tabIndex={0} onClick={globalEvent("goToTask('introSection')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('introSection');\n                  }\n              ")}>
            Einleitung
          </div>
          <div className="mission purple-border locked" id="menu2" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task1Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task1Section');\n                  }\n              ")}>
            Bestellannahme
          </div>
          <div className="mission blue-border locked" id="menu3" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task2Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task2Section');\n                  }\n              ")}>
            Rechnung erstellen
          </div>
          <div className="mission purple-border locked" id="menu4" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task3Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task3Section');\n                  }\n              ")}>
            Kommunikation
          </div>
          <div className="mission blue-border locked" id="menu7" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task4Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task4Section');\n                  }\n              ")}>
            Budget-Management
          </div>
          <hr style={{margin: '20px 0', border: '1px solid rgba(255, 255, 255, 0.1)'}} />
          <div className="progress-bar">
            <div className="progress" id="progress" style={{width: '0%'}} />
          </div>
          <div className="sidebar-footer" style={{marginTop: 'auto', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 15}}>
            <button id="sidebarStartBtn" className="primary-btn" onClick={globalEvent("backToStart()")} style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 15, borderRadius: 12, fontWeight: 'bold', fontSize: 16, background: 'linear-gradient( 135deg, #22c55e, #16a34a )', color: 'white', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'}}>
              ðŸš€ Spiel starten
            </button>
            <button className="restart-btn" onClick={globalEvent("confirmRestart()")} aria-label="Spiel beenden" style={{width: '100%', display: 'none', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#ef4444', color: 'white', padding: 12, borderRadius: 12, border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: 14, transition: 'all 0.2s ease'}}>
              <span className="restart-icon">ðŸ”„</span> Spiel Beenden
            </button>
            {/* Test-Schnellnavigation */}
            <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 15}}>
              <p style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10, textAlign: 'center'}}>
                âš¡ Schnellnavigation
              </p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
                <button onClick={globalEvent("goToTask('introSection')")} style={{background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', padding: 8, borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(56,189,248,0.3)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(56,189,248,0.15)'\n                          ")}>
                  ðŸ“– Einleitung
                </button>
                <button onClick={globalEvent("\n                              goToTask('task1Section');\n                              loadRandomOrder();\n                          ")} style={{background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', color: '#a855f7', padding: 8, borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(168,85,247,0.3)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(168,85,247,0.15)'\n                          ")}>
                  ðŸ“¦ Mission 1
                </button>
                <button onClick={globalEvent("\n                              goToTask('task2Section');\n                              loadRandomOrder(false, 'invoiceData2');\n                          ")} style={{background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', padding: 8, borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(56,189,248,0.3)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(56,189,248,0.15)'\n                          ")}>
                   Mission 2
                </button>
                <button onClick={globalEvent("\n                              goToTask('task3Section');\n                              startKommunikation();\n                          ")} style={{background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', color: '#a855f7', padding: 8, borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(168,85,247,0.3)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(168,85,247,0.15)'\n                          ")}>
                  ðŸ’¬ Mission 3
                </button>
                <button onClick={globalEvent("goToTask('task4Section')")} style={{background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', padding: 8, borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', gridColumn: '1/-1'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(56,189,248,0.3)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(56,189,248,0.15)'\n                          ")}>
                  ðŸ—‚ï¸ Mission 4
                </button>
              </div>
            </div>
          </div>
        </aside>
        <div className="content">
          <section className="section" id="interactiveTutorial" style={{display: 'none'}}>
            <div className="badge">
              Tutorial <span id="tutorialStep">1</span>/6
            </div>
            <div className="tutorial-box">
              <h2 id="tutorialTitle">Willkommen</h2>
              <p id="tutorialText" />
              <p style={{marginTop: 12}}>
                <strong id="tutorialAction" />
              </p>
            </div>
            <button onClick={globalEvent("nextTutorialStep()")}>Weiter</button>
          </section>
          {/* Tutorial Section */}
          <section className="section" id="tutorialSection" style={{display: 'none'}}>
            <div className="glass-card blue-theme" style={{padding: 40, borderRadius: 30, textAlign: 'center'}}>
              <h2 style={{color: '#38bdf8', marginBottom: 30, fontSize: 32}}>
                Willkommen im Tutorial
              </h2>
              <p id="tutorialText" style={{fontSize: 20, color: 'white', lineHeight: '1.6', marginBottom: 20}} />
              <p style={{marginTop: 12}}>
                <strong id="tutorialAction" />
              </p>
            </div>
            <button onClick={globalEvent("nextTutorialStep()")}>Weiter</button>
          </section>
          {/* Intro Section */}
          <section className="section" id="introSection" style={{display: 'none'}}>
            <div className="intro-hero">
              <div style={{position: 'absolute', top: '-50px', right: '-50px', width: 200, height: 200, background: 'rgba(56, 189, 248, 0.1)', filter: 'blur(50px)', borderRadius: '50%'}} />
              <h1 style={{marginBottom: 25, fontSize: 64, fontWeight: 900, letterSpacing: '-2px', textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent'}}>
                Die Welt des Büromanagements
              </h1>
              <p style={{fontSize: 24, lineHeight: '1.6', color: '#ffffff', maxWidth: 900, margin: '0 auto', fontWeight: 300, position: 'relative', zIndex: 1}}>
                Kaufmann/-frau für Büromanagement ist das Rückgrat
                jedes erfolgreichen Unternehmens. Du organisierst,
                koordinierst und steuerst die administrativen
                Prozesse - präzise, effizient und professionell.
              </p>
            </div>
            {/* Key Stats & Facts */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 50}}>
              <div className="glass-card blue-theme" style={{padding: 25, textAlign: 'center', borderRadius: 20, border: '1px solid #38bdf8 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('umsatz')")}>
                <span style={{display: 'block', fontSize: 32, fontWeight: 800, color: '#38bdf8'}}>Weltweit</span>
                <span style={{fontSize: 14, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1}}>Nachgefragt</span>
              </div>
              <div className="glass-card purple-theme" style={{padding: 25, textAlign: 'center', borderRadius: 20, border: '1px solid #a855f7 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('anteil')")}>
                <span style={{display: 'block', fontSize: 32, fontWeight: 800, color: '#a855f7'}}>Digital</span>
                <span style={{fontSize: 14, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1}}>Zukunftsfähig</span>
              </div>
              <div className="glass-card blue-theme" style={{padding: 25, textAlign: 'center', borderRadius: 20, border: '1px solid #38bdf8 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('erreichbarkeit')")}>
                <span style={{display: 'block', fontSize: 32, fontWeight: 800, color: '#38bdf8'}}>Vielseitig</span>
                <span style={{fontSize: 14, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1}}>Einsatzbereiche</span>
              </div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginBottom: 40}}>
              {/* Die Ausbildung */}
              <div className="glass-card blue-theme" style={{padding: 40, borderRadius: 30, position: 'relative', overflow: 'hidden', border: '1px solid #38bdf8 !important'}}>
                <div style={{position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: '#38bdf8'}} />
                <h3 style={{color: '#38bdf8', marginBottom: 25, fontSize: 28, textAlign: 'center'}}>
                  Der Ausbildungsweg
                </h3>
                <p style={{fontSize: 17, lineHeight: '1.8', color: '#ffffff', marginBottom: 25}}>
                  Im Jahr <strong>2026</strong> ist der
                  "Kaufmann/-frau für Büromanagement" einer der
                  vielseitigsten und gefragtesten Berufe. Du
                  lernst, wie du administrative Prozesse
                  optimierst, Teams koordinierst und den Erfolg
                  eines Unternehmens sicherstellst.
                </p>
                <div style={{display: 'grid', gap: 15}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('dualer_fokus')")}>
                    <span style={{fontSize: 24}}>ðŸ¢</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Dualer Fokus</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Praxis im Betrieb + Theorie in der
                        Berufsschule</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('tools_technik')")}>
                    <span style={{fontSize: 24}}>ðŸ’»</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Tools &amp; Technik</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Office, ERP, CRM &amp;
                        Projektmanagement</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('recht_sicherheit')")}>
                    <span style={{fontSize: 24}}>âš–ï¸</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Recht &amp; Sicherheit</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>DSGVO, Arbeitsrecht &amp;
                        Datenschutz</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('marketing_sales')")}>
                    <span style={{fontSize: 24}}>ðŸ’°</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Finanzen &amp; Controlling</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Budgetierung &amp;
                        Kostenkontrolle</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('kundenmanagement')")}>
                    <span style={{fontSize: 24}}>ðŸ’¬</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Kundenmanagement</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Kommunikation &amp; Support</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Die 5 Säulen */}
              <div className="glass-card purple-theme" style={{padding: 40, borderRadius: 30, position: 'relative', overflow: 'hidden', border: '1px solid #a855f7 !important'}}>
                <div style={{position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: '#a855f7'}} />
                <h3 style={{color: '#a855f7', marginBottom: 25, fontSize: 28, textAlign: 'center'}}>
                  Die 5 Säulen des Erfolgs
                </h3>
                <p style={{fontSize: 18, lineHeight: '1.7', color: '#ffffff', marginBottom: 20}}>
                  Ein erfolgreiches Büro basiert auf fünf
                  Kernbereichen, die perfekt ineinandergreifen
                  müssen. Diese fünf Säulen bilden das Fundament
                  für jede administrative Karriere und sind
                  entscheidend für den langfristigen Erfolg eines
                  Unternehmens.
                </p>
                <div style={{display: 'grid', gap: 15}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('sortiment')")}>
                    <span style={{fontSize: 24}}></span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Dokumentenmanagement</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Ordnung &amp; Struktur</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('plattform')")}>
                    <span style={{fontSize: 24}}>âš™ï¸</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Prozesse</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Effiziente Arbeitsabläufe</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('marketing_saeulen')")}>
                    <span style={{fontSize: 24}}>ðŸ“¢</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Kommunikation</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Intern &amp; Extern</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('logistik')")}>
                    <span style={{fontSize: 24}}>ðŸ“…</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Organisation</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Termin- &amp; Ressourcenplanung</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('service')")}>
                    <span style={{fontSize: 24}}>ðŸ’¬</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Service</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Exzellenter Büroservice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Karriere-Fokus */}
            <div className="pro-tip" style={{marginBottom: 50}}>
              <h3 style={{marginBottom: 20, fontSize: 32, fontWeight: 800, textAlign: 'center', background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', position: 'relative', zIndex: 1}}>
                Deine Karriere im Fokus
              </h3>
              <p style={{fontSize: 19, lineHeight: '1.8', color: '#ffffff', marginBottom: 25, textAlign: 'center', position: 'relative', zIndex: 1}}>
                Als Kaufmann/-frau für Büromanagement behältst du
                den Überblick über alle administrativen Abläufe. Von
                der Buchhaltung bis zur Kundenkommunikation - du
                bist die zentrale Schnittstelle, die alles
                zusammenhält und für reibungslose Prozesse sorgt.
              </p>
              <div style={{display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span>
                  Vielseitige Aufgaben
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span> Sichere
                  Arbeitsplätze
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span>
                  Aufstiegschancen
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span>
                  Branchenübergreifend
                </div>
              </div>
            </div>
            {/* Skills Bereich */}
            <div style={{marginBottom: 50}}>
              <h3 style={{marginBottom: 30, fontSize: 32, textAlign: 'center', fontWeight: 800, background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent'}}>
                ðŸ›&nbsp;ï¸ Dein Experten-Arsenal
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30}}>
                <div className="skill-card blue-skill" style={{padding: 40, borderRadius: 25, border: '1px solid #38bdf8 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('hard_skills')")}>
                  <strong style={{fontSize: 28, color: '#38bdf8', display: 'block', marginBottom: 15, textAlign: 'center'}}>Fachliche Kompetenzen (Hard Skills)</strong>
                  <p style={{fontSize: 19, lineHeight: '1.6', color: '#ffffff', marginBottom: 20, textAlign: 'center'}}>
                    Dein technisches Handwerkszeug: Die
                    erlernbaren Fähigkeiten, um administrative
                    Prozesse präzise zu steuern und zu
                    optimieren.
                  </p>
                  <div style={{display: 'grid', gap: 20}}>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Buchhaltung</span>
                        <span>85%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '85%', height: '100%', background: '#38bdf8', borderRadius: 4, boxShadow: '0 0 15px #38bdf8'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Datenverarbeitung</span>
                        <span>80%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '80%', height: '100%', background: '#38bdf8', borderRadius: 4, boxShadow: '0 0 15px #38bdf8'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Rechtliche Grundlagen</span>
                        <span>80%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '80%', height: '100%', background: '#38bdf8', borderRadius: 4, boxShadow: '0 0 15px #38bdf8'}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-card purple-skill" style={{padding: 40, borderRadius: 25, border: '1px solid #a855f7 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('soft_skills')")}>
                  <strong style={{fontSize: 28, color: '#a855f7', display: 'block', marginBottom: 15, textAlign: 'center'}}>Strategisches Denken (Soft Skills)</strong>
                  <p style={{fontSize: 19, lineHeight: '1.6', color: '#ffffff', marginBottom: 20, textAlign: 'center'}}>
                    Deine persönlichen Stärken: Die
                    psychologischen und analytischen
                    Fähigkeiten, um Teams zu koordinieren und
                    Prozesse zu verbessern.
                  </p>
                  <div style={{display: 'grid', gap: 20}}>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Kommunikationsfähigkeit</span>
                        <span>90%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '90%', height: '100%', background: '#a855f7', borderRadius: 4, boxShadow: '0 0 15px #a855f7'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Organisationstalent</span>
                        <span>82%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '82%', height: '100%', background: '#a855f7', borderRadius: 4, boxShadow: '0 0 15px #a855f7'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Teamfähigkeit</span>
                        <span>82%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '82%', height: '100%', background: '#a855f7', borderRadius: 4, boxShadow: '0 0 15px #a855f7'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* NEU: Lernwege & KPIs */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginBottom: 50}}>
              <div className="glass-card blue-theme" style={{padding: 40, borderRadius: 30, position: 'relative', overflow: 'hidden', border: '1px solid #38bdf8 !important'}}>
                <div style={{position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: '#38bdf8'}} />
                <h3 style={{color: '#38bdf8', marginBottom: 25, fontSize: 28, textAlign: 'center'}}>
                   Büromanagement lernen
                </h3>
                <p style={{fontSize: 17, lineHeight: '1.8', color: '#ffffff', marginBottom: 25}}>
                  Neben der Ausbildung gibt es viele Wege zum
                  Experten:
                </p>
                <div style={{display: 'grid', gap: 15}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('fachwirt')")}>
                    <span style={{fontSize: 24}}></span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Fachwirt</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Die Aufstiegsfortbildung nach der
                        Ausbildung - Bachelor-Niveau (DQR
                        6)</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('studium')")}>
                    <span style={{fontSize: 24}}>ðŸ“š</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Studium</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>"BWL, Verwaltung oder Public
                        Management" an Hochschulen</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('zertifikate')")}>
                    <span style={{fontSize: 24}}>ðŸ“œ</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Zertifikate</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Profi-Kurse für Office, ERP oder
                        Projektmanagement</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('self_made')")}>
                    <span style={{fontSize: 24}}>ðŸ”§</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Praxiserfahrung</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Mit kleinen Projekten starten -
                        Eventplanung, Buchhaltung für
                        Freelancer</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('bootcamps')")}>
                    <span style={{fontSize: 24}}>ðŸ“–</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Weiterbildung</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Intensive 3-6 monatige Kurse für
                        praxisnahe Einstiege</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card purple-theme" style={{padding: 40, borderRadius: 30, position: 'relative', overflow: 'hidden', border: '1px solid #a855f7 !important'}}>
                <div style={{position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: '#a855f7'}} />
                <h3 style={{color: '#a855f7', marginBottom: 25, fontSize: 28, textAlign: 'center'}}>
                  ðŸ“Š Die Top 5 Kennzahlen
                </h3>
                <p style={{fontSize: 17, lineHeight: '1.8', color: '#ffffff', marginBottom: 25}}>
                  Das "Dashboard" eines jeden Bürokaufmanns:
                </p>
                <div style={{display: 'grid', gap: 15}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('conversion_rate')")}>
                    <span style={{fontSize: 24}}>ðŸ“ˆ</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Effizienzrate</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>% der Prozesse optimiert
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>ER</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('akquise_kosten')")}>
                    <span style={{fontSize: 24}}>â±ï¸</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Bearbeitungszeit</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Ø Zeit pro Aufgabe
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>BT</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('warenkorb_wert')")}>
                    <span style={{fontSize: 24}}>âœ…</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Prozessqualität</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>% fehlerfreie Prozesse
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>PQ</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('kundenwert')")}>
                    <span style={{fontSize: 24}}>â­</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Kundenzufriedenheit</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Bewertung 1-10
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>CSAT</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('retourenquote')")}>
                    <span style={{fontSize: 24}}>ðŸ“‹</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Dokumentationsquote</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>% dokumentierte Vorgänge
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>DQ</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Task 1 Section: Bestellannahme */}
          <section className="section" id="task1Section" style={{display: 'none'}}>
            <h2 style={{fontSize: 32, color: '#a855f7', marginBottom: 25}}>
              Mission 1: Bestellannahme
            </h2>
            <p id="mission1Desc" style={{fontSize: 18, marginBottom: 35, color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.7'}} />
            <div id="taskMission" style={{display: 'block'}}>
              <div id="invoiceData" style={{marginBottom: 40, background: 'white', borderRadius: 20, padding: 40, border: '2px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)', display: 'block'}}>
                {/* Bestellung wird hier dynamisch geladen */}
              </div>
              <div id="taskInputs" style={{display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 30}}>
                <div id="customerSelection" style={{display: 'none', background: 'rgba(59, 130, 246, 0.2)', border: '2px solid #3b82f6', borderRadius: 10, padding: 10, color: '#ffffff', fontSize: 14}} />
                <div id="productSelection" style={{display: 'none', background: 'rgba(168, 85, 247, 0.2)', border: '2px solid #a855f7', borderRadius: 10, padding: 10, color: '#ffffff', fontSize: 14}} />
                <div style={{display: 'flex', gap: 15}}>
                  <div className="input-group-wrapper" style={{flex: 1}}>
                    <button className="primary-btn" onClick={globalEvent("openCustomerDatabase()")} style={{background: '#38bdf8', color: 'white', padding: 18, borderRadius: 20, border: 'none', fontSize: 16, cursor: 'pointer', width: '100%'}}>
                      Kundendatenbank
                    </button>
                    <div className="button-group-inline" style={{marginTop: 10}}>
                      <button className="info-icon-btn" onClick={globalEvent("showInfo('kundedatenbank')")}>INFO</button>
                    </div>
                  </div>
                  <div className="input-group-wrapper" style={{flex: 1}}>
                    <button className="primary-btn" onClick={globalEvent("\n                                      event.stopPropagation();\n                                      openProductDatabase()\n                                  ")} style={{background: '#a855f7', color: 'white', padding: 18, borderRadius: 20, border: 'none', fontSize: 16, cursor: 'pointer', width: '100%'}}>
                      Produktdatenbank
                    </button>
                    <div className="button-group-inline" style={{marginTop: 10}}>
                      <button className="info-icon-btn" onClick={globalEvent("showInfo('produktdatenbank')")}>INFO</button>
                    </div>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <button className="primary-btn" onClick={globalEvent("validateOrder()")} style={{background: '#22c55e', color: 'white', padding: 18, borderRadius: 20, border: 'none', fontSize: 16, cursor: 'pointer'}}>
                    Bestellung prüfen
                  </button>
                </div>
              </div>
              <div id="taskFeedback" style={{marginTop: 20}} />
            </div>
          </section>
          {/* Kundendatenbank Modal */}
          {/* Kundendatenbank Modal */}
          <div id="customerDatabaseModal" style={{display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)', zIndex: 10000, justifyContent: 'center', alignItems: 'center'}}>
            <div style={{background: '#fff', borderRadius: 24, width: '90%', maxWidth: 900, maxHeight: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)'}}>
              {/* Header */}
              <div style={{background: 'linear-gradient( 135deg, #667eea, #764ba2 )', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <div style={{width: 44, height: 44, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22}}>
                    ðŸ‘¥
                  </div>
                  <div>
                    <h2 style={{color: 'white', fontSize: 22, fontWeight: 800, margin: 0}}>
                      Kundendatenbank
                    </h2>
                    <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 13, margin: '4px 0 0 0'}}>
                      Wähle den passenden Kunden aus der
                      Bestellung
                    </p>
                  </div>
                </div>
                <button onClick={globalEvent("closeCustomerDatabase()")} style={{width: 36, height: 36, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: 'white', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(255,255,255,0.35)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(255,255,255,0.2)'\n                          ")}>
                  âœ•
                </button>
              </div>
              {/* Tabelle */}
              <div style={{overflowY: 'auto', padding: 24, flex: 1}}>
                <div id="customerList" />
              </div>
            </div>
          </div>
          {/* Produktdatenbank Modal */}
          <div id="productDatabaseModal" style={{display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)', zIndex: 10000, justifyContent: 'center', alignItems: 'center'}}>
            <div style={{background: '#fff', borderRadius: 24, width: '90%', maxWidth: 1000, maxHeight: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)'}}>
              {/* Header */}
              <div style={{background: 'linear-gradient( 135deg, #667eea, #764ba2 )', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <div style={{width: 44, height: 44, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22}}>
                    ðŸ“¦
                  </div>
                  <div>
                    <h2 style={{color: 'white', fontSize: 22, fontWeight: 800, margin: 0}}>
                      Produktdatenbank
                    </h2>
                    <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 13, margin: '4px 0 0 0'}}>
                      Wähle das passende Produkt anhand der
                      Artikelnummer
                    </p>
                  </div>
                </div>
                <button onClick={globalEvent("closeProductDatabase()")} style={{width: 36, height: 36, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: 'white', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s'}} onMouseOver={globalEvent("\n                              this.style.background =\n                                  'rgba(255,255,255,0.35)'\n                          ")} onMouseOut={globalEvent("\n                              this.style.background =\n                                  'rgba(255,255,255,0.2)'\n                          ")}>
                  âœ•
                </button>
              </div>
              {/* Tabelle */}
              <div style={{overflowY: 'auto', padding: 24, flex: 1}}>
                <div id="productList" />
              </div>
            </div>
          </div>
          {/* Task 2 Section: Rechnung erstellen */}
          <section className="section" id="task2Section" style={{display: 'none'}}>
            <h2 style={{fontSize: 32, color: '#38bdf8', marginBottom: 25}}>
              Mission 2: Rechnung erstellen
            </h2>
            <p style={{fontSize: 18, marginBottom: 35, color: 'rgba(255, 255, 255, 0.85)'}}>
              Erstelle eine korrekte Rechnung basierend auf der
              Bestellung mit allen gesetzlichen Pflichtangaben.
            </p>
            <div id="taskMission" style={{display: 'block'}}>
              <div id="invoiceData2" style={{marginBottom: 40, background: 'white', borderRadius: 20, padding: 40, border: '2px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)', display: 'block'}}>
                {/* Bestellung wird hier dynamisch geladen */}
              </div>
              <div id="taskInputs2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 30}}>
                <div className="input-group-wrapper">
                  <input type="text" id="rechnungsnummer2" placeholder="Rechnungsnummer" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('rechnungsnummer')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpRechnungsnummer()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="rechnungsdatum2" placeholder="Rechnungsdatum" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('rechnungsdatum')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpRechnungsdatum()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="kundenname2" placeholder="Kundenname" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('kundenname')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpKundenname()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="kundenadresse2" placeholder="Kundenadresse" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('kundenadresse')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpKundenadresse()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="kundenstadt2" placeholder="Kundenstadt" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('kundenstadt')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpKundenstadt()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="nettopreis2" placeholder="Nettopreis z.B. 1245,00" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('nettopreis')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpNettopreis()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="mwst2" placeholder="MwSt z.B. 236,55" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('mwst')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpMwst()")}>Hilfe</button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="gesamtbetrag2" placeholder="Gesamtbetrag z.B. 1481,55" style={{padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 16, outline: 'none', width: '100%'}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('gesamtbetrag')")}>INFO</button>
                    <button className="helper-btn" onClick={globalEvent("helpGesamtbetrag()")}>Hilfe</button>
                  </div>
                </div>
              </div>
              <div id="taskFeedback2" style={{marginTop: 20}} />
              <button id="saveTaskBtn2" className="primary-btn" onClick={globalEvent("submitTask2()")} style={{marginTop: 30, display: 'block !important', background: '#22c55e', color: 'white', visibility: 'visible !important'}}>
                Aufgabe speichern &amp; Weiter
              </button>
            </div>
          </section>
          {/* Task 3 Section: Kommunikation */}
          <section className="section" id="task3Section" style={{display: 'none'}}>
            <div style={{marginBottom: 30}}>
              <h2 style={{fontSize: 36, color: '#a855f7', marginBottom: 10}}>
                Mission 3: Kommunikation
              </h2>
              <p style={{fontSize: 18, color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6'}}>
                Wähle in jeder Situation die
                <strong>professionellste Antwort</strong>. Du
                brauchst mindestens
                <strong style={{color: '#fbbf24'}}>5 von 7</strong>
                richtige Antworten, um Mission 4 freizuschalten.
              </p>
              <div className="button-group-inline" style={{marginTop: 15}}>
                <button className="info-icon-btn" onClick={globalEvent("showInfo('kommunikation')")}>INFO</button>
              </div>
            </div>
            <div id="kommunikationContainer" />
          </section>
          {/* Task 4 Section: Budget-Management */}
          <section className="section" id="task4Section" style={{display: 'none'}}>
            <div className="intro-hero" style={{marginBottom: 40}}>
              <h2 style={{fontSize: 48, fontWeight: 900, background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', marginBottom: 10}}>
                Mission 4: Budget-Management
              </h2>
              <p style={{fontSize: 20, color: 'white', opacity: '0.9'}}>
                Verteile das Budget von 100.000 € auf die verschiedenen Abteilungen und erfülle die Mindestanforderungen.
              </p>
            </div>
            <div id="budgetGame" style={{display: 'block'}}>
              <div style={{background: 'rgba(255, 255, 255, 0.1)', borderRadius: 20, padding: 30, marginBottom: 30, border: '2px solid #38bdf8'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                  <h3 style={{color: 'white', fontSize: 24, margin: 0}}>Verfügbares Budget</h3>
                  <div id="remainingBudget" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white', padding: '15px 30px', borderRadius: 15, fontSize: 28, fontWeight: 'bold'}}>100.000 €</div>
                </div>
                <div style={{background: 'rgba(0, 0, 0, 0.3)', borderRadius: 10, height: 10, overflow: 'hidden'}}>
                  <div id="budgetProgressBar" style={{background: 'linear-gradient(90deg, #22c55e, #16a34a)', height: '100%', width: '0%', transition: 'width 0.3s ease'}} />
                </div>
              </div>
              <div id="departmentInputs" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 30}}>
                {/* Abteilungen werden hier dynamisch eingefügt */}
              </div>
              <div id="budgetFeedback" style={{marginBottom: 30}} />
              <button id="checkBudgetBtn" className="primary-btn" onClick={globalEvent("checkBudget()")} style={{background: '#22c55e', color: 'white', padding: '18px 40px', borderRadius: 20, border: 'none', fontSize: 18, cursor: 'pointer', width: '100%'}}>
                Budget prüfen
              </button>
            </div>
            <div id="taskFeedback4" style={{marginTop: 20}} />
            <button id="saveTaskBtn4" className="primary-btn" onClick={globalEvent("finishGame()")} style={{marginTop: 30, display: 'none', background: '#22c55e', color: 'white'}}>
              Spiel abschließen
            </button>
          </section>
        </div>
      </div>
      {/* Neues Popup für Namenseingabe beim Überspringen */}
      {/* Zertifikat-Element (versteckt) */}
      <div id="certificateElement" style={{display: 'none', position: 'absolute', top: '-9999px', left: '-9999px'}}>
        <div style={{width: 794, height: 1123, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 50, fontFamily: 'Arial, sans-serif'}}>
          <div style={{background: 'white', borderRadius: 20, padding: 50, height: '100%', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', position: 'relative'}}>
            {/* Logo oben links */}
            <div style={{position: 'absolute', top: 30, left: 30}}>
              <img src="../assets/images/Logo/Logo-Zertifikat.png" alt="ALO Academy Logo" style={{width: 130, height: 60}} />
            </div>
            {/* Titel */}
            <div style={{textAlign: 'center', marginTop: 120, marginBottom: 50}}>
              <h1 style={{color: '#667eea', fontSize: 48, margin: 0, fontWeight: 'bold'}}>Zertifikat</h1>
              <p style={{color: '#764ba2', fontSize: 24, margin: '15px 0 0 0', fontWeight: 500}}>Büromanagement</p>
            </div>
            {/* Graduations-Symbol */}
            <div style={{textAlign: 'center', marginBottom: 50}}>
              <div style={{width: 120, height: 120, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', margin: '0 auto 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 20px rgba(102, 126, 234, 0.3)'}}>
                <span style={{color: 'white', fontSize: 60}}></span>
              </div>
            </div>
            {/* Bescheinigungstext */}
            <div style={{textAlign: 'center', marginBottom: 50}}>
              <p style={{color: '#333', fontSize: 20, margin: 0, lineHeight: '1.6'}}>Hiermit wird bescheinigt, dass</p>
              <h2 id="certificateName" style={{color: '#667eea', fontSize: 36, margin: '20px 0', fontWeight: 'bold'}}>[Name]</h2>
              <p style={{color: '#333', fontSize: 20, margin: 0, lineHeight: '1.6'}}>alle Missionen erfolgreich abgeschlossen hat</p>
            </div>
            {/* Missionen-Übersicht */}
            <div style={{textAlign: 'center', marginBottom: 60}}>
              <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 30}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: 60, height: 60, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>âœ“</span>
                  </div>
                  <p style={{color: '#333', fontSize: 16, margin: 0, fontWeight: 'bold'}}>Mission 1</p>
                  <p style={{color: '#666', fontSize: 14, margin: '5px 0 0 0'}}>Bestellannahme</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: 60, height: 60, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>âœ“</span>
                  </div>
                  <p style={{color: '#333', fontSize: 16, margin: 0, fontWeight: 'bold'}}>Mission 2</p>
                  <p style={{color: '#666', fontSize: 14, margin: '5px 0 0 0'}}>Rechnungseingabe</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: 60, height: 60, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>âœ“</span>
                  </div>
                  <p style={{color: '#333', fontSize: 16, margin: 0, fontWeight: 'bold'}}>Mission 3</p>
                  <p style={{color: '#666', fontSize: 14, margin: '5px 0 0 0'}}>Kommunikation</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: 60, height: 60, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>âœ“</span>
                  </div>
                  <p style={{color: '#333', fontSize: 16, margin: 0, fontWeight: 'bold'}}>Mission 4</p>
                  <p style={{color: '#666', fontSize: 14, margin: '5px 0 0 0'}}>Budget-Management</p>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div style={{textAlign: 'center', marginTop: 'auto', paddingTop: 40, borderTop: '2px solid #f0f0f0'}}>
              <p style={{color: '#666', fontSize: 16, margin: 0, fontWeight: 500}}>ALO Academy - Büromanagement Training</p>
              <p id="certificateDate" style={{color: '#999', fontSize: 14, margin: '10px 0 0 0'}}>[Datum]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
