const contra = document.getElementById("inputpassword");
const vercontra = document.getElementById("inputverification");

const verificador_de_contra = () => {
  if (contra.value === vercontra.value) {
    alert("Las contraseñas coinciden");
  } else {
    alert("Las contraseñas no coinciden");
  }
};

contra.addEventListener("keyup", (event) => {
  let text = event.target.value;
  let strength = 0;

  if (text.length < 8) {
    document.getElementById("result").textContent =
      "Debe tener al menos 8 caracteres";
    return;
  }
  if (/\s/.test(text)) {
    document.getElementById("result").textContent = "No debe contener espacios";
    return;
  }

  if (/[A-Z]/.test(text)) strength++;
  if (/[a-z]/.test(text)) strength++;
  if (/[0-9]/.test(text)) strength++;
  if (/[^a-zA-Z0-9]/.test(text)) strength++;

  let mensajeFortaleza = "";
  switch (strength) {
    case 4:
      mensajeFortaleza = "Muy fuerte";
      break;
    case 3:
      mensajeFortaleza = "Fuerte";
      break;
    case 2:
      mensajeFortaleza = "Moderado";
      break;
    case 1:
      mensajeFortaleza = "Débil";
      break;
    default:
      mensajeFortaleza = "Muy débil";
  }

  document.getElementById("result").textContent = mensajeFortaleza;
});

const titulo = document.getElementById("titulo");

const cambiadecolor = () => {
  titulo.style.color = "blue";
};

titulo.onmouseover = cambiadecolor;
