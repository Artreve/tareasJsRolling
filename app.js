const mostrarFecha = function(){
   setTimeout(function() {
      fecha = new Date();
      console.log(fecha);
      document.write(fecha);
   }, 3000);
}
mostrarFecha();

function iniciarRecorrido(){
   calorias=0
   contador=0;
   cronometro = setInterval(function(){
      calorias=calorias+0.15;
      contador++;
      console.log(`Estás quemando: ${Math.round(calorias)} calorias en ${contador} segundos`)
   },1000);
}
const detenerRecorrido = function(){
   clearInterval(cronometro);
}