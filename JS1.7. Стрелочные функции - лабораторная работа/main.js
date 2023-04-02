// 1.	Воспользовавшись методическим указанием реализуйте Калькулятор в виде стрелочных функций.

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// 2.	Используя  Function Expression реализуйте проверку условий тестовых заданий.

const isNumber = function(value) {
  return typeof value === 'number';
}

const isPositive = function(value) {
  return value > 0;
}

const isEven = function(value) {
  return value % 2 === 0;
}

// 3.	Реализуйте в виде стрелочной функции функцию, проверяющую вашу фамилию на полиндром.

const isPalindrome = (string) => {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

// 4.	Реализуйте в виде стрелочной функции вычисление среднего значения данных в массиве

const calculateAverage = (array) => {
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / array.length;
}

// 5.	В виде стрелочной функции реализуйте функцию, вычисляющую количество дней до нового года.

const daysUntilNewYear = () => {
  const today = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysUntil = Math.ceil((newYear - today) / millisecondsPerDay);
  return daysUntil;
}

// 6.	Создайте пустую стрелочную функцию возвращает undefined

const emptyFunc = () => {
  return undefined;
}

// 7.	Создайте массив и напишите стрелочные функции для него: суммирование всех элементов, выявить все четные, умножить каждый элемент на 2. 

const numbers = [2, 4, 6, 8];

// Суммирование всех элементов массива
const sumArray = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// Выявление всех четных элементов массива
const evenArray = numbers.filter((number) => number % 2 === 0);

// Умножение каждого элемента массива на 2
const doubledArray = numbers.map((number) => number * 2);

// 8.	Создайте массив с e-mail. Организуйте фильтр на странице html по названию почты.

const emails = [
  "john@example.com",
  "mary@example.com",
  "jane@example.com",
  "mike@example.com"
];

function filterEmails() {
  const input = document.getElementById("filter-input");
  const filter = input.value.toLowerCase();
  const emailList = document.getElementById("email-list");

  // Очистить список e-mail
  emailList.innerHTML = "";

  // Фильтрация e-mail и добавление в список
  emails
    .filter(email => email.toLowerCase().includes(filter))
    .forEach(email => {
      const listItem = document.createElement("li");
      listItem.textContent = email;
      emailList.appendChild(listItem);
    });
}

filterEmails();

