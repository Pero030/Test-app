let cleanupPageChrome = null;

function enforceDesktopViewport() {
  if (window.innerWidth < 1024) {
    document.body.innerHTML = "<h1>Bitte mit PC öffnen</h1>";
  }
}

function updateMissionIntro() {
  const missionDescription = document.getElementById("mission1Desc");

  if (!missionDescription) {
    return;
  }

  const name = localStorage.getItem("buromanagementPlayerName") || "";
  const greeting = name
    ? `<strong style="color:#38bdf8;">${name}</strong>, `
    : "";

  missionDescription.innerHTML = `${greeting}prüfe die eingehende Bestellung und nimm sie an, wenn alle Angaben korrekt sind.<br>
                           Suche in den Datenbanken nach den richtigen Informationen.
                           <span style="color:#fbbf24;font-weight:600;"> Suchst du etwas Falsches raus, erscheint eine neue Bestellung.</span>`;
}

export function installBueroPageChrome() {
  cleanupPageChrome?.();

  const handleResize = () => enforceDesktopViewport();

  enforceDesktopViewport();
  window.setTimeout(updateMissionIntro, 0);
  window.addEventListener("resize", handleResize);

  cleanupPageChrome = () => {
    window.removeEventListener("resize", handleResize);
    cleanupPageChrome = null;
  };

  return cleanupPageChrome;
}
