const form = document.getElementById("contactFormElement");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mostrar el modal en lugar del alert
  const thankYouModal = new bootstrap.Modal(
    document.getElementById("thankYouModal")
  );
  thankYouModal.show();

  // Limpiar formulario después de enviar
  form.reset();
});
