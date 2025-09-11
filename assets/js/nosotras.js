console.log("Hola");

// Capturamos el formulario
document.querySelector(".experiencia").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que recargue la página

  // Guardamos todos los campos en un array
  const campos = [
    document.getElementById("Nombres"),
    document.getElementById("Correo"),
    document.getElementById("Experiencia"),
  ];

  let vacios = false; // Bandera para saber si falta algo

  // Recorremos cada campo con un bucle
  for (let i = 0; i < campos.length; i++) {
    if (!campos[i] || campos[i].value.trim() === "") {
      alert("Por favor llenar este campo:" + campos[i].id);
      vacios = true;
      break; // rompe el bucle apenas encuentra uno vacío
    }
  }

  // IF / ELSE para decidir qué hacer
  if (vacios) {
    // Si falta algo, no hace nada más
    return;
  } else {
    // Si todos están llenos
    console.log("Experiencia enviada: ", campos[2].value);

    // Resetear formulario
    document.querySelector(".experiencia").reset();

    // Crear símbolo de check + mensaje
    const mensaje = document.createElement("p");
    mensaje.textContent = "✅ ¡Gracias por compartir tu experiencia!";
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "25px";

    // Insertar en la sección
    document.querySelector(".experiencia").appendChild(mensaje);
  }
});
for (let i = 0; i < campos.length; i++) {
  if (!campos[i] || campos[i].value.trim() === "") {
    campos[i].style.border = "2px solid red";
    vacios = true;
  } else {
    campos[i].style.border = "2px solid green";
  }
}
mensaje.style.opacity = 0;
document.querySelector(".experiencia").appendChild(mensaje);
setTimeout(() => {
  mensaje.style.transition = "opacity 1s";
  mensaje.style.transition = 1;
}, 100);
const button = document.querySelector(".experiencia button");
button.textContent = "Enviando ....";
setTimeout(() => {
  button.textContent = "Enviar";
}, 2000);
