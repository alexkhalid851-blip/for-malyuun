
/* =====================================
   FOR MALYUUN — INTERACTIVE EXPERIENCE
===================================== */

// 1. SMOOTH SCROLL BUTTON

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
});


// 2. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// 3. FLOATING PETALS

const petalContainer = document.getElementById("petalContainer");

const petals = ["♡", "✿", "❀", "♥"];

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.textContent =
        petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (12 + Math.random() * 16) + "px";

    const duration = 8 + Math.random() * 8;

    petal.style.animationDuration = duration + "s";

    petal.style.opacity = Math.random() * 0.5 + 0.2;

    petalContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);

}

// Create petals at a gentle interval.

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!reducedMotion) {
    setInterval(createPetal, 850);
}


// 4. INTERACTIVE LOVE ENVELOPE

const envelope = document.getElementById("envelope");

const finalMessage = document.getElementById("finalMessage");

const envelopeHint = document.getElementById("envelopeHint");

let envelopeOpened = false;

envelope.addEventListener("click", () => {

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("opened");

    envelopeHint.textContent =
        "A LITTLE MESSAGE FROM MY HEART ♡";

    // Wait for the envelope animation.

    setTimeout(() => {

        finalMessage.classList.add("show");

        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 900);

});


// 5. LITTLE WELCOME EFFECT

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "A little love, specially made for Malyuun. ♡"
    );

});
