/*1) Solicita un nombre, la edad y nuestra por consola el mensaje "Hola ___, tienes ___ años y el año que viene tendrás ___ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.*/

// let nombre = prompt('Ingresa tu nombre');
// let edad = parseInt(prompt('Ingresa tu edad'));
// let edadAñoQueViene = edad+1;
// if(!isNaN(edad)){
//     console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendrás ${edadAñoQueViene}`);
// }else{
//     console.warn(`La edad ingresada no es un valor numerico`);
// }

/*2) Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta
de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza switch para pedir los datos según la figura.

triangulo = b * h/2
rectangulo = b * h
*/
// let figura = prompt('Ingrese el número de opción de la figura que deseas realizar el calculo de área:\n1-. Triangulo\n2-. Rectángulo');
// switch(figura){
//     case "1": 
//     let baseTriangulo = parseInt(prompt('Ingrese el valor de la base'));
//     let alturaTriangulo= parseInt(prompt('Ingrese el valor de la altura'));
//     if(!isNaN(baseTriangulo) || !isNaN(alturaTriangulo)){
//         console.log(`El área del triangulo es de ${baseTriangulo*(alturaTriangulo/2)}`);
//     }else{
//         console.warn(`Uno de los valores ingresados no son validos`); 
//     }
//     break;
//     case "2": 
//     let baseRectangulo = parseInt(prompt('Ingrese el valor de la base'));
//     let alturaRectangulo = parseInt(prompt('Ingrese el valor de la altura'));
//     if(!isNaN(baseRectangulo) || !isNaN(alturaRectangulo)){
//         console.log(`El área del Rectangulo es de ${baseRectangulo*alturaRectangulo}`);
//     }else{
//         console.warn(`Uno de los valores ingresados no son validos`); 
//     }
    
//     break;
//     default:
//         console.warn(`La opción no es correcta.`);  
//     break;
// }

/*3) Solicita un número e imprime todos los números pares e impares
desde 1 hasta ese número con el mensaje "es par" o "es impar"
Por ej, si el número es 5 el resultado debería ser:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar
*/
// let num = parseInt(prompt('Ingresa un número por favor'));
// if(!isNaN(num)){
//     for(i=1; i<=num;i++){
//         if(i%2 === 0){
//             console.log(`${i} - es par`)
//         }else(
//             console.log(`${i} - es impar`)
//         )
//     }
// }else(
//     console.warn(`El valor ingresado no es un número`)
// )

/*4) Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.*/

// let contador = 0;
// let acumulado = 0
// let valor = 0
// while(acumulado < 50){
//     valor = parseInt(prompt('Ingrese un valor para la suma'));
//     acumulado += valor;
//     contador++;
// }
// console.log(`La suma acumulada es: ${acumulado} y los cantidad de números ingresados es de: ${contador}`);


/*5) Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
pares y el tercero impares, ambos arrays estarán vacíos [ ]

Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10
Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
Mostrar por consola: array de pares e impares
Tip: se recomienda el uso de for of*/

// let numeros = [1,2,3,4,5];
// let pares = [];
// let impar = [];
// let numeroAleatorio = Math.ceil(Math.random()*10);
// let productoDeNumeros = numeros.map(function(num){
//     return num * numeroAleatorio;
// })
// console.log(`Numero aleatorio: ${numeroAleatorio}, producto ${productoDeNumeros}`);
// for (const proNum of productoDeNumeros) {
//     if(proNum % 2 === 0){
//         pares.push(proNum);
//     }else{
//         impar.push(proNum);
//     }
// }
// console.log(`Pares: ${pares}; Impares ${impar}`);

/*6) Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original. mutuar: NO MODIFICAR EL CONTENIDO ORIGINAL DEL ARRAY

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
//definir un nuevo arreglo
//ordenarlos por orden alfabético
//en mayusculas
// en una lista ordenada
//1-javascript
//2-java
}
*/
let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];
function ordenarLenguajes() {
    //definir un nuevo arreglo
    //ordenarlos por orden alfabético
    //en mayusculas
    // en una lista ordenada
    //1-javascript
    //2-java
    //lenguajesOrdenados = lenguajes; //Si hago esto, vamos a decirle a la consola que ocupe el mismo lugar de la memoria, porque lo que las modificaciones que realicemos a una, se copiara otra
    let lenguajesOrdenados = lenguajes.slice(0);

    lenguajesOrdenados.sort().map(function(lenguaje,index){
        console.log(`${index+1} - ${lenguaje.toUpperCase()}`)
    })

    }


