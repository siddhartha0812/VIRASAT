function profile(h) {
    const d = document.createElement("div");

    d.className = "modal";

    d.innerHTML = `
        <div>

            <button class="icon close">
                ×
            </button>

            <span class="tag">
                Artisan spotlight
            </span>

            <h2>
                ${h.artisan.name}
            </h2>

            <p>
                <b>${h.title}</b>
                · ${h.artisan.place}
                · ${h.artisan.experience} experience
            </p>

            <p>
                ${h.artisan.story}
            </p>

            <h3>
                Traditional technique
            </h3>

            <p>
                ${h.process.join(" → ")}
            </p>

            <a
                class="btn primary"
                href="story.html?id=${h.id}"
            >
                Discover this craft
            </a>

        </div>
    `;

    document.body.append(d);


    // Close modal
    d.onclick = (e) => {

        if (
            e.target === d ||
            e.target.closest(".close")
        ) {
            d.remove();
        }

    };
}


// ==============================
// ARTISANS PAGE
// ==============================

app.innerHTML =
    nav() +
    `
    <main>

        <!-- PAGE HEADER -->
        <section class="page-head">

            <div class="wrap">

                <span class="eyebrow">
                    People → stories
                </span>

                <h1>
                    Meet the Hands Behind India's Heritage
                </h1>

                <p>
                    Craft traditions live through practitioners,
                    teachers and communities.
                </p>

            </div>

        </section>


        <!-- ARTISAN GRID -->
        <section class="section">

            <div class="wrap artisan-grid">

                ${HERITAGE
                    .map(
                        (h) => `
                            <article class="card artisan-card">

                                <div class="avatar">
                                    ${h.artisan.name[0]}
                                </div>

                                <span class="tag">
                                    ${h.category}
                                </span>

                                <h2>
                                    ${h.artisan.name}
                                </h2>

                                <p>

                                    <b>
                                        ${h.title}
                                    </b>

                                    <br>

                                    ${h.artisan.place}

                                    <br>

                                    ${h.artisan.experience}
                                    experience

                                </p>

                                <p>
                                    ${h.artisan.story}
                                </p>

                                <button
                                    class="outline profile"
                                    data-id="${h.id}"
                                >
                                    View profile
                                </button>

                            </article>
                        `
                    )
                    .join("")}

            </div>

        </section>

    </main>
    ` +
    footer();


// ==============================
// PROFILE BUTTONS
// ==============================

document
    .querySelectorAll(".profile")
    .forEach((b) => {

        b.onclick = () => {

            const artisan = HERITAGE.find(
                (h) => h.id === b.dataset.id
            );

            if (artisan) {
                profile(artisan);
            }

        };

    });


// ==============================
// GLOBAL BINDINGS
// ==============================

bind();