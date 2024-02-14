// 3- Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales).

// Mostrar el resultado del cálculo del área para ese radio, mediante la frase: “el área de un círculo con radio X es: XXX” . Debe haber tres variables: radio, pi y área.

// Test: para un radio de 22, el área es aprox. 1520.

// El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²).

let x = parseInt(prompt("Introduce el valor del radio"));
let y = 3.1415;
let area = y*(x**2);
// area = area.toFixed(2); tambien se puede hacer así. aqui se guardaria, de la otra manera simplemente me lo caclula de esa manera al momento.

// variables de la formula de ciruclo

document.write("El área de un círculo con radio " + x + " es: " + area.toFixed(2));

// para mostrarse en pantalla

console.log("El área de un círculo con radio " + x + " es: ");
console.log(area.toFixed(2));

// para mostrarse en consola

// limitar decimales:
// mostraría solo dos decimales
// variable.toFixed(2)22
