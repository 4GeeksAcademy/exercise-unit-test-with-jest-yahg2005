// test.js
// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 156.5 yen", function() {
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dólar son 156.5 yen, entonces 3.5 dólares deben ser (3.5 * 156.5)
    const expected = 3.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBeCloseTo(expected); // Si 1 dólar son 156.5 yen, entonces 3.5 dólares deben ser (3.5 * 156.5)
});

test("One yen should be 0.87 pound", function() {
    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Si 1 yen son  0.87 pound, entonces 3.5 yen deben ser (3.5 * 0.87)
    const expected = 3.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pound).toBeCloseTo(expected); // Si 1 yen son 0.87 pound, entonces 3.5 yen deben ser (3.5 * 0.87)
});
