import { db, doc, getDoc } from "../../services/firebase.js";
import { statInfoData } from "./statInfoData.js";

let cleanupPageChrome = null;

function getBuilderPinElements() {
  return {
    modal: document.getElementById("builderPinModal"),
    input:
      document.getElementById("builderPinInput") ||
      document.getElementById("settingsPinInput"),
    errorMessage: document.getElementById("pinErrorMessage"),
  };
}

function checkBuilderPin() {
  const { modal, input, errorMessage } = getBuilderPinElements();

  if (!modal || !input || !errorMessage) {
    return;
  }

  input.value = "";
  errorMessage.style.display = "none";
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  input.focus();
}

async function submitBuilderPin() {
  const { input, errorMessage } = getBuilderPinElements();
  const pin = input?.value?.trim();

  if (!input || !errorMessage || !pin) {
    return;
  }

  try {
    const settingsRef = doc(db, "settings", "security");
    const snapshot = await getDoc(settingsRef);
    const settingsPin = snapshot.data()?.settingsPin;

    if (pin === settingsPin) {
      closeBuilderPinModal();
      window.goToTask?.("shopBuilderSection");
      return;
    }
  } catch (error) {
    console.error("Builder-PIN konnte nicht geprüft werden:", error);
  }

  errorMessage.style.display = "block";
  input.value = "";
  input.focus();
}

function closeBuilderPinModal() {
  const { modal } = getBuilderPinElements();

  if (!modal) {
    return;
  }

  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

function showStatInfo(type) {
  const modal = document.getElementById("statInfoModal");
  const title = document.getElementById("statInfoTitle");
  const content = document.getElementById("statInfoContent");
  const info = statInfoData[type];

  if (!modal || !title || !content || !info) {
    return;
  }

  title.textContent = info.title;
  content.textContent = info.content;
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeStatInfoModal() {
  const modal = document.getElementById("statInfoModal");

  if (!modal) {
    return;
  }

  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

export function installEcommercePageChrome() {
  cleanupPageChrome?.();

  window.checkBuilderPin = checkBuilderPin;
  window.submitBuilderPin = submitBuilderPin;
  window.closeBuilderPinModal = closeBuilderPinModal;
  window.showStatInfo = showStatInfo;
  window.closeStatInfoModal = closeStatInfoModal;

  const handleBuilderPinEnter = (event) => {
    if (event.key === "Enter") {
      submitBuilderPin();
    }
  };

  window.setTimeout(() => {
    document
      .getElementById("builderPinInput")
      ?.addEventListener("keydown", handleBuilderPinEnter);
    document
      .getElementById("settingsPinInput")
      ?.addEventListener("keydown", handleBuilderPinEnter);
  }, 0);

  cleanupPageChrome = () => {
    document
      .getElementById("builderPinInput")
      ?.removeEventListener("keydown", handleBuilderPinEnter);
    document
      .getElementById("settingsPinInput")
      ?.removeEventListener("keydown", handleBuilderPinEnter);
    delete window.checkBuilderPin;
    delete window.submitBuilderPin;
    delete window.closeBuilderPinModal;
    delete window.showStatInfo;
    delete window.closeStatInfoModal;
    cleanupPageChrome = null;
  };

  return cleanupPageChrome;
}
