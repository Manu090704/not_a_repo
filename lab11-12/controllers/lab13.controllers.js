const fs = require("fs");

// Verificación de sesión y cookies en las rutas de agregar
exports.get_agregar2 = (request, response, next) => {
  if (!request.session.isLoggedIn) {
    return response.redirect("/users/login"); // Redirige a login si no está logueado
  }

  // Si el usuario está logueado, establecer una cookie para indicar que está autenticado
  response.setHeader("Set-Cookie", `isLoggedIn=true; HttpOnly; Max-Age=3600`); // La cookie dura 1 hora
  response.render("ruta2formato", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || "",
  });
};

exports.get_agregar3 = (request, response, next) => {
  if (!request.session.isLoggedIn) {
    return response.redirect("/users/login"); // Redirige a login si no está logueado
  }

  response.setHeader("Set-Cookie", `isLoggedIn=true; HttpOnly; Max-Age=3600`);
  response.render("ruta3formato", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || "",
  });
};

exports.get_agregar4 = (request, response, next) => {
  if (!request.session.isLoggedIn) {
    return response.redirect("/users/login"); // Redirige a login si no está logueado
  }

  response.setHeader("Set-Cookie", `isLoggedIn=true; HttpOnly; Max-Age=3600`);
  response.render("ruta4formato", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || "",
  });
};

exports.get_agregar5 = (request, response, next) => {
  if (!request.session.isLoggedIn) {
    return response.redirect("/users/login"); // Redirige a login si no está logueado
  }

  response.setHeader("Set-Cookie", `isLoggedIn=true; HttpOnly; Max-Age=3600`);
  response.render("ruta5formato", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || "",
    csrfToken: request.csrfToken(),
  });
};

// Para el post de agregar lab
exports.post_agregarlab = (request, response) => {
  if (!request.session.isLoggedIn) {
    return response.redirect("/users/login"); // Redirige a login si no está logueado
  }

  const { nombre } = request.body;
  if (nombre && nombre.trim() !== "") {
    fs.appendFileSync("datosenviados.txt", `${nombre}\n`);
    response.send("Datos enviados correctamente");
  } else {
    response.send("No se enviaron datos válidos");
  }
};
