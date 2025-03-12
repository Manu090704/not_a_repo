const Usuario = require("../models/users.model");
const bcrypt = require("bcryptjs");

exports.get_signup = (request, response, next) => {
  response.render("login.ejs", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
    isNew: true,
    info: "",
    warning: "",
    csrfToken: request.csrfToken(),
  });
};

exports.post_signup = (request, response, next) => {
  const usuario = new Usuario(
    request.body.nombre,
    request.body.apellido,
    request.body.password
  );

  usuario
    .save()
    .then(() => {
      request.session.info = "Tu usuario se ha creado";
      response.redirect("/user/login");
    })
    .catch((error) => {
      console.error("Error en post_signup:", error);
      response.redirect("/user/signup");
    });
};

exports.get_login = (request, response, next) => {
  const mensaje = request.session.info || "";
  request.session.info = "";

  const warning = request.session.warning || "";
  request.session.warning = "";

  response.render("login.ejs", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
    isNew: false,
    info: mensaje,
    warning: warning,
    csrfToken: request.csrfToken(),
  });
};

exports.post_login = (request, response, next) => {
  Usuario.fetchOne(request.body.nombre)
    .then(([rows]) => {
      if (rows.length > 0) {
        bcrypt
          .compare(request.body.password, rows[0].password)
          .then((doMatch) => {
            if (doMatch) {
              request.session.isLoggedIn = true;
              request.session.nombre = request.body.nombre;
              return request.session.save((error) => {
                if (error) {
                  console.error("Error al guardar la sesión:", error);
                }
                response.redirect("/check");
              });
            }

            request.session.warning = "Usuario y/o contraseña incorrectos";
            return response.redirect("/user/login");
          })
          .catch((error) => {
            console.error("Error al comparar contraseñas:", error);
            response.redirect("/user/login");
          });
      } else {
        request.session.warning = "Usuario y/o contraseña incorrectos";
        response.redirect("/user/login");
      }
    })
    .catch((error) => {
      console.error("Error en post_login:", error);
      response.redirect("/user/login");
    });
};

exports.get_logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/user/login");
  });
};
