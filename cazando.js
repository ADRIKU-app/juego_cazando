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
let puntaje = 0;
let tiempo = 10;
let intervaloTiempo;

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
    intervaloTiempo = setInterval(restarTiempo, 1000);
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
    detectarColision();
    refrescarPantalla();
}

function moverDerecha(){
    gatoX = gatoX +10;
    detectarColision();
    refrescarPantalla();
}

function moverArriba(){
    gatoY = gatoY -10
    detectarColision();
    refrescarPantalla();
}

function moverAbajo(){
    gatoY = gatoY +10;
    detectarColision();
    refrescarPantalla();
}

function refrescarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function detectarColision(){
    if(gatoX+ANCHO_GATO > comidaX && gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY && gatoY < comidaY + ALTO_COMIDA
    ){
        //alert("COMIDO");
        aparecerComida();
        puntaje = puntaje +1;
        mostrarEnSpan("puntos", puntaje);
    }   if(puntaje == 6){
            alert("GANADOR");
            clearInterval(intervaloTiempo);
    }
}
function aparecerComida(){
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo); 

    if(tiempo == 0){
        alert("GAME OVER");
        clearInterval(intervaloTiempo);
    }
}

function reiniciar() {
    puntaje = 0;
    tiempo = 10;
    
    /*gatoX = canvas.width / 2;
    gatoY = canvas.height / 2;
    comidaX = 500 - ANCHO_COMIDA;
    comidaY = 500 - ALTO_COMIDA;*/
    
    clearInterval(intervaloTiempo);
    
    limpiarCanva();
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    
    iniciarJuego();
}