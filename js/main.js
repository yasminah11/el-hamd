/**
 * Product categories. Add or remove entries freely — every layout is data driven.
 * `name` / `description` keys resolve against translations (`categories.<id>.*`).
 */
export const categories = [
  {
    id: "herbs",
    image: "assets/images/cat-herbs.jpg",
  },
  {
    id: "spices",
    image: "assets/images/cat-spices.jpg",
  },
  {
    id: "seeds",
    image: "assets/images/cat-seeds.jpg",
  },
  {
    id: "dehydrated",
    image: "assets/images/cat-dehydrated.jpg",
  },
];

/**
 * Certifications held by the company (demo data for this template).
 */
export const certifications = [
  {
    id: "cert-1",
    mark: "ISO",
    name: "ISO 22000:2018",
    description:
      "Food safety management across intake, processing and dispatch.",
  },
  {
    id: "cert-2",
    mark: "HACCP",
    name: "HACCP",
    description:
      "Hazard analysis and critical control points on every production line.",
  },
  {
    id: "cert-3",
    mark: "EU",
    name: "EU Organic",
    description:
      "Certified organic herb and seed programmes for European buyers.",
  },
  {
    id: "cert-4",
    mark: "GAP",
    name: "Global G.A.P.",
    description: "Good agricultural practice audits on contracted farms.",
  },
];

/**
 * Central company configuration.
 * Replace the values below to re-brand the whole website.
 */
export const company = {
  name: "Nile Botanica",
  shortName: "Nile Botanica",
  logoMark: "NB",
  legalName: "Nile Botanica for Export S.A.E.",
  founded: "1998",
  location: "Fayoum Agricultural Zone, Egypt",
  address: "Km 12, Fayoum–Cairo Desert Road, Fayoum, Egypt",
  phone: "+20 100 234 5678",
  whatsapp: "+20 100 234 5678",
  email: "export@nilebotanica.com",
  hours: "Sun – Thu, 08:00 – 17:00 (GMT+2)",
  mapEmbed:
    "https://www.google.com/maps?q=29.3084,30.8428&hl=en&z=11&output=embed",
  social: [
    { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com" },
    { label: "Facebook", icon: "f", url: "https://www.facebook.com" },
    { label: "Instagram", icon: "ig", url: "https://www.instagram.com" },
    { label: "YouTube", icon: "yt", url: "https://www.youtube.com" },
    { label: "WhatsApp", icon: "wa", url: "https://wa.me/201002345678" },
  ],
  // Contact form endpoint. Leave null until a real endpoint (Formspree /
  // EmailJS / custom API) is configured — the form will refuse to fake success.
  formEndpoint: null,
  stats: [
    { value: 27, suffix: "+", key: "stats.years" },
    { value: 46, suffix: "+", key: "stats.markets" },
    { value: 12, suffix: "K+", key: "stats.capacity" },
    { value: 60, suffix: "+", key: "stats.products" },
  ],
  regions: [
    { key: "global.r1", value: "46" },
    { key: "global.r2", value: "5" },
    { key: "global.r3", value: "3" },
    { key: "global.r4", value: "38" },
  ],
};

export const images = {
  hero: "assets/images/factory-hero.jpg",
  production: "assets/images/factory-production.jpg",
  quality: "assets/images/quality-control.jpg",
  logistics: "assets/images/logistics.jpg",
};

/**
 * News / What's New articles. Multilingual fields keyed by language code.
 */
const P = (en, ar) => ({ en, ar, es: en, ru: en });

export const news = [
  {
    id: 1,
    slug: "new-organic-chamomile-harvest",
    date: "2026-06-18",
    category: "production",
    image: "assets/images/cat-herbs.jpg",
    title: P(
      "Organic chamomile harvest 2026 closes 18% above plan",
      "حصاد البابونج العضوي 2026 يتجاوز الخطة بنسبة 18%",
    ),
    excerpt: P(
      "Favourable spring weather in the Fayoum basin delivered a larger, higher-oil chamomile crop, now available for Q3 shipment.",
      "أدى الطقس الربيعي الملائم في الفيوم إلى محصول بابونج أكبر وأعلى في الزيوت الطيارة، ومتاح الآن للشحن في الربع الثالث.",
    ),
    body: {
      en: [
        "Our contracted growers in the Fayoum basin completed the 2026 chamomile harvest with a yield 18% above forecast, supported by a mild spring and improved drip irrigation on 340 feddans.",
        "Laboratory testing of the first 60 lots shows an average volatile-oil content of 0.62%, comfortably above our internal 0.5% specification for tea-grade flowers.",
        "Allocations for Q3 shipment are open now. Buyers can request 200 g samples with a full certificate of analysis from our export desk.",
      ],
      ar: [
        "أنهى المزارعون المتعاقدون معنا في الفيوم حصاد البابونج لعام 2026 بإنتاجية تفوق التوقعات بنسبة 18%، بفضل ربيع معتدل وتحسين الري بالتنقيط على 340 فداناً.",
        "أظهرت اختبارات المعمل لأول 60 دفعة متوسط زيوت طيارة 0.62%، وهو أعلى من مواصفتنا الداخلية 0.5% لدرجة الشاي.",
        "باب الحجز لشحنات الربع الثالث مفتوح الآن، ويمكن للمشترين طلب عينات 200 جم مع شهادة تحليل كاملة.",
      ],
    },
  },
  {
    id: 2,
    slug: "iso-22000-recertification",
    date: "2026-04-02",
    category: "quality",
    image: "assets/images/quality-control.jpg",
    title: P(
      "Nile Botanica renews ISO 22000 and HACCP certification",
      "نايل بوتانيكا تجدد شهادتي ISO 22000 و HACCP",
    ),
    excerpt: P(
      "Our Fayoum processing plant passed the 2026 surveillance audit with zero major non-conformities.",
      "اجتاز مصنعنا في الفيوم تدقيق المتابعة لعام 2026 دون أي حالات عدم مطابقة كبرى.",
    ),
    body: {
      en: [
        "The annual surveillance audit covered raw-material intake, steam sterilisation, metal detection and finished-goods traceability across all four product lines.",
        "Auditors highlighted our lot-level traceability system, which links every export pallet back to the field, harvest date and drying batch.",
        "Updated certificates are available on request and are attached to every shipping document set.",
      ],
      ar: [
        "شمل تدقيق المتابعة السنوي استلام المواد الخام والتعقيم بالبخار وكشف المعادن وتتبع المنتج النهائي في خطوط الإنتاج الأربعة.",
        "أشاد المدققون بنظام التتبع على مستوى الدفعة الذي يربط كل منصة تصدير بالحقل وتاريخ الحصاد ودفعة التجفيف.",
        "الشهادات المحدثة متاحة عند الطلب وتُرفق مع مستندات الشحن.",
      ],
    },
  },
  {
    id: 3,
    slug: "new-dehydration-line",
    date: "2026-02-11",
    category: "company",
    image: "assets/images/factory-production.jpg",
    title: P(
      "New hot-air dehydration line doubles vegetable capacity",
      "خط تجفيف جديد يضاعف طاقة الخضروات المجففة",
    ),
    excerpt: P(
      "A second tunnel dryer raises dehydrated onion and garlic output to 40 tonnes per week.",
      "نفق تجفيف ثانٍ يرفع إنتاج البصل والثوم المجفف إلى 40 طناً أسبوعياً.",
    ),
    body: {
      en: [
        "The new line adds temperature-staged tunnels with in-line moisture monitoring, holding finished moisture within ±0.5% of target.",
        "Capacity for dehydrated onion, garlic and tomato now reaches 40 tonnes per week during season, shortening lead times for European buyers to 14 days.",
        "The investment also includes an optical sorter that removes foreign material before packing.",
      ],
      ar: [
        "يضيف الخط الجديد أنفاقاً متدرجة الحرارة مع مراقبة الرطوبة أثناء التشغيل، ما يحافظ على الرطوبة النهائية في حدود ±0.5%.",
        "وصلت الطاقة الإنتاجية للبصل والثوم والطماطم المجففة إلى 40 طناً أسبوعياً في الموسم، مع تقليص مهلة التسليم للمشترين الأوروبيين إلى 14 يوماً.",
        "يشمل الاستثمار أيضاً فارزة ضوئية لإزالة المواد الغريبة قبل التعبئة.",
      ],
    },
  },
  {
    id: 4,
    slug: "gulfood-2026",
    date: "2025-12-09",
    category: "export",
    image: "assets/images/logistics.jpg",
    title: P(
      "Meet us at Gulfood 2026, Dubai — Hall 4, Stand C-32",
      "قابلونا في جلفود 2026 بدبي — القاعة 4، جناح C-32",
    ),
    excerpt: P(
      "Our export team will present the full herb, spice, seed and dehydrated vegetable range with live tasting.",
      "سيعرض فريق التصدير مجموعتنا الكاملة من الأعشاب والتوابل والبذور والخضروات المجففة مع تذوق مباشر.",
    ),
    body: {
      en: [
        "We will show new private-label seasoning blends alongside our core chamomile, hibiscus and fennel programmes.",
        "Meeting slots can be booked in advance through our export desk; sample kits will be prepared for confirmed appointments.",
        "The team will also discuss 2026 contract volumes and forward pricing for the new crop season.",
      ],
      ar: [
        "سنعرض خلطات تتبيل جديدة بعلامة العميل إلى جانب برامجنا الأساسية من البابونج والكركديه والشمر.",
        "يمكن حجز مواعيد اللقاءات مسبقاً عبر قسم التصدير، وستُجهَّز حقائب عينات للمواعيد المؤكدة.",
        "كما سيناقش الفريق كميات التعاقد لعام 2026 وأسعار الموسم الجديد.",
      ],
    },
  },
];

/**
 * Product catalogue. Multilingual fields are objects keyed by language code.
 * Only `en` is required; missing languages fall back to `en`.
 */
const L = (en, ar) => ({ en, ar: ar || en, es: en, ru: en });

const IMG = {
  herbs: "assets/images/cat-herbs.jpg",
  spices: "assets/images/cat-spices.jpg",
  seeds: "assets/images/cat-seeds.jpg",
  dehydrated: "assets/images/cat-dehydrated.jpg",
  field: "assets/images/factory-production.jpg",
  lab: "assets/images/quality-control.jpg",
  logistics: "assets/images/logistics.jpg",
};

const packing = [
  L("25 kg multi-ply paper bags", "أكياس ورقية متعددة الطبقات 25 كجم"),
  L("10 kg cartons with PE liner", "كراتين 10 كجم ببطانة بولي إيثيلين"),
  L("Private-label retail packs", "عبوات تجزئة بعلامة العميل"),
];
const certs = ["ISO 22000", "HACCP", "EU Organic", "Global G.A.P."];

const make = (
  id,
  slug,
  category,
  code,
  featured,
  images,
  name,
  description,
  features,
  specifications,
  applications,
) => ({
  id,
  slug,
  category,
  code,
  featured,
  images,
  name,
  description,
  features,
  specifications,
  applications,
  packaging: packing,
  certifications: certs.slice(0, 3),
});

const spec = (l, v, la, va) => ({ label: L(l, la), value: L(v, va) });

const baseSpecs = (origin, moisture, purity) => [
  spec("Origin", origin, "المنشأ"),
  spec("Harvest season", "May – September", "موسم الحصاد", "مايو – سبتمبر"),
  spec("Moisture", moisture, "الرطوبة"),
  spec("Purity", purity, "النقاء"),
  spec("Shelf life", "24 months", "مدة الصلاحية", "24 شهراً"),
];

export const products = [
  /* ---------------- Herbs ---------------- */
  make(
    1,
    "chamomile-flowers",
    "herbs",
    "HRB-101",
    true,
    [IMG.herbs, IMG.field, IMG.lab],
    { en: "Egyptian Chamomile Flowers", ar: "زهور البابونج المصري" },
    {
      en: "Sun-dried whole chamomile flowers (Matricaria chamomilla) grown in the Fayoum basin. Gently cleaned and graded for herbal tea, extraction and cosmetic use.",
      ar: "زهور بابونج كاملة مجففة بالشمس من منطقة الفيوم، تُنظَّف وتُفرز بعناية للاستخدام في الشاي العشبي والمستخلصات ومستحضرات التجميل.",
    },
    [
      L("Whole flower heads, hand-picked", "رؤوس زهور كاملة مقطوفة يدوياً"),
      L("High essential-oil content", "نسبة زيوت طيارة عالية"),
      L("Steam-sterilised on request", "تعقيم بالبخار عند الطلب"),
      L("Organic certified lots available", "توافر شحنات عضوية معتمدة"),
    ],
    baseSpecs("Fayoum, Egypt", "≤ 10%", "99% flower heads"),
    [
      L("Herbal infusions & tea bags", "المشروبات العشبية وأكياس الشاي"),
      L("Essential oil distillation", "تقطير الزيوت العطرية"),
      L("Cosmetic & skincare formulations", "تركيبات العناية بالبشرة"),
    ],
  ),

  make(
    2,
    "peppermint-leaves",
    "herbs",
    "HRB-102",
    true,
    [IMG.herbs, IMG.lab],
    {
      en: "Peppermint Leaves (Cut & Sifted)",
      ar: "أوراق النعناع الفلفلي (مقطعة ومنخولة)",
    },
    {
      en: "Air-dried Mentha piperita leaves, cut and sifted to tea-bag cut. Bright green colour with a clean, high-menthol aroma.",
      ar: "أوراق نعناع فلفلي مجففة بالهواء، مقطعة ومنخولة بمقاس أكياس الشاي، بلون أخضر زاهٍ ورائحة منثول نقية.",
    },
    [
      L("TBC cut 0.5–2 mm", "قطع 0.5–2 مم"),
      L("Low stem content", "نسبة سيقان منخفضة"),
      L("Menthol-rich aroma", "رائحة غنية بالمنثول"),
      L("Batch traceability to field", "تتبع الدفعات حتى الحقل"),
    ],
    baseSpecs("Menoufia, Egypt", "≤ 8%", "≤ 2% stems"),
    [
      L("Tea blends", "خلطات الشاي"),
      L("Pharmaceutical extracts", "المستخلصات الدوائية"),
      L("Confectionery flavouring", "نكهات الحلويات"),
    ],
  ),

  make(
    3,
    "hibiscus-flowers",
    "herbs",
    "HRB-103",
    false,
    [IMG.herbs, IMG.logistics],
    { en: "Hibiscus Flowers (Karkade)", ar: "زهور الكركديه" },
    {
      en: "Deep-red Hibiscus sabdariffa calyces from Upper Egypt, prized for high anthocyanin content and strong colour yield in cold and hot infusions.",
      ar: "كؤوس كركديه حمراء داكنة من صعيد مصر، تتميز بمحتوى عالٍ من الأنثوسيانين ولون قوي في المشروبات الساخنة والباردة.",
    },
    [
      L("Whole or cut calyces", "كؤوس كاملة أو مقطعة"),
      L("Colour value 2.0+", "قيمة لونية 2.0+"),
      L("Natural colourant grade", "درجة ملوّن طبيعي"),
      L("Sorted free of seeds", "مفروزة وخالية من البذور"),
    ],
    baseSpecs("Qena, Egypt", "≤ 11%", "99.5% clean"),
    [
      L("Beverages & iced teas", "المشروبات والشاي المثلج"),
      L("Natural food colourant", "ملوّن غذائي طبيعي"),
      L("Nutraceuticals", "المكملات الغذائية"),
    ],
  ),

  /* ---------------- Spices & seasonings ---------------- */
  make(
    4,
    "ground-cumin",
    "spices",
    "SPC-201",
    true,
    [IMG.spices, IMG.field],
    { en: "Ground Cumin", ar: "كمون مطحون" },
    {
      en: "Cold-milled cumin powder with 2.5% minimum volatile oil, produced in a temperature-controlled mill to protect aroma.",
      ar: "كمون مطحون على البارد بنسبة زيوت طيارة 2.5% كحد أدنى، يُنتج في مطحنة مضبوطة الحرارة للحفاظ على النكهة.",
    },
    [
      L("Volatile oil ≥ 2.5%", "زيوت طيارة ≥ 2.5%"),
      L("Mesh 40–60", "نعومة 40–60"),
      L("No additives or fillers", "بدون إضافات أو مواد مالئة"),
      L("ETO-free sterilisation", "تعقيم خالٍ من أكسيد الإيثيلين"),
    ],
    baseSpecs("Assiut, Egypt", "≤ 9%", "100% pure cumin"),
    [
      L("Seasoning blends", "خلطات التتبيل"),
      L("Meat & ready meals", "اللحوم والوجبات الجاهزة"),
      L("Retail spice packs", "عبوات التوابل للتجزئة"),
    ],
  ),

  make(
    5,
    "coriander-powder",
    "spices",
    "SPC-202",
    false,
    [IMG.spices, IMG.lab],
    { en: "Coriander Powder", ar: "كزبرة مطحونة" },
    {
      en: "Finely milled coriander seed with a warm citrus profile, screened and metal-detected before packing.",
      ar: "بذور كزبرة مطحونة ناعماً بنكهة حمضية دافئة، تُنخل وتمر بكاشف المعادن قبل التعبئة.",
    },
    [
      L("Mesh 60", "نعومة 60"),
      L("Uniform pale-green colour", "لون أخضر فاتح متجانس"),
      L("Metal-detected", "فحص بكاشف المعادن"),
      L("Bulk & private label", "سائب وبعلامة العميل"),
    ],
    baseSpecs("Beni Suef, Egypt", "≤ 9%", "99.9%"),
    [
      L("Curry & masala blends", "خلطات الكاري والماسالا"),
      L("Bakery & snacks", "المخبوزات والوجبات الخفيفة"),
      L("Sauces", "الصلصات"),
    ],
  ),

  make(
    6,
    "shawarma-seasoning",
    "spices",
    "SPC-203",
    true,
    [IMG.spices, IMG.logistics],
    { en: "Shawarma Seasoning Blend", ar: "خلطة بهارات الشاورما" },
    {
      en: "House seasoning blend of paprika, cumin, coriander, cinnamon and black pepper. Formulated to customer recipe on request.",
      ar: "خلطة بهارات من الببريكا والكمون والكزبرة والقرفة والفلفل الأسود، ويمكن تصنيعها وفق وصفة العميل.",
    },
    [
      L("Custom recipes available", "إمكانية تصنيع وصفات خاصة"),
      L("Consistent colour value", "ثبات القيمة اللونية"),
      L("Free-flowing powder", "مسحوق سهل الانسياب"),
      L("Clean-label, no MSG", "بدون جلوتامات أحادية الصوديوم"),
    ],
    baseSpecs("Blended in Fayoum, Egypt", "≤ 8%", "Blend to spec"),
    [
      L("Food service", "خدمات الأغذية"),
      L("Meat processing", "تصنيع اللحوم"),
      L("Retail seasoning jars", "برطمانات التوابل"),
    ],
  ),

  /* ---------------- Seeds ---------------- */
  make(
    7,
    "fennel-seeds",
    "seeds",
    "SED-301",
    true,
    [IMG.seeds, IMG.field],
    { en: "Fennel Seeds", ar: "بذور الشمر" },
    {
      en: "Bright green, machine-cleaned fennel seed (Foeniculum vulgare) with a sweet anise aroma and 99.5% purity.",
      ar: "بذور شمر خضراء لامعة منظفة آلياً برائحة يانسون حلوة ونقاء 99.5%.",
    },
    [
      L("Purity 99.5%", "نقاء 99.5%"),
      L("Gravity-separated", "فصل بالجاذبية"),
      L("Admixture ≤ 0.5%", "شوائب ≤ 0.5%"),
      L("Whole or ground", "كامل أو مطحون"),
    ],
    baseSpecs("Assiut, Egypt", "≤ 10%", "99.5%"),
    [
      L("Herbal tea", "الشاي العشبي"),
      L("Bakery seeds topping", "تزيين المخبوزات"),
      L("Oil extraction", "استخلاص الزيوت"),
    ],
  ),

  make(
    8,
    "black-cumin-seeds",
    "seeds",
    "SED-302",
    false,
    [IMG.seeds, IMG.lab],
    {
      en: "Black Cumin Seeds (Nigella Sativa)",
      ar: "حبة البركة (الحبة السوداء)",
    },
    {
      en: "Sortex-cleaned nigella seed with high thymoquinone content, suitable for cold-press oil and nutraceutical use.",
      ar: "حبة بركة منظفة بالسورتكس بمحتوى ثيموكينون مرتفع، مناسبة للعصر على البارد والمكملات الغذائية.",
    },
    [
      L("Sortex cleaned", "تنظيف بالسورتكس"),
      L("Oil content ≥ 32%", "محتوى زيتي ≥ 32%"),
      L("Uniform seed size", "حجم بذور متجانس"),
      L("Food & pharma grade", "درجة غذائية ودوائية"),
    ],
    baseSpecs("Fayoum, Egypt", "≤ 8%", "99.9%"),
    [
      L("Cold-pressed oil", "الزيت المعصور على البارد"),
      L("Bakery topping", "تزيين المخبوزات"),
      L("Supplements", "المكملات"),
    ],
  ),

  make(
    9,
    "sesame-seeds",
    "seeds",
    "SED-303",
    false,
    [IMG.seeds, IMG.logistics],
    { en: "Hulled Sesame Seeds", ar: "بذور السمسم المقشور" },
    {
      en: "Mechanically hulled white sesame, 99.95% purity, washed and dried for tahini, bakery and confectionery lines.",
      ar: "سمسم أبيض مقشور آلياً بنقاء 99.95%، مغسول ومجفف لخطوط الطحينة والمخبوزات والحلويات.",
    },
    [
      L("Purity 99.95%", "نقاء 99.95%"),
      L("Oil content 50–54%", "محتوى زيتي 50–54%"),
      L("Aflatoxin tested", "فحص الأفلاتوكسين"),
      L("Bulk 25/50 kg", "تعبئة 25/50 كجم"),
    ],
    baseSpecs("Sohag, Egypt", "≤ 6%", "99.95%"),
    [
      L("Tahini & halva", "الطحينة والحلاوة"),
      L("Bakery", "المخبوزات"),
      L("Snack coating", "تغطية الوجبات الخفيفة"),
    ],
  ),

  /* ---------------- Dehydrated vegetables ---------------- */
  make(
    10,
    "dehydrated-onion-flakes",
    "dehydrated",
    "DHV-401",
    true,
    [IMG.dehydrated, IMG.field],
    { en: "Dehydrated Onion Flakes", ar: "بصل مجفف شرائح" },
    {
      en: "White onion dried to 5% moisture in hot-air tunnels, sized 3–5 mm, with strong pungency and fast rehydration.",
      ar: "بصل أبيض مجفف حتى رطوبة 5% في أنفاق هواء ساخن بمقاس 3–5 مم، بنفاذية قوية وإعادة ترطيب سريعة.",
    },
    [
      L("Moisture ≤ 5%", "رطوبة ≤ 5%"),
      L("Flake size 3–5 mm", "مقاس الشرائح 3–5 مم"),
      L("Rehydration ratio 1:6", "نسبة إعادة الترطيب 1:6"),
      L("Also as granules & powder", "متوفر حبيبات ومسحوق"),
    ],
    baseSpecs("Fayoum, Egypt", "≤ 5%", "99.5% clean"),
    [
      L("Soups & sauces", "الشوربات والصلصات"),
      L("Instant noodles", "النودلز سريع التحضير"),
      L("Seasoning blends", "خلطات التتبيل"),
    ],
  ),

  make(
    11,
    "dehydrated-tomato-slices",
    "dehydrated",
    "DHV-402",
    false,
    [IMG.dehydrated, IMG.lab],
    { en: "Dehydrated Tomato Slices", ar: "شرائح طماطم مجففة" },
    {
      en: "Sun-ripened tomatoes sliced and dried without sulphites, retaining a deep red colour and concentrated flavour.",
      ar: "طماطم ناضجة تُقطع وتُجفف دون كبريتيت، مع الحفاظ على اللون الأحمر الغامق والنكهة المركزة.",
    },
    [
      L("No sulphites added", "بدون إضافة كبريتيت"),
      L("Colour value 2.2+", "قيمة لونية 2.2+"),
      L("Slice 6–8 mm", "شرائح 6–8 مم"),
      L("Powder option available", "متوفر كمسحوق"),
    ],
    baseSpecs("Luxor, Egypt", "≤ 7%", "99% clean"),
    [
      L("Pizza & pasta lines", "خطوط البيتزا والمكرونة"),
      L("Ready meals", "الوجبات الجاهزة"),
      L("Snack seasoning", "تتبيل الوجبات الخفيفة"),
    ],
  ),

  make(
    12,
    "garlic-granules",
    "dehydrated",
    "DHV-403",
    true,
    [IMG.dehydrated, IMG.logistics],
    { en: "Dehydrated Garlic Granules", ar: "ثوم مجفف حبيبات" },
    {
      en: "Peeled white garlic dried and granulated to 8–16 mesh, delivering consistent pungency for industrial seasoning.",
      ar: "ثوم أبيض مقشر مجفف ومحبب بمقاس 8–16 ميش، يمنح نفاذية ثابتة للتتبيل الصناعي.",
    },
    [
      L("8–16 mesh granules", "حبيبات 8–16 ميش"),
      L("Allicin retained", "الحفاظ على الأليسين"),
      L("Moisture ≤ 6%", "رطوبة ≤ 6%"),
      L("Steam sterilised", "معقم بالبخار"),
    ],
    baseSpecs("Beni Suef, Egypt", "≤ 6%", "99.5% clean"),
    [
      L("Sauces & marinades", "الصلصات والتتبيلات"),
      L("Meat processing", "تصنيع اللحوم"),
      L("Retail spice packs", "عبوات التوابل للتجزئة"),
    ],
  ),
];

/**
 * Centralised translations.
 * Add a language by adding a new top-level key here and an entry in `languages`.
 * Text is bound in HTML with data-i18n="group.key".
 */

export const languages = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
  { code: "es", label: "Español", short: "ES", dir: "ltr" },
  { code: "ru", label: "Русский", short: "RU", dir: "ltr" },
];

export const translations = {
  en: {
    meta: { suffix: "Nile Botanica" },
    nav: {
      gallery: "Gallery",
      catalogue: "Catalogue",
      home: "Home",
      about: "About",
      products: "Products",
      news: "News",
      contact: "Contact",
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
      readMore: "Read More",
      allNews: "All News",
      about: "About the Company",
      inquiry: "Request Information",
      capabilities: "Discover Our Capabilities",
      back: "Back",
      top: "Back to top",
    },
    hero: {
      eyebrow: "Medicinal Plants & Agricultural Export",
      title:
        "From Nile Valley fields to the world's food and wellness industries",
      text: "Nile Botanica grows, processes and exports Egyptian medicinal plants, herbs, spices, seeds and dehydrated vegetables to food, tea and nutraceutical manufacturers worldwide — a short positioning statement describing what the factory produces, the markets it serves and the standards it works to.",
      scroll: "Scroll",
    },
    trust: {
      title: "Built on process, not promises",
      text: "Every order is produced under the same controlled conditions, documented and inspected before it leaves the plant.",
      a: "Manufacturing Excellence",
      aText: "Controlled production lines operated by trained technicians.",
      b: "Strict Quality Control",
      bText: "Inspection at intake, in process and before dispatch.",
      c: "Global Export",
      cText: "Documentation and packaging prepared for international shipping.",
      d: "Reliable Supply",
      dText: "Planned capacity and stock policy for repeat B2B volumes.",
    },
    intro: {
      eyebrow: "The Company",
      title: "A grower and exporter built for long-term supply partnerships",
      p1: "Nile Botanica grows, processes and exports Egyptian medicinal plants, herbs, spices, seeds and dehydrated vegetables to food, tea and nutraceutical manufacturers worldwide — introduce the company, its main production activity and the sectors it supplies.",
      p2: "We contract directly with growers, control drying and cleaning in our own plant, and test every lot before it ships — so quality is a process, not a promise — describe the manufacturing philosophy: process discipline, investment in equipment, and the people who run it.",
      s1: "Own production facility",
      s2: "In-house quality laboratory",
      s3: "Export-ready documentation",
    },
    stats: {
      title: "The company in numbers",
      note: "Placeholder figures — replace with verified company data.",
      years: "Years of Experience",
      markets: "Export Markets",
      capacity: "Annual Production",
      products: "Products",
    },
    categories: {
      eyebrow: "Product Range",
      title: "Product categories",
      text: "Organised ranges so buyers can move from category to specification quickly.",
      herbs: {
        name: "Medicinal Herbs",
        desc: "Chamomile, hibiscus, peppermint and more — whole, cut or sifted.",
      },
      spices: {
        name: "Spices & Seasonings",
        desc: "Single spices and custom blends, milled under temperature control.",
      },
      seeds: {
        name: "Seeds",
        desc: "Fennel, caraway, sesame and black cumin, sortex-cleaned to 99.5%+.",
      },
      dehydrated: {
        name: "Dehydrated Vegetables",
        desc: "Onion, garlic, tomato and pepper in flakes, granules or powder.",
      },
    },
    products: {
      eyebrow: "Catalogue",
      featuredTitle: "Featured products",
      featuredText: "A selection from the current catalogue.",
      title: "Products",
      lead: "Browse the full range. Filter by category or search by product name and code.",
      search: "Search products",
      searchPlaceholder: "Search by name or code…",
      all: "All",
      filter: "Filter by category",
      sort: "Sort",
      sortDefault: "Default",
      sortAZ: "Name A–Z",
      sortZA: "Name Z–A",
      results: "products",
      code: "Code",
    },
    product: {
      overview: "Overview",
      features: "Key features",
      specifications: "Specifications",
      applications: "Applications",
      packaging: "Packaging & formats",
      certifications: "Certifications",
      related: "You may also like",
      inquiryTitle: "Need specifications, samples or pricing?",
      inquiryText:
        "Send us the details of your requirement and our export team will respond with full product documentation.",
      gallery: "Product gallery",
      thumb: "Show image",
    },
    news: {
      eyebrow: "What's New",
      title: "News & updates",
      lead: "Company announcements, production updates and export news.",
      homeTitle: "Latest news",
      homeText: "Updates from the plant and the export desk.",
      related: "Related articles",
      back: "Back to News",
      categories: {
        company: "Company",
        production: "Production",
        export: "Export",
        quality: "Quality",
      },
    },
    about: {
      eyebrow: "About Us",
      title: "Farming and export with intent",
      lead: "Nile Botanica grows, processes and exports Egyptian medicinal plants, herbs, spices, seeds and dehydrated vegetables to food, tea and nutraceutical manufacturers worldwide — a concise introduction to the company for international buyers.",
      storyTitle: "Our story",
      storyP1:
        "Founded in 1998 as a family farm in the Fayoum basin, we began exporting dried chamomile and hibiscus to European tea packers in 2003 — how the company started and how production developed over time.",
      storyP2:
        "Today we farm and contract over 3,000 feddans, operate two drying lines, an optical sorter and an in-house laboratory, and ship to 46 markets — expansion of facilities, equipment and markets.",
      missionTitle: "Mission",
      mission:
        "To deliver clean, traceable Egyptian botanicals that manufacturers can buy with confidence, season after season.",
      visionTitle: "Vision",
      vision:
        "To be the most trusted source of medicinal plants and agricultural produce from the Nile Valley.",
      valuesTitle: "Values",
      values:
        "Traceability, food safety, fair partnership with growers, and consistency in every shipment.",
      capTitle: "Manufacturing capabilities",
      capText:
        "Production, inspection, packaging and dispatch handled within one controlled facility.",
      cap1Title: "Production lines",
      cap1Text:
        "Cleaning, cutting, sifting, milling and blending lines for herbs, spices and seeds.",
      cap2Title: "Quality inspection",
      cap2Text:
        "In-house laboratory for moisture, volatile oil, purity, microbiology and pesticide screening.",
      cap3Title: "Warehouse & logistics",
      cap3Text:
        "Climate-controlled warehousing, palletising and container loading at Alexandria and Damietta ports.",
      whyTitle: "Why choose us",
      why1: "Direct contracts with growers across 3,000+ feddans",
      why2: "Lot-level traceability from field to container",
      why3: "In-house laboratory and optical sorting",
      why4: "Reliable 14–21 day lead times to EU ports",
    },
    quality: {
      eyebrow: "Quality",
      title: "A controlled process, end to end",
      text: "Each stage is documented so any batch can be traced back through production.",
      s1: "Raw Material Inspection",
      s1Text:
        "Incoming crops are graded, sampled and tested for moisture, purity and residues.",
      s2: "Production Monitoring",
      s2Text:
        "Drying, cleaning and milling parameters are logged for every batch.",
      s3: "Quality Testing",
      s3Text:
        "Laboratory testing for volatile oil, microbiology and aflatoxin.",
      s4: "Final Inspection",
      s4Text: "Optical sorting and metal detection before packing.",
      s5: "Packaging",
      s5Text: "Food-grade bags, liners and private-label retail packs.",
      s6: "Shipment",
      s6Text:
        "Export documents, phytosanitary certificate and container loading.",
    },
    certs: {
      eyebrow: "Certifications",
      title: "Certifications & compliance",
      text: "Placeholder entries — add only certificates the company holds.",
    },
    global: {
      eyebrow: "Global Presence",
      title: "Supplying international markets",
      text: "We ship regularly to the EU, UK, USA, Gulf states, Japan and South Africa — list the regions the company actually ships to.",
      r1: "Markets served",
      r2: "Active regions",
      r3: "Shipping ports",
      r4: "Partner distributors",
    },
    finalCta: {
      title: "Let's build a reliable supply partnership",
      text: "Contact our team for product information, specifications, samples, pricing and export inquiries.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to our export team",
      lead: "Send your requirement and we will respond with specifications, formats and commercial terms.",
      infoTitle: "Contact information",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Address",
      hours: "Business hours",
      mapTitle: "Factory location",
      mapNote:
        "Map location is a placeholder until the factory coordinates are provided.",
    },
    form: {
      title: "Send an inquiry",
      name: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      country: "Country",
      subject: "Subject",
      message: "Message",
      required: "Required",
      optional: "Optional",
      submit: "Send inquiry",
      sending: "Sending…",
      errName: "Please enter your full name.",
      errEmail: "Please enter a valid email address.",
      errPhone: "Please enter a valid phone number.",
      errMessage: "Please write at least 20 characters.",
      errGeneric: "Something went wrong. Please try again.",
      notConfigured:
        "This form is not connected to a mail service yet. Please contact us directly by email or WhatsApp.",
      success:
        "Thank you. Your inquiry has been sent — our team will reply shortly.",
    },
    footer: {
      about:
        "Nile Botanica grows, processes and exports Egyptian medicinal plants, herbs, spices, seeds and dehydrated vegetables to food, tea and nutraceutical manufacturers worldwide — one short paragraph describing the company for the footer.",
      links: "Quick links",
      cats: "Product categories",
      contact: "Contact",
      follow: "Follow us",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
    },
    errors: {
      productNotFound: "Product not found",
      productNotFoundText:
        "The product you are looking for is unavailable or has been removed.",
      articleNotFound: "Article not found",
      articleNotFoundText:
        "The article you are looking for is unavailable or has been removed.",
      noResults: "No products match your search.",
      noResultsText: "Try a different keyword or clear the filters.",
      clear: "Clear filters",
      loading: "Loading…",
    },
    gallery: {
      eyebrow: "Our World",
      title: "Gallery",
      lead: "Inside our farms, drying halls, laboratory and export warehouse.",
      all: "All",
    },
    catalogue: {
      eyebrow: "Downloads",
      title: "Product catalogue",
      lead: "Download the 2026 export catalogue or browse the range online.",
      download: "Download PDF",
      request: "Request printed copy",
      size: "PDF · 4.2 MB · EN/AR",
    },
    breadcrumb: { home: "Home", products: "Products", news: "News" },
  },

  ar: {
    meta: { suffix: "نايل بوتانيكا" },
    nav: {
      gallery: "المعرض",
      catalogue: "الكتالوج",
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      news: "الأخبار",
      contact: "تواصل معنا",
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
      readMore: "اقرأ المزيد",
      allNews: "كل الأخبار",
      about: "عن الشركة",
      inquiry: "طلب معلومات",
      capabilities: "اكتشف إمكانياتنا",
      back: "رجوع",
      top: "العودة للأعلى",
    },
    hero: {
      eyebrow: "النباتات الطبية والتصدير الزراعي",
      title: "من حقول وادي النيل إلى صناعات الغذاء والصحة حول العالم",
      text: "تزرع نايل بوتانيكا وتصنّع وتصدّر النباتات الطبية والأعشاب والتوابل والبذور والخضروات المجففة المصرية إلى مصانع الأغذية والشاي والمكملات حول العالم — بيان قصير يوضح ما ينتجه المصنع والأسواق التي يخدمها والمعايير التي يعمل بها.",
      scroll: "مرِّر",
    },
    trust: {
      title: "نبني على الإجراءات لا على الوعود",
      text: "يُنتج كل طلب في ظروف مضبوطة، ويُوثَّق ويُفحص قبل مغادرة المصنع.",
      a: "تميّز في التصنيع",
      aText: "خطوط إنتاج مضبوطة يديرها فنيون مدرَّبون.",
      b: "رقابة جودة صارمة",
      bText: "فحص عند الاستلام وأثناء الإنتاج وقبل الشحن.",
      c: "تصدير عالمي",
      cText: "مستندات وتغليف مُعدّة للشحن الدولي.",
      d: "توريد موثوق",
      dText: "طاقة إنتاجية مخططة وسياسة مخزون للطلبات المتكررة.",
    },
    intro: {
      eyebrow: "الشركة",
      title: "مُصنّع مبني على شراكات صناعية طويلة الأمد",
      p1: "تزرع نايل بوتانيكا وتصنّع وتصدّر النباتات الطبية والأعشاب والتوابل والبذور والخضروات المجففة المصرية إلى مصانع الأغذية والشاي والمكملات حول العالم — تعريف بالشركة ونشاطها الإنتاجي والقطاعات التي تخدمها.",
      p2: "نتعاقد مباشرة مع المزارعين، ونتحكم في التجفيف والتنظيف داخل مصنعنا، ونفحص كل دفعة قبل الشحن — فالجودة عندنا إجراء وليست وعداً — فلسفة التصنيع: انضباط العمليات والاستثمار في المعدات والكوادر.",
      s1: "منشأة إنتاج مملوكة",
      s2: "مختبر جودة داخلي",
      s3: "مستندات جاهزة للتصدير",
    },
    stats: {
      title: "الشركة بالأرقام",
      note: "أرقام تجريبية — استبدلها ببيانات موثقة.",
      years: "سنوات الخبرة",
      markets: "أسواق التصدير",
      capacity: "الإنتاج السنوي",
      products: "المنتجات",
    },
    categories: {
      eyebrow: "نطاق المنتجات",
      title: "فئات المنتجات",
      text: "فئات منظمة تتيح للمشتري الانتقال سريعاً من الفئة إلى المواصفة.",
      herbs: {
        name: "الأعشاب الطبية",
        desc: "بابونج وكركديه ونعناع وغيرها — كاملة أو مقطعة أو منخولة.",
      },
      spices: {
        name: "التوابل والبهارات",
        desc: "توابل مفردة وخلطات خاصة تُطحن تحت تحكم حراري.",
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
      featuredTitle: "منتجات مختارة",
      featuredText: "مجموعة من الكتالوج الحالي.",
      title: "المنتجات",
      lead: "تصفح النطاق الكامل. صنّف حسب الفئة أو ابحث بالاسم أو الكود.",
      search: "البحث في المنتجات",
      searchPlaceholder: "ابحث بالاسم أو الكود…",
      all: "الكل",
      filter: "تصفية حسب الفئة",
      sort: "ترتيب",
      sortDefault: "افتراضي",
      sortAZ: "الاسم أ–ي",
      sortZA: "الاسم ي–أ",
      results: "منتج",
      code: "الكود",
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
      inquiryText: "أرسل تفاصيل طلبك وسيرد فريق التصدير بمستندات المنتج كاملة.",
      gallery: "معرض المنتج",
      thumb: "عرض الصورة",
    },
    news: {
      eyebrow: "الجديد",
      title: "الأخبار والتحديثات",
      lead: "إعلانات الشركة وتحديثات الإنتاج وأخبار التصدير.",
      homeTitle: "أحدث الأخبار",
      homeText: "تحديثات من المصنع وقسم التصدير.",
      related: "مقالات ذات صلة",
      back: "العودة إلى الأخبار",
      categories: {
        company: "الشركة",
        production: "الإنتاج",
        export: "التصدير",
        quality: "الجودة",
      },
    },
    about: {
      eyebrow: "من نحن",
      title: "تصنيع بهدف واضح",
      lead: "تزرع نايل بوتانيكا وتصنّع وتصدّر النباتات الطبية والأعشاب والتوابل والبذور والخضروات المجففة المصرية إلى مصانع الأغذية والشاي والمكملات حول العالم — مقدمة موجزة عن الشركة للمشترين الدوليين.",
      storyTitle: "قصتنا",
      storyP1:
        "تأسست عام 1998 كمزرعة عائلية في الفيوم، وبدأنا تصدير البابونج والكركديه المجفف إلى معبئي الشاي في أوروبا عام 2003 — كيف بدأت الشركة وكيف تطور الإنتاج.",
      storyP2:
        "نزرع ونتعاقد اليوم على أكثر من 3000 فدان، ونشغّل خطي تجفيف وفارزة ضوئية ومعملاً داخلياً، ونصدّر إلى 46 سوقاً — التوسع في المنشآت والمعدات والأسواق.",
      missionTitle: "الرسالة",
      mission:
        "توفير نباتات مصرية نظيفة وقابلة للتتبع يشتريها المصنّعون بثقة، موسماً بعد موسم.",
      visionTitle: "الرؤية",
      vision:
        "أن نكون المصدر الأكثر ثقة للنباتات الطبية والمحاصيل الزراعية من وادي النيل.",
      valuesTitle: "القيم",
      values:
        "التتبع، سلامة الغذاء، الشراكة العادلة مع المزارعين، وثبات الجودة في كل شحنة.",
      capTitle: "الإمكانيات التصنيعية",
      capText: "الإنتاج والفحص والتغليف والشحن داخل منشأة واحدة مضبوطة.",
      cap1Title: "خطوط الإنتاج",
      cap1Text: "خطوط تنظيف وتقطيع ونخل وطحن وخلط للأعشاب والتوابل والبذور.",
      cap2Title: "فحص الجودة",
      cap2Text:
        "معمل داخلي لفحص الرطوبة والزيوت الطيارة والنقاء والميكروبيولوجيا والمبيدات.",
      cap3Title: "المستودعات والخدمات اللوجستية",
      cap3Text:
        "مخازن مضبوطة المناخ وتحميل الحاويات عبر ميناءي الإسكندرية ودمياط.",
      whyTitle: "لماذا نحن",
      why1: "تعاقدات مباشرة مع مزارعين على أكثر من 3000 فدان",
      why2: "تتبع على مستوى الدفعة من الحقل إلى الحاوية",
      why3: "معمل داخلي وفرز ضوئي",
      why4: "مهل تسليم موثوقة 14–21 يوماً إلى موانئ أوروبا",
    },
    quality: {
      eyebrow: "الجودة",
      title: "عملية مضبوطة من البداية إلى النهاية",
      text: "كل مرحلة موثقة بحيث يمكن تتبع أي دفعة عبر الإنتاج.",
      s1: "فحص المواد الخام",
      s1Text:
        "فرز المحاصيل الواردة وأخذ عينات وفحص الرطوبة والنقاء والمتبقيات.",
      s2: "مراقبة الإنتاج",
      s2Text: "تسجيل معايير التجفيف والتنظيف والطحن لكل دفعة.",
      s3: "اختبارات الجودة",
      s3Text: "اختبارات معملية للزيوت الطيارة والميكروبيولوجيا والأفلاتوكسين.",
      s4: "الفحص النهائي",
      s4Text: "فرز ضوئي وكشف معادن قبل التعبئة.",
      s5: "التعبئة",
      s5Text: "أكياس غذائية وبطانات وعبوات تجزئة بعلامة العميل.",
      s6: "الشحن",
      s6Text: "مستندات التصدير والشهادة الزراعية وتحميل الحاويات.",
    },
    certs: {
      eyebrow: "الشهادات",
      title: "الشهادات والامتثال",
      text: "مدخلات تجريبية — أضف الشهادات الفعلية فقط.",
    },
    global: {
      eyebrow: "الحضور العالمي",
      title: "نخدم أسواقاً دولية",
      text: "نشحن بانتظام إلى الاتحاد الأوروبي وبريطانيا والولايات المتحدة ودول الخليج واليابان وجنوب أفريقيا — اذكر المناطق التي تشحن إليها الشركة فعلياً.",
      r1: "الأسواق المخدومة",
      r2: "المناطق النشطة",
      r3: "موانئ الشحن",
      r4: "موزعون شركاء",
    },
    finalCta: {
      title: "لنبنِ شراكة توريد موثوقة",
      text: "تواصل مع فريقنا للحصول على معلومات المنتجات والمواصفات والعينات والأسعار واستفسارات التصدير.",
    },
    contact: {
      eyebrow: "تواصل",
      title: "تحدث مع فريق التصدير",
      lead: "أرسل متطلباتك وسنرد بالمواصفات والصيغ والشروط التجارية.",
      infoTitle: "معلومات التواصل",
      phone: "الهاتف",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      address: "العنوان",
      hours: "ساعات العمل",
      mapTitle: "موقع المصنع",
      mapNote: "الموقع على الخريطة تجريبي حتى تتوفر إحداثيات المصنع.",
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
        "النموذج غير مرتبط بخدمة بريد بعد. يرجى التواصل معنا عبر البريد أو واتساب.",
      success: "شكراً لك. تم إرسال استفسارك وسيرد فريقنا قريباً.",
    },
    footer: {
      about:
        "تزرع نايل بوتانيكا وتصنّع وتصدّر النباتات الطبية والأعشاب والتوابل والبذور والخضروات المجففة المصرية إلى مصانع الأغذية والشاي والمكملات حول العالم — فقرة قصيرة تعرّف بالشركة في التذييل.",
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
      articleNotFound: "المقال غير موجود",
      articleNotFoundText: "المقال المطلوب غير متاح أو تمت إزالته.",
      noResults: "لا توجد منتجات مطابقة لبحثك.",
      noResultsText: "جرّب كلمة أخرى أو امسح عوامل التصفية.",
      clear: "مسح التصفية",
      loading: "جارٍ التحميل…",
    },
    gallery: {
      eyebrow: "عالمنا",
      title: "معرض الصور",
      lead: "من داخل مزارعنا وصالات التجفيف والمعمل ومخازن التصدير.",
      all: "الكل",
    },
    catalogue: {
      eyebrow: "التحميلات",
      title: "كتالوج المنتجات",
      lead: "حمّل كتالوج التصدير 2026 أو تصفح المجموعة عبر الموقع.",
      download: "تحميل PDF",
      request: "طلب نسخة مطبوعة",
      size: "PDF · 4.2 ميجابايت · عربي/إنجليزي",
    },
    breadcrumb: { home: "الرئيسية", products: "المنتجات", news: "الأخبار" },
  },

  es: {
    meta: { suffix: "Nile Botanica" },
    nav: {
      gallery: "Galería",
      catalogue: "Catálogo",
      home: "Inicio",
      about: "Nosotros",
      products: "Productos",
      news: "Noticias",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar menú",
      open: "Abrir menú",
      language: "Idioma",
      theme: "Cambiar tema",
      skip: "Ir al contenido principal",
    },
    cta: {
      explore: "Ver productos",
      contact: "Contactar al equipo",
      details: "Ver detalles",
      viewProducts: "Ver productos",
      readMore: "Leer más",
      allNews: "Todas las noticias",
      about: "Sobre la empresa",
      inquiry: "Solicitar información",
      capabilities: "Descubrir capacidades",
      back: "Volver",
      top: "Volver arriba",
    },
    hero: {
      eyebrow: "Plantas medicinales y exportación agrícola",
      title:
        "De los campos del valle del Nilo a la industria alimentaria mundial",
      text: "Nile Botanica cultiva, procesa y exporta plantas medicinales, hierbas, especias, semillas y verduras deshidratadas de Egipto para fabricantes de alimentos, té y nutracéuticos — declaración breve sobre lo que fabrica la planta, los mercados que atiende y sus estándares.",
      scroll: "Desplazar",
    },
    trust: {
      title: "Basado en procesos, no en promesas",
      text: "Cada pedido se produce en condiciones controladas, se documenta y se inspecciona antes de salir de la planta.",
      a: "Excelencia en fabricación",
      aText: "Líneas controladas operadas por técnicos cualificados.",
      b: "Control de calidad estricto",
      bText: "Inspección en recepción, en proceso y antes del despacho.",
      c: "Exportación global",
      cText: "Documentación y embalaje preparados para envío internacional.",
      d: "Suministro fiable",
      dText:
        "Capacidad planificada y política de stock para volúmenes recurrentes.",
    },
    intro: {
      eyebrow: "La empresa",
      title: "Un fabricante para alianzas industriales de largo plazo",
      p1: "Nile Botanica cultiva, procesa y exporta plantas medicinales, hierbas, especias, semillas y verduras deshidratadas de Egipto para fabricantes de alimentos, té y nutracéuticos — presentación de la empresa, su actividad productiva y los sectores que abastece.",
      p2: "Contratamos directamente con los agricultores, controlamos el secado y la limpieza en nuestra planta y analizamos cada lote antes del envío — filosofía de fabricación: disciplina de proceso, inversión en equipos y personas.",
      s1: "Planta propia",
      s2: "Laboratorio de calidad interno",
      s3: "Documentación lista para exportar",
    },
    stats: {
      title: "La empresa en cifras",
      note: "Cifras de ejemplo — sustituir por datos verificados.",
      years: "Años de experiencia",
      markets: "Mercados de exportación",
      capacity: "Producción anual",
      products: "Productos",
    },
    categories: {
      eyebrow: "Gama",
      title: "Categorías de producto",
      text: "Gamas organizadas para pasar rápido de la categoría a la especificación.",
      herbs: {
        name: "Hierbas medicinales",
        desc: "Manzanilla, hibisco, menta y más: enteras, cortadas o tamizadas.",
      },
      spices: {
        name: "Especias y condimentos",
        desc: "Especias puras y mezclas a medida, molidas con control de temperatura.",
      },
      seeds: {
        name: "Semillas",
        desc: "Hinojo, alcaravea, sésamo y comino negro, limpiados al 99,5%+.",
      },
      dehydrated: {
        name: "Verduras deshidratadas",
        desc: "Cebolla, ajo, tomate y pimiento en copos, gránulos o polvo.",
      },
    },
    products: {
      eyebrow: "Catálogo",
      featuredTitle: "Productos destacados",
      featuredText: "Una selección del catálogo actual.",
      title: "Productos",
      lead: "Explore la gama completa. Filtre por categoría o busque por nombre o código.",
      search: "Buscar productos",
      searchPlaceholder: "Buscar por nombre o código…",
      all: "Todos",
      filter: "Filtrar por categoría",
      sort: "Ordenar",
      sortDefault: "Predeterminado",
      sortAZ: "Nombre A–Z",
      sortZA: "Nombre Z–A",
      results: "productos",
      code: "Código",
    },
    product: {
      overview: "Descripción",
      features: "Características clave",
      specifications: "Especificaciones",
      applications: "Aplicaciones",
      packaging: "Embalaje y formatos",
      certifications: "Certificaciones",
      related: "También le puede interesar",
      inquiryTitle: "¿Necesita especificaciones, muestras o precios?",
      inquiryText:
        "Envíenos los detalles de su requerimiento y nuestro equipo de exportación responderá con la documentación completa.",
      gallery: "Galería del producto",
      thumb: "Mostrar imagen",
    },
    news: {
      eyebrow: "Novedades",
      title: "Noticias y actualizaciones",
      lead: "Anuncios de la empresa, novedades de producción y exportación.",
      homeTitle: "Últimas noticias",
      homeText: "Actualizaciones de la planta y del área de exportación.",
      related: "Artículos relacionados",
      back: "Volver a noticias",
      categories: {
        company: "Empresa",
        production: "Producción",
        export: "Exportación",
        quality: "Calidad",
      },
    },
    about: {
      eyebrow: "Nosotros",
      title: "Fabricar con intención",
      lead: "Nile Botanica cultiva, procesa y exporta plantas medicinales, hierbas, especias, semillas y verduras deshidratadas de Egipto para fabricantes de alimentos, té y nutracéuticos — introducción concisa para compradores internacionales.",
      storyTitle: "Nuestra historia",
      storyP1:
        "Fundada en 1998 como finca familiar en la cuenca de Fayoum, empezamos a exportar manzanilla e hibisco secos a Europa en 2003 — cómo empezó la empresa y cómo evolucionó la producción.",
      storyP2:
        "Hoy cultivamos más de 3.000 feddans, operamos dos líneas de secado y un laboratorio propio, y enviamos a 46 mercados — ampliación de instalaciones, equipos y mercados.",
      missionTitle: "Misión",
      mission:
        "Entregar botánicos egipcios limpios y trazables en los que los fabricantes puedan confiar, temporada tras temporada.",
      visionTitle: "Visión",
      vision:
        "Ser la fuente más confiable de plantas medicinales y productos agrícolas del valle del Nilo.",
      valuesTitle: "Valores",
      values:
        "Trazabilidad, seguridad alimentaria, alianzas justas con los agricultores y consistencia en cada envío.",
      capTitle: "Capacidades de fabricación",
      capText:
        "Producción, inspección, embalaje y expedición en una única planta controlada.",
      cap1Title: "Líneas de producción",
      cap1Text:
        "Líneas de limpieza, corte, tamizado, molienda y mezcla de hierbas, especias y semillas.",
      cap2Title: "Inspección de calidad",
      cap2Text:
        "Laboratorio propio para humedad, aceite esencial, pureza, microbiología y pesticidas.",
      cap3Title: "Almacén y logística",
      cap3Text:
        "Almacenes climatizados y carga de contenedores en Alejandría y Damieta.",
      whyTitle: "Por qué elegirnos",
      why1: "Contratos directos con agricultores en más de 3.000 feddans",
      why2: "Trazabilidad por lote del campo al contenedor",
      why3: "Laboratorio propio y clasificación óptica",
      why4: "Plazos fiables de 14–21 días a puertos de la UE",
    },
    quality: {
      eyebrow: "Calidad",
      title: "Un proceso controlado de principio a fin",
      text: "Cada etapa se documenta para poder trazar cualquier lote.",
      s1: "Inspección de materia prima",
      s1Text:
        "Las cosechas entrantes se clasifican y analizan (humedad, pureza, residuos).",
      s2: "Control de producción",
      s2Text:
        "Se registran los parámetros de secado, limpieza y molienda de cada lote.",
      s3: "Ensayos de calidad",
      s3Text: "Análisis de aceite esencial, microbiología y aflatoxinas.",
      s4: "Inspección final",
      s4Text: "Clasificación óptica y detección de metales antes del envasado.",
      s5: "Embalaje",
      s5Text: "Sacos alimentarios, forros y envases de marca del cliente.",
      s6: "Expedición",
      s6Text: "Documentos de exportación, certificado fitosanitario y carga.",
    },
    certs: {
      eyebrow: "Certificaciones",
      title: "Certificaciones y cumplimiento",
      text: "Entradas de ejemplo — añada solo certificados reales.",
    },
    global: {
      eyebrow: "Presencia global",
      title: "Abasteciendo mercados internacionales",
      text: "Enviamos con regularidad a la UE, Reino Unido, EE. UU., el Golfo, Japón y Sudáfrica — indique las regiones a las que la empresa realmente exporta.",
      r1: "Mercados atendidos",
      r2: "Regiones activas",
      r3: "Puertos de embarque",
      r4: "Distribuidores asociados",
    },
    finalCta: {
      title: "Construyamos una alianza de suministro fiable",
      text: "Contacte a nuestro equipo para información de producto, especificaciones, muestras, precios y exportación.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hable con nuestro equipo de exportación",
      lead: "Envíe su requerimiento y responderemos con especificaciones, formatos y condiciones comerciales.",
      infoTitle: "Información de contacto",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      email: "Correo",
      address: "Dirección",
      hours: "Horario",
      mapTitle: "Ubicación de la planta",
      mapNote:
        "La ubicación del mapa es provisional hasta disponer de las coordenadas reales.",
    },
    form: {
      title: "Enviar consulta",
      name: "Nombre completo",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono",
      country: "País",
      subject: "Asunto",
      message: "Mensaje",
      required: "Obligatorio",
      optional: "Opcional",
      submit: "Enviar consulta",
      sending: "Enviando…",
      errName: "Introduzca su nombre completo.",
      errEmail: "Introduzca un correo válido.",
      errPhone: "Introduzca un teléfono válido.",
      errMessage: "Escriba al menos 20 caracteres.",
      errGeneric: "Algo salió mal. Inténtelo de nuevo.",
      notConfigured:
        "El formulario aún no está conectado a un servicio de correo. Contáctenos por email o WhatsApp.",
      success:
        "Gracias. Su consulta ha sido enviada — le responderemos en breve.",
    },
    footer: {
      about:
        "Nile Botanica cultiva, procesa y exporta plantas medicinales, hierbas, especias, semillas y verduras deshidratadas de Egipto para fabricantes de alimentos, té y nutracéuticos — párrafo breve sobre la empresa para el pie de página.",
      links: "Enlaces rápidos",
      cats: "Categorías",
      contact: "Contacto",
      follow: "Síganos",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
      rights: "Todos los derechos reservados.",
    },
    errors: {
      productNotFound: "Producto no encontrado",
      productNotFoundText: "El producto solicitado no está disponible.",
      articleNotFound: "Artículo no encontrado",
      articleNotFoundText: "El artículo solicitado no está disponible.",
      noResults: "Ningún producto coincide con su búsqueda.",
      noResultsText: "Pruebe otra palabra o borre los filtros.",
      clear: "Borrar filtros",
      loading: "Cargando…",
    },
    gallery: {
      eyebrow: "Nuestro mundo",
      title: "Galería",
      lead: "Nuestros campos, salas de secado, laboratorio y almacén de exportación.",
      all: "Todo",
    },
    catalogue: {
      eyebrow: "Descargas",
      title: "Catálogo de productos",
      lead: "Descargue el catálogo de exportación 2026 o explore la gama en línea.",
      download: "Descargar PDF",
      request: "Solicitar copia impresa",
      size: "PDF · 4,2 MB · EN/AR",
    },
    breadcrumb: { home: "Inicio", products: "Productos", news: "Noticias" },
  },

  ru: {
    meta: { suffix: "Nile Botanica" },
    nav: {
      gallery: "Галерея",
      catalogue: "Каталог",
      home: "Главная",
      about: "О компании",
      products: "Продукция",
      news: "Новости",
      contact: "Контакты",
      menu: "Меню",
      close: "Закрыть меню",
      open: "Открыть меню",
      language: "Язык",
      theme: "Сменить тему",
      skip: "Перейти к содержимому",
    },
    cta: {
      explore: "Смотреть продукцию",
      contact: "Связаться с нами",
      details: "Подробнее",
      viewProducts: "Смотреть продукцию",
      readMore: "Читать далее",
      allNews: "Все новости",
      about: "О компании",
      inquiry: "Запросить информацию",
      capabilities: "Наши возможности",
      back: "Назад",
      top: "Наверх",
    },
    hero: {
      eyebrow: "Лекарственные растения и агроэкспорт",
      title: "С полей долины Нила в мировую пищевую индустрию",
      text: "Nile Botanica выращивает, перерабатывает и экспортирует египетские лекарственные растения, травы, специи, семена и сушёные овощи для производителей продуктов питания, чая и нутрицевтиков — краткое описание того, что производит завод, какие рынки обслуживает и по каким стандартам работает.",
      scroll: "Прокрутить",
    },
    trust: {
      title: "Опора на процессы, а не на обещания",
      text: "Каждый заказ производится в контролируемых условиях, документируется и проверяется перед отгрузкой.",
      a: "Производственное совершенство",
      aText: "Контролируемые линии и обученные специалисты.",
      b: "Строгий контроль качества",
      bText: "Проверка на входе, в процессе и перед отправкой.",
      c: "Глобальный экспорт",
      cText: "Документы и упаковка для международных перевозок.",
      d: "Надёжные поставки",
      dText: "Плановые мощности и складская политика для регулярных объёмов.",
    },
    intro: {
      eyebrow: "Компания",
      title: "Производитель для долгосрочных промышленных партнёрств",
      p1: "Nile Botanica выращивает, перерабатывает и экспортирует египетские лекарственные растения, травы, специи, семена и сушёные овощи для производителей продуктов питания, чая и нутрицевтиков — о компании, её производстве и обслуживаемых отраслях.",
      p2: "Мы работаем напрямую с фермерами, контролируем сушку и очистку на собственном заводе и проверяем каждую партию перед отгрузкой — философия производства: дисциплина процессов, инвестиции в оборудование и людей.",
      s1: "Собственное производство",
      s2: "Внутренняя лаборатория качества",
      s3: "Экспортная документация",
    },
    stats: {
      title: "Компания в цифрах",
      note: "Условные значения — замените проверенными данными.",
      years: "Лет опыта",
      markets: "Экспортных рынков",
      capacity: "Годовой выпуск",
      products: "Продуктов",
    },
    categories: {
      eyebrow: "Ассортимент",
      title: "Категории продукции",
      text: "Структурированные линейки: от категории к спецификации за пару кликов.",
      herbs: {
        name: "Лекарственные травы",
        desc: "Ромашка, гибискус, мята и другое — целые, резаные или просеянные.",
      },
      spices: {
        name: "Специи и приправы",
        desc: "Моноспеции и купажи, помол с контролем температуры.",
      },
      seeds: {
        name: "Семена",
        desc: "Фенхель, тмин, кунжут и чёрный тмин, очистка 99,5%+.",
      },
      dehydrated: {
        name: "Сушёные овощи",
        desc: "Лук, чеснок, томат и перец: хлопья, гранулы или порошок.",
      },
    },
    products: {
      eyebrow: "Каталог",
      featuredTitle: "Избранная продукция",
      featuredText: "Подборка из текущего каталога.",
      title: "Продукция",
      lead: "Полный ассортимент. Фильтруйте по категории или ищите по названию и коду.",
      search: "Поиск по продукции",
      searchPlaceholder: "Название или код…",
      all: "Все",
      filter: "Фильтр по категории",
      sort: "Сортировка",
      sortDefault: "По умолчанию",
      sortAZ: "Название А–Я",
      sortZA: "Название Я–А",
      results: "продуктов",
      code: "Код",
    },
    product: {
      overview: "Описание",
      features: "Ключевые характеристики",
      specifications: "Технические данные",
      applications: "Применение",
      packaging: "Упаковка и форматы",
      certifications: "Сертификаты",
      related: "Вам также может подойти",
      inquiryTitle: "Нужны спецификации, образцы или цены?",
      inquiryText:
        "Пришлите детали запроса — экспортный отдел ответит с полной документацией.",
      gallery: "Галерея продукта",
      thumb: "Показать изображение",
    },
    news: {
      eyebrow: "Что нового",
      title: "Новости и обновления",
      lead: "Объявления компании, новости производства и экспорта.",
      homeTitle: "Последние новости",
      homeText: "Обновления с завода и экспортного отдела.",
      related: "Похожие статьи",
      back: "К новостям",
      categories: {
        company: "Компания",
        production: "Производство",
        export: "Экспорт",
        quality: "Качество",
      },
    },
    about: {
      eyebrow: "О компании",
      title: "Осмысленное производство",
      lead: "Nile Botanica выращивает, перерабатывает и экспортирует египетские лекарственные растения, травы, специи, семена и сушёные овощи для производителей продуктов питания, чая и нутрицевтиков — краткое представление компании для международных покупателей.",
      storyTitle: "Наша история",
      storyP1:
        "Компания основана в 1998 году как семейная ферма в оазисе Файюм; экспорт сушёной ромашки и гибискуса в Европу начался в 2003 году — как начиналась компания и развивалось производство.",
      storyP2:
        "Сегодня мы обрабатываем более 3000 федданов, используем две линии сушки и собственную лабораторию и поставляем продукцию на 46 рынков — расширение площадей, оборудования и рынков.",
      missionTitle: "Миссия",
      mission:
        "Поставлять чистое и прослеживаемое египетское сырьё, которому производители доверяют из сезона в сезон.",
      visionTitle: "Видение",
      vision:
        "Быть самым надёжным источником лекарственных растений и сельхозпродукции из долины Нила.",
      valuesTitle: "Ценности",
      values:
        "Прослеживаемость, пищевая безопасность, честное партнёрство с фермерами и стабильное качество.",
      capTitle: "Производственные возможности",
      capText: "Производство, контроль, упаковка и отгрузка на одной площадке.",
      cap1Title: "Производственные линии",
      cap1Text:
        "Линии очистки, резки, просеивания, помола и купажирования трав, специй и семян.",
      cap2Title: "Контроль качества",
      cap2Text:
        "Собственная лаборатория: влажность, эфирные масла, чистота, микробиология, пестициды.",
      cap3Title: "Склад и логистика",
      cap3Text:
        "Склады с контролем климата и загрузка контейнеров в Александрии и Дамьетте.",
      whyTitle: "Почему мы",
      why1: "Прямые контракты с фермерами на 3000+ федданов",
      why2: "Прослеживаемость партии от поля до контейнера",
      why3: "Собственная лаборатория и оптическая сортировка",
      why4: "Надёжные сроки 14–21 день до портов ЕС",
    },
    quality: {
      eyebrow: "Качество",
      title: "Контролируемый процесс от начала до конца",
      text: "Каждый этап документируется — любая партия прослеживается.",
      s1: "Входной контроль сырья",
      s1Text:
        "Поступающее сырьё сортируется и проверяется на влажность, чистоту и остатки.",
      s2: "Контроль производства",
      s2Text: "Параметры сушки, очистки и помола фиксируются по каждой партии.",
      s3: "Испытания качества",
      s3Text:
        "Лабораторные анализы на эфирные масла, микробиологию и афлатоксины.",
      s4: "Финальная проверка",
      s4Text: "Оптическая сортировка и металлодетекция перед фасовкой.",
      s5: "Упаковка",
      s5Text: "Пищевые мешки, вкладыши и упаковка под маркой клиента.",
      s6: "Отгрузка",
      s6Text: "Экспортные документы, фитосанитарный сертификат и загрузка.",
    },
    certs: {
      eyebrow: "Сертификаты",
      title: "Сертификация и соответствие",
      text: "Условные записи — добавляйте только реальные сертификаты.",
    },
    global: {
      eyebrow: "Глобальное присутствие",
      title: "Поставки на международные рынки",
      text: "Мы регулярно отгружаем в ЕС, Великобританию, США, страны Залива, Японию и ЮАР — укажите регионы, куда компания действительно поставляет продукцию.",
      r1: "Обслуживаемых рынков",
      r2: "Активных регионов",
      r3: "Портов отгрузки",
      r4: "Партнёров-дистрибьюторов",
    },
    finalCta: {
      title: "Построим надёжное партнёрство по поставкам",
      text: "Свяжитесь с нами для получения информации о продукции, спецификаций, образцов, цен и экспортных условий.",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Свяжитесь с экспортным отделом",
      lead: "Отправьте запрос — ответим спецификациями, форматами и коммерческими условиями.",
      infoTitle: "Контактная информация",
      phone: "Телефон",
      whatsapp: "WhatsApp",
      email: "Эл. почта",
      address: "Адрес",
      hours: "Часы работы",
      mapTitle: "Расположение завода",
      mapNote: "Точка на карте условная — до предоставления координат завода.",
    },
    form: {
      title: "Отправить запрос",
      name: "Полное имя",
      company: "Компания",
      email: "Эл. почта",
      phone: "Телефон",
      country: "Страна",
      subject: "Тема",
      message: "Сообщение",
      required: "Обязательно",
      optional: "Необязательно",
      submit: "Отправить запрос",
      sending: "Отправка…",
      errName: "Укажите полное имя.",
      errEmail: "Укажите корректный адрес эл. почты.",
      errPhone: "Укажите корректный телефон.",
      errMessage: "Напишите минимум 20 символов.",
      errGeneric: "Что-то пошло не так. Попробуйте ещё раз.",
      notConfigured:
        "Форма пока не подключена к почтовому сервису. Напишите нам на email или в WhatsApp.",
      success: "Спасибо. Запрос отправлен — мы скоро ответим.",
    },
    footer: {
      about:
        "Nile Botanica выращивает, перерабатывает и экспортирует египетские лекарственные растения, травы, специи, семена и сушёные овощи для производителей продуктов питания, чая и нутрицевтиков — короткий абзац о компании для подвала сайта.",
      links: "Быстрые ссылки",
      cats: "Категории продукции",
      contact: "Контакты",
      follow: "Мы в сети",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      rights: "Все права защищены.",
    },
    errors: {
      productNotFound: "Продукт не найден",
      productNotFoundText: "Запрошенный продукт недоступен или удалён.",
      articleNotFound: "Статья не найдена",
      articleNotFoundText: "Запрошенная статья недоступна или удалена.",
      noResults: "Нет продуктов, соответствующих запросу.",
      noResultsText: "Попробуйте другое слово или сбросьте фильтры.",
      clear: "Сбросить фильтры",
      loading: "Загрузка…",
    },
    gallery: {
      eyebrow: "Наш мир",
      title: "Галерея",
      lead: "Наши поля, сушильные цеха, лаборатория и экспортный склад.",
      all: "Все",
    },
    catalogue: {
      eyebrow: "Загрузки",
      title: "Каталог продукции",
      lead: "Скачайте экспортный каталог 2026 или изучите ассортимент онлайн.",
      download: "Скачать PDF",
      request: "Запросить печатный экземпляр",
      size: "PDF · 4,2 МБ · EN/AR",
    },
    breadcrumb: { home: "Главная", products: "Продукция", news: "Новости" },
  },
};

/**
 * animations.js — scroll reveals and viewport-triggered counters.
 * Everything is a no-op when the user prefers reduced motion.
 */

import { formatNumber } from "./language.js";

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
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  targets.forEach((el, i) => {
    if (!el.style.getPropertyValue("--reveal-delay")) {
      const index = Number(el.dataset.revealIndex ?? i % 4);
      el.style.setProperty("--reveal-delay", `${index * 90}ms`);
    }
    io.observe(el);
  });
}

/** Counters animate once, only when scrolled into view. */
export function initCounters(root = document) {
  const counters = root.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const render = (el, value) => {
    el.textContent = formatNumber(value) + (el.dataset.suffix || "");
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

/**
 * catalogue.js — renders the downloadable catalogue index table from product data.
 */
import { products } from "../data/products.js";
import { categories } from "../data/categories.js";
import { t, pick } from "./language.js";

export function initCatalogue() {
  const body = document.querySelector("[data-catalogue-rows]");
  if (!body) return;

  const render = () => {
    body.innerHTML = categories
      .map((cat) => {
        const rows = products
          .filter((p) => p.category === cat.id)
          .map(
            (p) => `
            <tr>
              <td><a href="product-details.html?product=${p.slug}">${pick(p.name)}</a></td>
              <td>${p.code}</td>
              <td>${pick(p.specifications[0].value)}</td>
              <td>${pick(p.packaging[0])}</td>
            </tr>`,
          )
          .join("");
        return `
          <tr class="catalogue-group"><th colspan="4" data-i18n="categories.${cat.id}.name">${t(`categories.${cat.id}.name`)}</th></tr>
          ${rows}`;
      })
      .join("");
  };

  render();
  return render;
}

/**
 * contact.js — accessible client-side validation and submission handling.
 *
 * The form only reports success when `company.formEndpoint` is configured and
 * the request actually succeeds. With no endpoint it tells the user to reach
 * out directly instead of faking a submission.
 */

import { company } from "../data/company.js";
import { t } from "./language.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[+()\-\s\d]{6,24}$/;

function setError(field, message) {
  const wrap = field.closest(".field");
  const slot = wrap?.querySelector(".error");
  wrap?.setAttribute("data-invalid", message ? "true" : "false");
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (slot) slot.textContent = message || "";
}

function validateField(field) {
  const value = field.value.trim();
  const name = field.name;
  let message = "";

  if (name === "name" && value.length < 2) message = t("form.errName");
  if (name === "email" && !EMAIL_RE.test(value)) message = t("form.errEmail");
  if (name === "phone" && value && !PHONE_RE.test(value))
    message = t("form.errPhone");
  if (name === "message" && value.length < 20) message = t("form.errMessage");

  setError(field, message);
  return !message;
}

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector("[data-submit]");
  const submitLabel = submit?.querySelector("span");

  // Pre-fill the subject when arriving from a product inquiry CTA.
  const product = new URLSearchParams(location.search).get("product");
  const subject = form.querySelector('[name="subject"]');
  if (product && subject && !subject.value)
    subject.value = `Inquiry: ${product}`;

  const showStatus = (type, message) => {
    if (!status) return;
    status.hidden = false;
    status.dataset.type = type;
    status.textContent = message;
  };

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim()) validateField(field);
    });
    field.addEventListener("input", () => {
      if (field.closest(".field")?.getAttribute("data-invalid") === "true")
        validateField(field);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status && (status.hidden = true);

    const required = [...form.querySelectorAll("[required], [name='phone']")];
    const valid = required.map(validateField).every(Boolean);
    if (!valid) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      showStatus("error", t("form.errGeneric"));
      return;
    }

    if (!company.formEndpoint) {
      showStatus("info", t("form.notConfigured"));
      return;
    }

    submit.disabled = true;
    if (submitLabel) submitLabel.textContent = t("form.sending");

    try {
      const res = await fetch(company.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      showStatus("success", t("form.success"));
    } catch {
      showStatus("error", t("form.errGeneric"));
    } finally {
      submit.disabled = false;
      if (submitLabel) submitLabel.textContent = t("form.submit");
    }
  });
}

/**
 * gallery.js — data-driven filterable gallery with an accessible lightbox.
 */
import { t } from "./language.js";

export const galleryItems = [
  {
    src: "assets/images/cat-herbs.jpg",
    group: "herbs",
    caption: { en: "Dried chamomile & hibiscus", ar: "بابونج وكركديه مجفف" },
  },
  {
    src: "assets/images/cat-spices.jpg",
    group: "spices",
    caption: { en: "Milled spice range", ar: "مجموعة التوابل المطحونة" },
  },
  {
    src: "assets/images/cat-seeds.jpg",
    group: "seeds",
    caption: { en: "Sortex-cleaned seeds", ar: "بذور منظفة بالسورتكس" },
  },
  {
    src: "assets/images/cat-dehydrated.jpg",
    group: "dehydrated",
    caption: { en: "Dehydrated vegetables", ar: "خضروات مجففة" },
  },
  {
    src: "assets/images/factory-production.jpg",
    group: "facility",
    caption: { en: "Drying & milling hall", ar: "صالة التجفيف والطحن" },
  },
  {
    src: "assets/images/quality-control.jpg",
    group: "facility",
    caption: { en: "In-house laboratory", ar: "المعمل الداخلي" },
  },
  {
    src: "assets/images/logistics.jpg",
    group: "facility",
    caption: { en: "Export warehouse", ar: "مخزن التصدير" },
  },
  {
    src: "assets/images/factory-hero.jpg",
    group: "facility",
    caption: { en: "Processing plant, Fayoum", ar: "مصنع المعالجة بالفيوم" },
  },
  {
    src: "assets/images/product-01.jpg",
    group: "herbs",
    caption: { en: "Whole flower grading", ar: "فرز الزهور الكاملة" },
  },
  {
    src: "assets/images/product-02.jpg",
    group: "spices",
    caption: { en: "Blending station", ar: "محطة الخلط" },
  },
  {
    src: "assets/images/product-03.jpg",
    group: "seeds",
    caption: { en: "Seed cleaning line", ar: "خط تنظيف البذور" },
  },
  {
    src: "assets/images/news-01.jpg",
    group: "facility",
    caption: { en: "Harvest season", ar: "موسم الحصاد" },
  },
];

const GROUPS = ["all", "herbs", "spices", "seeds", "dehydrated", "facility"];

function label(group) {
  if (group === "all") return t("gallery.all");
  if (group === "facility") return t("about.capTitle");
  return t(`categories.${group}.name`);
}

export function initGallery() {
  const filters = document.querySelector("[data-gallery-filters]");
  const grid = document.querySelector("[data-gallery-grid]");
  if (!grid) return;

  let active = "all";
  let visible = [];

  const lang = document.documentElement.lang || "en";
  const cap = (item) => item.caption[lang] || item.caption.en;

  const render = () => {
    visible = galleryItems.filter(
      (i) => active === "all" || i.group === active,
    );
    grid.innerHTML = visible
      .map(
        (item, i) => `
        <button type="button" class="gallery-item" data-index="${i}" data-reveal>
          <img src="${item.src}" alt="${cap(item)}" loading="lazy" width="1200" height="900">
          <span class="gallery-item__cap">${cap(item)}</span>
        </button>`,
      )
      .join("");
  };

  if (filters) {
    filters.innerHTML = GROUPS.map(
      (g) =>
        `<button type="button" class="chip${g === "all" ? " is-active" : ""}" data-group="${g}">${label(g)}</button>`,
    ).join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-group]");
      if (!btn) return;
      active = btn.getAttribute("data-group");
      filters
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.toggle("is-active", c === btn));
      render();
    });
  }

  render();

  /* ---- lightbox ---- */
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `
    <button type="button" class="lightbox__close" data-close aria-label="Close">✕</button>
    <button type="button" class="lightbox__nav lightbox__nav--prev" data-prev aria-label="Previous">‹</button>
    <img alt="">
    <button type="button" class="lightbox__nav lightbox__nav--next" data-next aria-label="Next">›</button>`;
  document.body.appendChild(box);

  const img = box.querySelector("img");
  let index = 0;

  const show = (i) => {
    index = (i + visible.length) % visible.length;
    img.src = visible[index].src;
    img.alt = cap(visible[index]);
  };
  const open = (i) => {
    show(i);
    box.classList.add("is-open");
    document.body.classList.add("is-locked");
    box.querySelector("[data-close]").focus();
  };
  const close = () => {
    box.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  };

  grid.addEventListener("click", (e) => {
    const cell = e.target.closest("[data-index]");
    if (cell) open(Number(cell.getAttribute("data-index")));
  });
  box.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || e.target === box) close();
    if (e.target.closest("[data-next]")) show(index + 1);
    if (e.target.closest("[data-prev]")) show(index - 1);
  });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });
}
/**
 * language.js — translation engine, language persistence and RTL/LTR switching.
 *
 * Bind text with:   <span data-i18n="nav.home"></span>
 * Bind attributes:  <input data-i18n-attr="placeholder:products.searchPlaceholder">
 * Multiple attrs are comma separated.
 */

import { translations, languages } from "../data/translations.js";

const KEY = "site-lang";
const FALLBACK = "en";
const listeners = new Set();

let current = FALLBACK;

export function getLang() {
  return current;
}
export function getLanguages() {
  return languages;
}
export function getDir() {
  return (languages.find((l) => l.code === current) || languages[0]).dir;
}

/** Resolve a dotted key against the current language, falling back to English. */
export function t(key) {
  const read = (lang) =>
    key
      .split(".")
      .reduce(
        (acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined),
        translations[lang],
      );
  const value = read(current);
  if (value !== undefined) return value;
  const fallback = read(FALLBACK);
  return fallback !== undefined ? fallback : key;
}

/** Pick the right value from a multilingual data field ({en, ar, es, ru}). */
export function pick(field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[current] ?? field[FALLBACK] ?? "";
}

export function formatDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  try {
    return new Intl.DateTimeFormat(current, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

export function formatNumber(value) {
  try {
    return new Intl.NumberFormat(current).format(value);
  } catch {
    return String(value);
  }
}

/** Apply translations to a subtree (defaults to the whole document). */
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

/** Register a callback fired whenever the language changes. */
export function onLanguageChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function setLanguage(code, persist = true) {
  if (!translations[code]) code = FALLBACK;
  current = code;
  const lang = languages.find((l) => l.code === code) || languages[0];

  document.documentElement.setAttribute("lang", code);
  document.documentElement.setAttribute("dir", lang.dir);

  if (persist) {
    try {
      localStorage.setItem(KEY, code);
    } catch {
      /* ignore */
    }
  }

  applyTranslations();
  updateTitle();

  document.querySelectorAll("[data-lang-current]").forEach((el) => {
    el.textContent = lang.short;
  });
  document.querySelectorAll("[data-lang-option]").forEach((el) => {
    el.setAttribute(
      "aria-current",
      String(el.getAttribute("data-lang-option") === code),
    );
  });

  listeners.forEach((fn) => fn(code));
}

/** Page <title> and og:title are composed from a data-title-key on <body>. */
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
    stored = localStorage.getItem(KEY);
  } catch {
    /* ignore */
  }
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

/**
 * layout.js — renders the shared header, mobile drawer and footer so that
 * markup lives in exactly one place across all pages.
 */

import { company } from "../data/company.js";
import { categories } from "../data/categories.js";
import { getLanguages } from "./language.js";

const PAGES = [
  { key: "nav.home", href: "index.html", id: "home" },
  { key: "nav.about", href: "about.html", id: "about" },
  {
    key: "nav.products",
    href: "products.html",
    id: "products",
    children: true,
  },
  { key: "nav.gallery", href: "gallery.html", id: "gallery" },
  { key: "nav.contact", href: "contact.html", id: "contact" },
  { key: "nav.catalogue", href: "catalogue.html", id: "catalogue" },
];

const FOOTER_PAGES = [
  ...PAGES,
  { key: "nav.news", href: "news.html", id: "news" },
];

const SOCIAL_ICONS = {
  in: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z"/></svg>',
  f: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4Z"/></svg>',
  ig: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  yt: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.76-1.77C18.34 5.1 12 5.1 12 5.1s-6.34 0-7.84.43A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.76 1.77c1.5.43 7.84.43 7.84.43s6.34 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12ZM10 15.2V8.8l5.2 3.2L10 15.2Z"/></svg>',
  wa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.75 1.45 5.31L2 22l4.98-1.6a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.83-4.4 9.83-9.84C21.88 6.4 17.47 2 12.04 2Zm5.72 13.9c-.24.68-1.4 1.3-1.94 1.35-.5.05-.98.23-3.3-.7-2.78-1.1-4.53-3.94-4.67-4.13-.13-.19-1.1-1.47-1.1-2.8 0-1.34.7-2 .95-2.27.24-.27.53-.34.7-.34l.5.01c.16 0 .38-.06.6.45.23.55.77 1.9.84 2.04.07.13.11.29.02.47-.09.19-.14.3-.27.46l-.4.47c-.13.13-.27.28-.12.55.15.27.66 1.09 1.42 1.76.98.87 1.8 1.14 2.07 1.27.27.14.42.12.58-.07.16-.19.67-.78.85-1.05.18-.27.36-.22.6-.13.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.65-.17 1.33Z"/></svg>',
};

const ICONS = {
  caret:
    '<svg class="nav__caret" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  sun: '<svg data-icon-sun width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" stroke-linecap="round"/></svg>',
  moon: '<svg data-icon-moon width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" stroke-linejoin="round"/></svg>',
  globe:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
  burger:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>',
  close:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/></svg>',
  arrowUp:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

export const arrowIcon =
  '<span class="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

const brand = (cls = "") => `
  <a class="brand ${cls}" href="index.html">
    <span class="brand__mark" aria-hidden="true">${company.logoMark}</span>
    <span class="brand__name">${company.name}</span>
  </a>`;

const categoryLinks = () =>
  categories
    .map(
      (c) =>
        `<a href="products.html?category=${c.id}" data-i18n="categories.${c.id}.name"></a>`,
    )
    .join("");

function headerMarkup(active) {
  const nav = PAGES.map((p) => {
    const isActive = p.id === active ? " is-active" : "";
    if (!p.children) {
      return `<li class="nav__item"><a class="nav__link${isActive}" href="${p.href}" data-i18n="${p.key}"${p.id === active ? ' aria-current="page"' : ""}></a></li>`;
    }
    return `
      <li class="nav__item" data-dropdown>
        <a class="nav__link${isActive}" href="${p.href}" aria-expanded="false" aria-haspopup="true">
          <span data-i18n="${p.key}"></span>${ICONS.caret}
        </a>
        <div class="dropdown" role="group">${categoryLinks()}</div>
      </li>`;
  }).join("");

  const langOptions = getLanguages()
    .map(
      (l) =>
        `<button type="button" data-lang-option="${l.code}" lang="${l.code}"><span>${l.label}</span><span>${l.short}</span></button>`,
    )
    .join("");

  return `
  <div class="container header__inner">
    ${brand()}
    <nav class="nav" aria-label="Main">
      <ul style="display:flex;align-items:center;gap:0.25rem">${nav}</ul>
    </nav>
    <div class="header__tools">
      <div class="lang" data-lang>
        <button type="button" class="lang__toggle" aria-expanded="false" aria-haspopup="true">
          ${ICONS.globe}<span data-lang-current>EN</span>
        </button>
        <div class="lang__menu" role="group" aria-label="Language">${langOptions}</div>
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

  const langs = getLanguages()
    .map(
      (l) =>
        `<button type="button" data-lang-option="${l.code}" lang="${l.code}">${l.short}</button>`,
    )
    .join("");

  return `
    <div class="drawer__head">
      ${brand()}
      <button type="button" class="icon-btn" data-drawer-close data-i18n-attr="aria-label:nav.close">${ICONS.close}</button>
    </div>
    <nav class="drawer__body" aria-label="Mobile">
      <ul>${items}</ul>
    </nav>
    <div class="drawer__foot">
      <div class="drawer__langs" role="group" aria-label="Language">${langs}</div>
      <button type="button" class="icon-btn" data-theme-toggle aria-pressed="false" data-i18n-attr="aria-label:nav.theme">
        ${ICONS.sun}${ICONS.moon}
      </button>
    </div>`;
}

function footerMarkup() {
  const links = FOOTER_PAGES.map(
    (p) => `<li><a href="${p.href}" data-i18n="${p.key}"></a></li>`,
  ).join("");
  const cats = categories
    .map(
      (c) =>
        `<li><a href="products.html?category=${c.id}" data-i18n="categories.${c.id}.name"></a></li>`,
    )
    .join("");
  const socials = company.social
    .map(
      (s) =>
        `<a class="social" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}">${SOCIAL_ICONS[s.icon] || s.icon}</a>`,
    )
    .join("");

  return `
  <div class="container">
    <div class="footer__grid">
      <div>
        ${brand()}
        <p class="footer__about" data-i18n="footer.about"></p>
        <div class="socials">${socials}</div>
      </div>
      <div>
        <h4 data-i18n="footer.links"></h4>
        <ul>${links}</ul>
      </div>
      <div>
        <h4 data-i18n="footer.cats"></h4>
        <ul>${cats}</ul>
      </div>
      <div class="footer__contact">
        <h4 data-i18n="footer.contact"></h4>
        <ul>
          <li><a href="tel:${company.phone}">${company.phone}</a></li>
          <li><a href="mailto:${company.email}">${company.email}</a></li>
          <li>${company.address}</li>
          <li>${company.location}</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© <span>${new Date().getFullYear()}</span> ${company.name}. <span data-i18n="footer.rights"></span></p>
      <div class="footer__legal">
        <a href="#" data-i18n="footer.privacy"></a>
        <a href="#" data-i18n="footer.terms"></a>
      </div>
    </div>
  </div>`;
}

/** Injects header, drawer, footer and the back-to-top control. */
export function renderChrome() {
  const active = document.body.getAttribute("data-page") || "";

  const header = document.getElementById("site-header");
  if (header) header.innerHTML = headerMarkup(active);

  const drawer = document.getElementById("site-drawer");
  if (drawer) drawer.innerHTML = drawerMarkup(active);

  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = footerMarkup();

  if (!document.querySelector(".to-top")) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("data-to-top", "");
    btn.setAttribute("data-i18n-attr", "aria-label:cta.top");
    btn.innerHTML = ICONS.arrowUp;
    document.body.appendChild(btn);
  }

  if (!document.querySelector(".wa-float")) {
    const wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
      "Hello " + company.name + ", I would like a quotation.",
    )}`;
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "WhatsApp");
    wa.innerHTML = `${SOCIAL_ICONS.wa}<span class="wa-float__label">WhatsApp</span>`;
    document.body.appendChild(wa);
  }
}

/**
 * main.js — single entry point. Boots shared systems, then the page module
 * matching <body data-page="...">.
 */

import { renderChrome } from "./layout.js";
import { initTheme } from "./theme.js";
import {
  initLanguage,
  applyTranslations,
  onLanguageChange,
} from "./language.js";
import { initNavigation } from "./navigation.js";
import { initReveals, initCounters } from "./animations.js";
import {
  renderCategories,
  renderFeatured,
  initProductsPage,
  initProductDetails,
} from "./products.js";
import { renderNews, initNewsPage, initNewsDetails } from "./news.js";
import { initContactForm } from "./contact.js";
import { initGallery } from "./gallery.js";
import { initCatalogue } from "./catalogue.js";
import { company } from "../data/company.js";

function fillCompanyPlaceholders() {
  document.querySelectorAll("[data-company]").forEach((el) => {
    const key = el.getAttribute("data-company");
    const value = key
      .split(".")
      .reduce((a, k) => (a ? a[k] : undefined), company);
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-company-href]").forEach((el) => {
    const [scheme, key] = el.getAttribute("data-company-href").split(":");
    const value = company[key];
    if (!value) return;
    if (scheme === "tel") el.href = `tel:${value.replace(/\s/g, "")}`;
    if (scheme === "mailto") el.href = `mailto:${value}`;
    if (scheme === "wa") el.href = `https://wa.me/${value.replace(/\D/g, "")}`;
  });
}

function boot() {
  renderChrome();
  initTheme();
  initNavigation();
  initLanguage();
  fillCompanyPlaceholders();

  const page = document.body.getAttribute("data-page");

  if (page === "home") {
    renderCategories("[data-category-grid]");
    renderFeatured("[data-featured-grid]");
    renderNews("[data-news-teaser]", 3);
    onLanguageChange(() => {
      renderCategories("[data-category-grid]");
      renderFeatured("[data-featured-grid]");
      renderNews("[data-news-teaser]", 3);
      applyTranslations();
    });
  }

  if (page === "products") initProductsPage();
  if (page === "product-details") initProductDetails();
  if (page === "news") initNewsPage();
  if (page === "news-details") initNewsDetails();
  if (page === "contact") initContactForm();
  if (page === "gallery") initGallery();
  if (page === "catalogue") {
    const rerender = initCatalogue();
    onLanguageChange(() => {
      rerender && rerender();
      applyTranslations();
    });
  }

  applyTranslations();
  initReveals();
  initCounters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

/**
 * navigation.js — sticky header state, desktop dropdowns, language dropdown,
 * accessible mobile drawer and the back-to-top control.
 */

export function initNavigation() {
  const header = document.getElementById("site-header");
  const drawer = document.getElementById("site-drawer");
  const toTop = document.querySelector("[data-to-top]");

  /* ---- sticky header + back-to-top ---- */
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

  /* ---- desktop dropdowns ---- */
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
    trigger?.addEventListener("click", (e) => {
      // On touch devices the first tap opens the menu instead of navigating.
      if (
        window.matchMedia("(hover: none)").matches &&
        !item.classList.contains("is-open")
      ) {
        e.preventDefault();
        open(true);
      }
    });
  });

  /* ---- language dropdown ---- */
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

  /* ---- mobile drawer ---- */
  const openBtn = document.querySelector("[data-drawer-open]");
  const closeBtn = document.querySelector("[data-drawer-close]");
  let lastFocused = null;

  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.classList.toggle("is-open", open);
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
      if (drawer?.classList.contains("is-open")) setDrawer(false);
    }
    // Focus trap inside the open drawer
    if (e.key === "Tab" && drawer?.classList.contains("is-open")) {
      const focusables = drawer.querySelectorAll(
        "a[href], button:not([disabled])",
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && drawer?.classList.contains("is-open"))
      setDrawer(false);
  });
}

/**
 * news.js — news listing, home teaser and article detail rendering.
 */

import { news } from "../data/news.js";
import {
  t,
  pick,
  formatDate,
  onLanguageChange,
  updateTitle,
} from "./language.js";
import { arrowIcon } from "./layout.js";
import { initReveals } from "./animations.js";

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export function newsCard(item) {
  return `
  <article class="n-card" data-reveal>
    <a class="n-card__media" href="news-details.html?article=${item.slug}" tabindex="-1" aria-hidden="true">
      <img src="${item.image}" alt="" loading="lazy" width="1200" height="800">
    </a>
    <div class="n-card__meta">
      <span class="cat">${esc(t(`news.categories.${item.category}`))}</span>
      <time datetime="${item.date}">${esc(formatDate(item.date))}</time>
    </div>
    <h3><a href="news-details.html?article=${item.slug}">${esc(pick(item.title))}</a></h3>
    <p>${esc(pick(item.excerpt))}</p>
    <a class="link-arrow" href="news-details.html?article=${item.slug}">${esc(t("cta.readMore"))}${arrowIcon}</a>
  </article>`;
}

export function renderNews(target, limit) {
  const el = document.querySelector(target);
  if (!el) return;
  const items = [...news].sort((a, b) => b.date.localeCompare(a.date));
  el.innerHTML = (limit ? items.slice(0, limit) : items).map(newsCard).join("");
  initReveals(el);
}

export function initNewsPage() {
  const el = document.querySelector("[data-news-grid]");
  if (!el) return;
  const render = () => renderNews("[data-news-grid]");
  render();
  onLanguageChange(render);
}

export function initNewsDetails() {
  const root = document.querySelector("[data-news-detail]");
  if (!root) return;

  const slug = new URLSearchParams(location.search).get("article");
  const item = news.find((n) => n.slug === slug);

  const render = () => {
    if (!item) {
      root.innerHTML = `
        <div class="container section">
          <div class="state">
            <h1>${esc(t("errors.articleNotFound"))}</h1>
            <p>${esc(t("errors.articleNotFoundText"))}</p>
            <a class="btn" href="news.html">${esc(t("news.back"))}</a>
          </div>
        </div>`;
      updateTitle(t("errors.articleNotFound"));
      return;
    }

    updateTitle(pick(item.title));
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", pick(item.excerpt).slice(0, 155));

    const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

    root.innerHTML = `
      <section class="page-hero">
        <div class="page-hero__media"><img src="${item.image}" alt="" width="1200" height="800"></div>
        <div class="container page-hero__inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">${esc(t("breadcrumb.home"))}</a><span class="sep">›</span>
            <a href="news.html">${esc(t("breadcrumb.news"))}</a><span class="sep">›</span>
            <span>${esc(pick(item.title))}</span>
          </nav>
          <p class="eyebrow">${esc(t(`news.categories.${item.category}`))}</p>
          <h1>${esc(pick(item.title))}</h1>
          <p><time datetime="${item.date}">${esc(formatDate(item.date))}</time></p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="article">
            <p class="lead">${esc(pick(item.excerpt))}</p>
            <figure class="article__figure"><img src="${item.image}" alt="${esc(pick(item.title))}" loading="lazy" width="1200" height="800"></figure>
            ${pick(item.body)
              .map((p) => `<p>${esc(p)}</p>`)
              .join("")}
            <p class="mt-lg"><a class="btn btn--ghost" href="news.html">${esc(t("news.back"))}</a></p>
          </div>
        </div>
      </section>

      ${
        related.length
          ? `<section class="section section--alt">
              <div class="container">
                <div class="section-head"><h2>${esc(t("news.related"))}</h2></div>
                <div class="grid grid--3">${related.map(newsCard).join("")}</div>
              </div>
            </section>`
          : ""
      }`;
    initReveals(root);
  };

  render();
  onLanguageChange(render);
}
/**
 * products.js — rendering, search, filtering and product detail pages.
 */

import { products } from "../data/products.js";
import { categories } from "../data/categories.js";
import { t, pick, getLang, onLanguageChange, updateTitle } from "./language.js";
import { arrowIcon } from "./layout.js";
import { initReveals } from "./animations.js";

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export function productCard(p) {
  return `
  <article class="p-card" data-reveal>
    <a class="p-card__media" href="product-details.html?product=${p.slug}" tabindex="-1" aria-hidden="true">
      <img src="${p.images[0]}" alt="" loading="lazy" width="1200" height="900">
    </a>
    <div class="p-card__body">
      <span class="p-card__cat">${esc(t(`categories.${p.category}.name`))}</span>
      <h3><a href="product-details.html?product=${p.slug}">${esc(pick(p.name))}</a></h3>
      <p>${esc(pick(p.description))}</p>
      <div class="p-card__foot">
        <span class="p-card__code">${esc(t("products.code"))} ${esc(p.code)}</span>
        <span class="link-arrow">${esc(t("cta.details"))}${arrowIcon}</span>
      </div>
    </div>
  </article>`;
}

export function categoryCard(c) {
  return `
  <a class="cat-card" href="products.html?category=${c.id}" data-reveal>
    <img src="${c.image}" alt="" loading="lazy" width="1200" height="900">
    <h3 data-i18n="categories.${c.id}.name"></h3>
    <p data-i18n="categories.${c.id}.desc"></p>
    <span class="link-arrow">${esc(t("cta.viewProducts"))}${arrowIcon}</span>
  </a>`;
}

export function renderFeatured(target) {
  const el = document.querySelector(target);
  if (!el) return;
  const items = products.filter((p) => p.featured).slice(0, 3);
  el.innerHTML = items.map(productCard).join("");
  initReveals(el);
}

export function renderCategories(target) {
  const el = document.querySelector(target);
  if (!el) return;
  el.innerHTML = categories.map(categoryCard).join("");
  initReveals(el);
}

/* ------------------------------- Products page ------------------------------- */

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

  const renderChips = () => {
    if (!chips) return;
    chips.innerHTML =
      `<button type="button" class="chip${state.category === "all" ? " is-active" : ""}" data-cat="all" data-i18n="products.all"></button>` +
      categories
        .map(
          (c) =>
            `<button type="button" class="chip${state.category === c.id ? " is-active" : ""}" data-cat="${c.id}" data-i18n="categories.${c.id}.name"></button>`,
        )
        .join("");
    chips.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
  };

  const render = () => {
    let list = products.filter(
      (p) => state.category === "all" || p.category === state.category,
    );
    const q = state.query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          pick(p.name).toLowerCase().includes(q) ||
          String(p.code).toLowerCase().includes(q) ||
          pick(p.description).toLowerCase().includes(q),
      );
    }
    if (state.sort === "az")
      list = [...list].sort((a, b) =>
        pick(a.name).localeCompare(pick(b.name), getLang()),
      );
    if (state.sort === "za")
      list = [...list].sort((a, b) =>
        pick(b.name).localeCompare(pick(a.name), getLang()),
      );

    if (count) count.textContent = `${list.length} ${t("products.results")}`;

    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="state" style="grid-column:1/-1">
           <h3>${esc(t("errors.noResults"))}</h3>
           <p>${esc(t("errors.noResultsText"))}</p>
           <button type="button" class="btn btn--ghost" data-clear>${esc(t("errors.clear"))}</button>
         </div>`;
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
    const value = e.target.value;
    debounce = setTimeout(() => {
      state.query = value;
      render();
    }, 180);
  });

  sort?.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  grid.addEventListener("click", (e) => {
    if (!e.target.closest("[data-clear]")) return;
    state = { category: "all", query: "", sort: state.sort };
    if (search) search.value = "";
    renderChips();
    render();
  });

  renderChips();
  render();
  onLanguageChange(() => {
    renderChips();
    render();
  });
}

/* ---------------------------- Product details page ---------------------------- */

export function initProductDetails() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;

  const slug = new URLSearchParams(location.search).get("product");
  const product = products.find((p) => p.slug === slug);

  const render = () => {
    if (!product) {
      root.innerHTML = `
        <div class="container section">
          <div class="state">
            <h1>${esc(t("errors.productNotFound"))}</h1>
            <p>${esc(t("errors.productNotFoundText"))}</p>
            <a class="btn" href="products.html">${esc(t("products.title"))}</a>
          </div>
        </div>`;
      updateTitle(t("errors.productNotFound"));
      return;
    }

    updateTitle(pick(product.name));
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute("content", pick(product.description).slice(0, 155));

    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);

    root.innerHTML = `
      <section class="page-hero">
        <div class="container page-hero__inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">${esc(t("breadcrumb.home"))}</a><span class="sep">›</span>
            <a href="products.html">${esc(t("breadcrumb.products"))}</a><span class="sep">›</span>
            <span>${esc(pick(product.name))}</span>
          </nav>
          <p class="eyebrow">${esc(t(`categories.${product.category}.name`))}</p>
          <h1>${esc(pick(product.name))}</h1>
          <p>${esc(t("products.code"))} ${esc(product.code)}</p>
        </div>
      </section>

      <section class="section">
        <div class="container pd">
          <div>
            <div class="gallery__main"><img id="gallery-main" src="${product.images[0]}" alt="${esc(pick(product.name))}" width="1200" height="900"></div>
            ${
              product.images.length > 1
                ? `<div class="gallery__thumbs" role="group" aria-label="${esc(t("product.gallery"))}">${product.images
                    .map(
                      (src, i) =>
                        `<button type="button" data-thumb="${i}" aria-current="${i === 0}" aria-label="${esc(t("product.thumb"))} ${i + 1}"><img src="${src}" alt="" loading="lazy"></button>`,
                    )
                    .join("")}</div>`
                : ""
            }
          </div>
          <div>
            <h2 style="font-size:1.25rem">${esc(t("product.overview"))}</h2>
            <p class="muted" style="margin-top:0.75rem">${esc(pick(product.description))}</p>

            ${product.features.length ? `<div class="block"><h2>${esc(t("product.features"))}</h2><ul class="tick-list">${product.features.map((f) => `<li>${esc(pick(f))}</li>`).join("")}</ul></div>` : ""}

            ${
              product.specifications.length
                ? `<div class="block"><h2>${esc(t("product.specifications"))}</h2>
                   <table class="spec-table"><tbody>${product.specifications
                     .map(
                       (s) =>
                         `<tr><th scope="row">${esc(pick(s.label))}</th><td>${esc(pick(s.value))}</td></tr>`,
                     )
                     .join("")}</tbody></table></div>`
                : ""
            }

            ${product.applications.length ? `<div class="block"><h2>${esc(t("product.applications"))}</h2><ul class="tick-list">${product.applications.map((a) => `<li>${esc(pick(a))}</li>`).join("")}</ul></div>` : ""}
            ${product.packaging.length ? `<div class="block"><h2>${esc(t("product.packaging"))}</h2><ul class="tick-list">${product.packaging.map((a) => `<li>${esc(pick(a))}</li>`).join("")}</ul></div>` : ""}
            ${product.certifications.length ? `<div class="block"><h2>${esc(t("product.certifications"))}</h2><div class="chips" style="margin-top:1rem">${product.certifications.map((c) => `<span class="tag">${esc(c)}</span>`).join("")}</div></div>` : ""}
          </div>
        </div>
      </section>

      <section class="section section--dark">
        <div class="container cta">
          <h2>${esc(t("product.inquiryTitle"))}</h2>
          <p>${esc(t("product.inquiryText"))}</p>
          <div class="cta__actions">
            <a class="btn" href="contact.html?product=${product.slug}">${esc(t("cta.inquiry"))}</a>
            <a class="btn btn--onDark" href="products.html">${esc(t("products.title"))}</a>
          </div>
        </div>
      </section>

      ${
        related.length
          ? `<section class="section section--alt">
              <div class="container">
                <div class="section-head"><h2>${esc(t("product.related"))}</h2></div>
                <div class="grid grid--3">${related.map(productCard).join("")}</div>
              </div>
            </section>`
          : ""
      }`;

    const main = root.querySelector("#gallery-main");
    root.querySelectorAll("[data-thumb]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.dataset.thumb);
        main.src = product.images[i];
        root
          .querySelectorAll("[data-thumb]")
          .forEach((b) => b.setAttribute("aria-current", String(b === btn)));
      });
    });

    initReveals(root);
  };

  render();
  onLanguageChange(render);
}

/**
 * theme.js — light/dark theme with localStorage persistence and
 * system-preference detection. The initial value is applied by an inline
 * script in each page <head> to avoid a flash of the wrong theme.
 */

const KEY = "site-theme";
const media = window.matchMedia("(prefers-color-scheme: dark)");

export function getTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

export function setTheme(theme, persist = true) {
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) {
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* storage unavailable */
    }
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
    stored = localStorage.getItem(KEY);
  } catch {
    /* ignore */
  }
  setTheme(stored || (media.matches ? "dark" : "light"), false);

  media.addEventListener("change", (e) => {
    let saved = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
      /* ignore */
    }
    if (!saved) setTheme(e.matches ? "dark" : "light", false);
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
}
