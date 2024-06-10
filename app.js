// app.js
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
}

function sum(a, b) {
    return a + b;
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    return dollar * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    return yen * oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
