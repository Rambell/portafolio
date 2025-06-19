

function copiarCorreo() {
  const correo = "matias.ramirez28@gmail.com"; 
  navigator.clipboard.writeText(correo).then(() => {
    const mensaje = document.getElementById("mensaje-copiado");
    mensaje.classList.add("show");

    setTimeout(() => {
      mensaje.classList.remove("show");
    }, 5000);
  }).catch(err => {
    console.error("Error al copiar el correo:", err);
  }); 
};

function cvDescargado() {
  const mensaje = document.getElementById("mensaje-descargado");
  if (mensaje) {
    mensaje.classList.add("show");

    setTimeout(() => {
      mensaje.classList.remove("show");
    }, 5000);
  }
};

const abrirBtns = document.querySelectorAll(".abrir-modal");
const modal = document.getElementById("modal-proyecto");
const cerrarBtn = modal.querySelector(".cerrar");

abrirBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});