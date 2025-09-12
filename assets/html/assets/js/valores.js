console.log("Formulario de valores cargado");

// Capturar el formulario por su ID
document.getElementById("formValores").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recargar la página

  // Campos a validar
  const campos = [
    document.getElementById("nombre"),
    document.getElementById("correo"),
    document.getElementById("valor"),
    document.getElementById("comentarios"),
  ];

  let vacios = false;

  // Validar campos (sin checkbox)
  for (let i = 0; i < campos.length; i++) {
    if (!campos[i] || campos[i].value.trim() === "" || (campos[i].tagName === "SELECT" && campos[i].value === "")) {
      alert("Por favor llena el campo: " + campos[i].id);
      vacios = true;
      break;
    }
  }

  if (vacios) {
    return;
  } else {
    // Mostrar valores en consola
    console.log("Valores enviados:", {
      nombre: campos[0].value,
      correo: campos[1].value,
      valor: campos[2].value,
      comentarios: campos[3].value,
    });

    // Limpiar formulario
    this.reset();

    // Mostrar mensaje de éxito
    const mensaje = document.getElementById("mensajeExito");
    mensaje.textContent = "✅ ¡Gracias por compartir tus valores con nosotros!";
    mensaje.classList.remove("d-none");
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
    mensaje.style.textAlign = "center";
  }
});
