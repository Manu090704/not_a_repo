const { response, request } = require('express');
const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');

const plantas_controller = require('../controllers/plantas.controller');

//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', isAuth, plantas_controller.get_agregar);
router.get('/add', isAuth, plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', isAuth, plantas_controller.post_agregar);

router.get('/regar', isAuth, plantas_controller.get_regar);

router.get('/:id', isAuth, plantas_controller.get_root);
router.get('/', isAuth, plantas_controller.get_root);

module.exports = router;