const express = require("express"); //modulo de node
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

//Middleware capa de enmedio que hace lo que digamos
//el orden de los middleware si importa
//se debe ordenar desde lo específico hasta lo general
app.use((request, response, next) => {
  console.log("Middleware!");
  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
  //next es el compositive
});

const plantasroutes = require("./routes/plantas.routes");
const labr11routes = require("./routes/labr11.routes");
const { request } = require("http");

app.use("/plantas", plantasroutes);

app.use("/pruebas", labr11routes);

app.use((request, response, next) => {
  console.log("Otro middleware!");
  //Manda la respuesta
  response.statusCode = 404;
  response.send("No se encontró la ruta");
  //set_header, set_wirte, set_end en una en send
});

app.listen(3000);
