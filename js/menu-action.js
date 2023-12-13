const menuIcon = document.getElementById('logo-menu');
const closeIcon = document.getElementById('logo__close');
const menu = document.getElementById('menu-mobile');

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
})