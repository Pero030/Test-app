import {
    db,
    doc,
    getDoc,
    setDoc
} from "./firebase.js";

const currentPage =
    document.body.dataset.page;

async function checkMaintenance() {

    try {

        const globalRef =
            doc(
                db,
                "maintenance",
                "global"
            );

        const globalSnap =
            await getDoc(globalRef);

        if (
            globalSnap.exists() &&
            globalSnap.data().enabled
        ) {

            showMaintenance(
                globalSnap.data()
            );

            return;
        }

        if (!currentPage) {
            return;
        }

        const pageRef =
            doc(
                db,
                "maintenance",
                currentPage
            );

        const pageSnap =
            await getDoc(pageRef);

        if (
            pageSnap.exists() &&
            pageSnap.data().enabled
        ) {

            showMaintenance(
                pageSnap.data()
            );
        }

    } catch (error) {

        console.error(
            "Maintenance Fehler:",
            error
        );
    }
}

function showMaintenance(data) {

    const main =
            document.querySelector(
                "main"
            );

        if (main) {

            main.style.display =
                "none";
        }

    const maintenance =
        document.createElement("div");

    maintenance.innerHTML = `
        <div style="
            min-height: 70vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:40px;
        ">
            <div style="
                max-width:700px;
                width:100%;
                background:rgba(15,23,42,0.9);
                border:2px solid #a855f7;
                border-radius:30px;
                padding:50px;
                text-align:center;
                color:white;
                box-shadow:0 25px 50px rgba(0,0,0,0.5);
            ">
                <h1 style="
                    font-size:52px;
                    margin-bottom:20px;
                    background:linear-gradient(
                        135deg,
                        #38bdf8,
                        #a855f7
                    );
                    -webkit-background-clip:text;
                    -webkit-text-fill-color:transparent;
                ">
                    Wartung
                </h1>

                <h2 style="
                font-size:32px;
                margin-bottom:20px;
                color:#38bdf8;
            ">
                ${data.type || "Wartung"}
                </h2>

                <p style="
                    font-size:22px;
                    line-height:1.8;
                    opacity:0.9;
                ">
                    ${data.message || ""}
                </p>

                <p style="
                    margin-top:20px;
                    font-size:20px;
                    color:#a855f7;
                    font-weight:700;
                ">
                    ⏳ ${data.duration || ""}
                </p>

                <p style="
                    margin-top:25px;
                    opacity:0.7;
                    font-size:18px;
                ">
                    ${data.date || ""}
                </p>

            </div>
        </div>
    `;

    document.body.insertBefore(
        maintenance,
        document.querySelector(
            '[data-component="footer"]'
        )
    );

}

checkMaintenance();
