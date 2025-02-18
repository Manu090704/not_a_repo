const contra = document.getElementById("inputpassword");
const vercontra = document.getElementById("inputverification");

const verificador_de_contra = () => {
  if (contra === vercontra) {
    alert("Las contraseñas coinciden");
  } else {
    alert("Las contraseñas no coinciden");
  }
};

contra.addEventListener("keyup", (event) => {
  let text = event.target.value;
  if (text.length >= 8) return false;
  if(/\s/.test(text)) return false;
  if(/\B/.test(text))return false;
});
