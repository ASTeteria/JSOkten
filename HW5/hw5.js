// -----TASK1----

let rectangl = (a, b) => a*b;

console.log("Площа прямокутника: " + rectangl(10, 10));

// -----TASK2----

let cercl = (r) => 3.14*r*r;

console.log("Площа кола: " + cercl(10));

// -----TASK3----

const cylinder = (r, h) => 2 * (3.14 * r * r) + 2 * (3.14 * r * h);

console.log("Площа поверхні циліндра: " + cylinder(10, 10));

// -----TASK4----

let elements = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
elements([1,2,3,4]);

// -----TASK5----

let paragraph = (js) => document.write(`<p>${js}</p>`);
paragraph("Тра-ля-ля і Тру-ля-ля");

// -----TASK6----

let list = (js) => document.write(`
    <ul>
        <li>${js}</li>
        <li>${js}</li>
        <li>${js}</li>
    </ul>
`);

list("Елемент списку");

// -----TASK7----

let listItem = (js, numberOfItems) => {
    document.write('<ul>');
    for (let i = 0; i < numberOfItems; i++) {
        document.write(`<li>${js}</li>`);
    }
    document.write('</ul>');
};

listItem("Елемент списку", 8);

// -----TASK8----
let createList = arr => {
    let listItems = '';
    for (let i = 0; i < arr.length; i++)
        listItems += `<li>${arr[i]}</li>`;
    document.write(`<ul>${listItems}</ul>`);
};

createList([42, "Hello", true, 3.14, "World", false]);

// -----TASK9----
let objects = (arr) => {
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
let findMin = arr => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++)
        if (arr[i] < min) min = arr[i];
    return min;
};

let numbers = [5, 3, 9, 1, 6];
console.log(findMin(numbers));

// -----TASK11----
let sum = (arr) => arr.reduce((total, num) => total + num, 0);

let num = [1, 2, 3, 4, 5];
console.log(sum(num));


// -----TASK12----
let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};
let nums = [11, 22, 33, 44];
console.log(swap(nums, 0, 1));

// -----TASK13----
let exchange = (sumUAH, currencyValues, exchangeCurrency) =>
    sumUAH / (currencyValues.find(money => money.currency === exchangeCurrency) || { value: 1 }).value;

let currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];

console.log(exchange(10000, currencyValues, 'USD'));





