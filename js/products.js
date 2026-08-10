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
