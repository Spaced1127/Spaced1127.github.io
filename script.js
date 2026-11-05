(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  // Keep the page readable even when a reader lands deep in it or the
  // observer never sees a short section pass through the viewport.
  window.setTimeout(() => {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }, 900);

  const problemInputs = document.querySelectorAll('input[name="problem"]');
  const benchProject = document.getElementById("bench-project");

  const syncBench = () => {
    const checked = document.querySelector('input[name="problem"]:checked');
    if (checked && benchProject) {
      benchProject.textContent = checked.dataset.project;
    }
  };

  problemInputs.forEach((input) => input.addEventListener("change", syncBench));
  syncBench();

  const footerWordmark = document.querySelector(".footer-wordmark");
  const portrait = document.querySelector(".portrait-media img");

  let ticking = false;

  const updateScroll = () => {
    ticking = false;

    if (reduceMotion.matches) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const viewport = window.innerHeight;

    if (portrait) {
      const progress = Math.min(1, Math.max(0, scrollY / (viewport * 0.9)));
      portrait.style.transform = `scale(${(1 + progress * 0.03).toFixed(3)})`;
    }

    if (footerWordmark) {
      const rect = footerWordmark.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport * 0.7)));
      footerWordmark.style.setProperty("--footer-word-scale", (0.96 + progress * 0.04).toFixed(3));
    }
  };

  const requestScrollUpdate = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateScroll);
    }
  };

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);
  updateScroll();

  const onMotionPreferenceChange = () => {
    if (reduceMotion.matches) {
      if (portrait) portrait.style.transform = "";
      if (footerWordmark) footerWordmark.style.setProperty("--footer-word-scale", "1");
    } else {
      requestScrollUpdate();
    }
  };

  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", onMotionPreferenceChange);
  }
})();
