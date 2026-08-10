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
