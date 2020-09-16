// 1.Cтворити масив у якому буде 3 юзера описані як обєкти з
// такими полями - age, name, hobby(теж повинно бути
// масивом).
// let personArray = [
//   {
//     name: "Bob",
//     age: 31,
//     hobby: "music",
//   },
//   {
//     name: "Mary",
//     age: 30,
//     hobby: "yoga",
//   },
//   {
//     name: "Tom",
//     age: 22,
//     hobby: "skiing",
//   },
// ];
// console.log(personArray);
// 2.Написати конвертер валют - пишете скільки у вас є
// гривень і які очікуємо можливі конвертації - у долар, євро,
// нафту(brent), золото.Додатково зробити перевірку чи не
// обманює вас юзер і перевіряти чи не прийшов вам null or undefined.
let questionHr = +prompt("Скільки у вас є гривень?");
let question2 = prompt("Що ви хочете конвертувати - USD, EUR, Brent, XAU?");
const us = 28;
const eur = 30;
const brent = 1500;
const  xau= 900;
if (questionHr == null || question2 == null) {
  alert("Помилка!");
};
switch ( question2) {
  case "USD":
    alert(questionHr /us);
    break;
  case "EUR":
    alert(questionHr /eur);
    break;
  case "Brent":
    alert(questionHr /brent);
    break;
  case "XAU":
    alert(questionHr /xau);
    break;
  default:
    alert(`Помилка!`);
};
// 3.Спитатись у юзера суму замовлення і вивести результат з
// урахуванням знижки: до 500 гривень знижка - 1 %, від 500
// до 1000 - 5 %, більше 1000 - 10 % та подарунковий
// сертифікат на 200 гривень у подарунок!
let sum = +prompt("Введіть суму замовлення?");
let sumEqual = (sum - (sum * 0.01));
let sumEqualOne = (sum - (sum * 0.05));
let sumEqualWin = (sum - (sum * 0.1));
if (sum < 500) {
  alert(`Сума зі знижкою ${sumEqual}`);
} else if (sum <= 1000) {
  alert(`Сума зі знижкою ${sumEqualOne}`);
} else if (sum > 1000) {
  alert(
    `Сума зі знижкою ${sumEqualWin}, ви отримуєте сертифікат на 200 гривень у подарунок!!!`
  );
};
// // 4. Створити тест на знання будь - чого, юзер  юзер має відповісти на
// // 5 питань, вірна відповідь - 1 бал, якщо юзер відповість
// // правильно на всі  запитань - додатково додати 1
// // бонусний бал
let ball = 0;
let answerYes = "так";
let questionOne = +prompt("Скільки 2+2?");
if (questionOne == 4) {
  ball++;
  alert(`Молодець ${ball} бал!`);
} else {
  alert("0  бала.");
};
let questionTwo = +prompt("Скільки 5+5?");
if (questionTwo == 10) {
  ball++;
  alert(`Молодець ${ball} бала!`);
} else {
  alert("0 бала.");
};
let questionThree = prompt("Столиця України -Київ?");
if (questionThree == answerYes) {
  ball++;
  alert(`Молодець ${ball} бала!`);
} else {
  alert("0 бала.");
};
let questionFour = prompt("Земля кругла-так,ні?");
if (questionFour == answerYes) {
  ball++;
  alert(`Молодець ${ball} бала!`);
} else {
  alert("0 бала.");
};
let questionFive = +prompt("6*6?");
if (questionFive == 36) {
  ball++;
  alert(`Молодець ${ball} бала!`);
} else {
  alert("0 бала.");
};
if (ball == 5) {
  ball++;
  alert(`Тобі зараховано 1 додатковий бал, твій результат ${ball} балів.`);
} else {
  alert(`Твій результат ${ball}`);
};
// 5. Запитатись у користувача 3 значне число та сказати чи є у
// ньому однакові цифри
// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та
// вивести що буде при нажиманні цифри разом з шифтом.
let button = prompt("Вибери кнопку від 1 до = на клавіатурі ");
switch (button) {
  case "1":
    alert("Shift + 1 отримаєш !");
    break;
  case "2":
    alert("Shift + 2 отримаєш @ ");
    break;
  case "3":
    alert("Shift + 3 отримаєш #");
    break;
  case "4":
    alert("Shift + 4 отримаєш $");
    break;
  case "5":
    alert("Shift + 5 отримаєш % ");
    break;
  case "6":
    alert("Shift + 6 отримаєш ^ ");
    break;
  case "7":
    alert("Shift + 7 отримаєш & ");
    break;
  case "8":
    alert("Shift + 8 отримаєш *");
    break;
  case "9":
    alert("Shift + 9 отримаєш (");
    break;
  case "0":
    alert("Shift + 0 отримаєш ) ");
    break;
  case "-":
    alert("Shift + '-' отримаєш _ ");
    break;
  case "=":
    alert("Shift + '=' отримаєш +");
    break;
  default:
    alert("Не та кнопка!");
};
