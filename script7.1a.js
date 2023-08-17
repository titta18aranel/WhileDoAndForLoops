// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function sumNumInRange() {
  const startRange = +prompt('Введите начало диапазона: ');
  const endRange = +prompt('Введите конец диапазона: ');

  let sum = 0;

  for (let i = startRange; i <= endRange; i++) {
    sum += i;
  }
  alert(`Сумма чисел в диапазоне: ${sum}.`);
}

// 2. Запросить 2 числа и найти только наибольший общий делитель.
function twoNumbers() {
  let firstNumber = +prompt('Введите первое число: ');
  let secondNumber = +prompt('Введите второе число: ');

  while (firstNumber != 0 && secondNumber != 0) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber % secondNumber;
    } else {
      secondNumber = secondNumber % firstNumber;
    }
  }

  alert(`Общий делитель ваших чисел: ${firstNumber + secondNumber}. `);
}

// 3. Запросить у пользователя число и вывести все делители этого числа.
function personNumber() {
  let number = +prompt('Введите число: ');

  let divisor = number;
  let quantity;
  let arr = [];

  while (divisor >= 1) {
    quantity = number % divisor;

    if (quantity == 0) {
      arr.unshift(divisor);
    }
    divisor--;
  }
    alert(`Все делители числа ${number}: ${arr}.`);
}


// 4. Определить количество цифр в введенном числе.
function numberOfDigits() {
  const userNumber = prompt('Введите число: ');
  let amount = 0;

  for(let i = 0; i < userNumber.length; i++) {
    amount += 1;
  }

  alert(`В вашем числе: ${userNumber} количество цифр равно ${amount}.`);
}


// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function tenNumbers() {

  let positive = 0;
  let negative = 0;
  let zero = 0;
  let even = 0;
  let odd = 0;

  for (let i = 0; i <= 10; i++) {
    const tenUserNum = +prompt('Введите любое число: ');

    if (tenUserNum > 0) {
      positive++;
    }
    if (tenUserNum == 0) {
      zero++;
    }
    if (tenUserNum < 0) {
      negative++;
    }
    if (tenUserNum % 2 == 0) {
      even++;
    }
    if (tenUserNum % 2 != 0) {
      odd++;
    }
  }

  alert(`Вы ввели ${positive} положительных, ${negative} отрицательных, ${zero} нулей, ${even} четных и ${odd} нечетных.`);
}


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
// вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор,
// пока пользователь не откажется.
function calculator() {
  do {
    const number1 = prompt('Введите первое число: ');
    const number2 = prompt('Введите второе число: ');
    const symbolC = prompt('Введите математический знак: + - * /');

    let result = eval(`${number1} ${symbolC} ${number2}`);
    alert(result);
  } while (confirm('Хотите решить еще один пример?'));
}


// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть
// цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function shiftNumber() {
  const leadNum = prompt('Введите число, которое хотите изменить: ');
  const leadInNum = prompt('Введите на сколько цифр вы хотите сдвинуть цисло: ');

  alert(leadNum.slice(leadInNum) + leadNum.slice(0, leadInNum));
}


// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть
// следующий день?» и так до тех пор, пока пользователь нажимает OK.
function showWeekdays() {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let index = 0;

  do {
    const showNextDay = confirm(`${weekdays[index]}. Хотите увидеть следующий день?`)

    if (!showNextDay) {
      break;
    }

    index = (index + 1) % weekdays.length;
  } while (true);
}


// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число
// необходимо умножить на числа от 1 до 10.
function multiplicationTable() {
  let multiNum;       // множитель
  let multiFactor;    // множитель
  let multiResult;    // произведение

  for (multiNum = 2; multiNum < 10; multiNum++) {
    let tableArrWork = [];
    for (multiFactor = 1; multiFactor <= 10; multiFactor++) {
      multiResult = multiNum * multiFactor;
      tableArrWork.push(multiResult);
    }
    document.writeln(multiNum, ' ', '-', ' ', tableArrWork, '<br>');
  }
}

// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и
// отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
// В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон
// от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50,
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
function gameNumbers() {

  const inputNumUser = Number(alert('Загадайте число от 0 до 100'));
  let lowerLimit = 0;
  let upperLimit = 100;
  let magic = 50;

  while (inputNumUser !== magic) {
    let operatorQuestion = prompt(`Ваше число >, =, < ${magic} ?`);
    if (operatorQuestion == '>') {
      lowerLimit = magic;
      magic = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
    } else if (operatorQuestion == '<') {
      upperLimit = magic;
      magic = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
    } else {
      break;
    }
  }
  alert(`Загаданное число: ${magic}.`);


}
