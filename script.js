// Portfolio JavaScript

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Contact Form Validation

const contactForm = document.getElementById("contact form");
const formStatus = document.getElementById("FormStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill all fields.";
        formStatus.style.color = "red";
        return;
    }

    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";

    contactForm.reset();
});

// Typing Effect

const typingText = document.getElementById("typing-text");

const words = [
    "a Web Developer",
    "a Frontend Developer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        typingSpeed = 1000;
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// Dark / Light Mode

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
});

// Back to Top Button

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});

// Scroll Reveal

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Project Filter

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter = this.dataset.filter;

        projects.forEach(function (project) {
            if (filter === "all" || project.dataset.category === filter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});