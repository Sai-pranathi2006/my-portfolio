
// 1. Welcome message in browser console
console.log("Welcome to my Portfolio!");

// 2. Typing animation
const words = [
    "Data Analyst",
    "Web Developer",
    "Python Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typingElement = document.querySelector("#home h2");

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        "Aspiring " + currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }
    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// 3. Update footer year automatically
const footer = document.querySelector("footer p");

footer.innerHTML =
    "© " + new Date().getFullYear() +
    " My Portfolio. All Rights Reserved.";

// 4. Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});
