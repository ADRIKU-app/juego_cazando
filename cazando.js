let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

const ALTO_GATO=60;
const ANCHO_GATO=30;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
function graficarGato(){
    ctx.fillStyle="#F5B027";
    ctx.fillRect(canvas.width/2,canvas.height/2,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="#BF0A54";
    ctx.fillRect((500-ANCHO_COMIDA),(500-ALTO_COMIDA),ANCHO_COMIDA,ALTO_COMIDA);}