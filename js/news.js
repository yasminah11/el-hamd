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
