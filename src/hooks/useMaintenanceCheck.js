import { useEffect } from "react";
import { db, doc, getDoc } from "../services/firebase.js";
import { appUrl } from "../utils/routing.js";

export function useMaintenanceCheck(pageName) {
  useEffect(() => {
    let cancelled = false;

    async function checkMaintenance() {
      try {
        const globalSnap = await getDoc(doc(db, "maintenance", "global"));
        if (!cancelled && globalSnap.exists() && globalSnap.data().enabled) {
          sessionStorage.setItem("maintenanceData", JSON.stringify(globalSnap.data()));
          window.location.href = appUrl("Wartung/");
          return;
        }

        if (!pageName) return;

        const pageSnap = await getDoc(doc(db, "maintenance", pageName));
        if (!cancelled && pageSnap.exists() && pageSnap.data().enabled) {
          sessionStorage.setItem("maintenanceData", JSON.stringify(pageSnap.data()));
          window.location.href = appUrl("Wartung/");
        }
      } catch (error) {
        console.error("Maintenance Fehler:", error);
      }
    }

    checkMaintenance();

    return () => {
      cancelled = true;
    };
  }, [pageName]);
}
