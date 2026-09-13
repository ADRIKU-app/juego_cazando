function generarAleatorio(min,max){
    let random=Math.random();//me devuelve un número entre 0 y 1
    let numero=random*max;//genera un número entre 0 y max
    let numeroEntero=Math.ceil(numero);//transformamos a entero
        numeroEntero=numeroEntero+min
    return numeroEntero;
}

function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan);
        componente.textContent=valor;
}