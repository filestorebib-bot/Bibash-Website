document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

        });


        document
            .querySelectorAll(".nav-link")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navMenu.classList.remove("open");

                });

            });

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const year =
        document.getElementById("currentYear");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            document
                .querySelector(".reader-overlay.active")
                ?.classList.remove("active");

            document.body.classList.remove("reader-open");

        }

    });

});
