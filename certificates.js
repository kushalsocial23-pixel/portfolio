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
// GENERATE CERTIFICATE CARDS
// =================================

const certificationsGrid =
    document.getElementById("certifications-grid");


// Sort certificates by date — newest first
certificates.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});


// Create certificate cards
certificates.forEach((certificate, index) => {

    const card = document.createElement("article");

    card.className = "certificate-card";

    card.innerHTML = `

        <div class="certificate-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <img
            src="${certificate.image}"
            alt="${certificate.title} certificate - Kushal Kasera"
            class="certificate-preview"
        >

        <h3>
            ${certificate.title}
        </h3>

        <p class="certificate-issuer">
            ${certificate.issuer}
        </p>

        <p class="certificate-date">
            ${certificate.displayDate}
        </p>

        <a
            href="${certificate.pdf}"
            target="_blank"
            rel="noopener noreferrer"
            class="certificate-button">

            View Certificate →

        </a>

    `;

    certificationsGrid.appendChild(card);

});
