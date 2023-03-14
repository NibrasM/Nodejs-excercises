function clac(num1, op, num2) {
  let res = 0;

  switch (op) {
    case "+":
      res = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;

    case "%":
      res = num1 % num2;
      break;

    default:
      res = 0;
  }

  console.log("res is ", res);
}

const [num1, op, num2] = process.argv.slice(2);
clac(parseInt(num1), op, parseInt(num2));
