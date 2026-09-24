const h =
    HERITAGE.find(
        (x) => x.id === qs.get("id")
    ) || HERITAGE[0];


// Track story visit
track(h.id);


// Load saved favorites
let fav = stored(
    "virasatFav",
    []
);


// ==============================
// STORY PAGE
// ==============================

function story() {

    app.innerHTML =
        nav() +
        `
        <main>

            <!-- STORY HERO -->
            <section
                class="story-hero"
                style="background-image: url('${h.image}')"
            >

                <div class="wrap">

                    <span
                        class="tag"
                        style="color:#f5d89c"
                    >
                        ${h.category} · ${h.state}
                    </span>

                    <h1>
                        ${h.title}
                    </h1>

                    <p>
                        ${h.city}, ${h.state}
                    </p>

                </div>

            </section>


            <!-- STORY CONTENT -->
            <section class="wrap story-layout">

                <article>

                    <!-- OVERVIEW -->
                    <span class="eyebrow">
                        Overview
                    </span>

                    <h2>
                        A tradition, still in motion
                    </h2>

                    <p>
                        ${h.description}
                    </p>


                    <!-- HISTORY -->
                    <h2>
                        History
                    </h2>

                    <p>
                        ${h.history}
                    </p>


                    <!-- TIMELINE -->
                    <div class="timeline">

                        <div>

                            <b>
                                Origins
                            </b>

                            <p>
                                Community knowledge
                            </p>

                        </div>


                        <div>

                            <b>
                                Evolution
                            </b>

                            <p>
                                Technique refined
                            </p>

                        </div>


                        <div>

                            <b>
                                Modern era
                            </b>

                            <p>
                                New audiences
                            </p>

                        </div>


                        <div>

                            <b>
                                Today
                            </b>

                            <p>
                                Living heritage
                            </p>

                        </div>

                    </div>


                    <!-- CRAFT PROCESS -->
                    <h2>
                        Craft process
                    </h2>

                    <div class="process">

                        ${h.process
                            .map(
                                (p, i) => `
                                    <div>

                                        <b>
                                            ${String(
                                                i + 1
                                            ).padStart(2, "0")}
                                        </b>

                                        <p>
                                            ${p}
                                        </p>

                                    </div>
                                `
                            )
                            .join("")}

                    </div>


                    <!-- CULTURAL SIGNIFICANCE -->
                    <h2>
                        Cultural significance
                    </h2>

                    <p>
                        ${h.significance}
                    </p>


                    <!-- ARTISAN -->
                    <h2>
                        Meet the hands behind the heritage
                    </h2>

                    <div class="artisan">

                        <div class="avatar">
                            ${h.artisan.name[0]}
                        </div>

                        <div>

                            <h3>
                                ${h.artisan.name}
                            </h3>

                            <p>
                                ${h.artisan.place}
                                ·
                                ${h.artisan.experience}
                                experience
                            </p>

                            <p>
                                ${h.artisan.story}
                            </p>

                            <a
                                class="btn outline"
                                href="artisans.html?id=${h.id}"
                            >
                                View artisan profile
                            </a>

                        </div>

                    </div>

                </article>


                <!-- SIDEBAR -->
                <aside class="side-card">

                    <span class="tag">
                        Your visit
                    </span>

                    <p>
                        ${h.city}, ${h.state}
                    </p>


                    <!-- FAVORITE -->
                    <button class="primary favorite">

                        ${
                            fav.includes(h.id)
                                ? "♥ Saved"
                                : "♡ Save to collection"
                        }

                    </button>


                    <!-- SHARE -->
                    <button class="outline share">
                        Share story
                    </button>


                    <!-- MAP -->
                    <a
                        class="btn outline"
                        href="map.html?id=${h.id}"
                    >
                        View on map
                    </a>


                    <!-- QUIZ -->
                    <a
                        class="btn outline"
                        href="quiz.html?heritage=${h.id}"
                    >
                        Take quiz
                    </a>

                </aside>

            </section>

        </main>
        ` +
        footer();


    // ==========================
    // FAVORITE BUTTON
    // ==========================

    $(".favorite").onclick = () => {

        fav = fav.includes(h.id)
            ? fav.filter(
                  (x) => x !== h.id
              )
            : [...fav, h.id];


        save(
            "virasatFav",
            fav
        );


        $(".favorite").textContent =
            fav.includes(h.id)
                ? "♥ Saved"
                : "♡ Save to collection";


        toast(
            fav.includes(h.id)
                ? "Added to your collection"
                : "Removed from collection"
        );

    };


    // ==========================
    // SHARE STORY
    // ==========================

    $(".share").onclick = async () => {

        try {

            if (navigator.share) {

                await navigator.share({
                    title: h.title,
                    url: location.href,
                });

            } else {

                throw 0;

            }

        } catch {

            navigator.clipboard?.writeText(
                location.href
            );

            toast(
                "Link copied!"
            );

        }

    };


    // ==========================
    // GLOBAL BINDINGS
    // ==========================

    bind();
}


// ==============================
// INITIALIZE STORY PAGE
// ==============================

story();