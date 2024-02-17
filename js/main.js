const detalleProducto = document.querySelector('.Detalle-product');
const imgDetailProduct = document.getElementById('img-Detail-Product');
const iconCloseDetailProduct = document.getElementById('Icon-Close-Detail-Product');
const menuIcon = document.getElementById('logo-menu');
const closeIcon = document.getElementById('logo__close');
const menu = document.getElementById('menu-mobile');
const containerCrdsProducts = document.querySelector('.container_cards-productos');

iconCloseDetailProduct.addEventListener('click', closeDetailProduct);

menuIcon.addEventListener('click', function(){
    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "grid";
        console.log("ABRE EL MENU")
    }else{
        menu.style.display = "none";
    }
});

closeIcon.addEventListener('click', function(){
    if(menu.style.display === "grid" || menu.style.display === ""){
        menu.style.display = "none";
        console.log("CIERRA EL MENU")
    }else{
        menu.style.display = "grid";
    }
});

function openDetailProduct(){
    detalleProducto.classList.remove('inactive');
}

function closeDetailProduct(){
    detalleProducto.classList.add('inactive')
}

const productList = [];

productList.push({
    image: "./images/imagen_cel_prueba.jpg",
    id: "9127463.1",
    categoria: "Celulares",
    descripcion: "CEL OPPO SM-A013M-MEM:32GB-COM:MOVISTAR-IMEI:**********33785 COLOR NEGRO, CARGADOR, RAY/MALT",
    precio: "2,065.20"
});
productList.push({
    image: "./images/imagen_cel_prueba.jpg",
    id: "9125423.1",
    categoria: "Celulares",
    descripcion: "CEL REDMI SM-A013M-MEM:32GB-COM:MOVISTAR-IMEI:**********33785 COLOR NEGRO, CARGADOR, RAY/MALT",
    precio: "2,000.20"
});
productList.push({
    image: "./images/imagen_cel_prueba.jpg",
    id: "9117563.1",
    categoria: "Celulares",
    descripcion: "CEL SAMSUNG SM-A013M-MEM:32GB-COM:MOVISTAR-IMEI:**********33785 COLOR NEGRO, CARGADOR, RAY/MALT",
    precio: "1,043.20"
});
productList.push({
    image: "./images/imagen_cel_prueba.jpg",
    id: "9111234.1",
    categoria: "Celulares",
    descripcion: "CEL IPHONE SM-A013M-MEM:32GB-COM:MOVISTAR-IMEI:**********33785 COLOR NEGRO, CARGADOR, RAY/MALT",
    precio: "5,043.20"
});


function renderProducts(arr){
    for(product of arr){
        const containerProduct = document.createElement('article');

        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.image);
        imageProduct.addEventListener('click', openDetailProduct);

        const descipcionProducto = document.createElement('div');
        descipcionProducto.classList.add('descripcion__producto');

        const idProduct = document.createElement('h2');
        idProduct.innerText = product.id;

        const containerCategoria = document.createElement('div');

        const h1Categoria = document.createElement('h1');
        h1Categoria.innerText = "Categoria: "

        const pCategoria = document.createElement('p');
        pCategoria.innerText = product.categoria

        const containerDescripcion = document.createElement('div');

        const h1Descripcion = document.createElement('h1');
        h1Descripcion.innerText = "Dscripcion: "

        const pDescripcion = document.createElement('p');
        pDescripcion.innerText = product.descripcion;

        const containerPrice = document.createElement('div');

        const h1Price = document.createElement('h1');
        h1Price.innerText = "Precio: "

        const pPrice = document.createElement('p');
        pPrice.innerText = product.precio;


        containerCrdsProducts.appendChild(containerProduct);

        containerProduct.appendChild(imageProduct);
        containerProduct.appendChild(descipcionProducto);

        descipcionProducto.appendChild(idProduct);
        descipcionProducto.appendChild(containerCategoria);
        descipcionProducto.appendChild(containerDescripcion);
        descipcionProducto.appendChild(containerPrice);

        containerCategoria.appendChild(h1Categoria);
        containerCategoria.appendChild(pCategoria);

        containerDescripcion.appendChild(h1Descripcion);
        containerDescripcion.appendChild(pDescripcion);

        containerPrice.appendChild(h1Price);
        containerPrice.appendChild(pPrice);
    }
}

renderProducts(productList);