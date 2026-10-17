const pages = [
  { title: "Hakkımızda", file: "Hakkımızda.md", sourceTitle: "Hakkımızda", url: "hakkimizda.html" },
  { title: "Toplu Satış", file: "Toplu Satış.md", sourceTitle: "Toplu Satış", url: "toplu-satis.html" },
  { title: "İade & Değişim Politikası", file: "İade & Değişim Politikası", sourceTitle: "İade & Değişim Politikası", url: "iade-degisim-politikasi.html" },
  { title: "Ön Bilgilendirme Formu", file: "Ön Bilgilendirme Formu", sourceTitle: "Ön Bilgilendirme Formu", url: "on-bilgilendirme-formu.html" },
  { title: "Şartlar ve Koşullar", file: "Şartlar ve koşullar", sourceTitle: "Şartlar ve koşullar", url: "sartlar-ve-kosullar.html" },
  { title: "Gizlilik Politikası", file: "Gizlilik Politikası", sourceTitle: "Gizlilik Politikası", url: "gizlilik-politikasi.html" },
  { title: "KVKK Aydınlatma Metni", file: "KVKK Aydinlatma Metni", sourceTitle: "KVKK Aydinlatma Metni", url: "kvkk-aydinlatma-metni.html" },
  { title: "Çerez Politikası", file: "Çerez Politikası (Cookie Policy).md", sourceTitle: "Çerez Politikası (Cookie Policy)", url: "cerez-politikasi.html" },
];

const content = document.getElementById("page-content");
const currentPage = pages.find(page => page.file === content.dataset.source);

function appendTextWithEmailLinks(parent, text) {
  const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
  let offset = 0;

  for (const match of text.matchAll(emailPattern)) {
    parent.append(document.createTextNode(text.slice(offset, match.index)));
    const link = document.createElement("a");
    link.className = "email-link";
    link.href = `mailto:${match[0]}`;
    link.textContent = match[0];
    parent.append(link);
    offset = match.index + match[0].length;
  }
  parent.append(document.createTextNode(text.slice(offset)));
}

function isListBlock(lines) {
  return lines.length > 1 && lines.every(line =>
    line.length <= 100 && !/[.!?]$/.test(line)
  );
}

function renderOrdinaryLines(lines, state) {
  const isListItem = line => line.length <= 100 && !/[.!?:;]$/.test(line);
  const paragraph = [];
  const list = [];
  const flushParagraph = () => {
    if (paragraph.length) renderBlock(paragraph.splice(0), state);
  };
  const flushList = () => {
    if (list.length > 1) {
      renderBlock(list.splice(0), state);
    } else if (list.length) {
      paragraph.push(list.shift());
    }
  };

  for (const line of lines) {
    if (isListItem(line)) {
      flushParagraph();
      list.push(line);
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushList();
  flushParagraph();
}

function renderBlock(lines, state) {
  const text = lines.join(" ").trim();
  if (!text) return;

  if (text.startsWith("❓") ||
      (text.endsWith("?") && !/^(\d+)\.\s+/.test(text) && text !== "Neden BellaLily Kid Shoes?")) {
    const questionText = text.replace(/^❓\s*/, "");
    const item = document.createElement("section");
    item.className = "faq-item";
    const title = document.createElement("h3");
    title.textContent = questionText;
    item.append(title);
    content.append(item);
    state.lastFaq = item;
    state.isFirstContent = false;
    return;
  }

  if (/^Son Güncelleme(?: Tarihi)?:/.test(text)) {
    const updated = document.createElement("p");
    updated.className = "updated";
    appendTextWithEmailLinks(updated, text);
    content.before(updated);
    return;
  }

  const heading = text.match(/^(\d+)\.\s+(.+)$/);
  if (heading) {
    const element = document.createElement("h2");
    element.textContent = `${heading[1]}. ${heading[2]}`;
    content.append(element);
    state.hasHeading = true;
    state.isFirstContent = false;
    return;
  }

  if ([
    "Çocuk Ayakkabılarında Sağlık, Konfor ve Güven",
    "Misyonumuz ve Vizyonumuz",
    "Neden BellaLily Kid Shoes?",
    "Toplu Satış Hakkında Sıkça Sorulan Sorular",
    "Sıkça Sorulan Sorular",
  ].includes(text)) {
    const title = document.createElement("h2");
    title.textContent = text;
    content.append(title);
    state.isFirstContent = false;
    state.lastFaq = null;
    return;
  }

  if (/^[🎯🌍👟🎨🚚🦶🔹]/u.test(text)) {
    const title = document.createElement("h3");
    title.textContent = text.replace(/^[🎯🌍👟🎨🚚🦶🔹]\s*/u, "");
    content.append(title);
    state.isFirstContent = false;
    state.lastFaq = null;
    return;
  }

  if (text.startsWith("➡️")) {
    const answer = document.createElement("p");
    appendTextWithEmailLinks(answer, text.replace(/^➡️\s*/, ""));
    (state.lastFaq || content).append(answer);
    state.isFirstContent = false;
    return;
  }

  if (text.startsWith("🔹")) {
    const title = document.createElement("h3");
    title.textContent = text.replace(/^🔹\s*/, "");
    content.append(title);
    state.isFirstContent = false;
    return;
  }

  if (isListBlock(lines)) {
    const list = document.createElement("ul");
    for (const line of lines) {
      const item = document.createElement("li");
      appendTextWithEmailLinks(item, line.replace(/^[➡️🔹]\s*/, ""));
      list.append(item);
    }
    content.append(list);
    state.isFirstContent = false;
    return;
  }

  const paragraph = document.createElement("p");
  if (state.isFirstContent) paragraph.className = "lead";
  appendTextWithEmailLinks(paragraph, text);
  content.append(paragraph);
  state.isFirstContent = false;
  state.lastFaq = null;
}

function renderLines(lines, state) {
  const structuralLine = line => {
    const text = line.trim();
    return /^(\d+)\.\s+/.test(text) ||
      /^Son Güncelleme(?: Tarihi)?:/.test(text) ||
      text.startsWith("❓") ||
      text.startsWith("➡️") ||
      /^[🎯🌍👟🎨🚚🦶🔹]/u.test(text) ||
      [
        "Çocuk Ayakkabılarında Sağlık, Konfor ve Güven",
        "Misyonumuz ve Vizyonumuz",
        "Neden BellaLily Kid Shoes?",
        "Toplu Satış Hakkında Sıkça Sorulan Sorular",
        "Sıkça Sorulan Sorular",
      ].includes(text) ||
      (lines.length > 1 && text.endsWith("?"));
  };
  const ordinary = [];
  const flushOrdinary = () => {
    if (ordinary.length) renderOrdinaryLines(ordinary.splice(0), state);
  };

  for (const line of lines) {
    if (structuralLine(line)) {
      flushOrdinary();
      renderBlock([line], state);
    } else {
      ordinary.push(line);
    }
  }
  flushOrdinary();
}

function renderDocument(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  while (lines.length && !lines[0].trim()) lines.shift();

  if (lines[0]?.trim() === currentPage.sourceTitle) {
    lines.shift();
  }

  const state = { isFirstContent: true, lastFaq: null };
  let block = [];
  for (const line of lines) {
    if (!line.trim()) {
      renderLines(block, state);
      block = [];
    } else {
      block.push(line.trim());
    }
  }
  renderLines(block, state);
}

function renderNavigation() {
  const list = document.getElementById("page-links");
  for (const page of pages) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = page.url;
    link.textContent = page.title;
    if (page === currentPage) link.setAttribute("aria-current", "page");
    item.append(link);
    list.append(item);
  }
}

async function loadPage() {
  if (!currentPage) {
    content.classList.add("load-error");
    content.textContent = "Bu bilgilendirme sayfası bulunamadı.";
    return;
  }

  document.title = `${currentPage.title} | BellaLily Kid Shoes`;
  document.getElementById("page-title").textContent = currentPage.title;
  renderNavigation();

  try {
    content.replaceChildren();
    const response = await fetch(encodeURIComponent(currentPage.file));
    if (!response.ok) throw new Error(`Sayfa içeriği HTTP ${response.status} yanıtı verdi.`);
    renderDocument(await response.text());
  } catch (error) {
    console.error("Bilgilendirme sayfası yüklenemedi:", error);
    content.classList.add("load-error");
    content.textContent = "Sayfa içeriği yüklenemedi. Lütfen daha sonra tekrar deneyin.";
  }
}

loadPage();
