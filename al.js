// // 1)
// // //для чего нужен AJAX?

// //Он нужен во первых чтобы считывать данные с веб страницы после загрузки 
// //во вторых чтобы можно было без перезагрузки веб страницы обновить ее 
// //и в третьих чтоб можно было выводить данные с веб страницы в фоновом режиме

// // 2)
// // //для чего нужен веб API?

// //Он нужен чтобы во первых расширить функциональность браузера
// //Во вторых чтоб упростить сложные функции
// //И в третьих чтобы упростить синтаксис кода 

// // 3)
// // //создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
// // <button id='back'>Open</button>

// let backSide = document.querySelector("#back");
// backSide.addEventListener("click", function(){
//     history.back();

// });

// // 4)
// // //создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
// // <button id='next'>Open</button>

// let forwardSide = document.querySelector("#next");
// forwardSide.addEventListener("click", function(){
//     history.forward();
  
// });

// // 5)
// // //создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы вперед в браузере при нажатии
// // <button id='nextTh'>Open</button>

// let forTH = document.querySelector("#nextTh");
// forTH.addEventListener("click", function(){
//     history.go(3);
  
// });

// // 6)
// // //создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы назад в браузере при нажатии
// // <button id='backTh'>Open</button>

// let backTh = document.querySelector("#backTh");
// backTh.addEventListener("click", function(){
//     history.go(-3);
   
// });

// // 7)
// // //выведите в консоли локальное хранилище

// console.log(localStorage);


// // 8)
// // //добавьте обьект ниже в локальное хранилище под ключем 'user'
// let newUser = {name: 'Alex', age: 24};

//localStorage.setItem('user', JSON.stringify(newUser));


// 9)
// //получите из локального хранилища ранее добавленные данные и выведите в консоли

// let lokal = JSON.parse(localStorage.getItem('user'));
// console.log(lokal);


// 10)
// //для чего нужен localStorage?

//Он обеспечивает доступ к локальному хранилищу для определенного сайта

// 11)
// //для чего нужен sessionStorage?

//Он  тоже обеспечивает доступ к локальному хранилищу для определенного сайта но их разница в том что sessionStorage хранит данные только для одного сеанса

// 12)
// //добавьте обьект ниже в sessionStorage под ключем 'user'
// let newUser = {name: 'Alex', age: 24};

// sessionStorage.setItem('user', JSON.stringify(newUser));

// 13)
// //получите из sessionStorage ранее добавленные данные и выведите в консоли

// let sesion = JSON.parse(sessionStorage.getItem('user'));
// console.log(sesion);

// 14)
// //выведите в консоли все ключи из локального хранилища

// console.log(Object.keys(localStorage));

// 15)
// //выведите в консоли длину локального хранилища

// console.log(localStorage.length);

// 16)
// //удалите ранее добавленный ключ 'user' из локального хранилища

// localStorage.removeItem('user');

// 17)
// //очистите локальное хранилище

// localStorage.clear();

// 1)
// //выведите в консоли каждый элемент из массива [45, 12, 3, 2, 1, 35] с помощью forEach()

// const arr = [45, 12, 3, 2, 1, 35];
// arr.forEach(el => {
//     console.log(el);
// });

// 2)
// //создайте новый массив с помощью map() из массива [45, 46, 47] в котором все значения будут удвоены и выведите в консоли

// const arr2 = [45, 46, 47];
// const dblArr = arr2.map(el => el * 2);
// console.log(dblArr);

// 3)
// //создайте новый массив только из чисел больше 5ти из массива [45, 12, 3, 2, 1, 35] с помощью filter()

// const arr3 = [45, 12, 3, 2, 1, 35];
// const newArr = arr3.filter(el => el > 5);
// console.log(newArr);


// 4)
// //сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и выведите результат в консоли

// const arr4 = [45, 12, 3, 2, 1, 35];
// const sum = arr4.reduce((fr, sc) => fr + sc);
// console.log(sum);


// 5)
// //сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и начального значения 50, выведите результат в консоли

// const arr5 = [45, 12, 3, 2, 1, 35];
// const sum2 = arr5.reduce((fr, sc) => fr + sc, 50);
// console.log(sum2);

// 6)
// //создайте массив только из чисел больше 5ти используя every() из массива [45, 12, 3, 2, 1, 35]

// const arr6 = [45, 12, 3, 2, 1, 35];
// const new = arr6.every(el => el > 5);
// console.log(new);


// 7)
// //создайте массив только из чисел больше 5ти используя some() из массива [45, 12, 3, 2, 1, 35]

// const arr7 = [45, 12, 3, 2, 1, 35];
// const new2 = arr7.some(el => el > 5);
// console.log(new2);


// 8)
// //используйте метод indexOf чтобы найти индекс 'apple' в массиве ниже

// const fruits = ['apple', 'banana', 'orange'];
// const find = fruits.indexOf('apple');
// console.log(find);

// 9)
// //используйте метод lastIndexOf чтобы найти индекс последнего 'apple' в массиве ниже

// const find2 = fruits.lastIndexOf('apple');

// 10)
// //проверьте находится ли 'apple' в массиве ниже

// const find3 = fruits.includes('apple');

// 11)
// //выведите в консоли первое число которое больше 5ти из массива [1, 3, 4, 9, 0, 20]

// const arr8 = [1, 3, 4, 9, 0, 20];
// const new3 = arr8.find(el => el > 5);
// console.log(new3);


// 12)
// //выведите в консоли индекс первого числа который больше 5ти из массива [1, 3, 4, 9, 0, 20]

// const arr9 = [1, 3, 4, 9, 0, 20];
// const new4 = arr9.findIndex(el => el > 5);
// console.log(new4);

// 13)
// //превратите строку 'Hello' в массив с помощью from()

// const str = 'Hello';
// const arr10 = Array.from(str);
// console.log(arr10);

// 14)
// //выведите в консоли все ключи из массива


// const arr11 = [1, 3, 4, 9, 0, 20];
// const keys = Object.keys(arr11);
// console.log(keys);

// 1)
// //что выведет в консоли console.log(Boolean(10 > 9))

//true

// 2)
// //что выведет в консоли console.log(Boolean(10 < 9))

//falce

// 3)
// //что выведет в консоли скрипт ниже
// if (1 == 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//false

// 4)
// //что выведет в консоли скрипт ниже
// if (1 < 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//true

// 5)
// //что выведет в консоли скрипт ниже
// if (1 > 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//false

// 6)
// //что выведет в консоли скрипт ниже
// let x = 0;
// console.log(Boolean(x));

//false

// 7)
// //что выведет в консоли скрипт ниже
// let x = -0;
// console.log(Boolean(x));

//false

// 8)
// //что выведет в консоли скрипт ниже
// let x = "";
// console.log(Boolean(x));

//false

// 9)
// //что выведет в консоли скрипт ниже
// let x;
// console.log(Boolean(x));

//false

// 10)
// //что выведет в консоли скрипт ниже
// let x = null;
// console.log(Boolean(x));

//false

// 11)
// //что выведет в консоли скрипт ниже
// let x = false;
// console.log(Boolean(x));

//false


// 12)
// //что выведет в консоли скрипт ниже
// let x = 10/"H";
// console.log(Boolean(x));

//false

// 13)
// //перечислите логические операторы

//and, or, not

// 14)
// //что выведет в консоли скрипт ниже
// if (1 > 2 && 2 < 3 || "hello".length < 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//false

// 15)
// //что выведет в консоли скрипт ниже
// if (1 > 2 && 2 < 3 || "hello".length < 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//false

// 16)
// //что выведет в консоли скрипт ниже
// if (1 > 2 || 2 < 3 || "hello".length != 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//true

// 17)
// //создайте структуру ниже с помощью if, else, else if
// let money = 10;
// /*
//  если money больше или равно 5-ти, то вывести в консоли 'Я куплю пирог',
//  иначе если money меньше 5-ти и больше 1, то вывести в консоли 'Мало денег',
//  иначе вывести в консоли 'Денег нет'
// */

// let money = 10;
// if(money >= 5){
//     console.log('I will buy cake');
// }else if(money < 5 && money > 1){
//     console.log('money is tight');
// }else{
//     console.log('no money');
// }

// 18)
// //превратите скрипт ниже в switch
// let day = new Date().getDay();

// if (day == 1) {
//     console.log('Monday');
// } else if (day == 2) {
//     console.log('Tuesday');
// } else if (day == 3) {
//     console.log('Wednesday');
// } else if (day == 4) {
//     console.log('Thursday');
// } else if (day == 5) {
//     console.log('Friday');
// } else {
//     console.log('Break Time!');
// }

// let day = new Date().getDay();

// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     default:
//         console.log('Break Time!');
// }


// let num = '654765fdfds';

// if (/\s/g.test(num) || /[a-zA-Z]/g.test(num)) {
//     console.log(false)
// }else{
//     console.log(true);
// }

//false