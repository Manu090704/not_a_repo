exports.get_root = (request, response, next) => {
  try {
    response.send("ya estas dentro");
  } catch (error) {
    next(error); // Envía el error al middleware de manejo de errores
  }
};
