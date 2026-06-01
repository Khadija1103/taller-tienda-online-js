const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");

// Crear usuarios
const usuario1 = new Usuario(
    "Tatiana Marrugo",
    "tatiana@gmail.com"
);

const usuarioVIP1 = new UsuarioVIP(
    "Carlos Pérez",
    "carlos@gmail.com",
    20
);

// Crear productos
const producto1 = new Producto(
    "Mouse Gamer",
    80000
);

const productoDigital1 = new ProductoDigital(
    "Curso de JavaScript",
    120000,
    500
);

// Mostrar información de usuarios
console.log("=== USUARIOS ===");

usuario1.mostrarInfo();

console.log("----------------");

usuarioVIP1.mostrarInfo();
usuarioVIP1.mostrarBeneficio();

// Mostrar información de productos
console.log("\n=== PRODUCTOS ===");

producto1.mostrarProducto();

console.log("----------------");

productoDigital1.mostrarProducto();
productoDigital1.mostrarDetalles();