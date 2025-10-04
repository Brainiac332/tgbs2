/* ================= TGBS — script.js (final polished) ================= */

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ---------- Burger / Mobile Menu ---------- */
const burger = $('#burger');
const mobileMenu = $('#mobile-menu');
const closeMenu = $('#closeMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const active = burger.classList.toggle('active');
    mobileMenu.classList.toggle('show');
    burger.setAttribute('aria-expanded', active ? 'true' : 'false');
    if (active) mobileMenu.removeAttribute('hidden'); else setTimeout(()=> mobileMenu.setAttribute('hidden','true'), 320);
  });
  if (closeMenu) closeMenu.addEventListener('click', ()=> {
    burger.classList.remove('active');
    mobileMenu.classList.remove('show');
    burger.setAttribute('aria-expanded','false');
    setTimeout(()=> mobileMenu.setAttribute('hidden','true'), 320);
  });
  // Auto-close when clicking a mobile link
  $$('.mobile-card a').forEach(a => a.addEventListener('click', ()=> {
    burger.classList.remove('active'); mobileMenu.classList.remove('show'); burger.setAttribute('aria-expanded','false');
    setTimeout(()=> mobileMenu.setAttribute('hidden','true'), 320);
  }));
  // close on outside click
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('show') && !mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('active'); mobileMenu.classList.remove('show'); burger.setAttribute('aria-expanded','false');
      setTimeout(()=> mobileMenu.setAttribute('hidden','true'), 320);
    }
  });
}

/* ---------- Smooth scroll for anchor links ---------- */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const targetId = a.getAttribute('href').slice(1);
    const el = document.getElementById(targetId);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

/* ---------- Footer Year ---------- */
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

/* ---------- Toast helper ---------- */
const toast = $('#toast');
function showToast(msg){
  if (!toast) {
    alert(msg);
    return;
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(()=> { toast.style.display = 'none'; }, 4200);
}

// /* ---------- Lead Form -> n8n ---------- */
// const form = $('#leadForm');
// if (form) {
//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const payload = {
//       name: form.name?.value || '',
//       email: form.email?.value || '',
//       phone: form.phone?.value || '',
//       message: form.message?.value || ''
//     };
//     try {
//       const res = await fetch('YOUR_N8N_WEBHOOK_URL', {
//         method:'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload)
//       });
//       if (res.ok) { showToast('✅ Thanks! We’ll WhatsApp you shortly.'); form.reset(); }
//       else { showToast('⚠️ Something went wrong. Please try again.'); }
//     } catch (err) {
//       showToast('⚠️ Error connecting. Try again later.');
//       console.error(err);
//     }
//   });
// }



 // Initialize EmailJS with your Public Key
  (function(){
    emailjs.init("Plqy0wqmFfSt-2dA8"); // 🔑 Replace with your actual EmailJS public key
  })();

  /* ---------- Lead Form -> EmailJS ---------- */
  const form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Send form using EmailJS
      emailjs.sendForm("service_tvz506r", "template_fdomdoe", this)
        .then(() => {
          showToast('✅ Thanks! We’ll contact you shortly.');
          form.reset();
        })
        .catch((err) => {
          showToast('⚠️ Something went wrong. Please try again.');
          console.error('EmailJS error:', err);
        });
    });
  }



/* ================= /Helpers ================= */

/* ================= GOLDEN GUIDED TOUR ================= */


(function(){
  function showToast(msg) {
    const toast = document.createElement("div");
    toast.textContent = msg;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#f5c451";
    toast.style.color = "#000";
    toast.style.padding = "12px 16px";
    toast.style.borderRadius = "8px";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
    toast.style.zIndex = "9999";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  const welcome = document.getElementById('ggtWelcome');
  const wow = document.getElementById('ggtWow');
  const skipWelcome = document.getElementById('ggtSkipWelcome');

  const tour = document.getElementById('ggtTour');
  const spot = document.getElementById('ggtSpot');
  const tip = document.getElementById('ggtTip');
  const tTitle = document.getElementById('ggtTitle');
  const tText = document.getElementById('ggtText');
  const acts = document.getElementById('ggtActs');
  const dots = document.getElementById('ggtDots');

  const done = document.getElementById('ggtDone');
  const explore = document.getElementById('ggtExplore');
  const replay = document.getElementById('ggtReplay');

  // Dynamically detect the burger icon element
  function detectBurgerIcon() {
    // Look for common burger icon classes/buttons dynamically
    const selectors = ['.menu-toggle', '.menu-icon', '.burger', '.nav-toggle', 'nav button', 'nav svg'];
    for (let sel of selectors) {
      const el = document.querySelector(sel);
      if (el) return sel;
    }
    return 'nav'; // fallback if none found
  }

  // Define steps dynamically based on screen width
  function getSteps() {
    const isSmallScreen = window.innerWidth <= 900;
    return [
      { 
        sel: isSmallScreen ? detectBurgerIcon() : 'nav',
        title: isSmallScreen ? 'Open the menu' : 'Navigation made easy!',
        text: isSmallScreen
          ? 'Tap here to open the menu and explore our golden services.'
          : 'Explore our golden services, projects, and more using this bar.'
      },
      { sel: '.floating', title: 'Stay connected', text: "Check Brainy's portfolio and contact us instantly — WhatsApp, Instagram, LinkedIn." },
      { sel: '#leadForm', title: 'Strategy Call', text: 'Ready to shine? Request your free golden strategy call here.', final: true }
    ];
  }

  let steps = getSteps();
  let i = 0;
  let userDismissed = false;

  // Only show on first visit; allow replay any time
  const key = 'tgb-tour-seen';
  if(localStorage.getItem(key)){
    welcome.classList.add('ggt-hidden');
  }

  // Start Tour
  function startTour(){
    steps = getSteps(); // Refresh steps dynamically
    if(!document.querySelector(steps[0].sel)){
      welcome.classList.add('ggt-hidden');
      return;
    }
    i = 0;
    userDismissed = false;
    welcome.classList.add('ggt-hidden');
    done.classList.add('ggt-hidden');
    tour.classList.remove('ggt-hidden');
    positionStep();
    tour.setAttribute('aria-hidden','false');
    document.addEventListener('keydown', escClose);
    window.addEventListener('resize', handleResize, { passive:true });
    window.addEventListener('scroll', onScroll, { passive:true });
  }

  // Handle screen resize (auto-adjusts first step)
  function handleResize(){
    steps = getSteps();
    positionStep();
  }

  // Position current step
  function positionStep(){
    const step = steps[i];
    const el = document.querySelector(step.sel);
    if(!el){ nextOrFinish(); return; }

    // Scroll element into view
    el.scrollIntoView({ block:'center', behavior: 'smooth' });

    const r = el.getBoundingClientRect();
    const pad = 10;

    // Spotlight position
    spot.style.top = Math.max(8, r.top - pad) + 'px';
    spot.style.left = Math.max(8, r.left - pad) + 'px';
    spot.style.width = Math.min(window.innerWidth - 16, r.width + pad*2) + 'px';
    spot.style.height = Math.min(window.innerHeight - 16, r.height + pad*2) + 'px';

    // Tooltip text
    tTitle.textContent = step.title;
    tText.textContent = step.text;

    // Progress dots
    dots.innerHTML = '';
    steps.forEach((_, idx)=>{
      const d = document.createElement('span');
      d.className = 'ggt-dot' + (idx === i ? ' ggt-on' : '');
      dots.appendChild(d);
    });

    // Actions
    acts.innerHTML = '';
    if(!step.final){
      const back = btn('Back', 'ggt-x', prevStep);
      if(i === 0) back.disabled = true;
      const skip = btn('Skip', 'ggt-x ggt-x--skip', endTour);
      const next = btn('Next', 'ggt-x ggt-x--next', nextStep);
      acts.append(back, skip, next);
    } else {
      const finish = btn('Finish', 'ggt-x ggt-x--next', finishTour);
      acts.append(finish);
    }

    // Tooltip smart positioning
    const tipW = Math.min(360, window.innerWidth-24);
    const spaceBelow = window.innerHeight - (r.bottom + pad);
    const tipH = 140; 
    let top = (spaceBelow > tipH ? r.bottom + pad + 6 : r.top - tipH - pad - 6);
    let left = Math.min(Math.max(12, r.left), window.innerWidth - tipW - 12);

    tip.style.width = tipW + 'px';
    tip.style.top = Math.max(8, top) + 'px';
    tip.style.left = left + 'px';
    tip.classList.add('ggt-show');
  }

  function onScroll(){
    if(tour.classList.contains('ggt-hidden')) return;
    window.requestAnimationFrame(positionStep);
  }

  function btn(txt, cls, fn){
    const b = document.createElement('button');
    b.type='button';
    b.className = cls;
    b.textContent = txt;
    b.addEventListener('click', fn);
    return b;
  }

  function nextOrFinish(){
    if(i >= steps.length - 1){ finishTour(); } else { nextStep(); }
  }
  function nextStep(){ i = Math.min(steps.length - 1, i + 1); positionStep(); }
  function prevStep(){ i = Math.max(0, i - 1); positionStep(); }
  function endTour(){
    userDismissed = true;
    closeTour();
  }
  function finishTour(){
    closeTour();
    if(!userDismissed){
      done.classList.remove('ggt-hidden');
      confetti();
    }
    localStorage.setItem(key,'1');
  }
  function closeTour(){
    tour.classList.add('ggt-hidden');
    tip.classList.remove('ggt-show');
    tour.setAttribute('aria-hidden','true');
    document.removeEventListener('keydown', escClose);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', onScroll);
  }
  function escClose(e){ if(e.key === 'Escape') endTour(); }

  // Confetti effect
  function confetti(){
    const n = 36;
    for(let k=0;k<n;k++){
      const p = document.createElement('div');
      p.className='ggt-confetti';
      p.style.left = Math.random()*100 + 'vw';
      p.style.background = Math.random()>.5 ? 'var(--gold)' : '#fff';
      p.style.boxShadow = '0 0 14px rgba(245,196,81,.6)';
      const dur = 2200 + Math.random()*1600;
      const dx = (Math.random() * 80 - 40) + 'px';
      p.animate([
        { transform:'translateY(-10px) translateX(0) rotate(0deg)', opacity:1 },
        { transform:`translateY(94vh) translateX(${dx}) rotate(${~~(Math.random()*720)}deg)`, opacity:0 }
      ], { duration: dur, easing:'ease-out', fill:'forwards' });
      document.body.appendChild(p);
      setTimeout(()=>p.remove(), dur+120);
    }
  }

  // Welcome actions
  wow.addEventListener('click', startTour);
  skipWelcome.addEventListener('click', ()=>{
    welcome.classList.add('ggt-hidden');
    localStorage.setItem(key,'1');
  });

  // Replay FAB
  replay.addEventListener('click', ()=>{
    done.classList.add('ggt-hidden');
    startTour();
  });

  // Final explore
  explore.addEventListener('click', ()=> done.classList.add('ggt-hidden'));
})();




const blob = document.querySelector(".blob");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  blob.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

document.addEventListener("mouseleave", () => {
  blob.style.transform = "translate(0, 0) scale(1)";
});




const sparksContainer = document.querySelector(".blob-sparks");

function createSpark() {
  if (!sparksContainer) return;

  // Create spark element
  const spark = document.createElement("div");
  spark.classList.add("spark");

  // Random start position inside container
  spark.style.left = `${Math.random() * 100}%`;
  spark.style.top = `${Math.random() * 100}%`;

  // Random size variation
  const size = Math.random() * 4 + 3;
  spark.style.width = `${size}px`;
  spark.style.height = `${size}px`;

  // Random delay for natural effect
  spark.style.animationDuration = `${2 + Math.random() * 2}s`;

  sparksContainer.appendChild(spark);

  // Remove spark after animation
  setTimeout(() => {
    spark.remove();
  }, 3000);
}

// Generate sparks continuously
setInterval(createSpark, 300);



(function(){
  const welcome = document.getElementById('ggtWelcome');
  const split   = welcome?.querySelector('.ggt-split');
  const wow     = document.getElementById('ggtWow');
  const skip    = document.getElementById('ggtSkipWelcome');

  if(!welcome || !split) return;

  const KEY = 'tgb-welcome-seen';

  // Always show (good for testing). Set to false if you only want first-visit.
  const ALWAYS_SHOW = true;

  // Show overlay
  if (ALWAYS_SHOW || !localStorage.getItem(KEY)) {
    welcome.classList.remove('ggt-hidden');
  }

  // Buttons
  wow?.addEventListener('click', () => {
    welcome.classList.add('ggt-hidden');
    localStorage.setItem(KEY, '1');
    if (typeof startTour === 'function') startTour();
  });

  skip?.addEventListener('click', () => {
    welcome.classList.add('ggt-hidden');
    localStorage.setItem(KEY, '1');
  });

  // Expose manual opener for debugging
  window.showWelcome = () => welcome.classList.remove('ggt-hidden');

  // ----- Swipe for mobile (≤900px) -----
  const mql = window.matchMedia('(max-width: 900px)');
  let active = 0;   // 0: Old, 1: New
  let startX = 0, dx = 0, down = false;

  function apply() {
    if (mql.matches) {
      // track is 200% wide -> each slide is 50% of the track
      split.style.transform = `translateX(-${active * 50}%)`;
    } else {
      split.style.transform = '';
    }
  }
  apply();
  mql.addEventListener('change', apply);

  function onStart(e){
    if(!mql.matches) return;
    down = true; startX = (e.touches ? e.touches[0].clientX : e.clientX); dx = 0;
  }
  function onMove(e){
    if(!down || !mql.matches) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    dx = x - startX;
  }
  function onEnd(){
    if(!down || !mql.matches) return;
    down = false;
    if (dx < -60 && active === 0) active = 1;   // swipe left
    else if (dx > 60 && active === 1) active = 0; // swipe right
    apply();
  }

  // Touch + (optional) mouse drag
  split.addEventListener('touchstart', onStart, {passive:true});
  split.addEventListener('touchmove',  onMove,  {passive:true});
  split.addEventListener('touchend',   onEnd);
  split.addEventListener('mousedown',  onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup',   onEnd);
})();
/* ================= /GOLDEN GUIDED TOUR ================= */


