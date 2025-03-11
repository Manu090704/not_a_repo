
exports.get_agregar2 = (request, response, next) => {
  response.render("ruta2formato");
};

exports.get_agregar3 = (request, response, next) => {
  response.render("ruta3formato");
};

exports.get_agregar4 = (request, response, next) => {
  response.render("ruta4formato");
};

exports.get_agregar5 = (request, response, next) => {
  response.render("ruta5formato");
};


exports.post_agregarlab = (request, response) => {
  const { nombre } = request.body;
  if (nombre && nombre.trim() !== "") {
    fs.appendFileSync("datosenviados.txt", `${nombre}\n`);
    response.send("Datos enviados correctamente");
  } else {
    response.send("No se enviaron datos válidos");
  }
};