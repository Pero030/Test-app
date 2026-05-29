import {
  collection,
  db,
  doc,
  getDoc,
  getDocs,
  query,
} from "./firebase.js";

const infoReadStorageKey = "aloAcademyReadInfos";

async function getInfos() {
  const snapshot = await getDocs(query(collection(db, "infos")));
  const infos = [];
  snapshot.forEach((docItem) => {
    infos.push({
      firebaseId: docItem.id,
      ...docItem.data(),
    });
  });
  return infos.reverse();
}

function getInfoId(info) {
  if (info?.id) return String(info.id);
  return `legacy:${[info?.date, info?.title, info?.text].join("|")}`;
}

function readJsonStorage(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function getReadInfoIds() {
  return readJsonStorage(infoReadStorageKey);
}

function setReadInfoIds(ids) {
  localStorage.setItem(infoReadStorageKey, JSON.stringify(ids));
}

function getHiddenInfoIds() {
  return readJsonStorage("aloAcademyHiddenInfos");
}

function setHiddenInfoIds(ids) {
  localStorage.setItem("aloAcademyHiddenInfos", JSON.stringify(ids));
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatInfoText(text) {
  return escapeHtml(text).replace(
    /((https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s<]*)/g,
    (url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; font-weight:700; text-decoration:underline;">${url}</a>`,
  );
}

export function closeInfoBell() {
  document.getElementById("infoBellOverlay")?.remove();
  document.body.classList.remove("modal-open");
}

export async function updateInfoBadge() {
  const infos = await getInfos();
  const readIds = getReadInfoIds();
  const hiddenIds = getHiddenInfoIds();
  const count = infos.filter((info) => {
    const id = getInfoId(info);
    return !readIds.includes(id) && !hiddenIds.includes(id);
  }).length;

  document.querySelectorAll("[data-info-count]").forEach((badge) => {
    if (count > 0) {
      badge.textContent = String(count);
      badge.style.display = "inline-block";
    } else {
      badge.textContent = "";
      badge.style.display = "none";
    }
  });
}

export function markInfoRead(encodedId, button) {
  const id = decodeURIComponent(encodedId);
  const readIds = getReadInfoIds();
  if (!readIds.includes(id)) {
    readIds.push(id);
    setReadInfoIds(readIds);
  }
  updateInfoBadge();

  const card = button?.closest(".info-card");
  if (card) card.dataset.read = "true";
  if (button) {
    button.outerHTML =
      '<span style="background: rgba(34,197,94,0.16); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800;">Gelesen</span>';
  }
}

export function deleteSingleInfo(encodedId, button) {
  const id = decodeURIComponent(encodedId);
  const hiddenIds = getHiddenInfoIds();
  if (!hiddenIds.includes(id)) {
    hiddenIds.push(id);
    setHiddenInfoIds(hiddenIds);
  }

  updateInfoBadge();
  button?.closest(".info-card")?.remove();
}

export async function markAllInfosRead() {
  const infos = await getInfos();
  const ids = infos.map(getInfoId);
  setReadInfoIds(Array.from(new Set([...getReadInfoIds(), ...ids])));
  await updateInfoBadge();
  closeInfoBell();
  await openInfoBell();
}

export async function openInfoBell() {
  closeInfoBell();
  const infos = await getInfos();
  const readIds = getReadInfoIds();
  const hiddenIds = getHiddenInfoIds();
  const visibleInfos = infos.filter((info) => !hiddenIds.includes(getInfoId(info)));
  const unreadCount = visibleInfos.filter((info) => !readIds.includes(getInfoId(info))).length;

  const infoItems = visibleInfos.length
    ? visibleInfos
        .map((info) => {
          const id = getInfoId(info);
          const isRead = readIds.includes(id);
          const encodedId = encodeURIComponent(id);
          const readControl = isRead
            ? `<span style="background: rgba(34,197,94,0.16); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800;">Gelesen</span>`
            : `<button onclick="markInfoRead('${encodedId}', this)" style="background:#22c55e; color:white; border:none; padding:8px 13px; border-radius:999px; font-size:13px; font-weight:800; cursor:pointer;">Gelesen</button>`;

          return `<div class="info-card" data-read="${isRead}" style="text-align:left; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); border-radius:18px; padding:22px; margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:18px; margin-bottom:10px;">
              <h4 style="color:#38bdf8; font-size:22px; margin:0;">${escapeHtml(info.title)}</h4>
              <div style="display:flex; gap:10px; align-items:center;">
                ${readControl}
                <button onclick="deleteSingleInfo('${encodedId}', this)" style="background:#ef4444; color:white; border:none; padding:8px 13px; border-radius:999px; font-size:13px; font-weight:800; cursor:pointer;">Löschen</button>
              </div>
            </div>
            <p style="color:rgba(255,255,255,0.86); font-size:17px; line-height:1.7; margin:0; white-space:pre-wrap;">${formatInfoText(info.text)}</p>
            ${
              info.date
                ? `<p style="color:rgba(255,255,255,0.45); font-size:12px; margin:14px 0 0 0;">${escapeHtml(info.date)}</p>`
                : ""
            }
          </div>`;
        })
        .join("")
    : '<p style="color: rgba(255,255,255,0.75); font-size: 20px;">Aktuell gibt es keine Infos.</p>';

  const overlay = document.createElement("div");
  overlay.id = "infoBellOverlay";
  overlay.className = "modal-overlay";
  overlay.style.display = "flex";
  overlay.style.zIndex = "100000";
  overlay.onclick = (event) => {
    if (event.target === overlay) closeInfoBell();
  };
  overlay.innerHTML = `<div class="modal" style="max-width:760px;">
    <div class="modal-content-scroll" style="padding:50px;">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:20px; margin-bottom:18px;">
        <h3 style="margin-bottom:0;">Infos</h3>
        <span style="color:rgba(255,255,255,0.65); font-size:14px; font-weight:800;">${unreadCount} ungelesen</span>
      </div>
      <div style="max-height:52vh; overflow-y:auto; padding-right:6px;">${infoItems}</div>
      <div style="text-align:center;">
        ${
          unreadCount > 0
            ? '<button class="modal-btn" onclick="markAllInfosRead()" style="margin-top:22px; margin-right:12px; background:#22c55e; color:white;">Alle gelesen</button>'
            : ""
        }
        <button class="modal-btn" onclick="closeInfoBell()" style="margin-top:22px;">Schließen</button>
      </div>
    </div>
  </div>`;

  document.body.appendChild(overlay);
  document.body.classList.add("modal-open");
}

export function closeSettingsPinModal() {
  document.getElementById("settingsPinModal")?.remove();
  document.body.classList.remove("modal-open");
}

export async function submitSettingsPin() {
  const input = document.getElementById("settingsHeaderPinInput");
  const pin = input?.value.trim() || "";
  const snapshot = await getDoc(doc(db, "settings", "security"));
  const settingsPin = snapshot.data()?.settingsPin;

  if (pin === settingsPin) {
    sessionStorage.setItem("aloAcademySettingsUnlocked", "true");
    const modal = document.getElementById("settingsPinModal");
    const basePath = modal?.dataset.basePath || ".";
    window.location.href = `${basePath}/settings.html`;
    return;
  }

  alert("Falscher PIN");
  input?.focus();
}

export function openSettingsPin(basePath = ".") {
  closeSettingsPinModal();
  const modal = document.createElement("div");
  modal.id = "settingsPinModal";
  modal.className = "modal-overlay";
  modal.dataset.basePath = basePath;
  modal.style.display = "flex";
  modal.style.zIndex = "100000";
  modal.innerHTML = `<div class="modal" style="max-width:500px; width:90%; max-height:85vh; text-align:center;">
    <div class="modal-content-scroll" style="padding:50px">
      <h3 style="font-size:28px; color:#a855f7; margin-bottom:25px;">⚙️ Einstellungen</h3>
      <p style="color:#ffffff; line-height:1.8; font-size:18px; margin-bottom:25px;">Bitte gib die PIN ein, um die Einstellungen zu öffnen:</p>
      <input type="password" id="settingsHeaderPinInput" placeholder="PIN eingeben" style="width:100%; padding:15px; border-radius:12px; border:2px solid #a855f7; background:rgba(168,85,247,0.1); color:#ffffff; font-size:18px; text-align:center; margin-bottom:25px; outline:none;" />
      <div style="display:flex; gap:20px; justify-content:center;">
        <button class="modal-btn" onclick="submitSettingsPin()" style="background:#a855f7; color:white">Bestätigen</button>
        <button class="modal-btn" onclick="closeSettingsPinModal()" style="background:#ef4444; color:white">Abbrechen</button>
      </div>
    </div>
  </div>`;
  modal.onclick = (event) => {
    if (event.target === modal) closeSettingsPinModal();
  };
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  const input = document.getElementById("settingsHeaderPinInput");
  input?.focus();
  input?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitSettingsPin();
    if (event.key === "Escape") closeSettingsPinModal();
  });
}

export function applyTheme(theme) {
  document.body.classList.remove("theme-default", "theme-dark", "theme-light");
  document.body.classList.add(`theme-${theme}`);

  let styleElement = document.getElementById("theme-styles");
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "theme-styles";
    document.head.appendChild(styleElement);
  }

  if (theme === "dark") {
    styleElement.textContent = `
      body.theme-dark { background:#000000 !important; background-image:none !important; color:#ffffff !important; }
      body.theme-dark * { animation:none !important; transition:none !important; }
    `;
  } else if (theme === "light") {
    styleElement.textContent = `
      body.theme-light { background:#ffffff !important; background-image:none !important; color:#1e293b !important; }
      body.theme-light * { animation:none !important; transition:none !important; }
    `;
  } else {
    styleElement.textContent = "";
  }
}

export function toggleTheme() {
  const currentTheme = localStorage.getItem("aloAcademyTheme") || "default";
  const newTheme = currentTheme === "default" ? "dark" : currentTheme === "dark" ? "light" : "default";
  localStorage.setItem("aloAcademyTheme", newTheme);
  applyTheme(newTheme);
}

export function installChromeServices() {
  window.openInfoBell = openInfoBell;
  window.closeInfoBell = closeInfoBell;
  window.markInfoRead = markInfoRead;
  window.markAllInfosRead = markAllInfosRead;
  window.deleteSingleInfo = deleteSingleInfo;
  window.openSettingsPin = openSettingsPin;
  window.submitSettingsPin = submitSettingsPin;
  window.closeSettingsPinModal = closeSettingsPinModal;
  window.updateInfoBadge = updateInfoBadge;
  window.toggleTheme = toggleTheme;

  applyTheme(localStorage.getItem("aloAcademyTheme") || "default");
  updateInfoBadge().catch(console.error);
}
