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

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
function graficarGato(){
    /*ctx.fillStyle="#F5B027";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);*/
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO, "#F5B027");
}

function graficarComida(){
    /*ctx.fillStyle="#BF0A54";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);*/
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#BF0A54");
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX -10;
    refrescarPantalla();
}

function moverDerecha(){
    gatoX = gatoX +10;
    refrescarPantalla();
}

function moverArriba(){
    gatoY = gatoY -10
    refrescarPantalla();
}

function moverAbajo(){
    gatoY = gatoY +10;
    refrescarPantalla();
}

function refrescarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if(gatoX+ANCHO_GATO > comidaX && gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY && gatoY < comidaY + ALTO_COMIDA
    ){
        alert("COMIDO")
    }
}