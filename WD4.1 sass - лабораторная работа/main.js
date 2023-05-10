const names = ['Елена', 'Мария', 'Светлана', 'Александр', 'Алексей', 'Анастасия', 'Дмитрий',  'Евгения', 'Константин',  'Наталья']
const numbers = [10, 22, 1, -2];

document.querySelectorAll('.badName').forEach((n, i) => n.textContent = names[i] + " " + i)

const goodNames = names.sort()

document.querySelectorAll('.goodName').forEach((n, i) => n.textContent = goodNames[i] + " " + i)


document.querySelectorAll('.bad__ul').forEach((n, i) => n.textContent = numbers[i])

const goodnumbers = numbers.sort()

document.querySelectorAll('.good__ul').forEach((n, i) => n.textContent = goodnumbers[i])