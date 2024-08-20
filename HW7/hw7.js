// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user = new User(1, 'Vasya', 'Petrov', 'sss@rrr.com', '+38099999999');
// console.log(user);
//
// let users = [
//     new User (1, 'Kolya', 'Pupkin', 'dddd@lll.com', '+390000000'),
//     new User (2, 'Petya', 'Vasichkin', 'dd@lllpp.com', '+39111111'),
//     new User (3, 'Siroga', 'Popokin', 'ddds@llljkgjgk.com', '+39666666'),
//     new User (4, 'Kostya', 'Kolin', 'sdcfsf@liyo.com', '+38888888'),
//     new User (5, 'Egor', 'Letov', 'lshskjcl;@ifti.com', '+369966666'),
//     new User (6, 'Mihail', 'Gorshenev', 'sdiffyso@lll.com', '+3700000'),
//     new User (7, 'Nikita', 'Gopik', 'dcsaddc@yiuoj.com', '+39864331'),
//     new User (8, 'Igor', 'Zuzin', 'sdkgckhc@soiidcua.com', '+39054216570000'),
//     new User (9, 'Gena', 'Krokodil', 'ddddafha@kdgk.com', '+39575431'),
//     new User (10, 'Chop', 'Chopkin', 'skdcfhlaj;a@sdhkjn.com', '+39564467417'),
// ]
//
// console.log(users);

//=====================================

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = users.filter((user) => user.id % 2 === 0);
// console.log(filter);

//=====================================
//
// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user = new User(1, 'Vasya', 'Petrov', 'sss@rrr.com', '+38099999999');
// console.log(user);
//
// let users = [
//     new User (6, 'Kolya', 'Pupkin', 'dddd@lll.com', '+390000000'),
//     new User (7, 'Petya', 'Vasichkin', 'dd@lllpp.com', '+39111111'),
//     new User (2, 'Siroga', 'Popokin', 'ddds@llljkgjgk.com', '+39666666'),
//     new User (1, 'Kostya', 'Kolin', 'sdcfsf@liyo.com', '+38888888'),
//     new User (3, 'Egor', 'Letov', 'lshskjcl;@ifti.com', '+369966666'),
//     new User (4, 'Mihail', 'Gorshenev', 'sdiffyso@lll.com', '+3700000'),
//     new User (10, 'Nikita', 'Gopik', 'dcsaddc@yiuoj.com', '+39864331'),
//     new User (5, 'Igor', 'Zuzin', 'sdkgckhc@soiidcua.com', '+39054216570000'),
//     new User (8, 'Gena', 'Krokodil', 'ddddafha@kdgk.com', '+39575431'),
//     new User (9, 'Chop', 'Chopkin', 'skdcfhlaj;a@sdhkjn.com', '+39564467417'),
// ]
//
// console.log(users);
//
// let sort = users.sort((a,b) => a.id - b.id);
// console.log(sort);

//============================================================

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client = [
//     new Client (1, 'Kolya', 'Pupkin', 'dddd@lll.com', '+390000000', ['tv', 'ph', 'nt']),
//     new Client (2, 'Petya', 'Vasichkin', 'dd@lllpp.com', '+39111111', ['tv', 'ph', 'nt', 'np']),
//     new Client (3, 'Siroga', 'Popokin', 'ddds@llljkgjgk.com', '+39666666', ['tv', 'ph', 'nt', 'cl', 'meet']),
//     new Client (4, 'Kostya', 'Kolin', 'sdcfsf@liyo.com', '+38888888', ['tv', 'ph', 'nt', 'butter']),
//     new Client (5, 'Egor', 'Letov', 'lshskjcl;@ifti.com', '+369966666', ['tv', 'ph', 'nt', 'broad', 'knife']),
//     new Client (6, 'Mihail', 'Gorshenev', 'sdiffyso@lll.com', '+3700000', ['tv', 'ph', 'nt', 'tablet']),
//     new Client (7, 'Nikita', 'Gopik', 'dcsaddc@yiuoj.com', '+39864331', ['tv', 'ph', 'nt', 'router', 'wi-fi', 'pen']),
//     new Client (8, 'Igor', 'Zuzin', 'sdkgckhc@soiidcua.com', '+39054216570000', ['tv', 'ph', 'nt', 'blog', 'book']),
//     new Client (9, 'Gena', 'Krokodil', 'ddddafha@kdgk.com', '+39575431', ['tv', 'ph']),
//     new Client (10, 'Chop', 'Chopkin', 'skdcfhlaj;a@sdhkjn.com', '+39564467417', ['tv', 'nt', 'room', 'victory', 'goblin']),
// ];
// console.log(client);
//
// //==========================================================
//
// // Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sort = client.sort((a,b) => a.order.length - b.order.length);
// console.log(sort);

//==========================================================

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, producer, year, maxSpeed, engineVolume){
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
//     this.drive = function(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function(){
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         if(newSpeed > this.maxSpeed)this.maxSpeed = this.maxSpeed+newSpeed;
//     }
//     this.changeYear = function(newYear){
//         if(newYear > this.year)this.year = newYear;
//     }
//     this.addDriver = function(driver){
//         if (driver) this.driver = driver;
//     }
//
// }
//
// let car = new Car('BMW', 'BMW', 1982, 100, 2);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(150);
// car.changeYear(2020);
// car.addDriver('Vasya');
// console.log(car);

//=========================================
//(Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//     };
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     increaseMaxSpeed (newSpeed) {
//         if (newSpeed > this.maxSpeed) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     changeYear (newYear) {
//         if (newYear > this.year) this.year = newYear;
//     };
//     addDriver (driver) {
//         if (driver) this.driver = driver;
//     };
//
// }
//
// let car = new Car('BMW', 'BMW', 1982, 100, 2);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(150);
// car.changeYear(2020);
// car.addDriver('Vasya');
// console.log(car);

//====================================================
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name
//         this.age = age
//         this.footSize = footSize
//     }
// }
//
//
// const cinderellas = [
//     new Cinderella('Аня', 19, 36),
//     new Cinderella('Оля', 22, 37),
//     new Cinderella('Катя', 21, 38),
//     new Cinderella('Настя', 20, 36),
//     new Cinderella('Юля', 23, 39),
//     new Cinderella('Іра', 18, 35),
//     new Cinderella('Марія', 24, 40),
//     new Cinderella('Віка', 21, 37),
//     new Cinderella('Софія', 19, 36),
//     new Cinderella('Наташа', 22, 38)
// ]
//
// class Prince {
//     constructor(name, age, foundShoe) {
//         this.name = name
//         this.age = age
//         this.foundShoe = foundShoe
//     }
// }
//
//
// let prince = new Prince('Вася', 25, 35)
//
//
// for (let cinderella of cinderellas) {
//     if (cinderella.footSize === prince.foundShoe) {
//         console.log('Знайдена:', cinderella)
//     }
// }
//
// let cinderellaWithFind = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe)
// console.log('Знайдена з find:', cinderellaWithFind)

//==============================================================

// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function(callback) {
//     for (const i of this) {
//         callback(i);
//
//     }
// };
// [123, 'sss', 34].myForEach((x)=> console.log(x));
//
// Array.prototype.myFilter = function(callback) {
//     let arr =[];
//     for (const i of this) {
//         if (callback(i)) {
//             arr.push(i);
//         }
//     }
//     return arr;
// };
// let manys = [
//     {name: 'Oleg', age: 34},
//     {name: 'Vasya', age: 35},
//     {name: 'Petya', age: 36},
//     {name: 'Kolya', age: 32},
//     {name: 'Roman', age: 37},
//
// ];
// let result = manys.myFilter((many)=> many.age > 35);
// console.log(result);

