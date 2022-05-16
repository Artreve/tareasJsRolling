function actualizarHora() {
    let fecha = new Date(),
        hora = fecha.getHours(),
        min = fecha.getMinutes(),
        estado,
        seg = fecha.getSeconds(),
        dia = fecha.getDay(),
        numDia = fecha.getDate(),
        mes = fecha.getMonth(),
        ano = fecha.getFullYear();

        let pHora = document.getElementById('hr'),
            pMin = document.getElementById('min'),
            pSeg = document.getElementById('seg'),
            pEstado = document.getElementById('estado'),
            pDia = document.getElementById('dia'),
            pNumDia = document.getElementById('numDia'),
            pMes =document.getElementById('mes'),
            pAno = document.getElementById('ano');

        let diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDia.innerText = diasSemana[dia]; //dia obtiene un valor de posicion
        pNumDia.innerText = numDia;
        let mesAno = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.innerText = mesAno[mes];
        pAno.innerText = ano;
         if (hora >= 12){
            hora = hora-12;
            estado = 'PM';

         }else{
             estado = 'AM';
         }
         //aquí estrictamente lo convertimos en un reloj de 12 horas solamente
         if(hora == 0){
             hora = 12;
         }
         pHora.innerText = hora;
         pEstado.innerText = estado;
         //Para que nos parezca el cero cuando el valor es menor a 10 hacemos lo siguiente
         if(min < 10){
             min = '0'+min;
         }
         if(seg < 10){
             seg = '0'+seg;
         }
         pMin.innerText = min;
         pSeg.innerText = seg;

}
 let intervalo = setInterval(actualizarHora,1000)
