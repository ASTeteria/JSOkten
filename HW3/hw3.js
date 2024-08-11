
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Будь який текст div</div>');
// }


// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Div номер - ${i+1}</div>`);
// }


// let i = 0;
// while (i < 20) {
//     document.write('<h1>Будь який текст h1</h1>');
//     i++;
// }


// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Заголовок номер - ${i + 1}</h1>`);
//     i++;
// }


// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write('<ul>');
// for (let i = 0; i < listOfItems.length; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`);
// }
// document.write('</ul>');


// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let product of products) {
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//             <img src="${product.image}" alt="${product.title}" class="product-image">
//         </div>
//     `);
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// // Користувачі зі статусом true
// document.write('<h2>Користувачі зі статусом true:</h2>');
// for (let user of users) {
//     if (user.status) {
//         document.write(`<div>Name: ${user.name}, Age: ${user.age}</div>`);
//     }
// }
//
// // Користувачі зі статусом false
// document.write('<h2>Користувачі зі статусом false:</h2>');
// for (let user of users) {
//     if (!user.status) {
//         document.write(`<div>Name: ${user.name}, Age: ${user.age}</div>`);
//     }
// }
//
// // Користувачі які старші за 30 років
// document.write('<h2>Користувачі старші за 30 років:</h2>');
// for (let user of users) {
//     if (user.age > 30) {
//         document.write(`<div>Name: ${user.name}, Age: ${user.age}</div>`);
//     }
// }
