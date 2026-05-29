import { useEffect } from "react";
import { AcademyPage } from "../components/AcademyPage.jsx";
import { AcademyStartScreen } from "../components/AcademyStartScreen.jsx";
import { BueroOverlays } from "../components/BueroOverlays.jsx";
import { useMaintenanceCheck } from "../hooks/useMaintenanceCheck.js";
import { usePreventZoom } from "../hooks/usePreventZoom.js";
import { installBueroPageChrome } from "../logic/buero/pageChrome.js";
import { bueroScripts } from "../logic/buero/scriptBundle.js";
import { BueroGame } from "../markup/BueroGame.jsx";

export function BueroPage() {
  usePreventZoom();
  useMaintenanceCheck("Büromanagement");

  useEffect(() => installBueroPageChrome(), []);

  return (
    <AcademyPage
      variant="buero"
      basePath=".."
      scripts={bueroScripts}
      overlays={<BueroOverlays />}
      startScreen={<AcademyStartScreen title="Bereit für deine Karriere?" />}
    >
      <BueroGame />
    </AcademyPage>
  );
}
