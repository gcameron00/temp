// === Footer year ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Mobile nav toggle ===
const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// === Contact form ===
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic client-side validation
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("invalid");
      valid = false;
    } else {
      field.classList.remove("invalid");
    }
  });

  if (!valid) {
    status.textContent = "Please fill in all required fields.";
    return;
  }

  // Simulate submission — replace with your real endpoint (e.g. Cloudflare Workers / Web3Forms)
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Message sent! I'll get back to you soon.";
    form.reset();
  }, 1000);
});

// Clear invalid state on input
form.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => field.classList.remove("invalid"));
});
