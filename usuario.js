class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Correo: ${this.correo}`);
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, correo, descuento) {
        super(nombre, correo);
        this.descuento = descuento;
    }

    mostrarBeneficio() {
        console.log(`Descuento VIP: ${this.descuento}%`);
    }
}

module.exports = { Usuario, UsuarioVIP };