let category = "All";
let term = "";


// ==============================
// RENDER EXPLORE
// ==============================

function renderExplore() {

    const data = HERITAGE.filter((h) => {

        const matchesCategory =
            category === "All" ||
            h.category === category;

        const searchableText = `
            ${h.title}
            ${h.state}
            ${h.city}
            ${h.category}
            ${h.description}
            ${h.artisan.name}
            ${h.tags.join(" ")}
        `.toLowerCase();

        const matchesSearch =
            searchableText.includes(
                term.toLowerCase()
            );

        return matchesCategory && matchesSearch;

    });


    $(".results").innerHTML = data.length
        ? data.map(card).join("")
        : `
            <div class="collection-empty">
                No heritage found.
                Try another craft, place or category.
            </div>
        `;
}


// ==============================
// EXPLORE PAGE
// ==============================

app.innerHTML =
    nav() +
    `
    <main>

        <!-- PAGE HEADER -->
        <section class="page-head">

            <div class="wrap">

                <span class="eyebrow">
                    Discover, learn, preserve
                </span>

                <h1>
                    Explore India's Living Heritage
                </h1>


                <!-- SEARCH -->
                <div class="search">

                    <input
                        id="search"
                        placeholder="Search crafts, monuments, traditions…"
                        aria-label="Search heritage"
                    >

                    <button class="outline clear">
                        Clear
                    </button>

                </div>


                <!-- CATEGORY FILTERS -->
                <div class="filters">

                    ${
                        [
                            "All",
                            ...new Set(
                                HERITAGE.map(
                                    (h) => h.category
                                )
                            ),
                        ]
                            .map(
                                (x) => `
                                    <button
                                        data-c="${x}"
                                        class="${
                                            x === "All"
                                                ? "selected"
                                                : ""
                                        }"
                                    >
                                        ${x}
                                    </button>
                                `
                            )
                            .join("")
                    }

                </div>

            </div>

        </section>


        <!-- RESULTS -->
        <section class="section">

            <div class="wrap">

                <div class="heritage-grid results"></div>

            </div>

        </section>

    </main>
    ` +
    footer();


// ==============================
// INITIAL RENDER
// ==============================

renderExplore();


// ==============================
// SEARCH
// ==============================

$("#search").oninput = (e) => {

    term = e.target.value;

    renderExplore();

};


// ==============================
// CLEAR SEARCH
// ==============================

$(".clear").onclick = () => {

    $("#search").value = "";

    term = "";

    renderExplore();

};


// ==============================
// CATEGORY FILTER
// ==============================

document
    .querySelectorAll("[data-c]")
    .forEach((b) => {

        b.onclick = () => {

            category = b.dataset.c;


            document
                .querySelectorAll("[data-c]")
                .forEach((x) => {

                    x.classList.toggle(
                        "selected",
                        x === b
                    );

                });


            renderExplore();

        };

    });


// ==============================
// GLOBAL BINDINGS
// ==============================

bind();