//взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// let cartsDiv = document.getElementById('carts');
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cartsObject => {
//         let {carts} = cartsObject;
//         console.log(carts);
//
//
//         for (const cart of carts) {
//             let div = document.createElement('div');
//             div.classList.add('cart-container');
//             let divInfo = document.createElement('div');
//             divInfo.innerText = `
//             "discountedTotal": ${cart.discountedTotal},
//             "id": ${cart.id},
//             "total": ${cart.total},
//             "totalProducts": ${cart.totalProducts},
//             "discountedTotal": ${cart.discountedTotal},
//             "userId": ${cart.userId},
//             "totalQuanity": ${cart.totalQuantity}`
//
//         let ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 let li = document.createElement('li');
//                 let info = document.createElement('p');
//                 info.innerText = `
//                 "discountPercentage": ${product.discountPercentage},
//                 "discountedTotal": ${product.discountedTotal},
//                 "id": ${product.id},
//                 "price": ${product.price},
//                 "quantity": ${product.quantity},
//                 "title": ${product.title},
//
//                 `
//                 let img = document.createElement('img');
//                 img.src="${product.thumbnail}";
//                 li.append(img, info);
//                 ol.appendChild(li);
//             }
//             div.append(divInfo, ol);
//             cartsDiv.appendChild(div);
//         }
//     });

//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    let arrayDiv = document.createElement('div');
                    let h2 = document.createElement('h2');
                    h2.innerText = recipeKey;
                    let ul = document.createElement('ul');
                    let array = recipe[recipeKey];
                    for (const item of array) {
                        let li = document.createElement('li');
                        li.innerText = item;
                        ul.appendChild(li);
                    }
                    arrayDiv.append(h2, ul);
                    recipeDiv.appendChild(arrayDiv);
                } else {
                    if (recipeKey !== 'image') {
                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeKey}:${recipe[recipeKey]}`
                    recipeDiv.appendChild(keyDiv);
                    }
                }
            }

            let img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);

            target.appendChild(recipeDiv);

        }
    });