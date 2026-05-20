(function () {
  const infoStorageKey = "aloAcademyInfos";
  const settingsPin = "080918";

  function getInfos() {
    try {
      const infos = JSON.parse(localStorage.getItem(infoStorageKey) || "[]");
      return Array.isArray(infos) ? infos : [];
    } catch (error) {
      return [];
    }
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function closeInfoBell() {
    const overlay = document.getElementById("infoBellOverlay");
    if (overlay) overlay.remove();
    document.body.classList.remove("modal-open");
  }

  function openInfoBell() {
    closeInfoBell();

    const infos = getInfos();
    const overlay = document.createElement("div");
    overlay.id = "infoBellOverlay";
    overlay.className = "modal-overlay";
    overlay.style.display = "flex";
    overlay.style.zIndex = "100000";
    overlay.onclick = function (event) {
      if (event.target === overlay) closeInfoBell();
    };

    const infoItems = infos.length
      ? infos
          .map(function (info) {
            return '<div style="text-align: left; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 18px; padding: 22px; margin-bottom: 16px;">' +
              '<h4 style="color: #38bdf8; font-size: 22px; margin: 0 0 10px 0;">' + escapeHtml(info.title) + '</h4>' +
              '<p style="color: rgba(255,255,255,0.86); font-size: 17px; line-height: 1.7; margin: 0; white-space: pre-wrap;">' + escapeHtml(info.text) + '</p>' +
              (info.date ? '<p style="color: rgba(255,255,255,0.45); font-size: 12px; margin: 14px 0 0 0;">' + escapeHtml(info.date) + '</p>' : '') +
            '</div>';
          })
          .join("")
      : '<p style="color: rgba(255,255,255,0.75); font-size: 20px;">Aktuell gibt es keine Infos.</p>';

    overlay.innerHTML =
      '<div class="modal" style="max-width: 760px;">' +
        '<div class="modal-content-scroll" style="padding: 50px;">' +
          '<h3>Infos</h3>' +
          '<div style="max-height: 52vh; overflow-y: auto; padding-right: 6px;">' + infoItems + '</div>' +
          '<button class="modal-btn" onclick="closeInfoBell()" style="margin-top: 22px;">Schließen</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.classList.add("modal-open");
  }

  function openSettingsPin(basePath) {
    const pin = window.prompt("PIN für Einstellungen eingeben:");
    if (pin === null) return;

    if (pin === settingsPin) {
      sessionStorage.setItem("aloAcademySettingsUnlocked", "true");
      window.location.href = (basePath || ".") + "/settings.html";
      return;
    }

    alert("Falscher PIN.");
  }

  function updateInfoBadge() {
    const count = getInfos().length;
    document.querySelectorAll("[data-info-count]").forEach(function (badge) {
      if (count > 0) {
        badge.textContent = String(count);
        badge.style.display = "inline-block";
      } else {
        badge.textContent = "";
        badge.style.display = "none";
      }
    });
  }

  async function loadComponent(mount) {
    const name = mount.dataset.component;
    const variant = mount.dataset.variant || "default";
    const base = mount.dataset.componentBase || ".";
    const url = base + "/components/" + name + ".html";

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.status + " " + response.statusText);

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const template = doc.querySelector(
        'template[data-component-template="' + name + '"][data-variant="' + variant + '"]',
      );

      if (!template) throw new Error("Template " + name + "/" + variant + " nicht gefunden");
      mount.outerHTML = template.innerHTML;
      updateInfoBadge();
    } catch (error) {
      console.error("Komponente konnte nicht geladen werden: " + name + "/" + variant, error);
    }
  }

  function loadComponents() {
    document.querySelectorAll("[data-component]").forEach(loadComponent);
    updateInfoBadge();
  }

  window.openInfoBell = openInfoBell;
  window.closeInfoBell = closeInfoBell;
  window.openSettingsPin = openSettingsPin;
  window.updateInfoBadge = updateInfoBadge;
  window.aloAcademyInfoStorageKey = infoStorageKey;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadComponents);
  } else {
    loadComponents();
  }
})();
