import { useEffect } from "react";
import { AcademyPage } from "../components/AcademyPage.jsx";
import { AcademyStartScreen } from "../components/AcademyStartScreen.jsx";
import { EcommerceOverlays } from "../components/EcommerceOverlays.jsx";
import { useMaintenanceCheck } from "../hooks/useMaintenanceCheck.js";
import { usePreventZoom } from "../hooks/usePreventZoom.js";
import { installEcommercePageChrome } from "../logic/ecommerce/pageChrome.js";
import { ecommerceScripts } from "../logic/ecommerce/scriptBundle.js";
import { EcommerceGame } from "../markup/EcommerceGame.jsx";

export function EcommercePage() {
  usePreventZoom();
  useMaintenanceCheck("Ecommerce");

  useEffect(() => installEcommercePageChrome(), []);

  return (
    <AcademyPage
      variant="ecommerce"
      basePath=".."
      scripts={ecommerceScripts}
      overlays={<EcommerceOverlays />}
      startScreen={<AcademyStartScreen title="Bereit für dein Imperium?" />}
    >
      <EcommerceGame />
    </AcademyPage>
  );
}
