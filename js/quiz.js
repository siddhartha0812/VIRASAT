const questions = [
    [
        "Which city is famous for Chikankari?",
        ["Jaipur", "Lucknow", "Kochi", "Surat"],
        1,
    ],

    [
        "Madhubani painting originated in which region?",
        ["Mithila", "Konkan", "Malwa", "Doab"],
        0,
    ],

    [
        "Dhokra traditionally uses which process?",
        [
            "Lost-wax casting",
            "Screen printing",
            "Stone carving",
            "Paper making",
        ],
        0,
    ],

    [
        "Warli art is known for which visual language?",
        [
            "Geometric forms",
            "Oil portraits",
            "Calligraphy",
            "Mosaic",
        ],
        0,
    ],

    [
        "Blue Pottery is strongly associated with which city?",
        ["Jaipur", "Patna", "Delhi", "Chennai"],
        0,
    ],
];


// ==============================
// QUIZ STATE
// ==============================

let n = 0;
let answers = [];


// ==============================
// RENDER QUIZ
// ==============================

function render() {

    const q = questions[n];

    $(".quizbox").innerHTML = `
        <span class="tag">
            Question ${n + 1} of ${questions.length}
        </span>


        <!-- PROGRESS BAR -->
        <div class="bar">

            <i
                style="width: ${(n / questions.length) * 100}%"
            ></i>

        </div>


        <!-- QUESTION -->
        <h2>
            ${q[0]}
        </h2>


        <!-- OPTIONS -->
        <div class="options">

            ${q[1]
                .map(
                    (x, i) => `
                        <button
                            data-i="${i}"
                            class="${
                                answers[n] === i
                                    ? "selected"
                                    : ""
                            }"
                        >
                            ${"ABCD"[i]}. ${x}
                        </button>
                    `
                )
                .join("")}

        </div>


        <!-- QUIZ ACTIONS -->
        <div class="actions">

            <button
                class="outline prev"
                ${n ? "" : "disabled"}
            >
                Previous
            </button>


            ${
                n === questions.length - 1
                    ? `
                        <button class="primary submit">
                            Submit quiz
                        </button>
                    `
                    : `
                        <button class="primary next">
                            Next
                        </button>
                    `
            }

        </div>
    `;


    // ==========================
    // ANSWER SELECTION
    // ==========================

    document
        .querySelectorAll("[data-i]")
        .forEach((b) => {

            b.onclick = () => {

                answers[n] = +b.dataset.i;

                render();

            };

        });


    // ==========================
    // PREVIOUS BUTTON
    // ==========================

    $(".prev")?.addEventListener(
        "click",
        () => {

            n--;

            render();

        }
    );


    // ==========================
    // NEXT BUTTON
    // ==========================

    $(".next")?.addEventListener(
        "click",
        () => {

            if (answers[n] === undefined) {

                toast(
                    "Choose an answer to continue"
                );

                return;

            }

            n++;

            render();

        }
    );


    // ==========================
    // SUBMIT BUTTON
    // ==========================

    $(".submit")?.addEventListener(
        "click",
        finish
    );
}


// ==============================
// FINISH QUIZ
// ==============================

function finish() {

    if (answers[n] === undefined) {

        toast(
            "Choose an answer to submit"
        );

        return;

    }


    // Calculate score
    const score = answers.filter(
        (a, i) => a === questions[i][2]
    ).length;


    // Update progress
    const p = stored(
        "virasatProgress",
        {
            stories: [],
            scans: 0,
            quizzes: 0,
        }
    );

    p.quizzes++;

    save(
        "virasatProgress",
        p
    );


    // Update high score
    const high = Math.max(
        +localStorage.getItem("virasatHigh") || 0,
        score
    );

    localStorage.setItem(
        "virasatHigh",
        high
    );


    // Result message
    let message;

    if (score >= 4) {

        message =
            "Virasat Champion — exceptional cultural curiosity!";

    } else if (score >= 3) {

        message =
            "Culture Keeper — keep exploring.";

    } else {

        message =
            "Craft Curious — every story begins with a question.";

    }


    // Show result
    $(".quizbox").innerHTML = `
        <span class="tag">
            Your heritage score
        </span>

        <h1>
            ${score}/${questions.length}
        </h1>

        <p>
            ${message}
        </p>

        <p>
            Highest score:
            ${high}/${questions.length}
        </p>

        <button class="primary restart">
            Restart quiz
        </button>
    `;


    // Restart quiz
    $(".restart").onclick = () => {

        n = 0;

        answers = [];

        render();

    };


    toast(
        "Quiz completed · Progress saved"
    );
}


// ==============================
// QUIZ PAGE
// ==============================

app.innerHTML =
    nav() +
    `
    <main>

        <!-- PAGE HEADER -->
        <section class="page-head">

            <div class="wrap">

                <span class="eyebrow">
                    Learn by doing
                </span>

                <h1>
                    Test Your Heritage Knowledge
                </h1>

                <p>
                    Unlock badges as you explore,
                    scan and learn.
                </p>

            </div>

        </section>


        <!-- QUIZ -->
        <section class="section">

            <div class="wrap">

                <div class="quizbox"></div>

            </div>

        </section>

    </main>
    ` +
    footer();


// ==============================
// INITIALIZE QUIZ
// ==============================

render();


// ==============================
// GLOBAL BINDINGS
// ==============================

bind();