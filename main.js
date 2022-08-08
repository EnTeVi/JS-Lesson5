// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


function area(a, b) {
    return areaObj = a * b;

}

console.log(area(4, 3));




// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function areaCircle(r) {
//     return Math.PI * (r * r);
// }
// let areaCircleEnter = areaCircle(5);
// console.log(areaCircleEnter);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// function areaCylinder(r, h) {
//     return 2 * Math.PI * r * h;
// }
//
// console.log(areaCylinder(5, 20));



// - створити функцію яка приймає масив та виводить кожен його елемент


// let array = [2, 4, 13, "Cat", true];
//
// function outputArr(array) {
//     for (let key of array) {
//         console.log(key);
//     }
// }
//
// outputArr(array);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function paragraph (text) {
//     return `<p> ${text} </p>`;
// }
//
// document.write(paragraph("Okten the best"));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function ulli(text) {
//
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li> ${text} </li>`);
//     }
//
// }
// document.write(`<ul>`);
// ulli("Catman is real superhero");
// document.write(`</ul>`);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// let numb = 3;
// let text = "Ababagalamaga";
//
// function textLi(text, numb) {
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li> ${text} </li>`);
//     }
// }
// document.write(`<ul>`);
// textLi(text, numb);
// document.write(`</ul>`);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// const arrayPrim = [2, 24, true, false, NaN, "Strong JS", "MMM", Math.PI];
//
// function arrList(arrayPrim) {
//     for (let key in arrayPrim) {
//         for (let i = 0; i < key.length; i++) {
//             document.write(`<li> ${arrayPrim[key]} </li>`);
//         }
//     }
// }
//
// document.write(`<ul>`);
// arrList(arrayPrim);
// document.write(`</ul>`);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let unrealHerois = [
//     {id: 3253, name: "Rick", age: 77},
//     {id: 3254, name: "Cap", age: 75},
//     {id: 3255, name: "Morty", age: 1},
// ]
//
// function heroDoc() {
//     for (let key of unrealHerois) {
//         document.write(`<div class="e">  </div>`);
//         for (let i in key) {
//
//             document.write(`<div class="hero"> ${key[i]} </div>`);
//         }
//     }
// }
//
// document.write(`<div class="container">`);
// heroDoc(unrealHerois);
// document.write(`</div>`);





// - створити функцію яка повертає найменьше число з масиву


//
// let ar = [1, 5, 3, 66, 6, 727, 25, 2];
// let value = 0;
// function minNumb(ar) {
//     for (let key of ar) {
//         for (let i = 0; i < ar.length; i++) {
//             if (value < key) {
//                 value = key;
//
//             }
//
//         }
//
//
//     }
//     return value;
// }
//
// document.write(`<ul>`);
// document.write(`<li> ${minNumb(ar)} </li>`);
// document.write(`</ul>`);




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let ar = [1, 5, 3, 66, 6, 25, 2];
// let value = 0;
// function arrayNumb (ar) {
//     for (let key of ar) {
//         value += key;
//     }
//     return value;
// }
//
// console.log(arrayNumb(ar));