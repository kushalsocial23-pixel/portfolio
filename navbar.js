// ========================================
// NAVBAR
// ========================================

const navbar =
    document.querySelector(".navbar");


// ========================================
// SCROLL EFFECT
// ========================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ========================================
// MOBILE MENU
// ========================================

const menuToggle =
    document.getElementById("menu-toggle");

const mobileNav =
    document.getElementById("mobile-nav");


menuToggle.addEventListener("click", () => {

    const isOpen =
        mobileNav.classList.toggle("active");

    menuToggle.classList.toggle(
        "active",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// ========================================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// ========================================

const mobileLinks =
    document.querySelectorAll(".mobile-nav a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ========================================
// ACTIVE SECTION
// ========================================

const sections =
    document.querySelectorAll("main section[id]");

const desktopLinks =
    document.querySelectorAll(".desktop-nav a");


const updateActiveLink = () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    desktopLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveLink
);

updateActiveLink();


// ========================================
// THEME BUTTON
// ========================================

const themeToggle =
    document.getElementById("theme-toggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

});
