// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let string of str) {
//     console.log(string.length)
// }

//==============================================

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let s = 'hello world';
// let s1 = s.toUpperCase();
// console.log(s1)
//
// let sa = 'lorem ipsum';
// let sb = sa.toUpperCase();
// console.log(sb)
//
// let sv = 'javascript is cool';
// let sn = sv.toUpperCase();
// console.log(sn)

//==========================================================

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let s = 'HELLO WORLD';
// let s1 = s.toLowerCase();
// console.log(s1)
//
// let sa = 'LOREM IPSUM';
// let sb = sa.toLowerCase();
// console.log(sb)
//
// let sv = 'JAVASCRIPT IS COOL';
// let sn = sv.toLowerCase();
// console.log(sn)

//=====================================================

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string;   '
// let clean = str.trim();
// console.log(clean);

//====================================================

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray(str) {
//     let arr = str.split(' ');
//     return arr;
// }
//
// console.log( stringToarray ('Ревуть воли як ясла повні'))

//=================================================

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let s = arr.map( item => item +'');
// console.log(s)

//===================================================

// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(array,direction) {
//     if (direction === 'ascending') return array.sort((a,b) => a-b);
//     if (direction === 'descending') return array.sort((a,b) => b-a);
// }
//
// console.log(sortNums([11,21,3],'descending') )
// console.log(sortNums([11,21,3],'ascending') )

//=================================================

// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let x = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter (item => item.monthDuration > 5)
//     .map ((item, index) => ({...item, id: index+1}));
// console.log(x)

//=========================================

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// let suits = ['spade', 'diamond', 'heart', 'club'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'qeen', 'king', 'ace'];
//
// let cards = [];
// for (let suit of suits) {
//     for (let value of values) {
//         let card = {cardSuit: suit, cardValue: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
//
// console.log(cards.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace'));
// console.log(cards.filter(card => card.cardValue === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'club' && (card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9')));

//===============================================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let suits = ['spade', 'diamond', 'heart', 'club'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'qeen', 'king', 'ace'];
//
// let cards = [];
// for (let suit of suits) {
//     for (let value of values) {
//         let card = {cardSuit: suit, cardValue: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
// let red = cards.reduce((previousValue, card)=>{
//     switch (card.cardSuit){
//         case 'spade':
//             previousValue.spades.push(card);
//             break;
//
//         case 'diamond':
//             previousValue.diamonds.push(card);
//             break;
//
//         case 'heart':
//             previousValue.hearts.push(card);
//             break;
//
//         case 'club':
//             previousValue.clubs.push(card);
//             break;
//     }
//      return previousValue;
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
// console.log(red);

//===================================================

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(courses => courses.modules.includes('sass')));
// console.log(coursesArray.filter(courses => courses.modules.includes('docker')));