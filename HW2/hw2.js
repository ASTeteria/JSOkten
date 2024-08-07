// ---TASK1---
let array = [1, 'hello', true, null, undefined, {boy: 'evgen'}, [1, 2, 3], 24, 'common', NaN];

console.log(array);

// ---TASK2---
let book1 = {title: 'Book One', pageCount: 1000, genre: 'Fantasy'};
let book2 = {title: 'Book Two', pageCount: 1500, genre: 'Fantastic'};
let book3 = {title: 'Book Three', pageCount: 330, genre: 'Dictionary'};

console.log(book1, book2, book3);

// ---TASK3---
let book4 = {title: 'Book Four', pageCount: 2000, genre: 'Detective', authors: [{name: 'Author One', age: 45}]};
let book5 = {title: 'Book Five', pageCount: 1550, genre: 'Comics', authors:  [{name: 'Author Three', age: 40}]};
let book6 = {title: 'Book Six', pageCount: 1, genre: 'History', authors: [{name: 'Author Four', age: 55}]};

console.log(book4, book5, book6);

// ---TASK4---
let users = [
    {name: 'User1', username: 'user1', password: 'password123'},
    {name: 'User2', username: 'user2', password: 'password1234'},
    {name: 'User3', username: 'user3', password: 'password1235'},
    {name: 'User4', username: 'user4', password: 'password1236'},
    {name: 'User5', username: 'user5', password: 'password1237'},
    {name: 'User6', username: 'user6', password: 'password1238'},
    {name: 'User7', username: 'user7', password: 'password1239'},
    {name: 'User8', username: 'user8', password: 'password12310'},
    {name: 'User9', username: 'user9', password: 'password12311'},
    {name: 'User10', username: 'user10', password: 'password12312'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// ---TASK5---
let temperature = [
//ранок,день,вечір
    [20, 25, 22], // День 1
    [21, 26, 23], // День 2
    [19, 24, 21], // День 3
    [22, 27, 24], // День 4
    [20, 25, 22], // День 5
    [18, 23, 20], // День 6
    [21, 26, 23]  // День 7
];

console.log(temperature);

let temperature1 = [
    {day: 1, morning: 20, afternoon: 25, evening: 22},
    {day: 2, morning: 21, afternoon: 26, evening: 23},
    {day: 3, morning: 19, afternoon: 24, evening: 21},
    {day: 4, morning: 22, afternoon: 27, evening: 24},
    {day: 5, morning: 20, afternoon: 25, evening: 22},
    {day: 6, morning: 18, afternoon: 23, evening: 20},
    {day: 7, morning: 21, afternoon: 26, evening: 23}
];

console.log(temperature1);

// ---TASK6---
let x = 1; //Змінти число на 0, -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// let y = 0;
// if (y !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
// let o = -3;
// if (o !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// ---TASK7---
let time = prompt('ведіть значення');
if (time >= 0 && time < 15) {
    console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть');
} else {
    console.log('Невірне значення');
}

// ---TASK8---
let day = prompt('введіть число від 1 до 31');
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Невірне значення');
}

// ---TASK9---
let dayOfWeek = +prompt('введіть номер дня'); // змініть значення для перевірки
switch (dayOfWeek) {
    case 1:
        console.log('Понеділок: підтягування, віджимання');
        break;
    case 2:
        console.log('Вівторок: підтягування, віджимання, прес');
        break;
    case 3:
        console.log('Середа: підтягування, віджимання, куток');
        break;
    case 4:
        console.log('Четвер: підтягування, віджимання, саньда');
        break;
    case 5:
        console.log("П'ятниця: підтягування, віджимання");
        break;
    case 6:
        console.log('Субота: підтягування, віджимання, таолу');
        break;
    case 7:
        console.log('Неділя: підтягування, віджимання');
        break;
    default:
        console.log('Невірний день');
}

// ---TASK10---
let num1 = prompt('введіть перше число');
let num2 = prompt('введіть друге число');

if (num1 > num2) {
    console.log('Максимальне число: ' +num1);
} else if (num2 > num1) {
    console.log('Максимальне число: ' +num2);
} else {
    console.log('Числа рівні');
}




