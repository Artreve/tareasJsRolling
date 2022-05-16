let numAle = 0;
const playGame = function (){
    numAle = Math.ceil(Math.random()*10);
    console.log(numAle);
    document.getElementById('play').disabled=true;
};
function probarNumero(){
    let numJugador = document.getElementById('numJugador').value; //con value capturamos el valor del imput
    console.log(numJugador);
    if(numJugador==numAle){
        alert('Ganaste!!! 😎')
        document.getElementById('numJugador').value='';
        document.getElementById('play').disabled=false;
    }else if(numJugador > numAle){
        alert('El número ingresado es MAYOR que el número mágico')
        document.getElementById('numJugador').select();

    }else{
        alert('El número ingresado es MENOR que el número mágico')
    }
} 