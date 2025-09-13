console.log("Hola");
document.querySelector(".experiencia").addEventListener("submit", function (e) {
  e.preventDefault();

  const campos = [
    document.getElementById("Nombres"),
    document.getElementById("Correo"),
    document.getElementById("Experiencia"),
  ];

  let vacios = false;

  for (let i = 0; i < campos.length; i++) {
    if (!campos[i] || campos[i].value.trim() === "") {
      alert("Por favor llenar este campo:" + campos[i].id);
      campos[i].style.border = "2px solid red";
      vacios = true;
      break;
    } else {
      campos[i].style.border = "2px solid green";
    }
  }

  if (vacios) {
    return;
  } else {
    console.log("Experiencia enviada: ", campos[2].value);
    const button = document.querySelector(".experiencia button");
    button.textContent = "Enviando ....";
    setTimeout(() => {
      button.textContent = "Enviar";
    }, 2000);
  }

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
});
