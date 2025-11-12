// PARALLAX EFFECT
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".parallax").forEach(el => {
        let speed = el.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 150;
        let y = (window.innerHeight - e.pageY * speed) / 150;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelectorAll(".dice").forEach(el => {
        let speed = el.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 200;
        let y = (window.innerHeight - e.pageY * speed) / 200;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// FADE-IN ON SCROLL
const fadeElements = document.querySelectorAll(".fade-in, .fade-in-delay");

function checkFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkFade);
checkFade();
