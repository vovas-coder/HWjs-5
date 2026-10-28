let drink = "Кава";

switch (drink) {
  case "Кава":
    console.log("Ви вибрали каву");
    break;

  case "Чай":
    console.log("Ви вибрали чай");
    break;

  case "Сік":
    console.log("Ви вибрали сік");
    break;

  default:
    console.log("Такого напою немає");
}


let day = "Субота";

switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    console.log("Це робочий день");
    break;

  case "Субота":
  case "Неділя":
    console.log("Це вихідний");
    break;

  default:
    console.log("Неправильно введений день");
}

let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;

  default:
    console.log("Неправильний номер місяця");
}

let color = "червоний";

switch (color) {
  case "червоний":
    console.log("стоп");
    break;

  case "зелений":
    console.log("йти");
    break;

  case "жовтий":
    console.log("чекати");
    break;

  default:
    console.log("Невідомий колір");
}

let num1 = 10;
let num2 = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    if (num2 === 0) {
      console.log("На нуль ділити не можна!");
    } else {
      console.log(num1 / num2);
    }
    break;

  default:
    console.log("Невідомий оператор");
}