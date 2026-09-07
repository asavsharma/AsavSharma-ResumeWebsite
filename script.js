/* =========================
   ASAV SHARMA
   RESUME WEBSITE
   JAVASCRIPT
========================= */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const navigationLinks =
  document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {

    menuToggle.innerHTML = "×";

  } else {

    menuToggle.innerHTML = "☰";

  }

});


/* Close navigation after clicking a link */

navigationLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuToggle.innerHTML = "☰";

  });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".section-title, .about-main, .stat-card, " +
  ".education-card, .timeline-item, .leadership-card, " +
  ".achievement-card, .entrepreneurship-content, " +
  ".entrepreneurship-item, .skill-card, " +
  ".contact-container"
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show-section");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("main section[id]");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop - 180 &&
      window.scrollY < sectionTop + sectionHeight - 180
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach((link) => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active-link");

    }

  });

});


/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

const navbar =
  document.getElementById("navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    navbar.style.boxShadow =
      "0 5px 25px rgba(51, 35, 28, 0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}