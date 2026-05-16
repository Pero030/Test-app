// --- UI & Navigations-Logik ---

function showElement(id) {
  const el = document.getElementById(id);
  if (el) {
    if (id === 'startScreen') {
      el.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Scrollen verhindern
    } else {
      el.style.display = 'block';
    }
  }
}

function hideElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'none';
    if (id === 'startScreen') {
      document.body.style.overflow = 'auto'; // Scrollen wieder erlauben
    }
  }
}

function showModal(title, text, btnText = 'Verstanden') {
  const modal = document.getElementById('modalOverlay');
  const mTitle = document.getElementById('modalTitle');
  const mText = document.getElementById('modalText');
  const mBtn = document.getElementById('modalActionBtn');

  if (modal && mTitle && mText) {
    mTitle.innerText = title;
    // .innerHTML statt .innerText verwenden, damit <br> oder \n als Umbruch interpretiert werden
    mText.innerHTML = text.replace(/\n/g, '<br>');
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');

    // Button-Verhalten anpassen
    if (mBtn) {
      mBtn.innerText = btnText;
      if (title === 'Shop veröffentlicht!') {
        // Konfetti-Effekt auslösen
        triggerConfetti();
        
        mBtn.onclick = async function() {
          mBtn.innerText = 'Speichere...';
          mBtn.disabled = true;
          
          try {
            await exportShopAsPNG();
            // Erfolg oder Fallback -> Schließen und Neustarten nur nach Klick
            mBtn.innerText = 'Fertig!';
            mBtn.disabled = false;
            mBtn.style.background = '#22c55e';
            mBtn.onclick = function() {
              closeModal();
              restartGame();
            };
          } catch (err) {
            // Fehler -> Trotzdem neustarten nach Bestätigung
            if(confirm('Konnte Bild nicht speichern. Trotzdem beenden?')) {
              closeModal();
              restartGame();
            } else {
              mBtn.innerText = btnText;
              mBtn.disabled = false;
            }
          }
        };
      } else {
        mBtn.onclick = closeModal;
      }
    }
  }
}

function triggerConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 20000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Erhöhter zIndex auf 1000000, um ÜBER dem Modal zu sein
    confetti(Object.assign({}, defaults, { zIndex: 1000000, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { zIndex: 1000000, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

function exportShopAsPNG() {
  const preview = document.getElementById('shopLivePreview');
  if (!preview) {
    console.error('Vorschau-Element nicht gefunden');
    return Promise.reject();
  }

  // Zertifikat mit Shop-Vorschau erstellen
  return generateCertificate();
}

function generateCertificate() {
  const certificateElement = document.getElementById("certificateElement");
  const preview = document.getElementById('shopLivePreview');
  
  if (!certificateElement) {
    console.error("Zertifikat-Element nicht gefunden");
    return Promise.reject();
  }

  if (!preview) {
    console.error("Shop-Vorschau nicht gefunden");
    return Promise.reject();
  }

  // Spielername und Datum aktualisieren
  const playerName = localStorage.getItem("ecommercePlayerName") || "Spieler";
  const nameElement = document.getElementById("certificateName");
  const dateElement = document.getElementById("certificateDate");
  const shopPreviewElement = document.getElementById("certificateShopPreview");
  
  if (nameElement) {
    nameElement.textContent = playerName;
  }
  
  if (dateElement) {
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }

  // Shop-Vorschau in das Zertifikat einfügen
  if (shopPreviewElement) {
    // Klon der Shop-Vorschau erstellen
    const previewClone = preview.cloneNode(true);
    previewClone.style.transform = "scale(0.5)";
    previewClone.style.transformOrigin = "top left";
    previewClone.style.width = "200%";
    previewClone.style.height = "auto";
    shopPreviewElement.innerHTML = "";
    shopPreviewElement.appendChild(previewClone);
  }

  // Element kurz anzeigen für html2canvas
  certificateElement.style.display = "block";
  certificateElement.style.position = "absolute";
  certificateElement.style.top = "0";
  certificateElement.style.left = "0";

  console.log("html2canvas wird aufgerufen");

  // HTML zu PNG konvertieren
  return html2canvas(certificateElement, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    allowTaint: true
  }).then(canvas => {
    console.log("Canvas erstellt, Download wird gestartet");
    // Element wieder verstecken
    certificateElement.style.display = "none";
    certificateElement.style.position = "absolute";
    certificateElement.style.top = "-9999px";
    certificateElement.style.left = "-9999px";

    // Canvas zu Data URL konvertieren und herunterladen
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `Zertifikat_E-Commerce_${playerName.replace(/\s+/g, "_")}.png`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Download gestartet");
  }).catch(error => {
    console.error("Fehler beim Erstellen des Zertifikats:", error);
    certificateElement.style.display = "none";
    certificateElement.style.position = "absolute";
    certificateElement.style.top = "-9999px";
    certificateElement.style.left = "-9999px";
  });
}

function showInfo(type) {
  const infoData = {
    productName: {
      title: "SEO Produktname",
      text: "Ein guter SEO-Name ist wie ein Schild an einem Geschäft: Er muss sofort sagen, was drin ist. Das Haupt-Keyword ist das wichtigste Wort – also genau das Wort, das Kunden bei Google eintippen würden (zum Beispiel 'Gaming Maus' oder 'Bluetooth Kopfhörer'). Dieses Wort sollte immer ganz am Anfang stehen. Danach schreibst du ein besonderes Merkmal dazu, damit dein Produkt besser klingt als die anderen. Beispiel: Statt nur 'Maus' schreibst du 'Gaming Maus mit 16.000 DPI'. So verstehen Kunden und Google sofort, was dein Produkt besonders macht."
    },
    productDescription: {
      title: "Produktbeschreibung",
      text: "Hier verkaufst du dein Produkt! Nutze emotionale Sprache und nenne klare Vorteile (USPs). Vergiss nicht, wichtige Keywords natürlich einzubauen, um bei Suchmaschinen besser gefunden zu werden."
    },
    metaTitle: {
      title: "Meta Titel",
      text: "Der Meta Titel ist die blaue Überschrift in den Google-Suchergebnissen. Er sollte maximal 60 Zeichen lang sein und das wichtigste Keyword sowie deinen Shop-Namen enthalten."
    },
    altText: {
      title: "Bild Alt-Text",
      text: "Da Google keine Bilder 'sehen' kann, beschreibt der Alt-Text den Bildinhalt. Er ist wichtig für die Barrierefreiheit (Screenreader) und die Google Bildersuche."
    },
    productPrice: {
      title: "Preisgestaltung",
      text: "Achte auf psychologische Preise (z.B. 49,99 € statt 50 €). Der Preis sollte konkurrenzfähig sein, aber auch deine Kosten und Marge decken."
    },
    productVat: {
      title: "Mehrwertsteuer (MwSt.)",
      text: "In Deutschland gibt es verschiedene Steuersätze. Der Regelsatz beträgt 19%. Der ermäßigte Satz von 7% gilt z.B. für Lebensmittel, Bücher und medizinische Produkte. Im E-Commerce musst du den Brutto-Preis (inkl. MwSt.) angeben."
    },
    productSelect: {
      title: "Produktauswahl",
      text: "Überlege dir zuerst, was du verkaufen möchtest. Das ist wichtig, weil jeder Kunde andere Dinge sucht: Ein Gamer braucht andere Informationen als jemand, der eine Kaffeemaschine kauft. Wähle ein Produkt aus der Liste aus. Danach lernst du, wie du genau für dieses Produkt die richtigen Worte findest, damit Kunden es im Internet auch finden (SEO)."
    },
    seoBuilder: {
      title: "SEO-Titel bauen",
      text: "Ein SEO-Titel sollte das wichtigste Keyword am Anfang haben und relevante Begriffe enthalten, nach denen Nutzer suchen. Mit dem Puzzle kombinierst du diese Begriffe zu einer starken Überschrift für Google."
    },
    conversionText: {
      title: "Conversion-Text",
      text: "Dieser Text soll den Kunden zum Kauf bewegen. Nutze Trigger-Wörter wie 'Garantie', 'Kostenloser Versand' oder 'Limitiertes Angebot', um Vertrauen und Dringlichkeit zu schaffen."
    }
  };

  const info = infoData[type];
  if (info) {
    showModal(info.title, info.text);
  }
}

function closeModal() {
  const modal = document.getElementById('modalOverlay');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function goToTask(sectionId) {
  const sections = ['interactiveTutorial', 'introSection', 'task1Section', 'task2Section', 'task3Section', 'shopBuilderSection'];
  const layout = document.getElementById('gameContent'); // Geändert auf ID für Zuverlässigkeit
  
  sections.forEach(id => hideElement(id));
  showElement(sectionId);

  // Stelle sicher, dass das Hauptlayout sichtbar ist, wenn wir eine Task aufrufen
  if (layout) layout.style.display = 'grid'; 

  if (layout) {
    if (sectionId === 'shopBuilderSection') layout.classList.add('full-width');
    else layout.classList.remove('full-width');
  }
  
  // Alle aktiven Klassen entfernen
  document.querySelectorAll('.mission').forEach(el => {
    el.classList.remove('active');
  });

  let menuId = '';
  if (sectionId === 'introSection') menuId = 'menu1';
  else if (sectionId === 'task1Section') {
    menuId = 'menu2';
    if (typeof loadProductMission === 'function') loadProductMission();
  }
  else if (sectionId === 'task2Section') {
    menuId = 'menu3';
    if (typeof renderKeywordsForCurrentProduct === 'function') renderKeywordsForCurrentProduct();
  }
  else if (sectionId === 'task3Section') menuId = 'menu4';
  else if (sectionId === 'shopBuilderSection') {
    menuId = 'menu7';
    if (typeof loadShopBuilderData === 'function') loadShopBuilderData();
  }
  
  // Aktuelles Menü-Item hervorheben
  const activeMenu = document.getElementById(menuId);
  if (activeMenu) {
    activeMenu.classList.add('active');
  }
}

function updateProgressUI() {
  const bar = document.getElementById('progress');
  if (bar) bar.style.width = progress + '%';
}

let confirmMode = 'restart'; // 'restart' or 'home'

function confirmRestart(mode = 'restart') {
  // Wenn wir zur Startseite wollen, prüfen wir zuerst, ob überhaupt ein Spiel läuft
  if (mode === 'home') {
    const hasName = localStorage.getItem('ecommercePlayerName');
    const hasProgress = progress > 0;
    
    // Wenn kein Spiel läuft (kein Name & kein Fortschritt), direkt zur Startseite
    if (!hasName && !hasProgress) {
      window.location.href = '../';
      return;
    }
  }

  confirmMode = mode;
  const modal = document.getElementById('restartConfirmModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function handleRestartConfirm() {
  if (confirmMode === 'home') {
    // Vor dem Verlassen alles zurücksetzen, damit kein alter Spielstand geladen wird
    localStorage.removeItem('ecommerceAcademySave');
    localStorage.removeItem('ecommercePlayerName');
    localStorage.removeItem('ecommerceSkipStartScreen');
    window.location.href = '../';
  } else {
    restartGame();
  }
}

function closeRestartModal() {
  const modal = document.getElementById('restartConfirmModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function restartGame() {
  // Speicherdaten löschen
  localStorage.removeItem('ecommerceAcademySave');
  localStorage.removeItem('ecommercePlayerName');
  
  // Globale Variablen im Code zurücksetzen
  level = 1;
  progress = 0;
  unlockedTasks = { task2: false, task3: false, advanced: false };
  
  // Flag setzen, damit wir nach dem Reload die Tutorial-Abfrage überspringen
  localStorage.setItem('ecommerceSkipStartScreen', 'true');
  
  // Seite neu laden
  location.reload();
}

function backToStart() {
  // User will bewusst wieder den Start-Screen sehen
  localStorage.removeItem('ecommerceForceIntro');
  hideElement('gameContent');
  showElement('startScreen');
}
