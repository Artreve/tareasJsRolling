/*Generar un arreglo de películas (3), donde cada película deberá contener las propiedades (título, género, año, sinopsis).
Crear una función que recorra toda las películas imprimiendo la información de las películas por pantalla (incluir un título que diga CARTELERA).*/
let peliculas = [
    {
        titulo:'Granizo' ,
        genero:'Drama',
        año:'2022',
        simnopsis:'Un famoso meteorólogo de la televisión se convierte en el enemigo público número uno cuando no logra evitar una terrible tormenta de granizo.',
    },
    {
        titulo:'Apex' ,
        genero:'acción' ,
        año: '2021',
        simnopsis:'Un expolicía, culpado por un crimen que no cometió, tiene la oportunidad de ganar su libertad si puede sobrevivir a un juego. Seis matones pagan por cazarlo por deporte en una isla remota, pero una vez que llega, se desata el infierno.' ,
    },
    {
        titulo:'Encanto' ,
        genero:'animación' ,
        año:'2021',
        simnopsis:'Una joven colombiana puede ser la última esperanza para su familia, cuando descubre que la magia que rodea a Encanto, un lugar encantado que bendice a los niños con dones únicos, se encuentra en serio peligro.' ,
    }
]
function cartelera(){
    document.write('---------Cartelera----------------')
    peliculas.forEach(function(movies){
        document.write(`<b>---------------------------------</b><br/>`);
        document.write(`<b>Título:</b> ${movies.titulo}<br/>`);
        document.write(`<b>Género:</b> ${movies.genero}<br/>`);
        document.write(`<b>Año:</b> ${movies.año}<br/>`);
        document.write(`<b>Resumen:</b> ${movies.simnopsis}<br/>`);
    });
}