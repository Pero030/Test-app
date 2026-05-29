import { globalEvent } from "../utils/globalEvent.js";

export function EcommerceGame() {
  return (
    <div>
      <div className="layout" id="gameContent" style={{display: 'none'}}>
        <aside className="sidebar" role="complementary" aria-labelledby="lernpfadTitle">
          <h2 id="lernpfadTitle">Lernpfad</h2>
          <div className="mission blue-border" id="menu1" role="button" tabIndex={0} onClick={globalEvent("goToTask('introSection')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('introSection');\n                  }\n              ")}>
            1. Einleitung
          </div>
          <div className="mission purple-border locked" id="menu2" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task1Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task1Section');\n                  }\n              ")}>
            2. Produkt-Design
          </div>
          <div className="mission blue-border locked" id="menu3" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task2Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task2Section');\n                  }\n              ")}>
            3. SEO-Strategie
          </div>
          <div className="mission purple-border locked" id="menu4" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('task3Section')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('task3Section');\n                  }\n              ")}>
            4. Conversion-Power
          </div>
          <div className="mission blue-border locked" id="menu7" role="button" tabIndex={-1} style={{opacity: '0.5', pointerEvents: 'none'}} onClick={globalEvent("goToTask('shopBuilderSection')")} onKeyDown={globalEvent("\n                  if (event.key === 'Enter' || event.key === ' ') {\n                      event.preventDefault();\n                      goToTask('shopBuilderSection');\n                  }\n              ")}>
            5. Shop Builder
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
          <section className="section" id="introSection" style={{display: 'none'}}>
            <div className="intro-hero">
              <div style={{position: 'absolute', top: '-50px', right: '-50px', width: 200, height: 200, background: 'rgba(56, 189, 248, 0.1)', filter: 'blur(50px)', borderRadius: '50%'}} />
              <h1 style={{marginBottom: 25, fontSize: 64, fontWeight: 900, letterSpacing: '-2px', textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent'}}>
                Die Welt des E-Commerce
              </h1>
              <p style={{fontSize: 24, lineHeight: '1.6', color: '#ffffff', maxWidth: 900, margin: '0 auto', fontWeight: 300, position: 'relative', zIndex: 1}}>
                E-Commerce ist das Herzstück der modernen digitalen
                Wirtschaft. Es verbindet globale Märkte mit
                individuellen Wünschen - blitzschnell, effizient und
                grenzenlos.
              </p>
            </div>
            {/* Key Stats & Facts */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 50}}>
              <div className="glass-card blue-theme" style={{padding: 25, textAlign: 'center', borderRadius: 20, border: '1px solid #38bdf8 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('umsatz')")}>
                <span style={{display: 'block', fontSize: 32, fontWeight: 800, color: '#38bdf8'}}>&gt; 7,5 Bio. $</span>
                <span style={{fontSize: 14, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1}}>Globaler Umsatz 2026</span>
              </div>
              <div className="glass-card purple-theme" style={{padding: 25, textAlign: 'center', borderRadius: 20, border: '1px solid #a855f7 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('anteil')")}>
                <span style={{display: 'block', fontSize: 32, fontWeight: 800, color: '#a855f7'}}>~ 28%</span>
                <span style={{fontSize: 14, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1}}>Anteil am Welthandel</span>
              </div>
              <div className="glass-card blue-theme" style={{padding: 25, textAlign: 'center', borderRadius: 20, border: '1px solid #38bdf8 !important', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('erreichbarkeit')")}>
                <span style={{display: 'block', fontSize: 32, fontWeight: 800, color: '#38bdf8'}}>24 / 7</span>
                <span style={{fontSize: 14, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1}}>Erreichbarkeit weltweit</span>
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
                  "Kaufmann/-frau im E-Commerce" einer der
                  modernsten und gefragtesten Berufe. Du lernst,
                  wie man KI-gestützte Geschäftsmodelle steuert
                  und Kunden auf der ganzen Welt begeistert.
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
                    <span style={{fontSize: 24}}>ðŸ”§</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Tools &amp; Technik</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Shop-Systeme, Analytics, CRM &amp;
                        Marktplätze</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('recht_sicherheit')")}>
                    <span style={{fontSize: 24}}>âš–ï¸</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Recht &amp; Sicherheit</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>DSGVO, Fernabsatzrecht &amp;
                        Zahlungsabwicklung</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('marketing_sales')")}>
                    <span style={{fontSize: 24}}>ðŸ“ˆ</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Marketing &amp; Sales</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>SEO, Social Media, Ads &amp;
                        Conversion-Optimierung</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('kundenmanagement')")}>
                    <span style={{fontSize: 24}}>ðŸ‘¥</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Kundenmanagement</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Kommunikation, Support &amp;
                        Kundenbindung</span>
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
                  Ein erfolgreicher Online-Shop ist wie ein
                  Uhrwerk: Viele Rädchen müssen perfekt
                  ineinandergreifen. Diese fünf Kernbereiche
                  bilden das Fundament für jedes E-Commerce
                  Imperium:
                </p>
                <div style={{display: 'grid', gap: 15}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('sortiment')")}>
                    <span style={{fontSize: 24}}>ðŸ“¦</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Sortiment</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Die richtigen Produkte finden</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('plattform')")}>
                    <span style={{fontSize: 24}}>ðŸ’»</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Plattform</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Ein Shop, der technisch
                        glänzt</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('marketing_saeulen')")}>
                    <span style={{fontSize: 24}}>ðŸ“¢</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Marketing</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Sichtbarkeit durch SEO &amp; Ads</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('logistik')")}>
                    <span style={{fontSize: 24}}>ðŸšš</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Logistik</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Schneller Versand &amp; Retouren</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('service')")}>
                    <span style={{fontSize: 24}}>ðŸ’¬</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Service</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Kundenbindung durch Support</span>
                    </div>
                  </div>
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
                    erlernbaren Fähigkeiten, um einen
                    Online-Shop präzise zu steuern und technisch
                    zu optimieren.
                  </p>
                  <div style={{display: 'grid', gap: 20}}>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Shop-Management</span>
                        <span>90%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '90%', height: '100%', background: '#38bdf8', borderRadius: 4, boxShadow: '0 0 15px #38bdf8'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Daten &amp; Analyse</span>
                        <span>85%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '85%', height: '100%', background: '#38bdf8', borderRadius: 4, boxShadow: '0 0 15px #38bdf8'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>SEO /
                          Performance-Marketing</span>
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
                    Fähigkeiten, um Kunden zu verstehen und
                    Trends zu erkennen.
                  </p>
                  <div style={{display: 'grid', gap: 20}}>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Zielgruppen-Analyse</span>
                        <span>95%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '95%', height: '100%', background: '#a855f7', borderRadius: 4, boxShadow: '0 0 15px #a855f7'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>UX &amp; Psychologie</span>
                        <span>88%</span>
                      </div>
                      <div style={{width: '100%', height: 8, background: 'rgba( 255, 255, 255, 0.1 )', borderRadius: 4}}>
                        <div style={{width: '88%', height: '100%', background: '#a855f7', borderRadius: 4, boxShadow: '0 0 15px #a855f7'}} />
                      </div>
                    </div>
                    <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                        <span>Content-Strategie</span>
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
            {/* Karriere-Fokus */}
            <div className="pro-tip" style={{marginBottom: 50}}>
              <h3 style={{marginBottom: 20, fontSize: 32, fontWeight: 800, textAlign: 'center', background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', position: 'relative', zIndex: 1}}>
                Deine Karriere im Fokus
              </h3>
              <p style={{fontSize: 19, lineHeight: '1.8', color: '#ffffff', marginBottom: 25, textAlign: 'center', position: 'relative', zIndex: 1}}>
                Als E-Commerce Profi bist du der Dirigent eines
                digitalen Orchesters. Du orchestrierst den
                Warenfluss, das Kundenerlebnis und das Wachstum
                deines Unternehmens. In einer Welt, die immer
                digitaler wird, bist du der Experte, den jedes
                zukunftsorientierte Unternehmen braucht.
              </p>
              <div style={{display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span>
                  Top-Gehaltschancen
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span>
                  Krisensicherer Job
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span> Kreative
                  Freiheit
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{color: '#38bdf8'}}>âœ”</span> Globale
                  Perspektiven
                </div>
              </div>
            </div>
            {/* NEU: Lernwege & KPIs */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginBottom: 50}}>
              <div className="glass-card blue-theme" style={{padding: 40, borderRadius: 30, position: 'relative', overflow: 'hidden', border: '1px solid #38bdf8 !important'}}>
                <div style={{position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: '#38bdf8'}} />
                <h3 style={{color: '#38bdf8', marginBottom: 25, fontSize: 28, textAlign: 'center'}}>
                   E-Commerce lernen
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
                      <span style={{fontSize: 14, color: '#ffffff'}}>"Digital Commerce" oder
                        "Online-Marketing" an
                        Hochschulen</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('zertifikate')")}>
                    <span style={{fontSize: 24}}>ðŸ“œ</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Zertifikate</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Profi-Kurse von Google, HubSpot
                        oder Meta (Facebook)</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('self_made')")}>
                    <span style={{fontSize: 24}}>ðŸš€</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Self-Made</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Mit eigenen kleinen Projekten auf
                        Shopify oder Etsy starten</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(56, 189, 248, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(56, 189, 248, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('bootcamps')")}>
                    <span style={{fontSize: 24}}>âš¡</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Bootcamps</strong>
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
                  Das "Dashbord" eines jeden E-Commerce Managers:
                </p>
                <div style={{display: 'grid', gap: 15}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('conversion_rate')")}>
                    <span style={{fontSize: 24}}>ðŸ“ˆ</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Conversion Rate</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>% der Käufer
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>CR</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('akquise_kosten')")}>
                    <span style={{fontSize: 24}}>ðŸ’°</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Akquise-Kosten</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Werbekosten/Kunde
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>CAC</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('warenkorb_wert')")}>
                    <span style={{fontSize: 24}}>ðŸ›’</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Warenkorb-Wert</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Ø Umsatz/Kauf
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>AOV</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('kundenwert')")}>
                    <span style={{fontSize: 24}}>ðŸ’Ž</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Kundenwert</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>Umsatz über Zeit
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>CLV</span></span>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(168, 85, 247, 0.08)', padding: 15, borderRadius: 15, border: '1px solid rgba(168, 85, 247, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease'}} onClick={globalEvent("showStatInfo('retourenquote')")}>
                    <span style={{fontSize: 24}}>ðŸ”„</span>
                    <div>
                      <strong style={{display: 'block', fontSize: 16}}>Retourenquote</strong>
                      <span style={{fontSize: 14, color: '#ffffff'}}>% Rücksendungen
                        <span style={{color: '#a855f7', fontWeight: 'bold'}}>%</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="task1Section" style={{display: 'none'}}>
            <h2 style={{fontSize: 32, color: '#a855f7', marginBottom: 25}}>
              Mission 1: Produkt erstellen
            </h2>
            <p style={{fontSize: 18, marginBottom: 35, color: 'rgba(255, 255, 255, 0.85)'}}>
              Wähle ein Produkt aus und löse die passenden E-Commerce
              Aufgaben.
            </p>
            <div className="input-group-wrapper">
              <select id="productSelect" onchange="loadProductMission()" style={{flex: 1, marginBottom: 0, padding: 18, borderRadius: 20, background: 'rgba(255, 255, 255, 0.05)', color: 'white', border: '2px solid #38bdf8', fontSize: 18, outline: 'none', cursor: 'pointer'}}>
                <option value>Produkt auswählen</option>
                <option value="gamingmouse">Gaming Maus</option>
                <option value="headphones">
                  Bluetooth Kopfhörer
                </option>
                <option value="smartwatch">Smartwatch</option>
                <option value="protein">Protein Pulver</option>
                <option value="backpack">Laptop Rucksack</option>
                <option value="keyboard">Gaming Tastatur</option>
                <option value="lamp">LED Schreibtischlampe</option>
                <option value="bottle">Trinkflasche</option>
                <option value="chair">Gaming Stuhl</option>
                <option value="camera">4K Action Kamera</option>
              </select>
              <div className="button-group-inline">
                <button className="info-icon-btn" onClick={globalEvent("showInfo('productSelect')")}>
                  INFO
                </button>
              </div>
            </div>
            <div id="productMission" style={{display: 'block'}}>
              <h3 id="selectedProductTitle" style={{fontSize: 30, color: '#ffffff', marginBottom: 30, borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 15}} />
              <div className="info-box" style={{marginBottom: 40, background: 'rgba(56, 189, 248, 0.05)', borderLeft: '6px solid #a855f7', borderColor: 'rgba(168, 85, 247, 0.3)'}}>
                <strong style={{fontSize: 22, color: '#a855f7'}}>Produkt Aufgabe</strong>
                <p id="productTaskText" style={{fontSize: 17, marginTop: 10, lineHeight: '1.6'}} />
              </div>
              {/* SEO Felder Bereich */}
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 50}}>
                <div className="input-group-wrapper">
                  <input type="text" id="productName" oninput="
                                      document.getElementById(
                                          'saveProductBtn',
                                      ).style.display = 'none';
                                      document.getElementById(
                                          'shopPreview',
                                      ).innerHTML = '';
                                  " placeholder="SEO Produktname" style={{paddingRight: 15}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('productName')")}>
                      INFO
                    </button>
                    <button className="helper-btn" onClick={globalEvent("helpProductName()")}>
                      Hilfe
                    </button>
                  </div>
                </div>
                <div className="input-group-wrapper" style={{alignItems: 'flex-start'}}>
                  <textarea id="productDescription" oninput="
                                      document.getElementById(
                                          'saveProductBtn',
                                      ).style.display = 'none';
                                      document.getElementById(
                                          'shopPreview',
                                      ).innerHTML = '';
                                  " placeholder="Produktbeschreibung" style={{minHeight: 140, paddingRight: 15}} defaultValue={""} />
                  <div className="button-group-inline" style={{marginTop: 10}}>
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('productDescription')")}>
                      INFO
                    </button>
                    <button className="helper-btn" onClick={globalEvent("helpDescription()")}>
                      Hilfe
                    </button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="metaTitle" oninput="
                                      document.getElementById(
                                          'saveProductBtn',
                                      ).style.display = 'none';
                                      document.getElementById(
                                          'shopPreview',
                                      ).innerHTML = '';
                                  " placeholder="Meta Title für Google" style={{paddingRight: 15}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('metaTitle')")}>
                      INFO
                    </button>
                    <button className="helper-btn" onClick={globalEvent("helpMetaTitle()")}>
                      Hilfe
                    </button>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" id="altText" oninput="
                                      document.getElementById(
                                          'saveProductBtn',
                                      ).style.display = 'none';
                                      document.getElementById(
                                          'shopPreview',
                                      ).innerHTML = '';
                                  " placeholder="Bild Alt Text" style={{paddingRight: 15}} />
                  <div className="button-group-inline">
                    <button className="info-icon-btn" onClick={globalEvent("showInfo('altText')")}>
                      INFO
                    </button>
                    <button className="helper-btn" onClick={globalEvent("helpAltText()")}>
                      Hilfe
                    </button>
                  </div>
                </div>
                <div style={{display: 'flex', gap: 20, alignItems: 'start', marginBottom: 10}}>
                  <div style={{flex: '0.5'}} className="input-group-wrapper">
                    <input type="number" id="productPrice" oninput="
                                          document.getElementById(
                                              'saveProductBtn',
                                          ).style.display = 'none';
                                          document.getElementById(
                                              'shopPreview',
                                          ).innerHTML = '';
                                      " placeholder="Preis (€)" step="0.01" style={{paddingRight: 15}} />
                    <div className="button-group-inline">
                      <button className="info-icon-btn" onClick={globalEvent("showInfo('productPrice')")}>
                        INFO
                      </button>
                      <button className="helper-btn" onClick={globalEvent("helpPrice()")}>
                        Hilfe
                      </button>
                    </div>
                  </div>
                  <div style={{flex: '0.5'}} className="input-group-wrapper">
                    <select id="productVat" onchange="
                                          document.getElementById(
                                              'saveProductBtn',
                                          ).style.display = 'none';
                                          document.getElementById(
                                              'shopPreview',
                                          ).innerHTML = '';
                                      " style={{width: '100%', padding: 18, borderRadius: 20, background: 'rgba( 255, 255, 255, 0.05 )', color: 'white', border: '2px solid #38bdf8', fontSize: 16}}>
                      <option value disabled selected>
                        MwSt. wählen...
                      </option>
                      <option value={19}>19% MwSt.</option>
                      <option value={7}>7% MwSt.</option>
                    </select>
                    <div className="button-group-inline">
                      <button className="info-icon-btn" onClick={globalEvent("showInfo('productVat')")}>
                        INFO
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{marginBottom: 50}}>
                <h3 style={{color: '#a855f7', fontSize: 26, marginBottom: 20}}>
                  Produktbild auswählen
                </h3>
                <p style={{fontSize: 17, color: '#ffffff', marginBottom: 25}}>
                  Wähle das richtige Produktbild für dein Produkt
                  aus.
                </p>
                <div id="imageChoices" style={{display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(240px, 1fr) )', gap: 25}} />
                <div id="imageFeedback" style={{marginTop: 20}} />
              </div>
              <button className="primary-btn" style={{width: 'auto', marginBottom: 20}} onClick={globalEvent("publishProduct()")}>
                Produkt veröffentlichen
              </button>
              <div id="productFeedback" style={{marginBottom: 30, padding: 20, borderRadius: 15, display: 'none', fontSize: 16, fontWeight: 600}} />
              <div className="shop-preview" id="shopPreview" style={{marginTop: 10, background: 'white', borderRadius: 24, padding: 40, border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'}}>
                <h3 style={{color: '#0f172a', marginBottom: 20, fontSize: 26}}>
                  Shop Vorschau
                </h3>
                <p id="previewStatus" style={{color: '#475569', fontSize: 18}}>
                  Noch kein Produkt veröffentlicht.
                </p>
              </div>
              <button id="saveProductBtn" className="primary-btn" onClick={globalEvent("unlockTask2()")} style={{marginTop: 45, display: 'none', background: '#22c55e', color: 'white'}}>
                Speichern &amp; Weiter
              </button>
            </div>
          </section>
          <section className="section" id="task2Section" style={{display: 'none'}}>
            <h2 style={{fontSize: 32, color: '#38bdf8', marginBottom: 25}}>
              Mission 2: SEO Puzzle
            </h2>
            <p style={{fontSize: 18, marginBottom: 30, color: 'rgba(255, 255, 255, 0.8)'}}>
              Baue aus den richtigen Keywords einen starken SEO Titel.
            </p>
            <div className="info-box" style={{marginBottom: 35, background: 'rgba(56, 189, 248, 0.05)', borderLeft: '6px solid #38bdf8 !important', borderColor: '#38bdf8 !important'}}>
              <strong style={{fontSize: 20, color: '#38bdf8 !important'}}>Verfügbare Keywords</strong>
              <div id="seoPuzzle" style={{minHeight: 100, padding: 20, marginTop: 15, display: 'flex', flexWrap: 'wrap', gap: 10}}>
                {/* Hier werden die Keywords per JavaScript eingefügt */}
              </div>
            </div>
            <div style={{marginBottom: 35}}>
              <h3 style={{color: '#a855f7', fontSize: 24, marginBottom: 15}}>
                Dein SEO Titel:
              </h3>
              <div className="input-group-wrapper">
                <div id="seoBuilder" style={{minHeight: 80, padding: 25, background: 'rgba(56, 189, 248, 0.1)', borderRadius: 20, border: '2px dashed #38bdf8', fontSize: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', flex: 1}} />
                <div className="button-group-inline">
                  <button className="info-icon-btn" onClick={globalEvent("showInfo('seoBuilder')")}>
                    INFO
                  </button>
                  <button className="helper-btn" onClick={globalEvent("helpSEO()")}>
                    Hilfe
                  </button>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', gap: 15, marginBottom: 30}}>
              <button className="primary-btn" onClick={globalEvent("checkSEOPuzzle()")}>
                SEO prüfen
              </button>
            </div>
            <div id="seoFeedback" style={{marginTop: 20, padding: 25, borderRadius: 20, display: 'none', fontSize: 18}} />
            <button id="saveSEOBtn" className="primary-btn" onClick={globalEvent("unlockTask3()")} style={{marginTop: 20, display: 'none', background: '#22c55e', color: 'white'}}>
              Speichern &amp; Weiter
            </button>
          </section>
          <section className="section" id="task3Section" style={{display: 'none'}}>
            <h2 style={{fontSize: 32, color: '#a855f7', marginBottom: 25}}>
              Mission 4: Conversion Optimierung
            </h2>
            <p style={{fontSize: 18, marginBottom: 30, color: 'rgba(255, 255, 255, 0.8)'}}>
              Kunden kaufen eher, wenn Produkttexte Vertrauen
              erzeugen.
            </p>
            <div className="info-box" style={{marginBottom: 35, background: 'rgba(56, 189, 248, 0.05)', borderLeft: '6px solid #38bdf8 !important', borderColor: '#38bdf8 !important'}}>
              <strong style={{fontSize: 20, color: '#38bdf8 !important'}}>Deine Aufgabe</strong>
              <p style={{fontSize: 16, marginTop: 10}}>
                Schreibe einen überzeugenden Produkttext, der die
                Vorteile deines Produkts hervorhebt.
              </p>
            </div>
            <div className="input-group-wrapper" style={{alignItems: 'flex-start', marginBottom: 30}}>
              <textarea id="conversionText" oninput="
                              document.getElementById(
                                  'finishGameBtn',
                              ).style.display = 'none'
                          " placeholder="Schreibe deinen Produkttext hier..." style={{width: '100%', minHeight: 200, paddingRight: 15, borderColor: '#a855f7 !important'}} defaultValue={""} />
              <div className="button-group-inline" style={{marginTop: 10}}>
                <button className="info-icon-btn" onClick={globalEvent("showInfo('conversionText')")}>
                  INFO
                </button>
                <button className="helper-btn" onClick={globalEvent("helpConversion()")}>
                  Hilfe
                </button>
              </div>
            </div>
            <button className="primary-btn" onClick={globalEvent("checkConversion()")} style={{marginBottom: 30}}>
              Text analysieren
            </button>
            <div id="conversionFeedback" style={{marginTop: 15, padding: 25, borderRadius: 20, display: 'none', fontSize: 18}} />
            <button id="finishGameBtn" className="primary-btn" onClick={globalEvent("finishGame()")} style={{marginTop: 20, display: 'none', background: '#22c55e', color: 'white'}}>
              Speichern &amp; Weiter
            </button>
          </section>
          <section className="section" id="shopBuilderSection" style={{display: 'none'}}>
            <div className="intro-hero" style={{marginBottom: 40}}>
              <h2 style={{fontSize: 48, fontWeight: 900, background: 'linear-gradient( 135deg, #38bdf8, #a855f7 )', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', marginBottom: 10}}>
                Mission 5: Deinen Shop gestalten
              </h2>
              <p style={{fontSize: 20, color: 'white', opacity: '0.9'}}>
                Wähle das Design deines Online-Shops, um Kunden zu
                beeindrucken.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '400px 1fr', gap: 30, marginTop: 25}}>
              {/* Sidebar Controls */}
              <div className="card shop-builder-sidebar">
                <div className="shop-builder-scroll-content">
                  {/* 1. Theme & Colors */}
                  <div>
                    <label style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>1. Shop-Farbe</label>
                    <div id="themeChoices" style={{display: 'grid', gridTemplateColumns: 'repeat( 6, 1fr )', gap: 10}}>
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#38bdf8',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#38bdf8',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#38bdf8', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Cyan" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#22c55e',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#22c55e',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#22c55e', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Grün" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#ec4899',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#ec4899',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#ec4899', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Pink" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#f59e0b',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#f59e0b',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#f59e0b', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Orange" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#8b5cf6',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#8b5cf6',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#8b5cf6', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Violett" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#ef4444',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#ef4444',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#ef4444', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Rot" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#1e293b',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#1e293b',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#1e293b', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Dark" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#06b6d4',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#06b6d4',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#06b6d4', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Türkis" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#f43f5e',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#f43f5e',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#f43f5e', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Rose" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#10b981',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#10b981',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#10b981', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Emerald" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#eab308',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#eab308',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#eab308', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Gold" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'theme',\n                                              '#6366f1',\n                                              this,\n                                          )\n                                      ")} onKeyDown={globalEvent("\n                                          if (\n                                              event.key === 'Enter' ||\n                                              event.key === ' '\n                                          ) {\n                                              event.preventDefault();\n                                              updateShopStyle(\n                                                  'theme',\n                                                  '#6366f1',\n                                                  this,\n                                              );\n                                          }\n                                      ")} style={{width: 30, height: 30, background: '#6366f1', borderRadius: 5, cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)'}} title="Indigo" />
                    </div>
                  </div>
                  {/* 2. Logo Icon */}
                  <div>
                    <label className="purple-label" style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>2. Logo-Icon</label>
                    <div id="logoIconChoices" style={{display: 'grid', gridTemplateColumns: 'repeat( 5, 1fr )', gap: 10}}>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'logoIcon',\n                                              'âš¡',\n                                              this,\n                                          )\n                                      ")} style={{padding: 10}}>
                        âš¡
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'logoIcon',\n                                              'ðŸŒ¿',\n                                              this,\n                                          )\n                                      ")} style={{padding: 10}}>
                        ðŸŒ¿
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'logoIcon',\n                                              'ðŸ’Ž',\n                                              this,\n                                          )\n                                      ")} style={{padding: 10}}>
                        ðŸ’Ž
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'logoIcon',\n                                              'ðŸŒ',\n                                              this,\n                                          )\n                                      ")} style={{padding: 10}}>
                        ðŸŒ
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'logoIcon',\n                                              'ðŸš€',\n                                              this,\n                                          )\n                                      ")} style={{padding: 10}}>
                        ðŸš€
                      </button>
                    </div>
                  </div>
                  {/* 3. Typography */}
                  <div>
                    <label style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>3. Shop-Schriftart</label>
                    <select onchange="
                                          updateShopStyle('font', this.value)
                                      " style={{width: '100%', padding: 10, borderRadius: 8, background: 'rgba( 255, 255, 255, 0.05 )', color: 'white'}}>
                      <option value="'Inter', sans-serif">
                        Modern (Inter)
                      </option>
                      <option value="'Playfair Display', serif">
                        Elegant (Playfair)
                      </option>
                      <option value="'Montserrat', sans-serif">
                        Extrem Fett (Montserrat)
                      </option>
                      <option value="'Poppins', sans-serif">
                        Clean &amp; Rund (Poppins)
                      </option>
                      <option value="'Roboto', sans-serif">
                        Standard (Roboto)
                      </option>
                      <option value="'Lora', serif">
                        Klassisch (Lora)
                      </option>
                      <option value="'Oswald', sans-serif">
                        Kompakt (Oswald)
                      </option>
                      <option value="'Dancing Script', cursive">
                        Handschrift (Dancing)
                      </option>
                      <option value="'Merriweather', serif">
                        Serifen (Merriweather)
                      </option>
                      <option value="'Roboto+Mono', monospace">
                        Technisch (Mono)
                      </option>
                    </select>
                  </div>
                  {/* 4. Layout Mode */}
                  <div>
                    <label className="purple-label" style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>4. Layout</label>
                    <div id="layoutChoices" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'layout',\n                                              'split',\n                                              this,\n                                          )\n                                      ")}>
                        Split
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'layout',\n                                              'centered',\n                                              this,\n                                          )\n                                      ")}>
                        Zentriert
                      </button>
                    </div>
                  </div>
                  {/* 5. Header & Footer Design */}
                  <div>
                    <label style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>5. Header &amp; Footer Farbe</label>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat( 6, 1fr )', gap: 8, marginBottom: 10}}>
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#38bdf8',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#38bdf8', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Cyan" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#22c55e',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#22c55e', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Grün" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#ec4899',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#ec4899', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Pink" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#f59e0b',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#f59e0b', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Orange" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#8b5cf6',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#8b5cf6', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Violett" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#ef4444',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#ef4444', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Rot" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#1e293b',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#1e293b', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Dark" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#06b6d4',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#06b6d4', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Türkis" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#f43f5e',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#f43f5e', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Rose" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#10b981',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#10b981', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Emerald" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#eab308',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#eab308', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Gold" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#6366f1',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#6366f1', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Indigo" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              '#ffffff',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#ffffff', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Weiß" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'headerFooterColor',\n                                              'glass',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: 'linear-gradient( 135deg, #fff, #eee )', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Glass" />
                    </div>
                  </div>
                  {/* 6. Trust Badges */}
                  <div>
                    <label className="purple-label" style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>6. Trust-Elemente</label>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          toggleShopElement(\n                                              'trust-badges',\n                                              this,\n                                          )\n                                      ")}>
                        Badges 
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          toggleShopElement(\n                                              'guarantee',\n                                              this,\n                                          )\n                                      ")}>
                        Garantie 
                      </button>
                    </div>
                  </div>
                  {/* 7. Navigation */}
                  <div>
                    <label style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>7. Menü-Position</label>
                    <div id="navChoices" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'nav',\n                                              'right',\n                                              this,\n                                          )\n                                      ")}>
                        Rechts
                      </button>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          updateShopStyle(\n                                              'nav',\n                                              'center',\n                                              this,\n                                          )\n                                      ")}>
                        Mitte
                      </button>
                    </div>
                  </div>
                  {/* 8. Button Style */}
                  <div>
                    <label className="purple-label" style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>8. Button-Ecken</label>
                    <div id="radiusChoices" style={{display: 'flex', gap: 10}}>
                      <button className="secondary-btn" style={{flex: 1}} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'radius',\n                                              '0px',\n                                              this,\n                                          )\n                                      ")}>
                        Eckig
                      </button>
                      <button className="secondary-btn" style={{flex: 1}} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'radius',\n                                              '10px',\n                                              this,\n                                          )\n                                      ")}>
                        Rund
                      </button>
                      <button className="secondary-btn" style={{flex: 1}} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'radius',\n                                              '30px',\n                                              this,\n                                          )\n                                      ")}>
                        Pille
                      </button>
                    </div>
                  </div>
                  {/* 9. Background Texture */}
                  <div>
                    <label style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>9. Hintergrund</label>
                    <select onchange="
                                          updateShopStyle('bg', this.value)
                                      " style={{width: '100%', padding: 10, borderRadius: 8, background: 'rgba( 255, 255, 255, 0.05 )', color: 'white'}}>
                      <option value="#ffffff">
                        Weiß (Clean)
                      </option>
                      <option value="#f8fafc">
                        Soft Grau
                      </option>
                      <option value="#f1f5f9">Eisblau</option>
                      <option value="#fff7ed">
                        Creme (Warm)
                      </option>
                      <option value="#f0fdf4">
                        Mint (Frisch)
                      </option>
                      <option value="#faf5ff">
                        Lavendel (Soft)
                      </option>
                      <option value="#f0f9ff">
                        Himmelblau
                      </option>
                      <option value="#fdf2f8">
                        Zartrosa
                      </option>
                      <option value="#fffbeb">
                        Sonnengelb (Hell)
                      </option>
                      <option value="#ecfdf5">
                        Emerald Light
                      </option>
                    </select>
                  </div>
                  {/* 10. Newsletter & Footer */}
                  <div>
                    <label className="purple-label" style={{display: 'block', marginBottom: 10, fontWeight: 'bold'}}>10. Newsletter &amp; Extras</label>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 10, marginBottom: 10}}>
                      <button className="secondary-btn" onClick={globalEvent("\n                                          toggleShopElement(\n                                              'newsletter',\n                                              this,\n                                          )\n                                      ")}>
                        Newsletter Section 
                      </button>
                    </div>
                    <label style={{display: 'block', marginBottom: 10, fontSize: 13, opacity: '0.8'}}>Newsletter Hintergrund:</label>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat( 6, 1fr )', gap: 8}}>
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#38bdf8',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#38bdf8', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Cyan" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#22c55e',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#22c55e', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Grün" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#ec4899',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#ec4899', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Pink" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#f59e0b',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#f59e0b', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Orange" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#8b5cf6',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#8b5cf6', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Violett" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#ef4444',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#ef4444', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Rot" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#1e293b',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#1e293b', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Dark" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#06b6d4',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#06b6d4', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Türkis" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#f43f5e',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#f43f5e', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Rose" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#10b981',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#10b981', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Emerald" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#eab308',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#eab308', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Gold" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#6366f1',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#6366f1', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Indigo" />
                      <div className="color-swatch" role="button" tabIndex={0} onClick={globalEvent("\n                                          updateShopStyle(\n                                              'newsletterBg',\n                                              '#ffffff',\n                                              this,\n                                          )\n                                      ")} style={{width: 25, height: 25, background: '#ffffff', borderRadius: 4, cursor: 'pointer', border: '1px solid #ccc'}} title="Weiß" />
                    </div>
                  </div>
                </div>
                {/* Ende shop-builder-scroll-content */}
                <div className="shop-builder-footer">
                  <button className="finish-btn" onClick={globalEvent("finalizeShopDesign()")}>
                    ðŸš€ Shop Live schalten
                  </button>
                </div>
              </div>
              {/* Live Preview */}
              <div id="shopLivePreview" style={{background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px solid #e2e8f0', color: '#1e293b', minHeight: 600, display: 'flex', flexDirection: 'column', fontFamily: '"Inter", sans-serif', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)', pointerEvents: 'none', userSelect: 'none'}}>
                {/* Header */}
                <header id="previewHeader" style={{padding: '15px 30px', background: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.4s ease', position: 'sticky', top: 0, zIndex: 10}}>
                  <div id="previewLogo" style={{fontWeight: 800, fontSize: 22, color: '#38bdf8', transition: 'all 0.4s ease', fontFamily: '"Inter", sans-serif', display: 'flex', alignItems: 'center', gap: 8, letterSpacing: '-0.5px'}}>
                    <div style={{background: 'currentColor', color: 'white', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16}}>
                      <span id="logoIcon">âš¡</span>
                    </div>
                    <span id="logoText">Dein Shop</span>
                  </div>
                  <nav id="previewNav" style={{display: 'flex', gap: 25, fontSize: 14, color: '#475569', fontWeight: 600, transition: 'all 0.4s ease'}}>
                    <span style={{cursor: 'pointer'}}>Home</span>
                    <span style={{cursor: 'pointer'}}>Kollektionen</span>
                    <span style={{cursor: 'pointer'}}>Über uns</span>
                    <div style={{display: 'flex', gap: 15, marginLeft: 10}}>
                      <span>ðŸ”</span>
                      <span>ðŸ›’</span>
                    </div>
                  </nav>
                </header>
                {/* Main Content */}
                <main id="previewMain" style={{padding: 40, display: 'flex', gap: 50, alignItems: 'flex-start', flex: 1, transition: 'all 0.5s ease', background: 'radial-gradient( circle at 0% 0%, rgba(56, 189, 248, 0.03), transparent 40% )'}}>
                  {/* Linke Seite: Galerie & Bild */}
                  <div id="previewImageWrapper" style={{flex: 1, transition: 'all 0.5s ease', position: 'sticky', top: 100}}>
                    {/* Hauptbild */}
                    <div style={{position: 'relative', borderRadius: 20, overflow: 'hidden', background: '#f8fafc', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)', border: '1px solid #f1f5f9'}}>
                      <img id="previewProductImg" src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800" style={{width: '100%', display: 'block', transition: 'all 0.5s ease'}} />
                      {/* Overlay Badges */}
                      <div style={{position: 'absolute', top: 15, left: 15, display: 'flex', flexDirection: 'column', gap: 8}}>
                        <div id="previewBadge" style={{background: '#38bdf8', color: 'white', padding: '6px 12px', borderRadius: 8, fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                          Top Seller
                        </div>
                      </div>
                      {/* Wunschliste Button */}
                      <button style={{position: 'absolute', top: 15, right: 15, width: 38, height: 38, borderRadius: '50%', border: 'none', background: 'white', color: '#ef4444', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', transition: '0.3s'}}>
                        â™¥
                      </button>
                    </div>
                    {/* Hier jetzt die KURZE Produktbeschreibung (aus Mission 1) */}
                    <div style={{marginTop: 30, padding: 20, background: '#f8fafc', borderRadius: 15, border: '1px solid #f1f5f9'}}>
                      <h4 style={{fontSize: 14, color: '#0f172a', marginBottom: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                        Produktbeschreibung
                      </h4>
                      <p id="previewProductDesc" style={{color: '#475569', fontSize: 13, lineHeight: '1.6'}}>
                        Hier erscheint deine kurze
                        Beschreibung...
                      </p>
                    </div>
                  </div>
                  {/* Rechte Seite: Produkt-Infos */}
                  <div id="previewContentWrapper" style={{flex: 1, transition: 'all 0.5s ease', display: 'flex', flexDirection: 'column'}}>
                    {/* Breadcrumbs */}
                    <div style={{fontSize: 12, color: '#94a3b8', marginBottom: 12, fontWeight: 500}}>
                      Home /
                      <span style={{color: '#475569'}}>Detailseite</span>
                    </div>
                    <h1 id="previewName" style={{fontSize: 42, marginBottom: 12, color: '#0f172a', fontWeight: 900, lineHeight: '1.1', letterSpacing: '-1.5px'}}>
                      Dein Produkt
                    </h1>
                    {/* Ratings */}
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20}}>
                      <div style={{display: 'flex', color: '#fbbf24', fontSize: 14}}>
                        â˜…â˜…â˜…â˜…â˜…
                      </div>
                      <span style={{color: '#64748b', fontSize: 13, fontWeight: 500}}>(124 Reviews)</span>
                    </div>
                    {/* Hier jetzt der LANGE Conversion-Text */}
                    <p id="previewLongDesc" style={{color: '#475569', lineHeight: '1.6', fontSize: 15, marginBottom: 25}}>
                      Hier steht dann die Kurzbeschreibung von
                      der Conversion-Power...
                    </p>
                    {/* Preis & Varianten Box */}
                    <div style={{background: 'white', padding: 20, borderRadius: 16, border: '1px solid #f1f5f9', marginBottom: 25}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 15}}>
                        <div>
                          <div id="previewPrice" style={{fontSize: 32, fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', lineHeight: 1}}>
                            79,99 €
                          </div>
                        </div>
                        <div style={{color: '#22c55e', fontWeight: 700, fontSize: 13}}>
                          â— Auf Lager
                        </div>
                      </div>
                      {/* Auswahl */}
                      <div style={{marginBottom: 20}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
                          <div style={{padding: 10, border: '2px solid #38bdf8', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', background: 'rgba( 56, 189, 248, 0.05 )', textAlign: 'center'}}>
                            Standard
                          </div>
                          <div style={{padding: 10, border: '1px solid #e2e8f0', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#94a3b8', textAlign: 'center'}}>
                            Premium
                          </div>
                        </div>
                      </div>
                      {/* Add to Cart */}
                      <button id="previewBuyBtn" style={{background: '#38bdf8', color: 'white', border: 'none', padding: 15, borderRadius: 12, fontWeight: 800, width: '100%', fontSize: 15, cursor: 'pointer', transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, textTransform: 'uppercase'}}>
                        <span>ðŸ›’</span> In den Warenkorb
                      </button>
                    </div>
                    {/* Trust Badges Section */}
                    <div id="previewTrustBadges" style={{marginTop: 10, display: 'none', flexWrap: 'wrap', gap: 20, borderTop: '1px solid #f1f5f9', paddingTop: 20}}>
                      <div style={{fontSize: 13, color: '#475569', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600}}>
                        <div style={{width: 32, height: 32, background: '#f0fdf4', color: '#22c55e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          âœ“
                        </div>
                        Sicherer Checkout
                      </div>
                      <div style={{fontSize: 13, color: '#475569', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600}}>
                        <div style={{width: 32, height: 32, background: '#f0f9ff', color: '#38bdf8', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          ðŸšš
                        </div>
                        2-3 Tage Versand
                      </div>
                    </div>
                    {/* Garantie Section */}
                    <div id="previewGuarantee" style={{marginTop: 25, display: 'none', padding: 25, background: 'linear-gradient( 135deg, #ffffff 0%, #f0fdf4 100% )', border: '2px dashed #22c55e', borderRadius: 20, color: '#166534', fontSize: 15, transition: 'all 0.4s ease', position: 'relative'}}>
                      <div style={{position: 'absolute', top: '-15px', left: 20, background: '#22c55e', color: 'white', padding: '5px 15px', borderRadius: 10, fontWeight: 900, fontSize: 11, textTransform: 'uppercase'}}>
                        Zufriedenheits-Garantie
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                        <span style={{fontSize: 24}}>ðŸ›¡ï¸</span>
                        <strong>Risikofrei testen</strong>
                      </div>
                      Teste das Produkt völlig risikofrei.
                      Nicht zufrieden? Geld zurück!
                    </div>
                  </div>
                </main>
                {/* Newsletter */}
                <section id="previewNewsletter" style={{padding: '30px 20px', background: '#0f172a', textAlign: 'center', display: 'none', color: 'white'}}>
                  <div style={{maxWidth: 420, margin: '0 auto'}}>
                    <h3 id="newsletterTitle" style={{marginBottom: 5, fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px'}}>
                      Newsletter
                    </h3>
                    <p style={{color: '#94a3b8', marginBottom: 20, fontSize: 12}}>
                      Exklusive Angebote direkt ins Postfach.
                    </p>
                    <div id="newsletterInputGroup" style={{display: 'flex', background: 'rgba( 255, 255, 255, 0.05 )', border: '1px solid rgba(255, 255, 255, 0.2) !important', borderRadius: 0, overflow: 'hidden', padding: 0, height: 40, alignItems: 'stretch'}}>
                      <input type="text" placeholder="E-Mail Adresse" style={{flex: 1, background: 'transparent', border: 'none !important', padding: '0 15px', color: 'white', fontSize: 13, outline: 'none !important', margin: 0, height: '100%', boxSizing: 'border-box', borderRadius: '0 !important'}} />
                      <button id="newsletterBtn" style={{background: '#38bdf8', color: 'white', border: 'none !important', padding: '0 20px', fontWeight: 800, cursor: 'pointer', transition: '0.3s', fontSize: 12, whiteSpace: 'nowrap', height: '100%', margin: 0, boxSizing: 'border-box', display: 'flex', alignItems: 'center', borderRadius: '0 !important'}}>
                        Abonnieren
                      </button>
                    </div>
                  </div>
                </section>
                {/* Footer */}
                <footer id="previewFooter" style={{padding: '30px 20px', background: '#f8fafc', textAlign: 'center', fontSize: 12, color: '#64748b', borderTop: '1px solid #f1f5f9'}}>
                  <div style={{display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 15, fontWeight: 600}}>
                    <span style={{cursor: 'pointer'}} onClick={globalEvent("showLegal('versand')")}>Versand</span>
                    <span style={{cursor: 'pointer'}} onClick={globalEvent("showLegal('datenschutz')")}>Datenschutz</span>
                    <span style={{cursor: 'pointer'}} onClick={globalEvent("showLegal('impressum')")}>Impressum</span>
                  </div>
                  <div id="previewCopyright">
                    © 2026 Dein Store
                  </div>
                </footer>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="modalOverlay" className="modal-overlay">
        <div className="modal">
          <div className="modal-content-scroll">
            <h3 id="modalTitle">Tipp</h3>
            <p id="modalText" />
            <button className="modal-btn" id="modalActionBtn" onClick={globalEvent("closeModal()")}>
              Verstanden
            </button>
          </div>
        </div>
      </div>
      {/* Neues Popup für Namenseingabe beim Überspringen */}
      <div id="skipNameModal" className="modal-overlay" style={{zIndex: 15000}}>
        <div className="modal">
          <div className="modal-content-scroll">
            <h3>Willkommen!</h3>
            <p>
              Bevor du startest, verrate uns bitte den Namen für
              deinen Shop:
            </p>
            <input type="text" id="skipPlayerNameInput" placeholder="Shop Name..." style={{marginBottom: 20, border: '1px solid #38bdf8', padding: 12, borderRadius: 10, width: '100%', background: 'rgba(255, 255, 255, 0.05)', color: 'white'}} />
            <button className="modal-btn" onClick={globalEvent("submitSkipName()")}>
              Mission starten
            </button>
          </div>
        </div>
      </div>
      {/* JavaScript Dateien */}
    </div>
  );
}
