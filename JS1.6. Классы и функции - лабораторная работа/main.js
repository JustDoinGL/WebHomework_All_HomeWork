// 1.	Скопируйте код и проанализируйте его работу:
function showMessage() {
let message = "Привет, я JavaScript!"; // локальная переменная

alert( message );
}

showMessage(); // Привет, я JavaScript!

alert( message ); // 
// 2.	 Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом или нет (код из прошлой практической работы)?

function isPalindrome(str) {
  // удаляем все пробелы и приводим строку к нижнему регистру
  str = str.replace(/\s/g, "").toLowerCase();

  // разбиваем строку на массив букв
  var arr = str.split("");

  // переворачиваем массив и объединяем буквы в строку
  var reversedStr = arr.reverse().join("");

  // сравниваем исходную строку с перевернутой строкой
  return str === reversedStr;
}


// 3.	Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, оставив остальные без изменения (код из прошлой практической работы).

function replaceNegatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = arr[i] * arr[i];
    }
  }
  return arr;
}

const myArray = [1, 2, -3, -4, 5, -6, 7, 8, 9, 10, -11];
const newArray = replaceNegatives(myArray);
console.log(newArray); // [1, 2, 9, 16, 5, 36, 7, 8, 9, 10, 121]


// 4.	Создайте класс, который будет сохранять в переменную имя пользователя и выводить его на экран. Используйте его.

class User {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

const user = new User('John');
user.sayName(); // Выведет "Привет, меня зовут John" в консоль.
 
// 6.	Создайте класс, который переворачивает ваше имя.

class NameReverser {
  constructor(name) {
    this.name = name;
  }

  reverse() {
    return this.name.split('').reverse().join('');
  }
}

// Пример использования класса:
const myName = new NameReverser('Andrew');
console.log(myName.reverse());
