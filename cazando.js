let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=60;
const ANCHO_GATO=30;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

let gatoX=canvas.width/2;
let gatoY=canvas.height/2;
let comidaX=500-ANCHO_COMIDA;
let comidaY=500-ALTO_COMIDA;

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
function graficarGato(){
    ctx.fillStyle="#F5B027";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="#BF0A54";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);}