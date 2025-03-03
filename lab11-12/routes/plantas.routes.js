const express = require("express");

const router = express.Router();

const plantas = [];

router.get("/agregar", (request, response, next) => {
  response.render("agregar_planta");
});
//app.get es para registrar un middleware para peticiones http tipo get
router.get("/prueba", (request, response, next) => {
  response.render("ruta2formato");
});
//app.get es para registrar un middleware para peticiones http tipo get
router.post("/agregar", (request, response, next) => {
  console.log(request.body);
  plantas.push(request.body.nombre);
  response.render(lista_planta);
});

const path = require("path");

router.get("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
