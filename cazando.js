let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle="#F5B027";
    ctx.fillRect(canvas.width/2,canvas.height/2,20,20);
}