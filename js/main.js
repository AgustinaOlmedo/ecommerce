// function ObtenerNombres(nombres){
//         let nombre = prompt("¿Cómo es tu nombre?");
//         console.log("Su nombre es: " + nombre );
//         let apellido = prompt ("¿Cómo es tu apellido?");
//         console.log("Su apellido es: " + apellido)
//         let nombreCompleto = nombre + " " + apellido;
//         console.log("Su nombre completo es: " + nombreCompleto);
//         let bienvenidafinal = "bienvenid@" + " " + nombreCompleto;
//         alert (bienvenidafinal);
//     }
//     ObtenerNombres()
    
    
//     let anioDenacimiento = prompt("¿Cuál es tu año de nacimiento?");
//     let anioActual = 2024;
//     const edad = anioActual - anioDenacimiento;
//     console.log("Su edad es: " + edad + " años")
//     alert ("Tu edad es: " + edad + " años")
    
//     if (edad < 18){
//         alert("Lo sentimos! Debes tener al menos 18 años para poder comprar en nuestra pagina!")
//     }
//     else{
//         alert("¡Gracias por visitarnos! Al ser mayor de edad podras comprar nuestras bebidas al mejor precio ")
    
//         let preferencia;
//         do {
//             preferencia = prompt("¿Prefieres: Bebidas con alcohol o Bebidas sin alcohol? (introduce tal cual lo consultamos)").toLowerCase();
//              if (preferencia === "bebidas con alcohol" || preferencia === "bebidas sin alcohol") {
//                  alert("Has seleccionado: " + preferencia);
//             } else {
//                  alert("Por favor, introduce 'Bebidas con alcohol' o 'Bebidas sin alcohol'.");
//             }
//          } while (preferencia !== "bebidas con alcohol" && preferencia !== "bebidas sin alcohol");
//         }

const bebidas = [
    { nombre: 'Cerveza', precio: 3500 },
    { nombre: 'Vino', precio: 4000 },
    { nombre: 'Licor', precio: 15000 }
];

function solicitarEntrada() {
    let bebidaSeleccionada = prompt("Selecciona una bebida (Cerveza, Vino, Licor):");
    
    const bebida = bebidas.find(b => b.nombre.toLowerCase().trim() === bebidaSeleccionada.toLowerCase().trim());
    if (!bebida) {
        alert("Bebida no válida. Por favor, selecciona una bebida de la lista.");
        return;
    }

    let cantidad = parseInt(prompt("Introduce la cantidad:"));
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad no válida. Por favor, introduce un número entero positivo.");
        return;
    }

    const precioTotal = calcularPrecio(bebida.precio, cantidad);

    alert(`El precio total para ${cantidad} ${bebida.nombre}(s) es: $${precioTotal.toFixed(2)}`);
}

function calcularPrecio(precio, cantidad) {
    return precio * cantidad;
}

document.getElementById('botonDeCalculo').addEventListener('click', solicitarEntrada);