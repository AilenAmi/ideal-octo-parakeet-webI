let alicuota = document.getElementById("alicuota");
let etiqueta = document.getElementById("etiqueta-iva");
let etiqueta1 = document.getElementById("etiqueta-Tiva");
let neto = document.getElementById("valorNeto");
let submit =document.getElementById("boton");
let iva = document.createElement("span");
let tIva = document.createElement("span");
let error = document.createElement("p");
error.id = "errores";



submit.onclick = e =>{
    e.preventDefault();
    let regexpre = /^(?!-)\d{1,9}$/ 
    error.innerHTML="";
    iva.innerHTML="";
    tIva.innerHTML="";
    

    if(!regexpre.test(neto.value)){
        error.innerHTML = "No puede usar mas de 9 numeros o valores negativos"
        etiqueta1.append(error);
    }else{
        iva.innerHTML = (neto.value * (alicuota.value/100)).toFixed(2);
        tIva.innerHTML = (neto.value * (alicuota.value/100) + neto.value*1).toFixed(2);
    }
    
}

iva.innerHTML = neto.value * (alicuota.value/100);
tIva.innerHTML = neto.value * (alicuota.value/100)+neto.value;
etiqueta.append(iva);
etiqueta1.append(tIva);

let imagenes =["img/foto1.jpg","img/foto2.jpg","img/foto3.jpg"];
let botonAtras = document.createElement("button");
botonAtras.innerHTML = "anterior" 
let botonAdelante = document.createElement("button");
botonAdelante.innerHTML = "adelante"
let servicios = document.getElementById("servicios");
let contador = 0;

document.Carrusel.src = imagenes[contador]

servicios.append(botonAtras);
servicios.append(botonAdelante);

botonAtras.onclick = e => {
    contador --;
    if(contador<0){
        contador = imagenes.length-1;
    }    
    document.Carrusel.src = imagenes[contador];
}
botonAdelante.onclick = e =>{
    contador ++;
    if(contador>imagenes.length-1){
        contador = 0;
    }
    document.Carrusel.src = imagenes[contador];
}



