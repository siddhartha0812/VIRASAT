let mapCategory = "All";


// ==============================
// CREATE / UPDATE MAP MARKERS
// ==============================

function markers() {

    if (!window.map) {
        return;
    }


    // Remove existing markers
    window.layers.forEach((x) => {
        x.remove();
    });

    window.layers = [];


    // Add filtered heritage markers
    HERITAGE
        .filter(
            (h) =>
                mapCategory === "All" ||
                h.category === mapCategory
        )
        .forEach((h) => {

            const m = L
                .marker(h.coordinates)
                .addTo(map)
                .bindPopup(`
                    <b>
                        ${esc(h.title)}
                    </b>

                    <br>

                    ${esc(h.city)}
                    ·
                    ${esc(h.category)}

                    <br>

                    <a href="story.html?id=${h.id}">
                        Explore story
                    </a>
                `);

            window.layers.push(m);

        });
}


// ==============================
// HERITAGE MAP PAGE
// ==============================

app.innerHTML =
    nav() +
    `
    <main>

        <!-- PAGE HEADER -->
        <section class="page-head">

            <div class="wrap">

                <span class="eyebrow">
                    Place-based discovery
                </span>

                <h1>
                    Heritage Map
                </h1>

                <p>
                    Find stories in the landscapes and cities
                    that shape them.
                </p>


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


        <!-- MAP -->
        <section class="section">

            <div class="wrap">

                <div
                    id="map"
                    class="mapbox"
                >

                    <div class="mapfallback">

                        <div>

                            <h2>
                                Loading the heritage map…
                            </h2>

                            <p>
                                If map tiles are unavailable,
                                VIRASAT remains fully usable
                                through story links.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </main>
    ` +
    footer();


// ==============================
// INITIALIZE LEAFLET MAP
// ==============================

if (window.L) {

    window.map = L
        .map("map")
        .setView([22.5, 79], 5);


    // OpenStreetMap tiles
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "© OpenStreetMap",
        }
    ).addTo(map);


    // Store active markers
    window.layers = [];


    // Render markers
    markers();


    // Focus on selected heritage item
    const focus = HERITAGE.find(
        (h) => h.id === qs.get("id")
    );

    if (focus) {

        map.setView(
            focus.coordinates,
            9
        );

    }

}


// ==============================
// MAP CATEGORY FILTER
// ==============================

document
    .querySelectorAll("[data-c]")
    .forEach((b) => {

        b.onclick = () => {

            mapCategory = b.dataset.c;


            // Update selected button
            document
                .querySelectorAll("[data-c]")
                .forEach((x) => {

                    x.classList.toggle(
                        "selected",
                        x === b
                    );

                });


            // Update markers
            markers();

        };

    });


// ==============================
// GLOBAL BINDINGS
// ==============================

bind();