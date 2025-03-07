const express = require("express");
const router = express.Router();

const plantas_controller = require("../controllers/plantas.controllers");

//router.get es para registrar un middleware para peticiones HTTP GET
router.get("/agregar", plantas_controller.get_agregar);
router.get("/add", plantas_controller.get_agregar);
//router.post es para registrar un middleware para peticiones HTTP POST
router.post("/agregar", plantas_controller.post_agregar);
//app.get es para registrar un middleware para peticiones http tipo get
router.get("/regar", plantas_controller.get_regar);

router.get("/:id", plantas_controller.get_root);

router.get("/", plantas_controller.get_root);
//app.get es para registrar un middleware para peticiones http tipo get
router.get('/prueba', (request, response, next) => {
  response.render("ruta2formato");
});
module.exports = router;
