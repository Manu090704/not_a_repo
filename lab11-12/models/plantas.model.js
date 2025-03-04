const plantas = [];


module.exports = class planta {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.mi_nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        plantas.push(this);

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return plantas;
    }

}