//elaboren un algoritmo que muestre cual es el promedio de las edaddes de los aprendices de la ficha y cuantos son mayores de edad
let cantApren=0
let suma=0
let promedio=0
let edad=Number(prompt("digite su edad"));
function promedio(edad){
    for(i=1;i<=cantApren;i++){
        suma+=edad;
        promedio=suma/cantApren;
    }
    return promedio;
}
console.log("el promedio es "+promedio);