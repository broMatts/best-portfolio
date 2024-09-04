// Typing animation
const typingText = document.querySelector(".typing-text");
const textArray = ["Web Developer", "Developer", "Web Designer", "Designer", "Script Writer", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let typingSpeed = 150;
let erasingSpeed = 100;
let delayBetweenTexts = 2000;

function type() {
    if (charIndex < currentText.length) {
        typingText.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        currentText = textArray[textIndex];
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    currentText = textArray[textIndex];
    setTimeout(type, delayBetweenTexts + 250);
});

// Toggle menu for mobile view
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-menu ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// Toggle the mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('show');
});

// Scroll to top when button is clicked
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
