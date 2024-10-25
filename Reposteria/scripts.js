// Datos de productos
const productos = {
    // Postres
    brownies: {
        nombre: "Brownies",
        descripcion: "Brownies esponjosos con un sabor intenso a chocolate. ¡Irresistibles!",
        precio: "S/ 15.00",
        imagen: "imagen/postre1.png"
    },
    flan: {
        nombre: "Flan de Caramelo",
        descripcion: "Un flan suave con un delicioso caramelo que se derrite en la boca.",
        precio: "S/ 12.00",
        imagen: "imagen/postre2.jpg"
    },
    arroz_con_leche: {
        nombre: "Arroz con Leche",
        descripcion: "Un clásico postre de arroz con leche cremoso y dulce.",
        precio: "S/ 10.00",
        imagen: "imagen/postre3.jpg"
    },
    gelatina_frutas: {
        nombre: "Gelatina de Frutas",
        descripcion: "Una gelatina fresca y colorida hecha con frutas naturales.",
        precio: "S/ 8.00",
        imagen: "imagen/postre4.jpg"
    },
    panqueques: {
        nombre: "Panqueques",
        descripcion: "Panqueques suaves y esponjosos, perfectos para un desayuno o postre.",
        precio: "S/ 7.00",
        imagen: "imagen/postre5.jpg"
    },
    churros: {
        nombre: "Churros",
        descripcion: "Churros crujientes por fuera y suaves por dentro, espolvoreados con azúcar y canela.",
        precio: "S/ 6.00",
        imagen: "imagen/postre6.jpg"
    },
    turron: {
        nombre: "Turrón",
        descripcion: "Turrón dulce y crujiente, perfecto para celebraciones y ocasiones especiales.",
        precio: "S/ 18.00",
        imagen: "imagen/postre7.jpeg"
    },
    bizcocho_yogur: {
        nombre: "Bizcocho de Yogur",
        descripcion: "Bizcocho suave y esponjoso, hecho con yogur para un toque extra de humedad.",
        precio: "S/ 9.00",
        imagen: "imagen/postre8.jpg"
    },

    // Pasteles
    pastel_vainilla: {
        nombre: "Pastel de Vainilla",
        descripcion: "Un pastel suave y esponjoso con sabor a vainilla.",
        precio: "S/ 20.00",
        imagen: "imagen/pastel1.jpg"
    },
    pastel_chocolate: {
        nombre: "Pastel de Chocolate",
        descripcion: "Un pastel de chocolate clásico, perfecto para cualquier ocasión.",
        precio: "S/ 22.00",
        imagen: "imagen/pastel2.jpeg"
    },
    tres_leches: {
        nombre: "Pastel de Tres Leches",
        descripcion: "Un pastel húmedo con una mezcla de tres leches que lo hace irresistible.",
        precio: "S/ 25.00",
        imagen: "imagen/pastel3.jpg"
    },
    pastel_zanahoria: {
        nombre: "Pastel de Zanahoria",
        descripcion: "Un pastel suave y húmedo con el sabor único de la zanahoria y un toque de canela.",
        precio: "S/ 18.00",
        imagen: "imagen/pastel4.jpg"
    },
    pastel_naranja: {
        nombre: "Pastel de Naranja",
        descripcion: "Un pastel refrescante con el sabor cítrico de la naranja.",
        precio: "S/ 19.00",
        imagen: "imagen/pastel5.jpg"
    },
    pastel_manzana: {
        nombre: "Pastel de Manzana",
        descripcion: "Pastel suave y esponjoso con trozos de manzana que le dan un sabor único.",
        precio: "S/ 20.00",
        imagen: "imagen/pastel6.jpg"
    },
    fresas_crema: {
        nombre: "Pastel de Fresas con Crema",
        descripcion: "Pastel delicioso con capas de fresas frescas y crema batida.",
        precio: "S/ 23.00",
        imagen: "imagen/pastel7.jpg"
    },
    pastel_platano: {
        nombre: "Pastel de Plátano",
        descripcion: "Un pastel húmedo y dulce con el sabor natural del plátano.",
        precio: "S/ 17.00",
        imagen: "imagen/pastel8.jpg"
    }
};


// Función para mostrar y ocultar los detalles de cada receta de postre o pastel
function mostrarTutorial(id) {
    const tutorial = document.getElementById(id);
    if (tutorial.style.display === "none" || tutorial.style.display === "") {
        tutorial.style.display = "block";
    } else {
        tutorial.style.display = "none";
    }
}

// Función para manejar el envío de comentarios
function submitComentario(event, categoria) {
    event.preventDefault(); // Previene el envío del formulario

    // Selecciona los elementos del formulario según la categoría
    const nombreInput = document.getElementById(`nombre${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`);
    const comentarioInput = document.getElementById(`comentario${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`);
    const listaComentarios = document.getElementById(`lista-comentarios-${categoria}`);

    // Obtiene el nombre y comentario
    const nombre = nombreInput.value.trim();
    const comentario = comentarioInput.value.trim();

    // Verifica que ambos campos tengan contenido
    if (nombre && comentario) {
        // Crea un nuevo elemento de comentario
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;

        // Añade el nuevo comentario a la lista
        listaComentarios.appendChild(nuevoComentario);

        // Limpia los campos del formulario
        nombreInput.value = '';
        comentarioInput.value = '';
    }
}

// Función para mostrar los detalles del producto en la vista de detalles
function mostrarVistaDetalle(productoId) {
    const producto = productos[productoId];
    
    if (producto) {
        document.getElementById('nombre-detalle').innerText = producto.nombre;
        document.getElementById('imagen-detalle').src = producto.imagen;
        document.getElementById('imagen-detalle').alt = producto.nombre;
        document.getElementById('descripcion-detalle').innerText = producto.descripcion;
        document.getElementById('precio-detalle').innerText = producto.precio;
        
        // Muestra la vista de detalles del producto en pantalla completa
        document.getElementById('vista-detalle').style.display = 'flex';
    }
}


// Función para confirmar la compra y mostrar el mensaje de confirmación
function confirmarCompra() {
    // Oculta el botón de confirmar compra para que no se pueda presionar de nuevo
    document.getElementById('boton-confirmar-compra').style.display = 'none';
    
    // Muestra el mensaje de compra confirmada y la imagen de Yape
    document.getElementById('mensaje-compra').style.display = 'block';
}

// Función para cerrar la vista de detalles y reiniciar el estado
function cerrarVistaDetalle() {
    document.getElementById('vista-detalle').style.display = 'none';
    
    // Oculta el mensaje de compra confirmada y vuelve a mostrar el botón de compra
    document.getElementById('mensaje-compra').style.display = 'none';
    document.getElementById('boton-confirmar-compra').style.display = 'block';
}



// Añadir eventos a los botones de compra
document.addEventListener('DOMContentLoaded', function () {
    const botonesCompra = document.querySelectorAll('.comprar-btn');

    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function () {
            const productoId = boton.getAttribute('data-product');
            mostrarVistaDetalle(productoId); // Muestra los detalles en la vista de detalles
        });
    });
});
// Función para confirmar la compra y mostrar el mensaje de confirmación
function confirmarCompra() {
    // Oculta el botón de confirmar compra para que no se pueda presionar de nuevo
    document.getElementById('boton-confirmar-compra').style.display = 'none';
    
    // Muestra el mensaje de compra confirmada y la imagen de Yape
    document.getElementById('mensaje-compra').style.display = 'block';
}



