const express = require("express");
const { request } = require("http");
const fs = require("fs");

const router = express.Router();
const lab_controller = require('../controllers/lab13.controllers');
//app.get es para registrar un middleware para peticiones http tipo get
router.get("/ruta2", lab_controller.get_agregar2);
//app.get es para registrar un middleware para peticiones http tipo get
router.get("/ruta3", lab_controller.get_agregar3);

router.get("/ruta4", lab_controller.get_agregar4);

router.get("/ruta5", lab_controller.get_agregar5);

router.post("/guardar", lab_controller.post_agregarlab);

module.exports = router;
