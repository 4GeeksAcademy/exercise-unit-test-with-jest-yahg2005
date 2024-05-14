// app.js

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Esta es la función que convierte dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes japoneses
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yenes japoneses
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en libras esterlinas
    return valueInPound;
}
// Exportamos todas las funciones juntas
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// Solo un registro en consola para nosotros
console.log(sum(7, 3));
