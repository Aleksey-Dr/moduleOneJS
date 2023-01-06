// 1
// const base = 3;
// const power = 4;

// console.log(base ** power);

// 2
// let base = prompt("Введи число");
// base = Number(base);
// console.log(base);

// let power = prompt("Введи степень");
// power = Number(power);
// console.log(power);

// let result = base ** power;
// console.log(result);

// 3
// let max = prompt("Введи максиальное значение");
// приводи текстовое значение метода prompt к числовому значению
// max = Number(max);
// console.log(max);

// let min = prompt("Введи минимальное значение");
// min = Number(min);
//случайная генерация + округление
// console.log(Math.round(Math.random() * (max - min) + min));

// 4
// Интересный пример
// const colors = ["tomato", "teal", "orange", "deeppink", "skyblue"];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// 5
// конкатинация строк
// const firstName = "Chelsy";
// const lastName = "Emerald";

// const room = 716;
// const type = "VIP";

// const welcomeMsg = "Гость" + " " + firstName + " "
//     + lastName + " " + "поселяется в" + " " + type
//     + " " + "номер" + " " + room;

// console.log(welcomeMsg);

// шаблонный литерал
// console.log(`Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`);

// 6
// let brand = "Samsung";
// brand = brand.toLowerCase();

// console.log(brand);

// индекс сивола в строке
// let brand = "SamSung";
// console.log(brand[5]);

// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// 7
// операторы сравнения
// console.log("Операторы сравнения");
// console.log(5 > 3);
// console.log('5' > 3);
// console.log(true > 3);
// console.log(true > 1);
// console.log(true > 0);
// console.log(false > 1);
// console.log(false > 0);
// console.log(false < 0);
// console.log(false < 1);

// операторы равенства
// console.log("Операторы равенства");
// оператор присвоения =
// console.log(apple = 1);

// оператор нестрогого равенства
// console.log("Оператор нестрогого сравнения");
// console.log(5 == 1);
// console.log(5 == 6);
// console.log(5 == "5");
// console.log("a" == "a");
// console.log("a" == 1);
// console.log(true == 1);

// console.log(1 != "1");
// console.log(1 != 1);
// console.log(1 != 2);

// оператор строгого равенства
// console.log("Оператор строгого равенства");
// console.log(5 === 5);
// console.log(5 === "5");
// console.log("a" === "a");
// console.log(true === 1);

// console.log(1 !== 1);
// console.log(1 !== 2);

// 8
// логические операторы
// console.log(Number(null));
// приведение к булю
// console.log(Boolean(5));
// console.log(Boolean("abc"));
// console.log(Boolean(""));
// console.log(Boolean(-5));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));
// console.log(Boolean("false"));

// && (И)
// console.log(5 && 6 && "hello");
// console.log(false && "hello");
// console.log(0 && "hello");
// console.log(5 && 5 && NaN && "hello")

// || (or)
// console.log(5 || 6 || "hello");
// console.log("hello" || 5 || 6);
// console.log(5 || 6 || 0 || NaN || "hello");
// console.log(0 || NaN || 5 || null || 6 || "hello");
// console.log(0 || NaN || null || false || "" || undefined);

// ! (нет)
// console.log(false);
// console.log(!false);
// console.log(!1);
// console.log(!0);
// console.log(!5);
// console.log(!NaN);
// console.log(!-5);

// Task 1
// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(number > x1 && number < x2);

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, number > x1 && number < x2);
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, number < x1 || number > x2);

//Task 2
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(canOpenChat);

// Task 3
// const subscription = "pro";

// const canAccessContent = subscription === "pro" || subscription === "vip";
// console.log(canAccessContent);

// оператор ветвления (if), (else)
// let ageMan = prompt("Введите Ваш возраст");
// const a = ageMan;
// let ageWoman = prompt("Введите Ваш возраст");
// const b = ageWoman;
// if (a > b) {
//     console.log("Привет!");
// } else {
//     console.log("Пока!");
// }

// else if

// const salary = 5000;

// if (salary <= 1000) {
//     console.log("Не подходит");
// } else if (salary > 1000 && salary < 5000) {
//     console.log("Временно");
// } else {
//     console.log("Подходит");
// }

// тернарный оператор
// const "имя переменной" = условие ? віражение1 : віражение2;
// const salary = 8000;

// const message = salary < 5000 ? console.log("Не подходит")
//      : console.log("Подходит");

// блочная область видиости
// global
// const a = 5;

// if (0) {
//      const b = 3;
//      console.log(a + b);
// } else {
//      const c = 4;
//      console.log(a + c);
// }

