// Решение задачи без использования функций высшего порядка
const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// выводит [ 2, 4, 6 ]
console.log(arr2);
// Решение задачи с помощью функции высшего порядка map
const arr10 = [1, 2, 3];
const arr20 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);
// Объём этого кода можно даже сократить, если воспользоваться стрелочной функцией:
const arr11 = [1, 2, 3];
const arr22 = arr1.map(item => item * 2);
console.log(arr2);
// Воспользовавшись методом map(), создайте новый массив из имеющегося, который содержит увеличенные элементы на 10 и в три раза.
const arr = [1, 2, 3];
const arr01 = arr1.map(item => item * 10 * 3); // создаем новый массив, где каждый элемент arr1, увеличенный на 10 и умноженный на 3
console.log(arr01); // выводит [ 30, 60, 90 ]

// 2.	Имеется массив «год рождения». Необходимо вывести их возраст.

function calculateAge(birthYears) {
  const currentYear = new Date().getFullYear();
  const ages = birthYears.map((year) => currentYear - year);
  return ages;
}

const birthYears = [1990, 2000, 1985, 1978];
const ages = calculateAge(birthYears);
console.log(ages);
// Результат: [31, 21, 36, 43]


// 3.	Предположим, у нас имеется массив, содержащий объекты, в свойствах которых хранятся сведения об имени и возрасте представителей некой группы людей. Нам надо создать массив, в котором будут сведения только о совершеннолетних представителях этой группы (тех, чей возраст достиг 18 лет).
// Решение задачи без использования функций высшего порядка
const persons1 = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge1 = [];
for(let i = 0; i < persons.length; i++) {
  if(persons[i].age >= 18) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge);
// Решение задачи с помощью функции высшего порядка filter
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);
// Используя данный пример, реализуйте проверку по условию на право редактирования сайта и вывод имени админа.

const users = [
  { name: 'John', isAdmin: true },
  { name: 'Jane', isAdmin: false },
  { name: 'Mark', isAdmin: true },
  { name: 'Lisa', isAdmin: false }
];
const editingAllowed = users.some(user => user.isAdmin);
if(editingAllowed) {
  const adminName = users.find(user => user.isAdmin).name;
  console.log(`Редактирование сайта разрешено пользователю ${adminName}`);
} else {
  console.log('Нет пользователей с правами администратора');
}

// 4.	Используя синтаксис:
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// Вычислите средний балл студентов.

const grades = [5, 4, 3, 5, 4, 5, 3, 4, 5, 3];
const sum1 = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
const average = sum / grades.length;
console.log(`Средний балл: ${average}`);

// 5. Используя синтаксис, создайте собственную функцию высшего порядка, которая из заданного массива возвращает массив, состоящий из нулей (для тех элементов длинна которых меньше либо равна 3) и единиц (в другом случае).
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
// выводит [ 10, 6, 3, 4, 1 ]
console.log(lenArray);

const strArray2 = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function getArray(strArray) {
  return strArray.map(item => item.length <= 3 ? 0 : 1);
}

console.log(getArray(strArray)); // [1, 1, 0, 0, 0]
