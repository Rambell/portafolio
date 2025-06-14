

function copiarCorreo() {
  const correo = "matias.ramirez@email.com"; 
  navigator.clipboard.writeText(correo).then(() => {
    const mensaje = document.getElementById("mensaje-copiado");
    mensaje.classList.add("show");

    setTimeout(() => {
      mensaje.classList.remove("show");
    }, 2000);
  }).catch(err => {
    console.error("Error al copiar el correo:", err);
  });
}