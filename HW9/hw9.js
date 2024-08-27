//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');

// Додавання класів
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// Додавання стилів
block.style.backgroundColor = 'lightblue';
block.style.color = 'darkblue';
block.style.fontSize = '20px';

// Додавання блоку в body
document.body.appendChild(block);

// Клонування
let clonedBlock = block.cloneNode(true);

// Додавання клону в body
document.body.appendChild(clonedBlock);

//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let items = ['Main', 'Products', 'About us', 'Contacts'];

// Створення ul
let ul = document.createElement('ul');

for (let i = 0; i < items.length; i++) {
    let li = document.createElement('li');

    // Текст в li
    li.textContent = items[i];

    //li в ul
    ul.appendChild(li);
}

// ul в body
document.body.appendChild(ul);


//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray) {
//     let block = document.createElement('div');
//
//     // Текст до блоку
//     block.textContent = `${course.title} - ${course.monthDuration} months`;
//
//     document.body.appendChild(block);
// }


//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// Масив об'єктів
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray) {

    let div = document.createElement('div');
    div.classList.add('item');

    //h1 з класом 'heading'
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = course.title;

    //  p з класом 'description' для monthDuration
    let p = document.createElement('p');
    p.classList.add('description');
    p.textContent = `Duration: ${course.monthDuration} months`;

    // h1 та p до div
    div.appendChild(h1);
    div.appendChild(p);

    document.body.appendChild(div);
}

