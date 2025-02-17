const { date, time } = require("console");

//primer problema
function generarTabla() {
  let numero = parseInt(prompt("Introduce un número:"));

  if (numero <= 0) {
    alert("Por favor, introduce un número válido y mayor a 0.");
    return;
  }
  document.write("<h2>Tabla de Cuadrados y Cubos</h2>");
  document.write("<table>");
  document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

  for (let i = 1; i <= numero; i++) {
    document.write(
      "<tr><td>" +
        i +
        "</td><td>" +
        i * i +
        "</td><td>" +
        i * i * i +
        "</td></tr>"
    );
  }

  document.write("</table>");
}

//segundo problema
function sumoftworandomnumber() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const sum = num1 + num2;
  const inicio = Date.now();
  const num = parseInt(
    prompt("cuál es la suma de estos dos números" + num1 + "+" + num2 + "?:")
  );
  const fin = Date.now();
  const result = num === sum;
  const time = (fin - inicio) / 1000;
  if (result) {
    alert("¡Lo has acertado!");
  } else {
    alert("Lo siento, no has acertado. La suma era " + sum);
  }
  alert("tiempo tardado: " + time + " segundos");
  return;
}
//tercer problema
function contador() {
  const input = document.getElementById("inputArray").value;

  const arr = input.split(",");
  let negativos = 0;
  let ceros = 0;
  let positivos = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = parseInt(arr[i].trim());
    if (num < 0) {
      negativos++;
    } else if (num === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }

  document.getElementById("result").innerHTML =
    "Negativos: " +
    negativos +
    ", Ceros: " +
    ceros +
    ", Positivos: " +
    positivos;
}
//cuarto problema
function promedioMatriz() {
  const input = document.getElementById("inputMatriz").value.trim();

  const matriz = [];
  const renglones = input.split(";"); // Dividir por punto y coma para obtener los renglones

  for (let i = 0; i < renglones.length; i++) {
    const fila = renglones[i].split(","); // Dividir cada renglón por coma
    const renglonNum = [];

    for (let j = 0; j < fila.length; j++) {
      const num = parseInt(fila[j].trim()); // Convertir los elementos a enteros
      // Verificar si el valor es un número válido
      if (isNaN(num)) {
        alert("Por favor ingrese solo números válidos.");
        return;
      }
      renglonNum.push(num);
    }
    matriz.push(renglonNum); // Añadir la fila a la matriz
  }
  const promediosRenglones = [];

  // Recorrer la matriz y calcular el promedio de cada renglón
  for (let i = 0; i < matriz.length; i++) {
    const renglon = matriz[i];
    let suma = 0;

    for (let j = 0; j < renglon.length; j++) {
      suma += renglon[j];
    }

    const promedio = suma / renglon.length; // Calcular el promedio
    promediosRenglones.push(promedio); // Añadir el promedio al arreglo
  }

  // Mostrar los resultados en el HTML
  document.getElementById("resultados").innerHTML =
    "Promedios de cada renglón: " + promediosRenglones.join(", ");
}

//quinto problema
function inverso() {
  const numero = document.getElementById("inputNumero").value;

  // Convertir el número en una cadena, invertirla y convertirla de nuevo en número
  let numeroInverso = ""; // Variable para almacenar el número invertido

  // Usamos un ciclo for para recorrer el número de atrás hacia adelante
  for (let i = numero.length - 1; i >= 0; i--) {
    numeroInverso += numero[i]; // Concatenar cada dígito invertido
  }
  // Mostrar el resultado
  document.getElementById("resultadoInverso").innerHTML =
    "El número inverso es: " + numeroInverso;
}

function sumofdigit() {
  const numero = document.getElementById("inputNumero2").value;
  let suma = 0;
  for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
  }
  document.getElementById("resultadoSuma").innerHTML =
    "La suma de los dígitos es: " + suma;
}
