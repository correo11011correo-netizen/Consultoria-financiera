// Script básico para formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
  this.reset();
});

// Animación simple para botones
const buttons = document.querySelectorAll(".btn-primary");
buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});
