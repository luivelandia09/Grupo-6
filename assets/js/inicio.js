console.log("hola");
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("✅ ¡Gracias por contactarte con Farmaven! Te responderemos pronto.");
    this.reset(); // limpia los campos del formulario
  });
