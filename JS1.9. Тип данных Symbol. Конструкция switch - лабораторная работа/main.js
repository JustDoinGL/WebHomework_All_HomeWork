// 1.	Создайте  объекты «Клиент банка», «Работник клиники», «Гражданин РФ» с символьными значениями в том числе. Выведите их свойства на экран. 

const bankClient = {
  name: 'John',
  id: Symbol('bank_client_id')
};

const clinicEmployee = {
  name: 'Mary',
  id: Symbol('clinic_employee_id')
};

const russianCitizen = {
  name: 'Alex',
  id: Symbol('russian_citizen_id')
};

console.log(bankClient);
console.log(clinicEmployee);
console.log(russianCitizen);


// 2.	Перепишите условия "if" на "switch"
// const number = +prompt('Загадайте цифру до 9', '');

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2) {
//   alert('Вы ввели число 2');
// }

// if (number === 8 || number === 9) {
//   alert('Вы ввели число 8, а может и 9');
// }

const number = +prompt('Загадайте цифру до 9', '');

switch(number) {
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
    alert('Вы ввели число 2');
    break;
  case 8:
  case 9:
    alert('Вы ввели число 8, а может и 9');
    break;
  default:
    alert('Вы ввели число не из диапазона от 1 до 9');
    break;
}

// 3.	Решите через swith. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число.

const min = 25;

switch (true) {
  case (min >= 0 && min <= 14):
    console.log('Первая четверть часа');
    break;
  case (min >= 15 && min <= 29):
    console.log('Вторая четверть часа');
    break;
  case (min >= 30 && min <= 44):
    console.log('Третья четверть часа');
    break;
  case (min >= 45 && min <= 59):
    console.log('Четвертая четверть часа');
    break;
  default:
    console.log('Некорректное значение');
    break;
}

// 4.	Дана строка с цифрами. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'Первая цифра 1, 2 или 3', в противном случае выведите 'нет'. Проверьте наличие включения вашего номера телефона в строку.

const str = '123456789';
const phoneNum = '555-123-4567';

if (/[123]/.test(str[0])) {
  console.log('Первая цифра 1, 2 или 3');
} else {
  console.log('нет');
}

if (str.includes(phoneNum)) {
  console.log('Строка содержит номер телефона');
} else {
  console.log('Строка не содержит номер телефона');
}