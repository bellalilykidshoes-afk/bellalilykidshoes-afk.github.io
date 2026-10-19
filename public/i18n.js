(function () {
  const supportedLanguages = ["tr", "en", "ru", "ar"];
  const rootUrl = new URL(".", document.currentScript.src);
  const selector = document.createElement("select");
  selector.id = "language-select";
  selector.setAttribute("aria-label", "Dil");
  selector.innerHTML =
    '<option value="tr">Türkçe</option><option value="en">English</option>' +
    '<option value="ru">Русский</option><option value="ar">العربية</option>';

  const picker = document.createElement("div");
  picker.className = "language-picker";
  const label = document.createElement("label");
  label.htmlFor = selector.id;
  label.textContent = "Dil";
  const status = document.createElement("span");
  status.className = "language-status";
  status.setAttribute("role", "status");
  picker.append(label, selector, status);

  const header = document.querySelector(".site-header");
  if (!header) throw new Error("Language selector requires a .site-header element.");
  header.append(picker);

  const turkishUi = {
    languageLabel: "Dil",
    homeAria: "BellaLily Kid Shoes ana sayfa",
    backHome: "← Ana sayfaya dön",
    mainNav: "Ana menü",
    navCollection: "Koleksiyon",
    navAbout: "Hakkımızda",
    navWholesale: "Toplu satış",
    navContact: "İletişim",
    heroEyebrow: "Küçük adımlara büyük özen",
    heroTitle: "Mutlu adımlar,<br>güzel başlangıçlar.",
    heroDescription: "BellaLily Kid Shoes çocuk ayakkabısı koleksiyonunu keşfedin. Mağazalar, bayiler ve distribütörler için yalnızca toptan satış ve iş ortaklığı sunuyoruz; sitede bireysel satış yapılmıyor.",
    heroCatalog: "Toptan kataloğu inceleyin",
    heroPartner: "İş ortaklığı talebi",
    featuredAlt: "Yeni Sezon Çocuk Ayakkabısı Modeli",
    collectionEyebrow: "Koleksiyon",
    collectionTitle: "İş ortaklarımız için çocuk ayakkabısı koleksiyonu",
    collectionIntro: "Modelleri inceleyin; toptan fiyat, stok ve sezon bilgisi için işletmeniz adına teklif isteyin.",
    seasonTabs: "Sezon kataloğu",
    seasonSummer: "Yazlık",
    seasonWinter: "Kışlık",
    seasonSchool: "Okulluk",
    shoeModels: "Ayakkabı modelleri",
    loadingCatalog: "Katalog yükleniyor...",
    modelLabel: "Model",
    colorsLabel: "Renkler",
    modelColorCodeLabel: "Model ve renk kodu",
    catalogPanelTitle: "Toptan ürün kataloğu ve fiyat teklifi",
    catalogPanelDescription: "Model, sezon, stok ve toptan fiyat bilgileri değişebilir. Güncel katalog ve işletmenize özel teklif için bize e-posta gönderin.",
    requestCatalog: "Toptan katalog ve teklif isteyin",
    aboutEyebrow: "Hakkımızda",
    aboutTitle: "İş ortaklarımız için özenle",
    aboutDescription: "BellaLily Kid Shoes, mağazalar, bayiler ve distribütörlerle uzun soluklu iş ortaklıkları kurarak çocuk ayakkabısı koleksiyonunu toptan sunar.",
    aboutLink: "BellaLily Kid Shoes hakkında daha fazlası →",
    partnershipEyebrow: "İş ortaklığı",
    wholesaleTitle: "Mağazalar ve bayiler için toptan iş ortaklığı",
    wholesaleDescription: "Yalnızca işletmelere yönelik toptan satış yapıyoruz. Minimum sipariş miktarı 96 çifttir. Sezon, ürün grubu ve sipariş adedine göre katalog ve fiyat teklifi almak için bize ulaşın.",
    wholesaleNote: "Siparişler ödeme onayından sonra genellikle 15–20 iş gününde hazırlanır. Bu hazırlık süresidir; sipariş içeriği ve üretim planına göre değişebilir.",
    wholesaleLink: "Toplu satış detayları",
    contactEyebrow: "Sorularınız mı var?",
    contactTitle: "Size yardımcı olmaktan mutluluk duyarız.",
    contactDescription: "Toptan katalog, fiyat teklifi veya iş ortaklığı için işletme bilgilerinizi ve talebinizi e-posta ile gönderin.",
    sendEmail: "E-posta gönderin",
    footerTagline: "BellaLily Kid Shoes · Çocuklar için sevgiyle.",
    legalNav: "Yasal ve bilgilendirme sayfaları",
    pageWholesale: "Toplu satış",
    pageOrderTerms: "Toptan sipariş koşulları",
    pageB2bTerms: "B2B satış koşulları",
    pageOrderProcess: "Toptan sipariş süreci",
    pagePrivacy: "Gizlilik politikası",
    pageKvkk: "KVKK aydınlatma metni",
    pageCookies: "Çerez politikası",
    carouselLoading: "Fotoğraf yükleniyor...",
    shoeImageAlt: "{model}{color} model ayakkabı",
    languageError: "Dil yüklenemedi.",
    savedLanguageError: "Kaydedilen dil yüklenemedi.",
    preferenceSaveError: "Dil seçimi kaydedilemedi.",
    emptySeason: "{season} sezonu için henüz katalog ürünü eklenmedi.",
    imageLoadError: "“{model}” fotoğrafı yüklenemedi. Görsel bağlantısını ve paylaşımın bağlantıya sahip herkes tarafından görüntülenebildiğini kontrol edin.",
    imageError: "Fotoğraf bağlantısı kullanılamıyor.",
    catalogInvalidSummer: "Bazı Yazlık katalog kayıtları geçersiz; dosya adlarını ve HTTPS görsel bağlantılarını kontrol edin.",
    catalogInvalidCount: "{count} katalog kaydı geçersiz; yerel fotoğraf dosya adlarını veya HTTPS görsel bağlantılarını kontrol edin.",
    catalogLoadError: "Katalog veya renk tablosu yüklenemedi. Lütfen public/katalog/catalog.json ve public/katalog/renkler.tsv dosyalarını kontrol edin.",
    catalogEmpty: "Henüz fotoğraf eklenmedi. Fotoğrafları public/katalog/fotograflar/ klasörüne koyup adlarını public/katalog/catalog.json listesine ekleyin veya JSON dosyasına OneDrive görsel bağlantısı ve model adını girin.",
    catalogNotFound: "Bu bilgilendirme sayfası bulunamadı.",
    pageLoadError: "Sayfa içeriği yüklenemedi. Lütfen daha sonra tekrar deneyin.",
    updatedLabel: "Son Güncelleme:",
    pageLoading: "Sayfa yükleniyor.",
    requestSubject: "BellaLily Kid Shoes - Ürün kataloğu talebi"
  };

  let language = "tr";
  let translations = null;
  let pageReady;

  function text(key, values = {}) {
    let result = (translations?.ui?.[key] ?? turkishUi[key] ?? key);
    for (const [name, value] of Object.entries(values)) {
      result = result.replaceAll(`{${name}}`, String(value));
    }
    return result;
  }

  function apply() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    selector.value = language;
    for (const element of document.querySelectorAll("[data-i18n]")) {
      element.textContent = text(element.dataset.i18n);
    }
    for (const element of document.querySelectorAll("[data-i18n-html]")) {
      element.innerHTML = text(element.dataset.i18nHtml);
    }
    for (const element of document.querySelectorAll("[data-i18n-aria]")) {
      element.setAttribute("aria-label", text(element.dataset.i18nAria));
    }
    for (const element of document.querySelectorAll("[data-i18n-alt]")) {
      element.alt = text(element.dataset.i18nAlt);
    }
    for (const element of document.querySelectorAll("[data-i18n-title]")) {
      element.title = text(element.dataset.i18nTitle);
    }

    if (document.querySelector(".hero")) {
      document.title = language === "tr"
        ? "BellaLily Kid Shoes | Toptan Çocuk Ayakkabıları"
        : `BellaLily Kid Shoes | ${text("navWholesale")}`;
      document.querySelector('meta[name="description"]').content = text("heroDescription");
    }

    const contact = document.querySelector(".header-contact");
    if (contact) contact.textContent = text("navContact");
    const homeLink = document.querySelector(".site-header .brand");
    if (homeLink) homeLink.setAttribute("aria-label", text("homeAria"));
    const backLink = document.querySelector(".back-link");
    if (backLink) backLink.textContent = text("backHome");
    const pageMenuTitle = document.querySelector(".page-menu h2");
    if (pageMenuTitle) pageMenuTitle.textContent = text("legalNav");
    const pageMenu = document.querySelector(".page-menu");
    if (pageMenu) pageMenu.setAttribute("aria-label", text("legalNav"));
    const catalogLink = document.querySelector(".catalog-panel .button");
    if (catalogLink) {
      catalogLink.href =
        `mailto:info@bellalilykidshoes.com?subject=${encodeURIComponent(text("requestSubject"))}`;
    }
    label.textContent = text("languageLabel");
    selector.setAttribute("aria-label", text("languageLabel"));
  }

  async function selectLanguage(nextLanguage) {
    if (!supportedLanguages.includes(nextLanguage)) {
      throw new Error(`Unsupported language: ${nextLanguage}`);
    }
    status.textContent = "";
    let nextTranslations = null;
    if (nextLanguage !== "tr") {
      const response = await fetch(new URL(`languages/${nextLanguage}.json`, rootUrl));
      if (!response.ok) {
        throw new Error(`Language file returned HTTP ${response.status}.`);
      }
      nextTranslations = await response.json();
    }
    language = nextLanguage;
    translations = nextTranslations;
      try {
        localStorage.setItem("bellaLilyLanguage", language);
      } catch (error) {
        console.error("Language preference could not be saved:", error);
        status.textContent = text("preferenceSaveError");
      }
      apply();
    document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language } }));
  }

  selector.addEventListener("change", async () => {
    try {
      await selectLanguage(selector.value);
    } catch (error) {
      console.error("Language could not be changed:", error);
      status.textContent = text("languageError");
      selector.value = language;
    }
  });

  window.SiteLanguage = {
    get language() { return language; },
    get translations() { return translations; },
    ready: Promise.resolve(),
    text,
    page(file) { return translations?.pages?.[file] ?? null; }
  };

  let preferredLanguage = "tr";
  try {
    const savedLanguage = localStorage.getItem("bellaLilyLanguage");
    if (supportedLanguages.includes(savedLanguage)) preferredLanguage = savedLanguage;
  } catch (error) {
    console.error("Saved language preference could not be read:", error);
  }
  pageReady = preferredLanguage === "tr"
    ? Promise.resolve()
    : selectLanguage(preferredLanguage).catch(error => {
      console.error("Saved language could not be loaded:", error);
      status.textContent = text("savedLanguageError");
      selector.value = "tr";
    });
  window.SiteLanguage.ready = pageReady;
  apply();
})();
