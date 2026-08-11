/* ==========================================================================
   EL-HAMD EXPORTS — MAIN JAVASCRIPT
   UI Logic Only — No product/company data in this file.
   Data lives in HTML. Ready for Laravel API integration.
   ========================================================================== */

/* ==========================================================================
   1. HELPERS
   ========================================================================== */

const esc = (str) =>
  String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* ==========================================================================
   2. TRANSLATIONS (i18n Engine)
   ========================================================================== */

const LANG_KEY = "site-lang";
const FALLBACK = "en";
let current = FALLBACK;
const listeners = new Set();

export function getLang() {
  return current;
}
export function getLanguages() {
  return translations
    ? Object.keys(translations).map(
        (code) => translations_meta[code] || { code },
      )
    : [];
}

const translations_meta = {
  en: { code: "en", label: "English", short: "EN", dir: "ltr" },
  ar: { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
};

/** Deeply get a dot-separated key from the current language object */
export function t(key) {
  const lang = translations[current] || translations[FALLBACK];
  return (
    key
      .split(".")
      .reduce(
        (a, k) => (a && typeof a === "object" ? a[k] : undefined),
        lang,
      ) ?? key
  );
}

export function pick(obj) {
  if (!obj || typeof obj === "string") return obj || "";
  return obj[current] || obj[FALLBACK] || obj.en || "";
}

export function applyTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n"));
    if (typeof value === "string") el.textContent = value;
  });
  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr")
      .split(",")
      .forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!attr || !key) return;
        const value = t(key);
        if (typeof value === "string") el.setAttribute(attr, value);
      });
  });
}

export function onLanguageChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function setLanguage(code, persist = true) {
  if (!translations[code]) code = FALLBACK;
  current = code;
  const meta = translations_meta[code] || { dir: "ltr" };
  document.documentElement.setAttribute("lang", code);
  document.documentElement.setAttribute("dir", meta.dir);
  if (persist) {
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch {}
  }
  applyTranslations();
  updateTitle();
  document.querySelectorAll("[data-lang-current]").forEach((el) => {
    el.textContent =
      (translations_meta[code] || {}).short || code.toUpperCase();
  });
  document.querySelectorAll("[data-lang-option]").forEach((el) => {
    el.setAttribute(
      "aria-current",
      String(el.getAttribute("data-lang-option") === code),
    );
  });
  listeners.forEach((fn) => fn(code));
}

export function updateTitle(dynamic) {
  const key = document.body.getAttribute("data-title-key");
  const base = dynamic || (key ? t(key) : document.title);
  const suffix = t("meta.suffix");
  const title =
    base && suffix && !base.includes(suffix) ? `${base} — ${suffix}` : base;
  document.title = title;
  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute("content", title);
}

export function initLanguage() {
  let stored = null;
  try {
    stored = localStorage.getItem(LANG_KEY);
  } catch {}
  const browser = (navigator.language || FALLBACK).slice(0, 2);
  setLanguage(stored || (translations[browser] ? browser : FALLBACK), false);

  document.addEventListener("click", (e) => {
    const option = e.target.closest("[data-lang-option]");
    if (!option) return;
    setLanguage(option.getAttribute("data-lang-option"));
    document
      .querySelectorAll(".lang.is-open")
      .forEach((el) => el.classList.remove("is-open"));
  });
}

/* ==========================================================================
   3. TRANSLATIONS DATA
   ========================================================================== */

const translations = {
  en: {
    meta: { suffix: "El-Hamd Exports" },
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      gallery: "Gallery",
      catalogue: "Catalogue",
      menu: "Menu",
      close: "Close menu",
      open: "Open menu",
      language: "Language",
      theme: "Toggle theme",
      skip: "Skip to main content",
    },
    cta: {
      explore: "Explore Products",
      contact: "Contact Our Team",
      details: "View Details",
      viewProducts: "View Products",
      inquiry: "Request a Sample",
      about: "Our Story",
      capabilities: "Our Capabilities",
      back: "Back",
      top: "Back to top",
    },
    hero: {
      eyebrow: "Egypt's Premier Botanical Exporter",
      title: "From Nile Valley <em>fields</em> to global markets",
      text: "El-Hamd Exports grows, processes, and ships premium medicinal herbs, aromatic plants, spices, seeds, and dehydrated vegetables to food, tea, and wellness manufacturers worldwide.",
      scroll: "Scroll",
    },
    trust: {
      title: "Built on process, not promises",
      text: "Every shipment leaves our facility inspected, certified, and documented — traceable from field to container.",
      a: "Field-to-Container Traceability",
      aText:
        "Every lot tracked from contracted farm through processing to your port.",
      b: "Food Safety Certified",
      bText:
        "ISO 22000, HACCP, and EU Organic certification on every production line.",
      c: "Global Export Experience",
      cText:
        "Serving 40+ markets across Europe, the Gulf, Asia and the Americas.",
      d: "Reliable Season Supply",
      dText:
        "Planned capacity, forward contracts, and stock policy for repeat B2B buyers.",
      tab1: "Traceability",
      tab1Stat: "100%",
      tab1Unit: "Lot-level tracking",
      tab1Desc:
        "Every export pallet links to the field block, harvest date, drying batch, and laboratory results — documentation sent with every shipment.",
      tab2: "Markets Served",
      tab2Stat: "40",
      tab2Unit: "+ export markets",
      tab2Desc:
        "Regular shipments to the EU, UK, USA, GCC, Japan and South Africa. Our export team handles all documentation and customs requirements.",
      tab3: "Organic Supply",
      tab3Stat: "60",
      tab3Unit: "% organic-certified",
      tab3Desc:
        "Certified organic programmes for chamomile, hibiscus, peppermint, fennel and black cumin. EU and USDA equivalence available.",
      tab4: "Lead Times",
      tab4Stat: "14",
      tab4Unit: "–21 days to EU ports",
      tab4Desc:
        "Standard container-ready within 14 days of order confirmation. Airfreight samples dispatched within 48 hours.",
    },
    global: {
      eyebrow: "Global Presence",
      title: "Serving international markets",
      text: "Regular shipments to Europe, the Gulf, the Americas, and Asia-Pacific — from our processing plant in Fayoum, Egypt.",
      r1: "Export Markets",
      r2: "Active Regions",
      r3: "Shipping Ports",
      r4: "Partner Distributors",
      eu: "European Union",
      eu_count: "18 countries",
      gulf: "GCC & Middle East",
      gulf_count: "9 countries",
      asia: "Asia-Pacific",
      asia_count: "8 countries",
      americas: "Americas",
      americas_count: "6 countries",
    },
    categories: {
      eyebrow: "Product Range",
      title: "Four core categories",
      text: "Precision-processed botanicals and agricultural produce, export-ready with full documentation.",
      herbs: {
        name: "Medicinal Herbs",
        desc: "Chamomile, hibiscus, peppermint and more — whole, cut or sifted.",
      },
      spices: {
        name: "Spices & Seasonings",
        desc: "Single-origin spices and custom blends, cold-milled for maximum aroma.",
      },
      seeds: {
        name: "Seeds",
        desc: "Fennel, caraway, sesame and black cumin, sortex-cleaned to 99.5%+.",
      },
      dehydrated: {
        name: "Dehydrated Vegetables",
        desc: "Onion, garlic, tomato and pepper — flakes, granules or powder.",
      },
    },
    products: {
      eyebrow: "Catalogue",
      title: "Our Products",
      featuredTitle: "Featured products",
      featuredText: "A selection from our current export catalogue.",
      lead: "Browse the full range by category. All products available with full specifications and samples.",
      search: "Search products",
      searchPlaceholder: "Search by name or code…",
      all: "All Categories",
      filter: "Filter by category",
      sort: "Sort",
      sortDefault: "Default",
      sortAZ: "Name A–Z",
      sortZA: "Name Z–A",
      results: "products",
      code: "Product Code",
    },
    product: {
      overview: "Overview",
      features: "Key Features",
      specifications: "Specifications",
      applications: "Applications",
      packaging: "Packaging & Formats",
      certifications: "Certifications",
      related: "You May Also Like",
      inquiryTitle: "Need specifications, samples or pricing?",
      inquiryText:
        "Our export team responds with full product documentation within 24 hours.",
      gallery: "Product gallery",
      thumb: "Show image",
    },
    about: {
      eyebrow: "About Us",
      title: "Egypt's trusted botanical exporter since 1998",
      lead: "El-Hamd Exports grows, processes and ships premium herbs, spices, seeds and dehydrated vegetables from Egypt's Nile Valley to food and wellness manufacturers worldwide.",
      missionTitle: "Mission",
      mission:
        "To deliver clean, traceable Egyptian botanicals that manufacturers can source with confidence — season after season.",
      visionTitle: "Vision",
      vision:
        "To be the most trusted and sustainable source of medicinal plants and agricultural produce from the Nile Valley.",
    },
    finalCta: {
      title: "Let's build a <em>reliable</em> supply partnership",
      text: "Contact our export team for product specifications, samples, pricing, and shipping terms.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to our export team",
      lead: "Send us your requirements and we'll respond with specifications, formats and commercial terms.",
      infoTitle: "Get in Touch",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Address",
      hours: "Business Hours",
      mapTitle: "Factory Location",
      mapNote: "Map coordinates are provisional.",
    },
    form: {
      title: "Send an Enquiry",
      name: "Full Name",
      company: "Company",
      email: "Email Address",
      phone: "Phone",
      country: "Country",
      subject: "Subject",
      message: "Message",
      required: "Required",
      optional: "Optional",
      submit: "Send Enquiry",
      sending: "Sending…",
      errName: "Please enter your full name.",
      errEmail: "Please enter a valid email address.",
      errPhone: "Please enter a valid phone number.",
      errMessage: "Please write at least 20 characters.",
      errGeneric: "Something went wrong. Please try again.",
      notConfigured:
        "Form is not yet connected. Please contact us by email or WhatsApp.",
      success:
        "Thank you. Your enquiry has been sent — we'll be in touch shortly.",
    },
    footer: {
      about:
        "El-Hamd Exports grows, processes and ships premium Egyptian botanicals, spices, seeds and dehydrated vegetables to food manufacturers worldwide.",
      links: "Quick Links",
      cats: "Product Categories",
      contact: "Contact",
      follow: "Follow Us",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
    },
    errors: {
      productNotFound: "Product not found",
      productNotFoundText:
        "The requested product is not available or has been removed.",
      noResults: "No products match your search.",
      noResultsText: "Try a different search term or clear the filters.",
      clear: "Clear filters",
      loading: "Loading…",
    },
    certs: {
      eyebrow: "Certifications",
      title: "Quality & Compliance",
      text: "Our certifications reflect our commitment to food safety and international standards.",
    },
    breadcrumb: { home: "Home", products: "Products" },
  },

  ar: {
    meta: { suffix: "الحمد للتصدير" },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      contact: "تواصل معنا",
      gallery: "المعرض",
      catalogue: "الكتالوج",
      menu: "القائمة",
      close: "إغلاق القائمة",
      open: "فتح القائمة",
      language: "اللغة",
      theme: "تبديل المظهر",
      skip: "الانتقال إلى المحتوى",
    },
    cta: {
      explore: "استكشف المنتجات",
      contact: "تواصل مع فريقنا",
      details: "عرض التفاصيل",
      viewProducts: "عرض المنتجات",
      inquiry: "طلب عينة",
      about: "قصتنا",
      capabilities: "إمكانياتنا",
      back: "رجوع",
      top: "العودة للأعلى",
    },
    hero: {
      eyebrow: "المصدّر المصري الأول للنباتات الطبية",
      title: "من <em>حقول</em> وادي النيل إلى الأسواق العالمية",
      text: "تزرع الحمد للتصدير وتصنّع وتشحن الأعشاب الطبية والنباتات العطرية والتوابل والبذور والخضروات المجففة إلى مصانع الأغذية والشاي والرعاية الصحية حول العالم.",
      scroll: "مرِّر",
    },
    trust: {
      title: "نبني على الإجراءات لا على الوعود",
      text: "كل شحنة تغادر منشأتنا مفحوصة ومعتمدة وموثقة — قابلة للتتبع من الحقل إلى الحاوية.",
      a: "تتبع من الحقل للحاوية",
      aText: "كل دفعة مرتبطة بمزرعتها وتاريخ حصادها ونتائج المعمل.",
      b: "معتمد بمعايير سلامة الغذاء",
      bText: "ISO 22000 وHACCP والعضوي الأوروبي على كل خطوط الإنتاج.",
      c: "خبرة تصدير عالمية",
      cText: "نخدم أكثر من 40 سوقاً في أوروبا والخليج وآسيا والأمريكتين.",
      d: "توريد موسمي موثوق",
      dText: "طاقة إنتاجية مخططة وعقود مسبقة وسياسة مخزون للمشترين.",
      tab1: "التتبع",
      tab1Stat: "100%",
      tab1Unit: "تتبع على مستوى الدفعة",
      tab1Desc:
        "كل منصة تصدير مرتبطة بقطعة الحقل وتاريخ الحصاد ودفعة التجفيف ونتائج المعمل — التوثيق مرفق مع كل شحنة.",
      tab2: "الأسواق المخدومة",
      tab2Stat: "40",
      tab2Unit: "+ سوق تصدير",
      tab2Desc:
        "شحنات منتظمة إلى الاتحاد الأوروبي وبريطانيا وأمريكا ودول الخليج واليابان وجنوب أفريقيا.",
      tab3: "التوريد العضوي",
      tab3Stat: "60",
      tab3Unit: "% معتمد عضوياً",
      tab3Desc:
        "برامج عضوية معتمدة للبابونج والكركديه والنعناع والشمر وحبة البركة.",
      tab4: "مهل التسليم",
      tab4Stat: "14",
      tab4Unit: "–21 يوماً لموانئ أوروبا",
      tab4Desc:
        "جاهز للحاوية خلال 14 يوماً من تأكيد الطلب. عينات الشحن الجوي خلال 48 ساعة.",
    },
    global: {
      eyebrow: "الحضور العالمي",
      title: "نخدم أسواقاً دولية",
      text: "شحنات منتظمة إلى أوروبا والخليج والأمريكتين وآسيا-المحيط الهادئ — من مصنعنا في الفيوم.",
      r1: "أسواق التصدير",
      r2: "المناطق النشطة",
      r3: "موانئ الشحن",
      r4: "موزعون شركاء",
      eu: "الاتحاد الأوروبي",
      eu_count: "18 دولة",
      gulf: "دول الخليج والشرق الأوسط",
      gulf_count: "9 دول",
      asia: "آسيا-المحيط الهادئ",
      asia_count: "8 دول",
      americas: "الأمريكتان",
      americas_count: "6 دول",
    },
    categories: {
      eyebrow: "نطاق المنتجات",
      title: "أربع فئات رئيسية",
      text: "نباتات طبية وزراعية مُعالجة بدقة، جاهزة للتصدير بتوثيق كامل.",
      herbs: {
        name: "الأعشاب الطبية",
        desc: "بابونج وكركديه ونعناع وغيرها — كاملة أو مقطعة أو منخولة.",
      },
      spices: {
        name: "التوابل والبهارات",
        desc: "توابل أحادية المصدر وخلطات خاصة مطحونة على البارد للحفاظ على النكهة.",
      },
      seeds: {
        name: "البذور",
        desc: "شمر وكراوية وسمسم وحبة بركة منظفة بنقاء 99.5%+.",
      },
      dehydrated: {
        name: "الخضروات المجففة",
        desc: "بصل وثوم وطماطم وفلفل: شرائح أو حبيبات أو مسحوق.",
      },
    },
    products: {
      eyebrow: "الكتالوج",
      title: "منتجاتنا",
      featuredTitle: "منتجات مختارة",
      featuredText: "مجموعة من كتالوج التصدير الحالي.",
      lead: "تصفح النطاق الكامل حسب الفئة. جميع المنتجات متاحة مع المواصفات الكاملة والعينات.",
      search: "البحث في المنتجات",
      searchPlaceholder: "ابحث بالاسم أو الكود…",
      all: "جميع الفئات",
      filter: "تصفية حسب الفئة",
      sort: "ترتيب",
      sortDefault: "افتراضي",
      sortAZ: "الاسم أ–ي",
      sortZA: "الاسم ي–أ",
      results: "منتج",
      code: "كود المنتج",
    },
    product: {
      overview: "نظرة عامة",
      features: "الخصائص الرئيسية",
      specifications: "المواصفات",
      applications: "الاستخدامات",
      packaging: "التعبئة والصيغ",
      certifications: "الشهادات",
      related: "قد يعجبك أيضاً",
      inquiryTitle: "تحتاج مواصفات أو عينات أو أسعار؟",
      inquiryText: "يرد فريق التصدير بالتوثيق الكامل للمنتج خلال 24 ساعة.",
      gallery: "معرض المنتج",
      thumb: "عرض الصورة",
    },
    about: {
      eyebrow: "من نحن",
      title: "المصدّر المصري الموثوق للنباتات الطبية منذ 1998",
      lead: "تزرع الحمد للتصدير وتصنّع وتشحن الأعشاب والتوابل والبذور والخضروات المجففة المصرية إلى مصانع الأغذية والرعاية الصحية حول العالم.",
      missionTitle: "الرسالة",
      mission:
        "توفير نباتات مصرية نظيفة وقابلة للتتبع يشتريها المصنّعون بثقة — موسماً بعد موسم.",
      visionTitle: "الرؤية",
      vision:
        "أن نكون المصدر الأكثر ثقة واستدامة للنباتات الطبية والمحاصيل الزراعية من وادي النيل.",
    },
    finalCta: {
      title: "لنبنِ شراكة توريد <em>موثوقة</em>",
      text: "تواصل مع فريقنا للحصول على مواصفات المنتجات والعينات والأسعار وشروط الشحن.",
    },
    contact: {
      eyebrow: "تواصل",
      title: "تحدث مع فريق التصدير",
      lead: "أرسل متطلباتك وسنرد بالمواصفات والصيغ والشروط التجارية.",
      infoTitle: "تواصل معنا",
      phone: "الهاتف",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      address: "العنوان",
      hours: "ساعات العمل",
      mapTitle: "موقع المصنع",
      mapNote: "الإحداثيات على الخريطة تجريبية.",
    },
    form: {
      title: "أرسل استفساراً",
      name: "الاسم الكامل",
      company: "الشركة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      country: "الدولة",
      subject: "الموضوع",
      message: "الرسالة",
      required: "مطلوب",
      optional: "اختياري",
      submit: "إرسال الاستفسار",
      sending: "جارٍ الإرسال…",
      errName: "الرجاء إدخال الاسم الكامل.",
      errEmail: "الرجاء إدخال بريد إلكتروني صحيح.",
      errPhone: "الرجاء إدخال رقم هاتف صحيح.",
      errMessage: "الرجاء كتابة 20 حرفاً على الأقل.",
      errGeneric: "حدث خطأ ما. حاول مرة أخرى.",
      notConfigured:
        "النموذج غير مرتبط بعد. يرجى التواصل عبر البريد أو واتساب.",
      success: "شكراً لك. تم إرسال استفسارك وسيرد فريقنا قريباً.",
    },
    footer: {
      about:
        "تزرع الحمد للتصدير وتصنّع وتشحن الأعشاب الطبية والتوابل والبذور والخضروات المجففة المصرية إلى مصانع الأغذية حول العالم.",
      links: "روابط سريعة",
      cats: "فئات المنتجات",
      contact: "تواصل",
      follow: "تابعنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      rights: "جميع الحقوق محفوظة.",
    },
    errors: {
      productNotFound: "المنتج غير موجود",
      productNotFoundText: "المنتج المطلوب غير متاح أو تمت إزالته.",
      noResults: "لا توجد منتجات مطابقة لبحثك.",
      noResultsText: "جرّب كلمة أخرى أو امسح عوامل التصفية.",
      clear: "مسح التصفية",
      loading: "جارٍ التحميل…",
    },
    certs: {
      eyebrow: "الشهادات",
      title: "الجودة والامتثال",
      text: "شهاداتنا تعكس التزامنا بسلامة الغذاء والمعايير الدولية.",
    },
    breadcrumb: { home: "الرئيسية", products: "المنتجات" },
  },
};

/* ==========================================================================
   4. THEME ENGINE
   ========================================================================== */

const THEME_KEY = "site-theme";
const media = window.matchMedia("(prefers-color-scheme: dark)");

export function getTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

export function setTheme(theme, persist = true) {
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(theme === "dark"));
    const sun = btn.querySelector("[data-icon-sun]");
    const moon = btn.querySelector("[data-icon-moon]");
    if (sun && moon) {
      sun.hidden = theme === "light";
      moon.hidden = theme === "dark";
    }
  });
}

export function initTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem(THEME_KEY);
  } catch {}
  setTheme(stored || (media.matches ? "dark" : "light"), false);
  media.addEventListener("change", (e) => {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch {}
    if (!saved) setTheme(e.matches ? "dark" : "light", false);
  });
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
}

/* ==========================================================================
   5. ANIMATIONS
   ========================================================================== */

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

export function initReveals(root = document) {
  const targets = root.querySelectorAll("[data-reveal]:not(.is-revealed)");
  if (!targets.length) return;
  if (reduced.matches || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
  );

  targets.forEach((el, i) => {
    if (!el.style.getPropertyValue("--reveal-delay")) {
      const index = Number(el.dataset.revealIndex ?? i % 4);
      el.style.setProperty("--reveal-delay", `${index * 80}ms`);
    }
    io.observe(el);
  });
}

export function initCounters(root = document) {
  const counters = root.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const render = (el, value) => {
    el.textContent =
      new Intl.NumberFormat().format(value) + (el.dataset.suffix || "");
  };
  if (reduced.matches || !("IntersectionObserver" in window)) {
    counters.forEach((el) => render(el, Number(el.dataset.count)));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = Number(el.dataset.count) || 0;
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          render(el, Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 },
  );
  counters.forEach((el) => {
    render(el, 0);
    io.observe(el);
  });
}

/* ==========================================================================
   6. NAVIGATION & CHROME
   ========================================================================== */

const ICONS = {
  sun: '<svg data-icon-sun width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" stroke-linecap="round"/></svg>',
  moon: '<svg data-icon-moon width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" stroke-linejoin="round"/></svg>',
  globe:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
  burger:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>',
  close:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/></svg>',
  arrowUp:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  caret:
    '<svg class="nav__caret" width="11" height="11" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5L6 8.5L10 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  arrowRight:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22C6.5 22 2 17.5 2 12 2 6.5 9 2 12 2s10 4.5 10 10c0 5.5-4.5 10-10 10Z"/><path d="M12 2c0 5.5-2.5 10-6 12"/></svg>',
};

const SOCIAL_ICONS = {
  in: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z"/></svg>',
  f: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4Z"/></svg>',
  ig: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  wa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.75 1.45 5.31L2 22l4.98-1.6a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.83-4.4 9.83-9.84C21.88 6.4 17.47 2 12.04 2Z"/></svg>',
  yt: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.76-1.77C18.34 5.1 12 5.1 12 5.1s-6.34 0-7.84.43A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.76 1.77c1.5.43 7.84.43 7.84.43s6.34 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12ZM10 15.2V8.8l5.2 3.2L10 15.2Z"/></svg>',
};

const PAGES = [
  { key: "nav.home", href: "index.html", id: "home" },
  { key: "nav.about", href: "about.html", id: "about" },
  {
    key: "nav.products",
    href: "products.html",
    id: "products",
    children: true,
  },
  { key: "nav.contact", href: "contact.html", id: "contact" },
];

const CATEGORY_IDS = ["herbs", "spices", "seeds", "dehydrated"];

function categoryLinks() {
  return CATEGORY_IDS.map(
    (id) =>
      `<a href="products.html?category=${id}" data-i18n="categories.${id}.name"></a>`,
  ).join("");
}

function brandHTML() {
  return `
  <a class="brand" href="index.html" aria-label="El-Hamd Exports Home">
    <div class="brand__emblem">
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"/>
        <path d="M12 2c0 5.5-2.5 10-6 12M12 2c0 5.5 2.5 10 6 12" stroke-linecap="round"/>
        <path d="M7 17c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="brand__text">
      <span class="brand__name">El-Hamd</span>
      <span class="brand__tagline">Premium Botanicals Export</span>
    </div>
  </a>`;
}

function headerMarkup(active) {
  const nav = PAGES.map((p) => {
    const isActive = p.id === active ? " is-active" : "";
    const ariaCurrent = p.id === active ? ' aria-current="page"' : "";
    if (!p.children) {
      return `<li class="nav__item"><a class="nav__link${isActive}" href="${p.href}" data-i18n="${p.key}"${ariaCurrent}></a></li>`;
    }
    return `
      <li class="nav__item" data-dropdown>
        <a class="nav__link${isActive}" href="${p.href}" aria-expanded="false" aria-haspopup="true">
          <span data-i18n="${p.key}"></span>${ICONS.caret}
        </a>
        <div class="dropdown" role="group">${categoryLinks()}</div>
      </li>`;
  }).join("");

  return `
  <div class="container header__inner">
    ${brandHTML()}
    <nav class="nav" aria-label="Main navigation">
      <ul style="display:flex;align-items:center;gap:0.15rem">${nav}</ul>
    </nav>
    <div class="header__tools">
      <div class="lang" data-lang>
        <button type="button" class="lang__toggle" aria-expanded="false" aria-haspopup="true">
          ${ICONS.globe}<span data-lang-current>EN</span>
        </button>
        <div class="lang__menu" role="group" aria-label="Language">
          <button type="button" data-lang-option="en" lang="en"><span>English</span><span>EN</span></button>
          <button type="button" data-lang-option="ar" lang="ar"><span>العربية</span><span>AR</span></button>
        </div>
      </div>
      <button type="button" class="icon-btn" data-theme-toggle aria-pressed="false" data-i18n-attr="aria-label:nav.theme">
        ${ICONS.sun}${ICONS.moon}
      </button>
      <button type="button" class="icon-btn burger" data-drawer-open aria-expanded="false" data-i18n-attr="aria-label:nav.open">
        ${ICONS.burger}
      </button>
    </div>
  </div>`;
}

function drawerMarkup(active) {
  const items = PAGES.map((p) => {
    const isActive = p.id === active ? " is-active" : "";
    if (!p.children) {
      return `<li class="drawer__item"><a class="drawer__link${isActive}" href="${p.href}" data-i18n="${p.key}"></a></li>`;
    }
    return `
      <li class="drawer__item">
        <button type="button" class="drawer__link${isActive}" data-subtoggle aria-expanded="false">
          <span data-i18n="${p.key}"></span>${ICONS.caret}
        </button>
        <div class="drawer__sub">
          <a href="${p.href}" data-i18n="products.all"></a>
          ${categoryLinks()}
        </div>
      </li>`;
  }).join("");

  return `
    <div class="drawer__head">
      ${brandHTML()}
      <button type="button" class="icon-btn" data-drawer-close data-i18n-attr="aria-label:nav.close">${ICONS.close}</button>
    </div>
    <nav class="drawer__body" aria-label="Mobile navigation">
      <ul>${items}</ul>
    </nav>
    <div class="drawer__foot">
      <div class="drawer__langs" role="group" aria-label="Language">
        <button type="button" data-lang-option="en" lang="en">EN</button>
        <button type="button" data-lang-option="ar" lang="ar">AR</button>
      </div>
      <button type="button" class="icon-btn" data-theme-toggle aria-pressed="false">${ICONS.sun}${ICONS.moon}</button>
    </div>`;
}

function footerMarkup() {
  const links = PAGES.map(
    (p) => `<li><a href="${p.href}" data-i18n="${p.key}"></a></li>`,
  ).join("");
  const cats = CATEGORY_IDS.map(
    (id) =>
      `<li><a href="products.html?category=${id}" data-i18n="categories.${id}.name"></a></li>`,
  ).join("");

  return `
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__logo">${brandHTML()}</div>
        <p class="footer__about" data-i18n="footer.about"></p>
        <div class="footer__social">
          <a class="social" href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">${SOCIAL_ICONS.in}</a>
          <a class="social" href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">${SOCIAL_ICONS.f}</a>
          <a class="social" href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">${SOCIAL_ICONS.ig}</a>
          <a class="social" href="https://wa.me/201001234567" target="_blank" rel="noopener" aria-label="WhatsApp">${SOCIAL_ICONS.wa}</a>
        </div>
      </div>
      <div class="footer__col">
        <h4 data-i18n="footer.links"></h4>
        <ul class="footer__links">${links}</ul>
      </div>
      <div class="footer__col">
        <h4 data-i18n="footer.cats"></h4>
        <ul class="footer__links">${cats}</ul>
      </div>
      <div class="footer__col">
        <h4 data-i18n="footer.contact"></h4>
        <ul class="footer__links">
          <li><a href="tel:+20100123456">+20 100 123 4567</a></li>
          <li><a href="mailto:export@elhamd.com">export@elhamd.com</a></li>
          <li>Km 12, Fayoum–Cairo Road, Fayoum, Egypt</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">© <span>${new Date().getFullYear()}</span> El-Hamd Exports. <span data-i18n="footer.rights"></span></p>
      <div class="footer__legal">
        <a href="#" data-i18n="footer.privacy"></a>
        <a href="#" data-i18n="footer.terms"></a>
      </div>
    </div>
  </div>`;
}

export function renderChrome() {
  const active = document.body.getAttribute("data-page") || "";
  const header = document.getElementById("site-header");
  if (header) header.innerHTML = headerMarkup(active);
  const drawer = document.getElementById("site-drawer");
  if (drawer) drawer.innerHTML = drawerMarkup(active);
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = footerMarkup();

  // Back to top button
  if (!document.querySelector("[data-to-top]")) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "back-top";
    btn.setAttribute("data-to-top", "");
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = ICONS.arrowUp;
    document.body.appendChild(btn);
  }
}

export function initNavigation() {
  const header = document.getElementById("site-header");
  const drawer = document.getElementById("site-drawer");
  const toTop = document.querySelector("[data-to-top]");

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // Desktop dropdowns
  const closeDropdowns = () => {
    document.querySelectorAll("[data-dropdown].is-open").forEach((el) => {
      el.classList.remove("is-open");
      el.querySelector(".nav__link")?.setAttribute("aria-expanded", "false");
    });
  };
  document.querySelectorAll("[data-dropdown]").forEach((item) => {
    const trigger = item.querySelector(".nav__link");
    const open = (state) => {
      item.classList.toggle("is-open", state);
      trigger?.setAttribute("aria-expanded", String(state));
    };
    item.addEventListener("mouseenter", () => open(true));
    item.addEventListener("mouseleave", () => open(false));
    item.addEventListener("focusin", () => open(true));
    item.addEventListener("focusout", (e) => {
      if (!item.contains(e.relatedTarget)) open(false);
    });
  });

  // Language dropdown
  document.querySelectorAll("[data-lang]").forEach((wrap) => {
    const toggle = wrap.querySelector(".lang__toggle");
    toggle?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !wrap.classList.contains("is-open");
      document
        .querySelectorAll("[data-lang].is-open")
        .forEach((el) => el.classList.remove("is-open"));
      wrap.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-lang]")) {
      document.querySelectorAll("[data-lang].is-open").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".lang__toggle")?.setAttribute(
          "aria-expanded",
          "false",
        );
      });
    }
    if (!e.target.closest("[data-dropdown]")) closeDropdowns();
  });

  // Mobile drawer
  const openBtn = document.querySelector("[data-drawer-open]");
  const closeBtn = document.querySelector("[data-drawer-close]");
  let lastFocused = null;
  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("is-locked", open);
    openBtn?.setAttribute("aria-expanded", String(open));
    if (open) {
      lastFocused = document.activeElement;
      drawer.querySelector("button, a")?.focus();
    } else {
      lastFocused?.focus?.();
    }
  };
  openBtn?.addEventListener("click", () => setDrawer(true));
  closeBtn?.addEventListener("click", () => setDrawer(false));
  drawer
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setDrawer(false)));
  drawer?.querySelectorAll("[data-subtoggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sub = btn.nextElementSibling;
      const open = !sub.classList.contains("is-open");
      sub.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdowns();
      document
        .querySelectorAll("[data-lang].is-open")
        .forEach((el) => el.classList.remove("is-open"));
      if (drawer?.getAttribute("aria-hidden") === "false") setDrawer(false);
    }
  });
  window.addEventListener("resize", () => {
    if (
      window.innerWidth > 1024 &&
      drawer?.getAttribute("aria-hidden") === "false"
    )
      setDrawer(false);
  });
}

/* ==========================================================================
   7. HOME PAGE — Trust Section Interactive Tabs
   ========================================================================== */

export function initTrustTabs() {
  const tabs = document.querySelectorAll("[data-trust-tab]");
  const panels = document.querySelectorAll("[data-trust-panel]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.getAttribute("data-trust-tab");
      tabs.forEach((t) => t.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      document
        .querySelector(`[data-trust-panel="${id}"]`)
        ?.classList.add("is-active");
    });
  });

  // Activate first tab by default
  tabs[0]?.classList.add("is-active");
  panels[0]?.classList.add("is-active");
}

/* ==========================================================================
   8. HOME PAGE — Global Markets Interactive Section
   ========================================================================== */

export function initMarkets() {
  const regions = document.querySelectorAll("[data-market-region]");
  if (!regions.length) return;
  regions.forEach((region) => {
    region.addEventListener("click", () => {
      regions.forEach((r) => r.classList.remove("is-active"));
      region.classList.add("is-active");
    });
  });
  regions[0]?.classList.add("is-active");
}

/* ==========================================================================
   9. PRODUCTS PAGE
   ========================================================================== */

/**
 * Read product data from HTML data attributes.
 * This keeps data in HTML (Laravel-ready) and JS handles filtering/sorting only.
 *
 * Each product card in HTML should have:
 * data-product-item
 * data-category="herbs|spices|seeds|dehydrated"
 * data-name="Product Name"
 * data-code="HRB-101"
 * data-featured="true|false"
 */
export function initProductsPage() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  const chips = document.querySelector("[data-chips]");
  const search = document.querySelector("[data-search]");
  const sort = document.querySelector("[data-sort]");
  const count = document.querySelector("[data-count-results]");

  const params = new URLSearchParams(location.search);
  let state = {
    category: params.get("category") || "all",
    query: "",
    sort: "default",
  };

  // Get items from DOM (data is in HTML, not JS)
  const getAllItems = () =>
    Array.from(grid.querySelectorAll("[data-product-item]"));

  const renderChips = () => {
    if (!chips) return;
    chips.innerHTML =
      `<button type="button" class="chip${state.category === "all" ? " is-active" : ""}" data-cat="all">${t("products.all")}</button>` +
      CATEGORY_IDS.map(
        (id) =>
          `<button type="button" class="chip${state.category === id ? " is-active" : ""}" data-cat="${id}">${t(`categories.${id}.name`)}</button>`,
      ).join("");
  };

  const render = () => {
    let items = getAllItems();

    // Filter by category
    items.forEach((item) => {
      const cat = item.getAttribute("data-category");
      const catMatch = state.category === "all" || cat === state.category;
      const q = state.query.trim().toLowerCase();
      const nameMatch =
        !q ||
        (item.getAttribute("data-name") || "").toLowerCase().includes(q) ||
        (item.getAttribute("data-code") || "").toLowerCase().includes(q);
      item.style.display = catMatch && nameMatch ? "" : "none";
    });

    // Sort
    const visible = getAllItems().filter((i) => i.style.display !== "none");
    if (state.sort === "az") {
      visible.sort((a, b) =>
        (a.getAttribute("data-name") || "").localeCompare(
          b.getAttribute("data-name") || "",
        ),
      );
    } else if (state.sort === "za") {
      visible.sort((a, b) =>
        (b.getAttribute("data-name") || "").localeCompare(
          a.getAttribute("data-name") || "",
        ),
      );
    }
    visible.forEach((item) => grid.appendChild(item));

    if (count) count.textContent = `${visible.length} ${t("products.results")}`;
    initReveals(grid);
  };

  chips?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    const url = new URL(location.href);
    if (state.category === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", state.category);
    history.replaceState(null, "", url);
    renderChips();
    render();
  });

  let debounce;
  search?.addEventListener("input", (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.query = e.target.value;
      render();
    }, 180);
  });

  sort?.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  renderChips();
  render();
  onLanguageChange(() => {
    renderChips();
    render();
  });
}

/* ==========================================================================
   10. PRODUCT DETAIL PAGE — Gallery Tabs
   ========================================================================== */

export function initProductDetail() {
  // Gallery thumbnail switching
  const mainImg = document.querySelector("[data-gallery-main]");
  const thumbs = document.querySelectorAll("[data-gallery-thumb]");
  if (mainImg && thumbs.length) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.getAttribute("data-src");
        if (src) mainImg.setAttribute("src", src);
        thumbs.forEach((t) => t.classList.remove("is-active"));
        thumb.classList.add("is-active");
      });
    });
    thumbs[0]?.classList.add("is-active");
  }

  // Product info tabs
  const productTabs = document.querySelectorAll("[data-product-tab]");
  const productPanels = document.querySelectorAll("[data-product-panel]");
  if (productTabs.length) {
    productTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const id = tab.getAttribute("data-product-tab");
        productTabs.forEach((t) => t.classList.remove("is-active"));
        productPanels.forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        document
          .querySelector(`[data-product-panel="${id}"]`)
          ?.classList.add("is-active");
      });
    });
    productTabs[0]?.classList.add("is-active");
    productPanels[0]?.classList.add("is-active");
  }
}

/* ==========================================================================
   11. CONTACT FORM
   ========================================================================== */

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  const PHONE_RE = /^[+()\-\s\d]{6,24}$/;
  const statusEl = form.querySelector("[data-form-status]");
  const submitBtn = form.querySelector("[data-submit]");

  const showStatus = (type, msg) => {
    if (!statusEl) return;
    statusEl.className = `form-status is-${type}`;
    statusEl.textContent = msg;
  };

  const setError = (input, msg) => {
    const errorEl = form.querySelector(`[data-error="${input.name}"]`);
    if (errorEl) errorEl.textContent = msg;
    input.classList.toggle("is-invalid", !!msg);
  };

  const validate = (field) => {
    const v = field.value.trim();
    const n = field.name;
    let msg = "";
    if (n === "name" && v.length < 2) msg = t("form.errName");
    if (n === "email" && !EMAIL_RE.test(v)) msg = t("form.errEmail");
    if (n === "phone" && v && !PHONE_RE.test(v)) msg = t("form.errPhone");
    if (n === "message" && v.length < 20) msg = t("form.errMessage");
    setError(field, msg);
    return !msg;
  };

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim()) validate(field);
    });
    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) validate(field);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = [
      ...form.querySelectorAll(
        "input[required], textarea[required], input[name='phone']",
      ),
    ];
    const valid = fields.map(validate).every(Boolean);
    if (!valid) {
      showStatus("error", t("form.errGeneric"));
      return;
    }

    // Endpoint: replace null with your Laravel API endpoint
    const endpoint = form.getAttribute("data-endpoint") || null;
    if (!endpoint) {
      showStatus("info", t("form.notConfigured"));
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t("form.sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error();
      form.reset();
      showStatus("success", t("form.success"));
    } catch {
      showStatus("error", t("form.errGeneric"));
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("form.submit");
    }
  });
}

/* ==========================================================================
   12. APPLICATION BOOT
   ========================================================================== */

function boot() {
  renderChrome();
  initTheme();
  initNavigation();
  initLanguage();

  const page = document.body.getAttribute("data-page");

  if (page === "home") {
    initTrustTabs();
    initMarkets();
  }
  if (page === "products") initProductsPage();
  if (page === "product-details") initProductDetail();
  if (page === "contact") initContactForm();

  applyTranslations();
  initReveals();
  initCounters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
