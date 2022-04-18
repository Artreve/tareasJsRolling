//Tarea del 4 de Abril
//1. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// let numero1 = parseInt(prompt('Ingrese el primer numero'));
// let numero2 =parseInt(prompt('Ingrese el segundo numero')); 
// if(isNaN(numero1,numero2)){
//     console.warn('Uno o ambos valores ingresados no es un número');
// }else{
//     if(numero1 > numero2){
//         document.write ("El número "+ numero1+ " es mayor que "+ numero2);
//     }else{
//         document.write ("El número "+ numero2+" es mayor que "+ numero1);
//     }
// }

//2. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// let num1 = parseInt(prompt('Ingrese el primer número'));
// let num2 = parseInt(prompt('Ingrese el segundo número'));
// let num3 = parseInt(prompt('Ingrese el tercer número'));
// if(isNaN(num1,num2,num3)){
//     console.warn('Uno de los valores ingresados no es un número');
// }else{
//     if(num1 > num2 && num1 > num3){
//         document.write("El número "+ num1+" es mayor que "+num2+" y "+ num3);
//     }else if(num2>num1 && num2>num3){
//         document.write("El número "+ num2+" es mayor que "+num1+" y "+ num3);
//     }else{
//         document.write("El número "+ num3+" es mayor que "+num1+" y "+ num2);
//     }
// }

//3.Escribe un programa que pida un número y diga si es divisible por 2

// let num1 = parseInt(prompt('Ingrese un número'));
// if(isNaN(num1)){
//         console.warn('Uno de los valores ingresados no es un número');
//     }else{
//         if(num1 % 2 === 0){
//             document.write("El numero "+num1+" es divisible por 2");
//         }else{
//             document.write("El numero "+num1+" no es divisible por 2");
//         }
//     }

//4. Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substr. (developer mozilla)

let frase = prompt("Ingresar una frase");
console.log(`Las vocales que aparecen en la frase: ${frase}`);
if(frase.includes("a")){
    console.log("a") //infludes nos permite verificar si en el string existen los caracteres que insertamos ne la funcion
}
if(frase.includes("e")){
    console.log("e")
}
if(frase.includes("i")){
    console.log("i")
}
if(frase.includes("o")){
    console.log("o")
}
if(frase.includes("u")){
    console.log("u")
}

//5.Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let num1 = parseInt(prompt('Ingrese un número'));
// if(isNaN(num1)){
//         console.warn('Uno de los valores ingresados no es un número');
//     }else{
//         if(num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0){
//             document.write("El número "+num1+" es divisible por 2, 3, 5 o 7");
//         }else{
//             document.write("El número no es divisible por 2,3,5 o 7")
//         }
//     }
//6. Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let num1 = parseInt(prompt('Ingrese un número'));
if(isNaN(num1)){
        console.warn('Uno de los valores ingresados no es un número');
    }else{
        if(num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0){
            if(num1 %2 === 0){
                document.write("El número es divisible por 2");
            } 
            if(num1 % 3 === 0){
                document.write("El número es divisible por 3");
            }
            if(num1 % 5 === 0){
                document.write("El número es divisible por 5");
            }
            if(num1 % 7 === 0){
                document.write("El número es divisible por 7");
            }    
        }else{
            document.write("El número no es divisible por 2,3,5 o 7");
        }
    }