function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: No se puede dividir por cero.";
    }
  }
  
  const numero1 = parseFloat(prompt("Ingrese el primer número:"));
  const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
  const resultados = [];
  
  const suma = sumar(numero1, numero2);
  const resta = restar(numero1, numero2);
  const multiplicacion = multiplicar(numero1, numero2);
  const division = dividir(numero1, numero2);
  
  resultados.push(suma, resta, multiplicacion, division);
  
  console.log("Resultados de las operaciones:");
  console.log("Suma:", resultados[0]);
  console.log("Resta:", resultados[1]);
  console.log("Multiplicación:", resultados[2]);
  console.log("División:", resultados[3]);
  