const db = require("../util/db");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
  constructor(nombre, apellido, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.password = password;
  }

  // Método para guardar un usuario en la base de datos con contraseña encriptada
  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((hashedPassword) => {
        return db.execute(
          "INSERT INTO usuarios (nombre, apellido, password) VALUES (?, ?, ?)",
          [this.nombre, this.apellido, hashedPassword]
        );
      })
      .catch((error) => {
        console.error("Error al guardar el usuario:", error);
      });
  }

  // Método para obtener todos los usuarios
  static fetchAll() {
    return db.execute("SELECT * FROM usuarios");
  }

  // Método para obtener un usuario por nombre
  static fetchOne(nombre) {
    return db.execute("SELECT * FROM usuarios WHERE nombre = ?", [nombre]);
  }

  static fetch(nombre) {
    return nombre ? this.fetchOne(nombre) : this.fetchAll();
  }

  // Método para obtener los privilegios de un usuario
  static getPrivilegios(nombre) {
    return db.execute(
      `
      SELECT DISTINCT p.nombre 
      FROM privilegios p
      JOIN posee po ON p.id = po.id_privilegio
      JOIN roles r ON po.id_rol = r.id
      JOIN tiene t ON r.id = t.id_rol
      JOIN usuarios u ON t.id_usuario = u.id
      WHERE u.nombre = ?`,
      [nombre]
    );
  }
};
