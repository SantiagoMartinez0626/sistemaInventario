function buscarProductos() {
    var input = document.getElementById('searchInput').value.toLowerCase();

    var productos = document.querySelectorAll('.producto');

    productos.forEach(function (producto) {
        var nombre = producto.querySelector('.producto-titulo a').textContent.toLowerCase();
        if (nombre.includes(input)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
