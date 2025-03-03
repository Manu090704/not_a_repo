const express = require("express");
const { request } = require("http");
const fs = require("fs");

const router = express.Router();

//app.get es para registrar un middleware para peticiones http tipo get
router.get("/ruta2", (request, response, next) => {
  response.render("ruta2formato");
});
//app.get es para registrar un middleware para peticiones http tipo get
router.get("/ruta3", (request, response, next) => {
  response.render("ruta3formato");
});

router.get("/ruta4", (request, response, next) => {
  response.render("ruta4formato");
});

router.get("/ruta5", (request, response, next) => {
  response.render("ruta5formato");
});

router.post("/guardar", (request, response) => {
  const { nombre } = request.body;
  if (nombre && nombre.trim() !== "") {
    fs.appendFileSync("datosenviados.txt", `${nombre}\n`);
    response.send("Datos enviados correctamente");
  } else {
    response.send("No se enviaron datos válidos");
  }
});

module.exports = router;
