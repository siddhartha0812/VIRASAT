const $ = (s) => document.querySelector(s);
const app = $("#app");

const stored = (k, d) => {
    try {
        return JSON.parse(localStorage.getItem(k)) ?? d;
    } catch {
        return d;
    }
};

const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const path = location.pathname.split("/").pop() || "index.html";
const qs = new URLSearchParams(location.search);

const esc = (s) =>
    String(s).replace(
        /[&<>"']/g,
        (m) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        })[m]
    );


// ==============================
// NAVIGATION
// ==============================

function nav() {
    return `
        <nav class="nav">
            <div class="wrap navin">

                <a class="brand" href="index.html">
                    VIRASAT
                </a>

                <div class="links">
                    ${[
                        ["Home", "index.html"],
                        ["Explore", "explore.html"],
                        ["Scan", "scan.html"],
                        ["Artisans", "artisans.html"],
                        ["Heritage Map", "map.html"],
                        ["Quiz", "quiz.html"],
                        ["About", "about.html"],
                    ]
                        .map(
                            (x) =>
                                `<a class="${
                                    path === x[1] ? "active" : ""
                                }" href="${x[1]}">${x[0]}</a>`
                        )
                        .join("")}
                </div>

                <button class="icon menu" aria-label="Open menu">
                    ☰
                </button>

                <button class="icon theme" aria-label="Toggle dark mode">
                    ◐
                </button>

                <button class="icon a11y" aria-label="Accessibility mode">
                    A+
                </button>

                <a class="btn primary" href="scan.html">
                    Scan QR
                </a>

            </div>
        </nav>
    `;
}


// ==============================
// FOOTER
// ==============================

function footer() {
    return `
        <footer class="footer">
            <div class="wrap">

                <a class="brand" href="index.html">
                    VIRASAT
                </a>

                <p>
                    Preserving yesterday. Experiencing today. Inspiring tomorrow.
                </p>

                <p>
                    <a href="explore.html">Explore</a>
                    <a href="scan.html">Scan</a>
                    <a href="artisans.html">Artisans</a>
                    <a href="map.html">Map</a>
                    <a href="quiz.html">Quiz</a>
                    <a href="about.html">About</a>
                </p>

                <small>
                    © 2026 VIRASAT · Digital Guardian of Indian Culture
                </small>

            </div>
        </footer>
    `;
}


// ==============================
// TOAST
// ==============================

function toast(t) {
    const d = document.createElement("div");

    d.className = "toast";
    d.textContent = t;

    document.body.append(d);

    setTimeout(() => d.remove(), 2600);
}


// ==============================
// HERITAGE CARD
// ==============================

function card(h) {
    return `
        <article class="card heritage-card">

            <img
                src="${h.image}"
                alt="${esc(h.title)} heritage"
                onerror="
                    this.style.background='#d9c7a8';
                    this.removeAttribute('src');
                "
            >

            <div class="card-body">

                <span class="tag">
                    ${esc(h.category)} · ${esc(h.state)}
                </span>

                <h3>
                    ${esc(h.title)}
                </h3>

                <p>
                    ${esc(h.description)}
                </p>

                <a
                    class="btn outline"
                    href="story.html?id=${h.id}"
                >
                    Explore story →
                </a>

            </div>

        </article>
    `;
}


// ==============================
// PROGRESS
// ==============================

function progress() {
    const p = stored("virasatProgress", {
        stories: [],
        scans: 0,
        quizzes: 0,
    });

    const b =
        (p.stories.length ? 1 : 0) +
        (p.scans ? 1 : 0) +
        (p.quizzes ? 1 : 0) +
        (p.stories.length >= 3 ? 1 : 0);

    return `
        <div class="progress">

            <span class="tag">
                Your journey
            </span>

            <p>
                <strong>${p.stories.length}</strong>
                stories explored ·

                <strong>${p.quizzes}</strong>
                quizzes ·

                <strong>${b}</strong>
                badges
            </p>

            <button class="outline reset">
                Reset progress
            </button>

        </div>
    `;
}


// ==============================
// TRACK STORY
// ==============================

function track(id) {
    const p = stored("virasatProgress", {
        stories: [],
        scans: 0,
        quizzes: 0,
    });

    p.stories = [
        id,
        ...p.stories.filter((x) => x !== id),
    ].slice(0, 5);

    save("virasatProgress", p);
}


// ==============================
// HOME PAGE
// ==============================

function home() {
    const day =
        HERITAGE[new Date().getDate() % HERITAGE.length];

    app.innerHTML =
        nav() +
        `
        <main>

            <!-- HERO -->
            <section class="hero">

                <div class="wrap hero-grid">

                    <div>

                        <span class="eyebrow">
                            Digital Guardian of Indian Culture
                        </span>

                        <h1>
                            India's Heritage,
                            <br>
                            Connected to the Future.
                        </h1>

                        <p>
                            Discover the stories, people and places
                            behind India's living heritage.
                        </p>

                        <div class="actions">

                            <a
                                class="btn primary"
                                href="explore.html"
                            >
                                Explore Heritage
                            </a>

                            <a
                                class="btn outline"
                                href="scan.html"
                            >
                                Scan an Exhibit
                            </a>

                        </div>

                    </div>


                    <!-- HERITAGE FLOW -->
                    <div
                        class="flow"
                        aria-label="Artifact to QR code to smartphone story"
                    >

                        <div class="flow-item">

                            <div class="artifact">
                                🏺
                            </div>

                            Physical heritage

                        </div>

                        <span class="arrow">
                            →
                        </span>

                        <div class="flow-item">

                            <div class="qr"></div>

                            QR / NFC

                        </div>

                        <span class="arrow">
                            →
                        </span>

                        <div class="flow-item">

                            <div class="phone">
                                ▯
                            </div>

                            Digital story

                        </div>

                    </div>

                </div>

            </section>


            <!-- STATS -->
            <section class="section">

                <div class="wrap grid stats">

                    ${[
                        ["500+", "Heritage stories"],
                        ["120+", "Artisan profiles"],
                        ["28", "States & UTs"],
                        ["∞", "Stories to preserve"],
                    ]
                        .map(
                            (x) => `
                                <div class="stat">

                                    <div class="num">
                                        ${x[0]}
                                    </div>

                                    <div>
                                        ${x[1]}
                                    </div>

                                </div>
                            `
                        )
                        .join("")}

                </div>

            </section>


            <!-- HOW IT WORKS -->
            <section class="section tint">

                <div class="wrap">

                    <div class="section-head">

                        <div>

                            <span class="eyebrow">
                                How it works
                            </span>

                            <h2>
                                One exhibit. A living story.
                            </h2>

                        </div>

                    </div>


                    <div class="grid steps">

                        ${[
                            [
                                "01",
                                "Discover",
                                "Explore India’s cultural heritage.",
                            ],
                            [
                                "02",
                                "Scan",
                                "Scan a QR or NFC tag at an exhibit.",
                            ],
                            [
                                "03",
                                "Experience",
                                "Meet makers, places and processes.",
                            ],
                            [
                                "04",
                                "Preserve",
                                "Learn, share and keep stories alive.",
                            ],
                        ]
                            .map(
                                (x) => `
                                    <div class="card">

                                        <div class="stepno">
                                            ${x[0]}
                                        </div>

                                        <h3>
                                            ${x[1]}
                                        </h3>

                                        <p>
                                            ${x[2]}
                                        </p>

                                    </div>
                                `
                            )
                            .join("")}

                    </div>

                </div>

            </section>


            <!-- HERITAGE OF THE DAY -->
            <section class="section">

                <div class="wrap">

                    <div class="section-head">

                        <div>

                            <span class="eyebrow">
                                Heritage of the day
                            </span>

                            <h2>
                                ${day.title}
                            </h2>

                            <p>
                                ${day.city},
                                ${day.state}
                                ·
                                ${day.description}
                            </p>

                        </div>

                        <a
                            class="btn primary"
                            href="story.html?id=${day.id}"
                        >
                            Discover today’s story
                        </a>

                    </div>

                    ${progress()}

                </div>

            </section>


            <!-- ASK VIRASAT -->
            <section class="section tint">

                <div class="wrap hero-grid">

                    <div>

                        <span class="eyebrow">
                            Ask VIRASAT
                        </span>

                        <h2>
                            A local cultural storyteller
                        </h2>

                        <p>
                            Ask a question about any featured tradition.
                            This demo uses its local heritage knowledge
                            base—no paid AI API required.
                        </p>


                        <div class="ask">

                            <input
                                aria-label="Ask VIRASAT"
                                placeholder="What is Chikankari?"
                            >

                            <button class="primary askbtn">
                                Ask
                            </button>

                        </div>


                        <div
                            class="answer"
                            hidden
                        ></div>

                    </div>


                    <!-- FACT CARD -->
                    <div class="card card-body">

                        <span class="tag">
                            Did you know?
                        </span>

                        <h3 class="fact">
                            ${FACTS[0]}
                        </h3>

                        <button class="outline factnext">
                            Next fact
                        </button>

                    </div>

                </div>

            </section>

        </main>
        ` +
        footer();


    // ==========================
    // HOME EVENT LISTENERS
    // ==========================

    let fi = 0;

    $(".factnext").onclick = () => {
        $(".fact").textContent =
            FACTS[++fi % FACTS.length];
    };

    $(".askbtn").onclick = ask;
}


// ==============================
// ASK VIRASAT
// ==============================

function ask() {
    const q = $(".ask input").value.toLowerCase();

    const h =
        HERITAGE.find(
            (x) =>
                q.includes(x.id) ||
                q.includes(x.title.toLowerCase())
        ) || HERITAGE[0];

    const a = $(".answer");

    a.hidden = false;

    if (
        q.includes("made") ||
        q.includes("how")
    ) {
        a.textContent =
            `${h.title} is made through: ${h.process.join(", ")}.`;

    } else if (
        q.includes("where") ||
        q.includes("origin")
    ) {
        a.textContent =
            `${h.title} is associated with ${h.city}, ${h.state}.`;

    } else if (
        q.includes("important")
    ) {
        a.textContent = h.significance;

    } else {
        a.textContent =
            `${h.title} is ${h.description} ${h.history}`;
    }
}


// ==============================
// ABOUT PAGE
// ==============================

function about() {
    app.innerHTML =
        nav() +
        `
        <main>

            <!-- PAGE HEADER -->
            <section class="page-head">

                <div class="wrap">

                    <span class="eyebrow">
                        Our purpose
                    </span>

                    <h1>
                        A bridge from physical heritage
                        to living knowledge.
                    </h1>

                    <p>
                        VIRASAT makes every exhibit a respectful
                        digital entry point.
                    </p>

                </div>

            </section>


            <!-- PURPOSE -->
            <section class="section tint">

                <div class="wrap grid">

                    ${[
                        [
                            "The problem",
                            "Cultural knowledge is fragmented across physical spaces, books, communities and disconnected digital sources.",
                        ],
                        [
                            "The solution",
                            "QR/NFC-enabled storytelling connects exhibits, makers, locations and learning.",
                        ],
                        [
                            "The innovation",
                            "A reliable, lightweight discovery layer for museums, colleges and communities.",
                        ],
                        [
                            "The impact",
                            "Education, preservation, artisan visibility and student engagement.",
                        ],
                    ]
                        .map(
                            (x) => `
                                <div class="card card-body">

                                    <h3>
                                        ${x[0]}
                                    </h3>

                                    <p>
                                        ${x[1]}
                                    </p>

                                </div>
                            `
                        )
                        .join("")}

                </div>

            </section>


            <!-- ROADMAP -->
            <section class="section">

                <div class="wrap">

                    <span class="eyebrow">
                        Future roadmap
                    </span>

                    <h2>
                        Heritage → Future
                    </h2>


                    <div class="timeline">

                        ${[
                            "Digital Heritage MVP",
                            "Institution Dashboard",
                            "Multilingual AI Storyteller",
                            "Computer Vision & AR",
                        ]
                            .map(
                                (x, i) => `
                                    <div>

                                        <b>
                                            PHASE ${i + 1}
                                        </b>

                                        <p>

                                            ${x}

                                            <br>

                                            <span class="tag">
                                                Coming soon
                                            </span>

                                        </p>

                                    </div>
                                `
                            )
                            .join("")}

                    </div>

                </div>

            </section>

        </main>
        ` +
        footer();
}


// ==============================
// GLOBAL BINDINGS
// ==============================

function bind() {

    document.body.classList.toggle(
        "dark",
        localStorage.getItem("virasatDark") === "true"
    );

    document.body.classList.toggle(
        "a11y",
        localStorage.getItem("virasatA11y") === "true"
    );


    // Dark mode
    $(".theme")?.addEventListener("click", () => {

        localStorage.setItem(
            "virasatDark",
            !(localStorage.getItem("virasatDark") === "true")
        );

        location.reload();

    });


    // Accessibility mode
    $(".a11y")?.addEventListener("click", () => {

        localStorage.setItem(
            "virasatA11y",
            !(localStorage.getItem("virasatA11y") === "true")
        );

        location.reload();

    });


    // Mobile menu
    $(".menu")?.addEventListener("click", () => {

        $(".links").classList.toggle("open");

    });


    // Reset progress
    $(".reset")?.addEventListener("click", () => {

        localStorage.removeItem("virasatProgress");

        toast("Progress reset");

        location.reload();

    });
}


// ==============================
// PAGE ROUTING
// ==============================

if (path === "index.html") {
    home();
} else if (path === "about.html") {
    about();
}

bind();