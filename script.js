// =========================
// Sanwaliya High-Tech Nursery
// script.js
// =========================

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });
});

// Fade Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// Active Navigation
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.clientHeight;

        if (top >= offset && top < offset + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// Gallery Hover
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// Welcome Message
window.onload = function(){

console.log("Welcome to Sanwaliya High-Tech Nursery");

};

// Current Year in Footer
const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML += `<p style="margin-top:10px;">Designed with ❤️ | ${year}</p>`;

}
