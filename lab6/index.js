const { response } = require("express");
const filesystem = require("fs"); //busca el modulo fs que es filesystem.
filesystem.writeFileSync("hola.txt", "Hola desde Node");

/*setTimeout(() => {
  console.log("jojo te hackie");
}, 20000);
const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

/*const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request);
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Hola Mundo</h1>");
  response.end();
});
server.listen(3000);
*/

const arr = [20, 10, 30, 40, 60, 1000, 30, 20, 50];
const prom = (array) => {
  let prom = 0;
  for (let index = 0; index < array.length; index++) {
    prom += array[index];
  }
  const result = prom / array.length;
  console.log(result);
};

prom(arr);
