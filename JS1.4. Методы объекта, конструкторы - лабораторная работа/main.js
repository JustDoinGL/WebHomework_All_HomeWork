// 1.	Скопируйте код объекта и проанализируйте его работу:
let user = {
  name: "Джон",
  age: 30,
};
// Добавим метод для объекта
user.sayHi = function () {
  alert("Привет!");
};

user.sayHi(); // Привет!

// 2.Создайте объект – информация о покупателе (не менее 5 строк) и выведите три из них.

let buyerInfo = {
  name: "Иван",
  email: "ivan@mail.com",
  phone: "+7 (999) 123-45-67",
  city: "Москва",
  address: "ул. Пушкина, д. 10, кв. 5",
};

// console.log(buyerInfo.name);
// console.log(buyerInfo.phone);
// console.log(buyerInfo.address);

// 3.Создайте объекты пользователи, заказы и рестораны с соответствующими значениями. Организуйте вывод информации из объектов по условию.

// Создаем объекты пользователей
const user1 = {
  id: 1,
  name: "John",
  email: "john@example.com",
  address: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
};

const user2 = {
  id: 2,
  name: "Jane",
  email: "jane@example.com",
  address: "456 Main St",
  city: "Los Angeles",
  state: "CA",
  zip: "90001",
};

// Создаем объекты заказов
const order1 = {
  id: 1,
  userId: 1,
  restaurant: "Burger House",
  items: ["Burger", "Fries"],
  total: 15.99,
};

const order2 = {
  id: 2,
  userId: 2,
  restaurant: "Pizza Palace",
  items: ["Pizza", "Salad"],
  total: 19.99,
};

const order3 = {
  id: 3,
  userId: 1,
  restaurant: "Burger House",
  items: ["Chicken Sandwich", "Onion Rings"],
  total: 12.99,
};

// Создаем объекты ресторанов
const restaurant1 = {
  name: "Burger House",
  address: "789 Main St",
  city: "New York",
  state: "NY",
  zip: "10002",
};

const restaurant2 = {
  name: "Pizza Palace",
  address: "1010 Elm St",
  city: "Los Angeles",
  state: "CA",
  zip: "90002",
};

// Функция для вывода информации о заказах пользователей в указанном ресторане
function printOrdersInRestaurant(restaurantName) {
  // Фильтруем заказы по ресторану
  const ordersInRestaurant = [order1, order3].filter(
    (order) => order.restaurant === restaurantName
  );

  // Для каждого заказа в ресторане выводим информацию о пользователе и о заказе
  ordersInRestaurant.forEach((order) => {
    const user = [user1, user2].find((user) => user.id === order.userId);
    console.log(
      "User:",
      user.name,
      "| Email:",
      user.email,
      "| Order ID:",
      order.id,
      "| Items:",
      order.items.join(", "),
      "| Total:",
      order.total
    );
  });
}

// Выводим информацию о заказах пользователей в ресторане Burger House
// console.log("Orders in Burger House:");
// printOrdersInRestaurant("Burger House");

// 4.При помощи функции-конструктора и оператора "new" создайте функцию, выводящую имена вашей группы:
function User1(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User1("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false
// 5.Используя конструктор, создайте объект – студент. Передайте конструктору параметры, определяющие, как создавать объект, и что в него записывать:
function User(name) {
  this.name = name;
  this.sayHi = function () {
    alert("Меня зовут: " + this.name);
  };
}

let vasya = new User("Вася");

vasya.sayHi(); // Меня зовут: Вася

vasya = {
  name: "Вася",
  sayHi: () => User(this.name),
};
