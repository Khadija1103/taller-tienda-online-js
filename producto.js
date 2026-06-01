class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarProducto() {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, tamañoArchivo) {
        super(nombre, precio);
        this.tamañoArchivo = tamañoArchivo;
    }

    mostrarDetalles() {
        console.log(`Tamaño del archivo: ${this.tamañoArchivo} MB`);
    }
}

module.exports = { Producto, ProductoDigital };