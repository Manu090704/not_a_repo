const express = require("express"); //modulo de node
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const session = require("express-session");

app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


const { request } = require("http");
//Middleware capa de enmedio que hace lo que digamos
//el orden de los middleware si importa
//se debe ordenar desde lo específico hasta lo general

const userRoutes = require("./routes/users.routes");
app.use("/users", userRoutes);

const plantasroutes = require("./routes/plantas.routes");
app.use("/plantas", plantasroutes);

const labr11routes = require("./routes/labr11.routes");
app.use("/pruebas", labr11routes);


app.use((request, response, next) => {
  console.log("Otro middleware!");
  //Manda la respuesta
  response.statusCode = 404;
  response.send("No se encontró la ruta");
  //set_header, set_wirte, set_end en una en send
});

app.listen(3000);
