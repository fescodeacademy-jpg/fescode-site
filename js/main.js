/* FesCode Limited — site interactions */
(function () {
  const body = document.body;
  const header = document.querySelector(".header");
  const toggle = document.querySelector(".nav-toggle");
  const toTop = document.querySelector(".to-top");

  // Mobile nav
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => body.classList.remove("nav-open"))
    );
  }

  // Header shadow + back-to-top
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("scrolled", y > 10);
    toTop && toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Count-up stats
  const counters = document.querySelectorAll("[data-count]");
  const co = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, dur = 1400, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      co.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => co.observe(c));

  // Project filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".project-card[data-cat]").forEach((card) => {
      card.classList.toggle("is-hidden", f !== "all" && !card.dataset.cat.includes(f));
    });
  }));

  // Contact form validation
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      let ok = true;
      form.querySelectorAll("[required]").forEach((input) => {
        const field = input.closest(".field");
        const valid = input.type === "email"
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
          : input.value.trim() !== "";
        field.classList.toggle("error", !valid);
        if (!valid) ok = false;
      });
      if (ok) {
        form.querySelector(".form-success").classList.add("show");
        form.reset();
      }
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
