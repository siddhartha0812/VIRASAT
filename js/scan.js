app.innerHTML =
    nav() +
    `
    <main>

        <!-- PAGE HEADER -->
        <section class="page-head">

            <div class="wrap">

                <span class="eyebrow">
                    Physical → Digital
                </span>

                <h1>
                    Scan a Heritage Exhibit
                </h1>

                <p>
                    Point your camera at a VIRASAT QR code,
                    or use the reliable demo options below.
                </p>

            </div>

        </section>


        <!-- SCANNER -->
        <section class="section">

            <div class="wrap">

                <div class="scanbox">

                    <!-- QR PREVIEW -->
                    <div
                        class="qr"
                        style="width:120px;height:120px"
                    ></div>

                    <p>

                        <b>
                            VIRASAT → Chikankari
                        </b>

                        <br>

                        <small>
                            virasat://heritage/chikankari
                        </small>

                    </p>


                    <!-- CAMERA -->
                    <div class="camera">

                        <span class="scanline"></span>

                        <span class="cameraText">
                            Camera is ready when you are
                        </span>

                    </div>


                    <!-- SCANNER ACTIONS -->
                    <div
                        class="actions"
                        style="justify-content:center"
                    >

                        <button class="primary start">
                            Start Camera
                        </button>

                        <button class="outline stop">
                            Stop Camera
                        </button>

                        <button class="outline demo">
                            Try Demo Scan
                        </button>

                    </div>


                    <!-- SCAN RESULT -->
                    <div
                        class="result"
                        hidden
                    >

                        ✓ Heritage identified

                        <br>

                        <b>
                            Chikankari — Lucknow
                        </b>

                        <br>

                        <a
                            class="btn primary"
                            href="story.html?id=chikankari"
                        >
                            Open Heritage Story
                        </a>

                    </div>


                    <!-- MANUAL EXHIBIT CODE -->
                    <form class="manual">

                        <input
                            placeholder="Enter exhibit code e.g. CHIKANKARI-001"
                            aria-label="Exhibit code"
                        >

                        <button class="primary">
                            Open
                        </button>

                    </form>


                    <p class="codehint"></p>


                    <!-- NFC -->
                    <button class="outline nfc">
                        Simulate NFC Tap
                    </button>

                </div>

            </div>

        </section>

    </main>
    ` +
    footer();


// ==============================
// DEMO SCAN
// ==============================

$(".demo").onclick = () => {

    toast(
        "Scanning exhibit…"
    );

    $(".cameraText").textContent =
        "Reading VIRASAT code…";


    setTimeout(() => {

        $(".result").hidden = false;

        $(".cameraText").textContent =
            "Heritage identified";

    }, 1400);
};


// ==============================
// START CAMERA
// ==============================

$(".start").onclick = async () => {

    try {

        const s =
            await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "environment",
                },
            });


        // Request camera permission
        // and immediately stop the stream
        // because this is currently a static demo.

        s.getTracks().forEach(
            (t) => t.stop()
        );


        $(".cameraText").textContent =
            "Camera permission granted. Use Demo Scan to complete this static demo.";

        toast(
            "Camera ready"
        );

    } catch {

        $(".cameraText").textContent =
            "Camera unavailable — Try Demo Scan instead.";

        toast(
            "Camera permission required"
        );

    }
};


// ==============================
// STOP CAMERA
// ==============================

$(".stop").onclick = () => {

    $(".cameraText").textContent =
        "Camera stopped";

    toast(
        "Camera stopped"
    );
};


// ==============================
// MANUAL EXHIBIT CODE
// ==============================

$(".manual").onsubmit = (e) => {

    e.preventDefault();


    const code =
        $(".manual input")
            .value
            .trim()
            .toUpperCase();


    const x = HERITAGE.find(
        (h) => h.code === code
    );


    if (x) {

        location.href =
            "story.html?id=" +
            x.id;

    } else {

        $(".codehint").textContent =
            "Exhibit not found. Try CHIKANKARI-001.";

    }
};


// ==============================
// NFC SIMULATION
// ==============================

$(".nfc").onclick = () => {

    const d =
        document.createElement("div");

    d.className = "modal";


    d.innerHTML = `
        <div>

            <button class="icon close">
                ×
            </button>

            <span class="tag">
                NFC Ready
            </span>

            <h2>
                NFC tag detected
            </h2>

            <p>
                Compatible devices can use NFC tags
                to open the same VIRASAT heritage story.
            </p>

            <p>
                <b>
                    Exhibit: Chikankari
                </b>
            </p>

            <a
                class="btn primary"
                href="story.html?id=chikankari"
            >
                Open story
            </a>

        </div>
    `;


    document.body.append(d);


    // Close NFC modal
    d.onclick = (e) => {

        if (
            e.target === d ||
            e.target.closest(".close")
        ) {
            d.remove();
        }

    };
};


// ==============================
// GLOBAL BINDINGS
// ==============================

bind();