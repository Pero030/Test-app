const sections = {
  datenschutz: {
    title: "Datenschutzerklärung",
    blocks: [
      {
        heading: "1. Lokale Datenspeicherung",
        accent: "#38bdf8",
        text: "Spielstände und Eingaben werden lokal im Browser gespeichert. Es werden keine persönlichen Spieldaten an einen eigenen Server übertragen.",
      },
      {
        heading: "2. Firebase-Inhalte",
        accent: "#a855f7",
        text: "Infos, Wartungsmeldungen und Einstellungen werden über Firebase geladen, damit die Academy zentral verwaltet werden kann.",
      },
      { text: "Stand: 2026", italic: true },
    ],
  },
  impressum: {
    title: "Impressum",
    blocks: [
      {
        heading: "Annedore-Leber-Oberschule",
        lines: ["Paster-Behrens-Strasse 88", "12359 Berlin"],
      },
      {
        heading: "Kontakt:",
        lines: ["E-Mail: sekr.br@aloberlin.de"],
      },
      {
        heading: "Vertreten durch:",
        lines: ["Schulleiter: Herr Thomas Schofer"],
      },
    ],
  },
  nutzung: {
    title: "Nutzungsbedingungen",
    blocks: [
      {
        text: "Die ALO Academy dient ausschließlich Bildungs- und Unterhaltungszwecken. Alle Aufgaben, Shops, Bestellungen und Zertifikate sind spielintern und nicht offiziell anerkannt.",
      },
      {
        text: "Lokale Spielstände können jederzeit durch Löschen der Browserdaten entfernt werden.",
      },
    ],
  },
};

export function LegalContent({ type }) {
  const content = sections[type] || sections.datenschutz;

  return (
    <div style={{ color: "#ffffff", lineHeight: 1.8 }}>
      <h3>{content.title}</h3>
      {content.blocks.map((block, index) => (
        <p key={`${content.title}-${index}`}>
          {block.heading && (
            <>
              <strong style={{ color: block.accent || "inherit" }}>
                {block.heading}
              </strong>
              <br />
            </>
          )}
          {block.lines
            ? block.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))
            : block.italic
              ? <i>{block.text}</i>
              : block.text}
        </p>
      ))}
    </div>
  );
}
