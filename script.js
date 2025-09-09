const menuButtons = document.querySelectorAll('header button');
const emailInput = document.querySelector(".email-input");

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector("nav").classList.toggle('active');
    });
});

// Fade in/out on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.auto-show');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3});

    elements.forEach(el => observer.observe(el));
});

if (emailInput) {
    emailInput.addEventListener("input", (e) => {
      e.target.classList.toggle("invalid", !e.target.checkValidity());
      console.log("Email input value:", e.target.value);
      console.log("Email input validity:", e.target.checkValidity());
    });
}

