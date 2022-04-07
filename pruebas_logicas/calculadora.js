const interface = require("readline-sync");

do {
  console.log("1.- Suma");
  console.log("2.- resta");
  console.log("3.- multiplicacion");
  console.log("4.- Division");
  console.log("5.- Salir");

  response = interface.question(
    "que operacion vas a realizar, escribe el numero: "
  );

  if (response != "5") {
    const firstNumber = interface.question("ingresa el primer numero: ");
    const secondNumber = interface.question("ingresa el segundo numero: ");

    switch (response) {
      case "1":
        let result = parseInt(firstNumber) + parseInt(secondNumber);
        console.log("el resultado es: " + result);

      case "2":
        let result1 = parseInt(firstNumber) - parseInt(secondNumber);
        console.log("el resultado es: " + result1);
        break;

      case "3":
        let result2 = parseInt(firstNumber) * parseInt(secondNumber);
        console.log("el resultado es: " + result2);
        break;

      case "4":
        let result3 = parseInt(firstNumber) / parseInt(secondNumber);
        console.log("el resultado es: " + result3);
        break;

      default:
        break;
    }
  }
} while (response != "5");
