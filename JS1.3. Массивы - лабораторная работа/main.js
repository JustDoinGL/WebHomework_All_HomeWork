// 1.Сформировать массив из 15 целых чисел, выбранных случайным образом из интервала[-10, 30].Найти среднее арифметическое положительных элементов.

const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 41) - 10);
// console.log(arr)

const positiveArr = arr.filter(num => num > 0);
// console.log(positiveArr)

const mean = positiveArr.reduce((acc, curr) => acc + curr, 0) / positiveArr.length;
// console.log(mean)


// 2.Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, оставив остальные без изменения.

const arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr2[i] = arr[i] * arr[i];
    }
}

// 3.В заданном массиве найти среднее арифметическое положительных чисел, среднее арифметическое отрицательных чисел и число нулей.

let positiveMean = 0, negativeMean = 0, zeroCount = 0;
let positiveCount = 0, negativeCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveMean += arr[i];
        positiveCount++;
    } else if (arr[i] < 0) {
        negativeMean += arr[i];
        negativeCount++;
    } else {
        zeroCount++;
    }
}
// console.log(zeroCount)
positiveMean /= positiveCount;
// console.log(positiveMean)
negativeMean /= negativeCount;
// console.log(negativeMean)


// 4.Организовать симулятор, который выдает только три случайных значения – красный, черный и белый (0, 1, 2). Запустить симуляцию 1000 000 раз. Узнать, какое максимальное число раз выпадало красное значение.

const colors = ["red", "black", "white"];
const count = [0, 0, 0]; 
for (let i = 0; i < 1000000; i++) {
    const color = Math.floor(Math.random() * 3); 
    count[color]++; 
}
const maxCount = Math.max(...count); 
const maxColor = colors[count.indexOf(maxCount)];

// console.log(maxCount)
// console.log(maxColor)