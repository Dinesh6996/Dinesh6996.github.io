/* =========================================
   BADAVATH DINESH NAIK - PORTFOLIO
   JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Add a loaded class after the page is ready
    document.body.classList.add("loaded");


    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealElements = document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .cert-card, .timeline-item, .info-box"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // =========================
    // CURRENT YEAR
    // =========================

    const footerYear = document.querySelector("footer p");

    if (footerYear) {

        footerYear.textContent =
            "© " + new Date().getFullYear() + " Badavath Dinesh Naik";

    }


    // =========================
    // EXTERNAL LINKS
    // =========================

    const externalLinks = document.querySelectorAll(
        'a[target="_blank"]'
    );

    externalLinks.forEach(function (link) {

        link.setAttribute("rel", "noopener noreferrer");

    });

});
