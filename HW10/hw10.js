//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let button = document.getElementById('but');
button.onclick = function () {
    document.getElementById('text').style.display = 'none';
}

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('check').addEventListener('click', function() {
    let age = document.getElementById('agenumber').value;
    let messageElement = document.getElementById('msg');

    if (age < 18) {
        messageElement.textContent = 'Вам менше 18 років.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Ви старше 18 років.';
        messageElement.style.color = 'green';
    }
});

//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms.f1;
let target = document.getElementById('target');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nameValue = form.name.value;
    let surnameValue = form.surname.value;
    let ageValue = form.age.value;
    let pers = {nameValue, surnameValue, ageValue};
    console.log(pers)
    target.innerText = pers.nameValue + ' ' + pers.surnameValue + ' ' + pers.ageValue;
});


//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let number = +localStorage.getItem('num');
number +=1;
localStorage.setItem('num', number);
document. getElementById('starget').innerText = number;

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sesList = JSON.parse(localStorage.getItem('sesList')) || [];
sesList.push(new Date());
localStorage.setItem('sesList', JSON.stringify(sesList));

//створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let input = document. getElementById('xxx');
let resultDiv = document.getElementById('result');
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;
};

//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd) {
    let item = localStorage.getItem(arrayName);
    let array = JSON.parse(item);
    if (typeof (objToAdd) === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sesList', {age:7});

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let tableGen = document.forms['tableGeneration'];
let table = document.getElementById('table');

tableGen.onsubmit = function (e) {
    e.preventDefault();
    let linesValue = +tableGen.lines.value;
    let cellValue = +tableGen.cells.value;
    let inValue = tableGen.in.value;
    console.log(linesValue, cellValue, inValue);
    for (let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellValue; j++) {
            let td = document.createElement('td');
            td.innerText = inValue;
            tr.appendChild(td);
            
        }
        table.appendChild(tr);
        
    }
}

