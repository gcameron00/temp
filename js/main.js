// === Footer year ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Custom cursor ===
const cursor = document.getElementById("cursor");
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

(function animateCursor() {
  curX += (mouseX - curX) * 0.15;
  curY += (mouseY - curY) * 0.15;
  cursor.style.left = curX + "px";
  cursor.style.top  = curY + "px";
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("expanded"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("expanded"));
});

// === Mobile nav ===
const toggle   = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// === Scroll reveal (IntersectionObserver) ===
const reveals = document.querySelectorAll(".reveal-up");

// Show elements already in view on load
reveals.forEach((el) => {
  if (el.getBoundingClientRect().top < window.innerHeight) {
    setTimeout(() => el.classList.add("visible"), 80);
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => observer.observe(el));

// === Reel modal ===
const reelBtn  = document.getElementById("reel-btn");
const modal    = document.getElementById("reel-modal");
const modalClose = document.getElementById("modal-close");
const backdrop = document.getElementById("modal-backdrop");

function openModal() {
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  reelBtn.focus();
}

reelBtn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
