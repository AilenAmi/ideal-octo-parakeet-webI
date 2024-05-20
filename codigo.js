let alicuota = document.getElementById("alicuota1");
let etiqueta = document.getElementById("etiqueta-iva");
let etiqueta1 = document.getElementById("etiqueta-Tiva");
let neto = document.getElementById("valorNeto");
let iva = document.createElement("p");
let tIva = document.createElement("p");


neto.onchange = e => {    
    iva.innerHTML = (neto.value * (alicuota.value/100)).toFixed(2);
    tIva.innerHTML = (neto.value * (alicuota.value/100) + neto.value*1).toFixed(2);
}

iva.innerHTML = neto.value * (alicuota.value/100);
tIva.innerHTML = neto.value * (alicuota.value/100)+neto.value;
etiqueta.append(iva)
etiqueta1.append(tIva)