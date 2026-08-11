/* ==========================================================================
   EL-HAMD EXPORTS — MAIN JAVASCRIPT
   UI Logic Only — Pure Functions & Event Listeners.
   All business mock data lives in HTML.
   ========================================================================== */

/* ==========================================================================
   1. THEME ENGINE
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
   2. LANGUAGE & I18N SWITCHER
   ========================================================================== */

const LANG_KEY = "site-lang";
const FALLBACK = "en";

export function setLanguage(code, persist = true) {
  const dir = code === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", code);
  document.documentElement.setAttribute("dir", dir);
  if (persist) {
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch {}
  }
  document.querySelectorAll("[data-lang-current]").forEach((el) => {
    el.textContent = code.toUpperCase();
  });
  document.querySelectorAll("[data-lang-option]").forEach((el) => {
    el.setAttribute(
      "aria-current",
      String(el.getAttribute("data-lang-option") === code),
    );
  });
}

export function initLanguage() {
  let stored = null;
  try {
    stored = localStorage.getItem(LANG_KEY);
  } catch {}
  const browser = (navigator.language || FALLBACK).slice(0, 2);
  setLanguage(stored || (browser === "ar" ? "ar" : FALLBACK), false);

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
   3. ANIMATIONS & REVEALS
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
   4. NAVIGATION & CHROME LOGIC
   ========================================================================== */

const ICONS = {
  sun: '<svg data-icon-sun width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" stroke-linecap="round"/></svg>',
  globe:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
  burger:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>',
  close:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/></svg>',
  arrowUp:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

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

export function renderChrome() {
  const active = document.body.getAttribute("data-page") || "";
  const header = document.getElementById("site-header");
  const drawer = document.getElementById("site-drawer");
  const footer = document.getElementById("site-footer");

  const navLinks = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "about.html", label: "About", id: "about" },
    { href: "products.html", label: "Products", id: "products" },
    { href: "gallery.html", label: "Gallery", id: "gallery" },
    { href: "news.html", label: "News", id: "news" },
    { href: "catalogue.html", label: "Catalogue", id: "catalogue" },
    { href: "contact.html", label: "Contact", id: "contact" },
  ];

  if (header) {
    const linksMarkup = navLinks
      .map((p) => {
        const cls = p.id === active ? "nav__link is-active" : "nav__link";
        return `<li class="nav__item"><a class="${cls}" href="${p.href}">${p.label}</a></li>`;
      })
      .join("");

    header.innerHTML = `
    <div class="container header__inner">
      ${brandHTML()}
      <nav class="nav" aria-label="Main navigation">
        <ul style="display:flex;align-items:center;gap:0.15rem">${linksMarkup}</ul>
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
        <button type="button" class="icon-btn" data-theme-toggle aria-pressed="false" aria-label="Toggle theme">
          ${ICONS.sun}
        </button>
        <button type="button" class="icon-btn burger" data-drawer-open aria-expanded="false" aria-label="Open menu">
          ${ICONS.burger}
        </button>
      </div>
    </div>`;
  }

  if (drawer) {
    const drawerLinksMarkup = navLinks
      .map((p) => {
        const cls = p.id === active ? "drawer__link is-active" : "drawer__link";
        return `<li class="drawer__item"><a class="${cls}" href="${p.href}">${p.label}</a></li>`;
      })
      .join("");

    drawer.innerHTML = `
      <div class="drawer__head">
        ${brandHTML()}
        <button type="button" class="icon-btn" data-drawer-close aria-label="Close menu">${ICONS.close}</button>
      </div>
      <nav class="drawer__body" aria-label="Mobile navigation">
        <ul>${drawerLinksMarkup}</ul>
      </nav>
      <div class="drawer__foot">
        <div class="drawer__langs" role="group" aria-label="Language">
          <button type="button" data-lang-option="en" lang="en">EN</button>
          <button type="button" data-lang-option="ar" lang="ar">AR</button>
        </div>
        <button type="button" class="icon-btn" data-theme-toggle aria-pressed="false">${ICONS.sun}</button>
      </div>`;
  }

  if (footer) {
    footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo">${brandHTML()}</div>
          <p class="footer__about">El-Hamd Exports grows, processes and ships premium Egyptian botanicals, spices, seeds and dehydrated vegetables to food manufacturers worldwide.</p>
        </div>
        <div class="footer__col">
          <h4>Quick Links</h4>
          <ul class="footer__links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="catalogue.html">Catalogue</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Product Range</h4>
          <ul class="footer__links">
            <li><a href="products.html?category=herbs">Medicinal Herbs</a></li>
            <li><a href="products.html?category=spices">Spices & Seasonings</a></li>
            <li><a href="products.html?category=seeds">Seeds</a></li>
            <li><a href="products.html?category=dehydrated">Dehydrated Vegetables</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <ul class="footer__links">
            <li><a href="tel:+201001234567">+20 100 123 4567</a></li>
            <li><a href="mailto:export@elhamd.com">export@elhamd.com</a></li>
            <li>Km 12, Fayoum–Cairo Road, Fayoum, Egypt</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">© <span>${new Date().getFullYear()}</span> El-Hamd Exports. All rights reserved.</p>
      </div>
    </div>`;
  }

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
  });

  const openBtn = document.querySelector("[data-drawer-open]");
  const closeBtn = document.querySelector("[data-drawer-close]");
  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("is-locked", open);
    openBtn?.setAttribute("aria-expanded", String(open));
  };
  openBtn?.addEventListener("click", () => setDrawer(true));
  closeBtn?.addEventListener("click", () => setDrawer(false));
  drawer
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setDrawer(false)));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer?.getAttribute("aria-hidden") === "false") {
      setDrawer(false);
    }
  });
}

/* ==========================================================================
   5. INTERACTIVE HOME SECTIONS
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

  tabs[0]?.classList.add("is-active");
  panels[0]?.classList.add("is-active");
}

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

export function initCertLightbox() {
  const modal = document.getElementById("cert-lightbox");
  const imgEl = document.getElementById("cert-lightbox-img");
  const captionEl = document.getElementById("cert-lightbox-caption");
  if (!modal || !imgEl) return;

  const openLightbox = (src, caption) => {
    imgEl.src = src;
    if (captionEl) captionEl.textContent = caption || "";
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  };

  const closeLightbox = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    imgEl.src = "";
  };

  document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-lightbox");
      const caption = trigger.getAttribute("data-caption");
      if (src) openLightbox(src, caption);
    });
  });

  modal.querySelectorAll("[data-lightbox-close]").forEach((btn) => {
    btn.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   6. PRODUCTS DOM FILTERING & SORTING
   ========================================================================== */

export function initProductsPage() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  const search = document.querySelector("[data-search]");
  const sort = document.querySelector("[data-sort]");
  const count = document.querySelector("[data-count-results]");

  const getAllItems = () =>
    Array.from(grid.querySelectorAll("[data-product-item]"));

  let state = {
    category: new URLSearchParams(location.search).get("category") || "all",
    query: "",
    sort: "default",
  };

  const render = () => {
    let items = getAllItems();

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

    const visible = items.filter((i) => i.style.display !== "none");
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

    if (count) count.textContent = `${visible.length} products found`;
    initReveals(grid);
  };

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

  document.querySelectorAll("[data-cat-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.category = tab.getAttribute("data-cat-tab") || "all";
      render();
    });
  });

  render();
}

/* ==========================================================================
   7. PRODUCT DETAIL GALLERY & TABS
   ========================================================================== */

export function initProductDetail() {
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
   8. CONTACT FORM VALIDATION
   ========================================================================== */

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
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
    if (n === "name" && v.length < 2) msg = "Please enter your full name.";
    if (n === "email" && !EMAIL_RE.test(v))
      msg = "Please enter a valid email address.";
    if (n === "message" && v.length < 20)
      msg = "Please write at least 20 characters.";
    setError(field, msg);
    return !msg;
  };

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim()) validate(field);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = [
      ...form.querySelectorAll("input[required], textarea[required]"),
    ];
    const valid = fields.map(validate).every(Boolean);
    if (!valid) {
      showStatus("error", "Please fill in all required fields accurately.");
      return;
    }

    const endpoint = form.getAttribute("data-endpoint") || null;
    if (!endpoint) {
      showStatus(
        "info",
        "Form received! Direct submission endpoint pending backend integration.",
      );
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error();
      form.reset();
      showStatus(
        "success",
        "Thank you. Your enquiry has been sent successfully.",
      );
    } catch {
      showStatus("error", "Something went wrong. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry";
    }
  });
}

/* ==========================================================================
   9. BOOT
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
    initCertLightbox();
  }
  if (page === "products") initProductsPage();
  if (page === "product-details") initProductDetail();
  if (page === "contact") initContactForm();

  initReveals();
  initCounters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
