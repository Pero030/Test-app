import { useEffect } from "react";
import ecommerceAppScript from "../logic/ecommerce/app.js?raw";
import ecommerceDataScript from "../logic/ecommerce/data.js?raw";
import ecommerceGameScript from "../logic/ecommerce/game.js?raw";
import ecommerceUiScript from "../logic/ecommerce/ui.js?raw";
import bueroDataScript from "../logic/buero/data.js?raw";
import bueroGameScript from "../logic/buero/game.js?raw";
import bueroUiScript from "../logic/buero/ui.js?raw";
import * as firebaseApi from "./firebase.js";

const loadedExternalScripts = new Set();
const bundledScripts = {
  "/src/logic/ecommerce/app.js": ecommerceAppScript,
  "/src/logic/ecommerce/data.js": ecommerceDataScript,
  "/src/logic/ecommerce/game.js": ecommerceGameScript,
  "/src/logic/ecommerce/ui.js": ecommerceUiScript,
  "/src/logic/buero/data.js": bueroDataScript,
  "/src/logic/buero/game.js": bueroGameScript,
  "/src/logic/buero/ui.js": bueroUiScript,
};

function resolveScriptSrc(src) {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return new URL(src, window.location.href).href;
}

function loadExternalScript(src, type) {
  const resolved = resolveScriptSrc(src);
  if (loadedExternalScripts.has(resolved)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = resolved;
    if (type) script.type = type;
    script.dataset.gameScript = "true";
    script.onload = () => {
      loadedExternalScripts.add(resolved);
      resolve();
    };
    script.onerror = () =>
      reject(new Error("Spiel-Script konnte nicht geladen werden: " + resolved));
    document.body.appendChild(script);
  });
}

function runInlineScript(code, type) {
  if (!code.trim()) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    if (type) script.type = type;
    script.dataset.gameScript = "true";
    script.textContent = code;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
    window.setTimeout(resolve, 0);
  });
}

export function useGameScripts(scriptBundle) {
  useEffect(() => {
    let cancelled = false;
    window.aloFirebase = firebaseApi;

    async function loadScripts() {
      for (const script of scriptBundle.scripts || []) {
        if (cancelled) return;
        if (script.src && bundledScripts[script.src]) {
          await runInlineScript(bundledScripts[script.src], "");
        } else if (script.src) {
          await loadExternalScript(script.src, script.type);
        } else {
          const code = (script.code || "").replace(
            /import\s*\{([\s\S]*?)\}\s*from\s*["']\/src\/services\/firebase\.js["'];?/,
            "const {$1} = window.aloFirebase;",
          );
          await runInlineScript(code, script.type === "module" ? "" : script.type);
        }
      }

      if (!cancelled) {
        document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));
        window.updateInfoBadge?.();
      }
    }

    loadScripts().catch((error) => console.error(error));

    return () => {
      cancelled = true;
    };
  }, [scriptBundle]);
}
