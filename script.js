const irpagina = document.getElementById("ir_pagina");
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const cont3 = document.getElementById("cont3");

irpagina.addEventListener("click", function(){
    location.href='LeerMas/index.html';
});

cont1.addEventListener("click", function(){
    location.href='Aventura/index.html';
});

cont2.addEventListener("click", function(){
    location.href='Simulacion/index.html';
});

cont3.addEventListener("click", function(){
    location.href='Accion/index.html';
});