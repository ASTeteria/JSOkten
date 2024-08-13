// -----TASK1----

function rectangl(a, b) {
    return a * b;
}

console.log("Площа прямокутника: " + rectangl(10, 10));

// -----TASK2----

function cercl(r) {
    return 3.14 * r * r;
}

console.log("Площа кола: " + cercl(10));

// -----TASK3----

function cylinder(r, h) {
    let base = 3.14 * r * r;
    let area = 2 * 3.14 * r * h;
    return 2 * base + area;
}

console.log("Площа поверхні циліндра: " + cylinder(10, 10));

// -----TASK4----

function elements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let array = [1, 2, 3, 4, 5];
elements(array);

// -----TASK5----

function paragraph(js) {
    document.write(`<p>${js}</p>`);
}

paragraph("Тра-ля-ля і Тру-ля-ля");


// -----TASK6----

function list(js) {
    let ul = `
        <ul>
            <li>${js}</li>
            <li>${js}</li>
            <li>${js}</li>
        </ul>
    `;
    document.write(ul);
}

list("Елемент списку");

// -----TASK7----

function listItem(js, numberOfItems) {
    document.write('<ul>');
    for (let i = 0; i < numberOfItems; i++) {
        document.write(`<li>${js}</li>`);
    }
    document.write('</ul>');
}

listItem("Елемент списку", 8);

// -----TASK8----
function createList(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

createList([42, "Hello", true, 3.14, "World", false]);

// -----TASK9----
function objects(arr) {
    document.write('<html>');
    for (const obj of arr) {
        document.write(`
            <div >
                <p><strong>ID:</strong> ${obj.id}</p>
                <p><strong>Name:</strong> ${obj.name}</p>
                <p><strong>Age:</strong> ${obj.age}</p>
            </div>
        `);
    }
    document.write('</html>');
}

let people = [
    {id: 1, name: "Alice", age: 30},
    {id: 2, name: "Bob", age: 25},
    {id: 3, name: "Charlie", age: 35}
];
objects(people);

// -----TASK10----
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let numbers = [5, 3, 9, 1, 6];
console.log(findMin(numbers));

// -----TASK11----
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let num = [1, 2, 3, 4, 5];
console.log(sum(num));

// -----TASK12----
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

let nums = [11, 22, 33, 44];
console.log(swap(nums, 2, 1));

// -----TASK13----
let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let money;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            money = currencyValues[i];
        }

    }
    return sumUAH / money.value;
}

console.log(exchange(10000, currencyValues, 'USD'));
