const certificates = [
    {
        title: "AI and Cybersecurity Awareness",
        issuer: "TCS iON — Tata Consultancy Services",
        date: "2026-10-04",
        displayDate: "October 2026",
        pdf: "certificates/AI-and-Cybersecurity-Awareness-TCS-iON-Kushal-Kasera.pdf"
    },

    {
        title: "Introduction to Generative AI",
        issuer: "GiveMyCertificate",
        date: "2026-10-01",
        displayDate: "October 2026",
        pdf: "certificates/10821919_11185046_1790880098755.pdf"
    },

    {
        title: "Presentation Skills",
        issuer: "TCS iON — Tata Consultancy Services",
        date: "2026-10-02",
        displayDate: "October 2026",
        pdf: "certificates/Kushal_Kasera_5824001.pdf"
    },

    {
        title: "HackX: Data x Cyber",
        issuer: "CMP Hack Squad × Google Developer Group Prayagraj",
        date: "2026-08-22",
        displayDate: "August 2026",
        pdf: "certificates/Certificate - Kushal Kasera.pdf"
    },

    {
        title: "HackDiwas 3.0",
        issuer: "United University × WikiClub Tech × IEEE",
        date: "2026-04-24",
        displayDate: "April 2026",
        pdf: "certificates/KUSHAL KASERA - TECHCREW.pdf"
    },

    {
        title: "Web Developer Internship",
        issuer: "Codec Technologies Pvt. Ltd.",
        date: "2025-11-05",
        displayDate: "August – November 2025",
        pdf: "certificates/Web-Developer-Internship-Kushal-Kasera.pdf"
    },

    {
        title: "AI/ML Workshop",
        issuer: "Code Virus Security × Digital Yodha Foundation",
        date: "2025-05-11",
        displayDate: "May 2025",
        pdf: "certificates/9a8af1f5-58e3-4807-a678-93172afeaeb1.pdf"
    }
];


// =================================
// CERTIFICATE ELEMENTS
// =================================

const certificationsGrid =
    document.getElementById("certifications-grid");

const certificateModal =
    document.getElementById("certificate-modal");

const certificateFrame =
    document.getElementById("certificate-frame");

const certificateModalTitle =
    document.getElementById("certificate-modal-title");

const certificateModalIssuer =
    document.getElementById("certificate-modal-issuer");

const certificateClose =
    document.getElementById("certificate-close");


// =================================
// SORT CERTIFICATES
// Newest first
// =================================

certificates.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});


// =================================
// CREATE CERTIFICATE CARDS
// =================================

certificates.forEach((certificate, index) => {

    const card = document.createElement("article");

    card.className = "certificate-card";

    card.innerHTML = `

        <div class="certificate-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <h3>
            ${certificate.title}
        </h3>

        <p class="certificate-issuer">
            ${certificate.issuer}
        </p>

        <p class="certificate-date">
            ${certificate.displayDate}
        </p>

        <button
            class="certificate-button"
            data-pdf="${certificate.pdf}"
            data-title="${certificate.title}"
            data-issuer="${certificate.issuer}">

            View Certificate →

        </button>

    `;

    certificationsGrid.appendChild(card);

});


// =================================
// OPEN CERTIFICATE MODAL
// =================================

const certificateButtons =
    document.querySelectorAll(".certificate-button");

certificateButtons.forEach(button => {

    button.addEventListener("click", () => {

        const pdf =
            button.getAttribute("data-pdf");

        const title =
            button.getAttribute("data-title");

        const issuer =
            button.getAttribute("data-issuer");


        certificateModalTitle.textContent = title;

        certificateModalIssuer.textContent =
            issuer;


        certificateFrame.src =
            encodeURI(pdf);


        certificateModal.classList.add("active");

        document.body.classList.add(
            "modal-open"
        );

    });

});


// =================================
// CLOSE CERTIFICATE MODAL
// =================================

function closeCertificateModal() {

    certificateModal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

    // Clear PDF after closing
    // to stop unnecessary loading

    certificateFrame.src = "";

}


// Close button

certificateClose.addEventListener(
    "click",
    closeCertificateModal
);


// Close when clicking outside
// the certificate content

certificateModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            certificateModal
        ) {

            closeCertificateModal();

        }

    }
);


// Close with ESC key

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            certificateModal.classList.contains("active")
        ) {

            closeCertificateModal();

        }

    }
);
