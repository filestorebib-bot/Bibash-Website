document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById("librarySearch");

    const clearSearch =
        document.getElementById("clearSearch");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const cards =
        document.querySelectorAll(".library-card");

    const resultCount =
        document.getElementById("resultCount");

    const noResults =
        document.getElementById("noResults");


    let activeFilter = "all";


    /* =========================
       FILTER + SEARCH
    ========================= */

    function filterLibrary() {

        const search =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        let visible = 0;


        cards.forEach(card => {

            const category =
                card.dataset.category || "";

            const title =
                card.dataset.title
                    ?.toLowerCase() || "";

            const text =
                card.textContent
                    .toLowerCase();


            const matchesFilter =
                activeFilter === "all" ||
                category === activeFilter;


            const matchesSearch =
                !search ||
                title.includes(search) ||
                text.includes(search);


            if (matchesFilter && matchesSearch) {

                card.style.display = "";

                visible++;

            } else {

                card.style.display = "none";

            }

        });


        if (resultCount) {

            resultCount.textContent =
                `${visible} resource${visible === 1 ? "" : "s"}`;

        }


        if (noResults) {

            noResults.classList.toggle(
                "show",
                visible === 0
            );

        }


        if (clearSearch) {

            clearSearch.classList.toggle(
                "visible",
                search.length > 0
            );

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterLibrary
        );

    }


    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            () => {

                searchInput.value = "";

                filterLibrary();

                searchInput.focus();

            }
        );

    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            activeFilter =
                button.dataset.filter;

            filterLibrary();

        });

    });


    /* =========================
       URL CATEGORY
    ========================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const urlCategory =
        params.get("category");


    if (urlCategory) {

        const matchingButton =
            document.querySelector(
                `[data-filter="${urlCategory}"]`
            );

        if (matchingButton) {

            matchingButton.click();

        }

    }


    /* =========================
       ARTICLE READER
    ========================= */

    const readerOverlay =
        document.getElementById("readerOverlay");

    const closeReader =
        document.getElementById("closeReader");

    const readerTitle =
        document.getElementById("readerTitle");

    const readerBody =
        document.getElementById("readerBody");

    const readerCategory =
        document.getElementById("readerCategory");

    const readerPdf =
        document.getElementById("readerPdf");


    const articles = {

        agriculture: {

            title:
                "Agriculture in Nepali Society",

            category:
                "Agriculture",

            date:
                "Educational Article",

            pdf:
                "documents/pdf/agriculture-in-nepali-society.pdf",

            body: `

                <p>
                    Agriculture has always played an important role
                    in Nepali society. It provides food, employment,
                    income and raw materials while supporting rural
                    communities across the country.
                </p>

                <p>
                    Nepal has diverse geographical conditions ranging
                    from the Terai to the hills and mountains. This
                    diversity creates opportunities for different
                    agricultural production systems.
                </p>

                <h2>
                    Agriculture and society
                </h2>

                <p>
                    Agricultural activities are closely connected with
                    the social and economic structure of Nepal.
                    Farming households depend on agriculture directly
                    or indirectly for their livelihood.
                </p>

                <p>
                    However, agricultural development faces challenges
                    including limited infrastructure, access to credit,
                    market uncertainty, traditional production systems
                    and the migration of young people.
                </p>

                <h2>
                    The role of young people
                </h2>

                <p>
                    Young people can contribute to agriculture by
                    introducing technology, entrepreneurship,
                    scientific production methods and new approaches
                    to agricultural marketing.
                </p>

                <blockquote>
                    Agriculture becomes more sustainable when knowledge,
                    technology and entrepreneurship work together.
                </blockquote>

                <p>
                    Modern agriculture therefore requires more than
                    production alone. It requires education,
                    innovation, market access, infrastructure and
                    responsible resource management.
                </p>

            `

        },


        practical: {

            title:
                "Practical vs Theory",

            category:
                "Education",

            date:
                "Educational Reflection",

            pdf:
                "",

            body: `

                <p>
                    Education is often discussed in terms of theory
                    and practical learning. Both are important,
                    but their roles are different.
                </p>

                <h2>
                    Why theory matters
                </h2>

                <p>
                    Theoretical knowledge provides the foundation
                    required to understand principles, processes
                    and concepts.
                </p>

                <h2>
                    Why practical learning matters
                </h2>

                <p>
                    Practical learning allows students to apply
                    theoretical knowledge to real situations.
                    It helps develop confidence, technical skills,
                    observation and problem-solving ability.
                </p>

                <p>
                    A strong educational system should therefore
                    connect classroom learning with practical
                    experience.
                </p>

                <blockquote>
                    Theory explains why; practice demonstrates how.
                </blockquote>

                <p>
                    The best learning happens when both approaches
                    complement one another.
                </p>

            `

        }

    };


    document
        .querySelectorAll(".read-button[data-article]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const articleId =
                    button.dataset.article;

                const article =
                    articles[articleId];


                if (!article) return;


                readerTitle.textContent =
                    article.title;

                readerCategory.textContent =
                    article.category;

                document.getElementById(
                    "readerDate"
                ).textContent =
                    article.date;

                readerBody.innerHTML =
                    article.body;


                if (article.pdf) {

                    readerPdf.style.display =
                        "inline-block";

                    readerPdf.onclick = () => {

                        window.open(
                            article.pdf,
                            "_blank"
                        );

                    };

                } else {

                    readerPdf.style.display =
                        "none";

                }


                readerOverlay.classList.add(
                    "active"
                );

                document.body.classList.add(
                    "reader-open"
                );

                window.scrollTo(0, 0);

            });

        });


    /* =========================
       CLOSE READER
    ========================= */

    if (closeReader) {

        closeReader.addEventListener(
            "click",
            closeReadingMode
        );

    }


    if (readerOverlay) {

        readerOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    readerOverlay
                ) {

                    closeReadingMode();

                }

            }
        );

    }


    function closeReadingMode() {

        readerOverlay.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "reader-open"
        );

    }


    /* Initial filtering */

    filterLibrary();

});
