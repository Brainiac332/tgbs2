// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn?.addEventListener("click", () => {
  const isOpen = burgerBtn.getAttribute("aria-expanded") === "true";
  burgerBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.classList.toggle("show");
  mobileMenu.setAttribute("aria-hidden", String(isOpen));
});

// FAQ Accordion
const accordion = document.querySelector("[data-accordion]");
if (accordion) {
  const buttons = accordion.querySelectorAll(".acc-item");
  const panels = accordion.querySelectorAll(".acc-panel");

  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";

      buttons.forEach(b => b.setAttribute("aria-expanded", "false"));
      panels.forEach(p => p.classList.remove("open"));

      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        panels[idx].classList.add("open");
      }
    });
  });
}

/* ---------------------------
  Creative Services Data
--------------------------- */
const creative = [
  {
    key: "logo",
    title: "Logo Design",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 250–400", turnaround:"2–3 days", revisions:"1", bullets:["1 concept","Text or minimal logo","PNG/JPEG outputs"] },
      { name:"Standard", price:"AED 450–700", turnaround:"4–5 days", revisions:"2", bullets:["2 logo concepts","Color palette","Mockups"] },
      { name:"Premium", price:"AED 800–1200+", turnaround:"7–10 days", revisions:"3", bullets:["Brand kit","3 concepts + typography","Logo guide + all formats"] }
    ]
  },
  {
    key: "flyer",
    title: "Flyer / Poster Design",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 150–250", turnaround:"24–48 hrs", revisions:"1", bullets:["Single-sided design","Standard A5 size"] },
      { name:"Standard", price:"AED 300–400", turnaround:"2–4 days", revisions:"2", bullets:["Double-sided OR event poster","Social version included"] },
      { name:"Premium", price:"AED 450–600", turnaround:"3–5 days", revisions:"3", bullets:["Illustrated or mockup flyer","Multiple layouts"] }
    ]
  },
  {
    key: "brochure",
    title: "Brochure Design",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 300–450", turnaround:"3–4 days", revisions:"1", bullets:["2-page (front & back)","Product/service brochure"] },
      { name:"Standard", price:"AED 500–700", turnaround:"5–7 days", revisions:"2", bullets:["4-page layout","Product sections + icons"] },
      { name:"Premium", price:"AED 800–1200+", turnaround:"7–10 days", revisions:"3", bullets:["6+ pages","Full branding + mockups","Formatting included"] }
    ]
  },
  {
    key: "website",
    title: "Website Design (Showcase)",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 700–900", turnaround:"3–5 days", revisions:"1", bullets:["1 page","Simple portfolio or product display"] },
      { name:"Standard", price:"AED 1,000–1,500", turnaround:"7–10 days", revisions:"2", bullets:["3–4 pages","Home, About, Services, Contact"] },
      { name:"Premium", price:"AED 1,800–2,500+", turnaround:"10–14 days", revisions:"3", bullets:["5+ pages","Animations + SEO-ready","Full brand site"] }
    ]
  },
  {
    key: "smm",
    title: "Social Media Management",
    addons: [],
    packages: [
      { name:"Starter", price:"AED 500–700 / month", turnaround:"Monthly", revisions:"—", bullets:["3 posts/week","Captions + hashtags","1 platform"] },
      { name:"Growth", price:"AED 800–1,000 / month", turnaround:"Monthly", revisions:"—", bullets:["4–5 posts/week","Strategy plan","Engagement tracking"] },
      { name:"Premium", price:"AED 1,200–1,500 / month", turnaround:"Monthly", revisions:"—", bullets:["Full content calendar","Design + analytics","2 platforms"] }
    ]
  },
  {
    key: "mockups",
    title: "Product Visuals / Mockups",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 200–300", turnaround:"2 days", revisions:"1", bullets:["1–2 product mockups","Bottle/package/etc."] },
      { name:"Standard", price:"AED 350–500", turnaround:"3–5 days", revisions:"2", bullets:["3–4 product mockups","Branding overlay"] },
      { name:"Premium", price:"Custom", turnaround:"Let’s talk", revisions:"—", bullets:["Custom service","Contact us for scope"] }
    ]
  },
  {
    key: "businesscard",
    title: "Business Card Design",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 100–150", turnaround:"24 hrs", revisions:"1", bullets:["Front design only"] },
      { name:"Standard", price:"AED 200–300", turnaround:"2–3 days", revisions:"2", bullets:["Double-sided","Branding style"] },
      { name:"Premium", price:"AED 350–450", turnaround:"3–5 days", revisions:"3", bullets:["Custom style","Logo integration","3D mockup"] }
    ]
  },
  {
    key: "video",
    title: "Video Adverts",
    addons: [],
    packages: [
      { name:"Basic", price:"AED 500–1,000", turnaround:"Project-based", revisions:"1", bullets:["15–30 sec","Text + music + simple logo intro"] },
      { name:"Standard", price:"AED 1,000–2,500", turnaround:"Project-based", revisions:"2–3", bullets:["30–60 sec","Animated overlays + cuts","Basic VO (optional)"] },
      { name:"Premium", price:"AED 2,500–5,000+", turnaround:"Project-based", revisions:"3–4", bullets:["60+ sec","Storyboard + custom animation","Pro VO + sound design","Multi-scene video"] }
    ]
  },
  {
    key: "templates",
    title: "Social Media Post Templates",
    addons: [
      "Motion Graphic Template — AED 80 each",
      "Content Copywriting — AED 25 per caption",
      "Logo/Brand Integration Upgrade — AED 20"
    ],
    packages: [
      { name:"Basic", price:"AED 80 / template", turnaround:"24 hrs", revisions:"—", bullets:["Single static design","Brand-aligned colors & fonts","Ready-to-post PNG"] },
      { name:"Standard", price:"AED 400 / template", turnaround:"2–3 days", revisions:"2", bullets:["Custom layout variations","Promo/product/announcement styles","Editable Canva/PSD files"] },
      { name:"Premium", price:"AED 1,000 / template", turnaround:"5 days", revisions:"3", bullets:["Fully branded series","Product+promo+testimonial+info","Editable files + priority delivery"] }
    ]
  }
];

const chipsEl = document.getElementById("serviceChips");
const packagesEl = document.getElementById("creativePackages");
const addonsBlock = document.getElementById("addonsBlock");
const addonsList = document.getElementById("addonsList");

// Build chips
let activeKey = creative[0].key;
function renderChips(){
  chipsEl.innerHTML = creative.map(s => {
    const active = s.key === activeKey ? "active" : "";
    return `<button class="chip ${active}" data-key="${s.key}" type="button">${s.title}</button>`;
  }).join("");
}
function packageCard(pkg, isPopular){
  return `
  <article class="price-card hover-glow ${isPopular ? "popular" : ""}">
    ${isPopular ? `<div class="badge">MOST POPULAR</div>` : ``}

    <div class="price-top">
      <h3>${pkg.name}</h3>
      <p class="muted small">Turnaround: ${pkg.turnaround} • Revisions: ${pkg.revisions}</p>
    </div>

    <div class="price">
      <div class="amount">${pkg.price}</div>
    </div>

    <div class="includes">Includes:</div>
    <ul class="list">
      ${pkg.bullets.map(b => `<li>${b}</li>`).join("")}
    </ul>

    <a class="btn ${isPopular ? "btn-primary" : "btn-ghost"} full btn-shine" target="_blank" rel="noopener"
       href="https://wa.me/971552738118?text=${encodeURIComponent(`Hello TGBS 👋\nI'm interested in ${currentService().title} — ${pkg.name} package.\nPrice: ${pkg.price}\nPlease share next steps.`)}">
      ${isPopular ? "Get Started" : "Request Quote"}
    </a>
  </article>`;
}
function currentService(){
  return creative.find(s => s.key === activeKey);
}
function renderPackages(){
  const s = currentService();
  packagesEl.innerHTML = s.packages.map((p, idx) => packageCard(p, idx === 1)).join("");

  // Add-ons
  if (s.addons && s.addons.length){
    addonsBlock.hidden = false;
    addonsList.innerHTML = s.addons.map(a => `<span class="addon-pill">${a}</span>`).join("");
  } else {
    addonsBlock.hidden = true;
    addonsList.innerHTML = "";
  }
}
renderChips();
renderPackages();

// Chip click
chipsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeKey = btn.dataset.key;
  renderChips();
  renderPackages();
});

/* ---------------------------
  Quote form (category-aware)
--------------------------- */
const quoteForm = document.getElementById("quoteForm");
const categoryEl = document.getElementById("category");
const companySizeEl = document.getElementById("companySize");
const needEl = document.getElementById("need");

// Needs list
const itNeeds = [
  "Microsoft 365 / Email setup",
  "IT Support (L1–L3)",
  "Security / Firewall / Endpoint",
  "Backup & Disaster Recovery",
  "Remote Access / VPN / Zero-trust",
  "ERP/CRM/HR/Accounting systems",
  "AI Automation / LLM workflows",
  "Hardware procurement"
];

function fillNeedOptions(category){
  let options = [];
  if (category === "IT Services"){
    options = itNeeds;
    companySizeEl.disabled = false;
  } else if (category === "Creative Services"){
    options = creative.map(s => s.title);
    companySizeEl.disabled = true;
    companySizeEl.value = "";
  } else {
    options = [];
  }

  needEl.innerHTML = `<option value="" disabled selected>Select</option>` +
    options.map(o => `<option value="${o}">${o}</option>`).join("");
}

// Default (empty)
fillNeedOptions("");

categoryEl.addEventListener("change", () => fillNeedOptions(categoryEl.value));

quoteForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = categoryEl.value;
  const size = companySizeEl.value || "N/A";
  const need = needEl.value;

  const msg =
`Hello TGBS 👋
I need a quick quote.

Category: ${category}
Company size: ${size}
Need: ${need}

Please share the best plan and next steps.`;

  const url = `https://wa.me/971552738118?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
