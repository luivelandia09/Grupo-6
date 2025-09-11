console.log("Hola");
document.querySelector(".experiencia").addEventListener("submit", function (e) {
  e.preventDefault();

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
      campos[i].style.border = "2px solid red";
      vacios = true;
      break; // rompe el bucle apenas encuentra uno vacío
    } else {
      campos[i].style.border = "2px solid green";
    }
  }
  /*  for (let i = 0; i < campos.length; i++) {
  if (!campos[i] || campos[i].value.trim() === "") {
    campos[i].style.border = "2px solid red";
    vacios = true;
  } 
} */

  if (vacios) {
    return;
  } else {
    console.log("Experiencia enviada: ", campos[2].value);

    //document.querySelector(".experiencia").reset();

    const button = document.querySelector(".experiencia button");
    button.textContent = "Enviando ....";
    setTimeout(() => {
      button.textContent = "Enviar";
    }, 2000);

    const mensaje = document.createElement("p");
    mensaje.textContent = "✅ ¡Gracias por compartir tu experiencia!";
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "25px";
    mensaje.style.opacity = 0;
    mensaje.style.transition = "opcity 1s ease";

    document.querySelector(".experiencia").appendChild(mensaje);

    setTimeout(() => {
      mensaje.style.opacity = 1;
    }, 50);
    setTimeout(() => {
      mensaje.style.opacity = 0;
      setTimeout(() => mensaje.remove(), 1000);
    }, 4000);
  }
});
