// 1 
//  Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

//2
//Підрахунок кількості повторень
//Дано масив:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
 // apple: 3,
 // banana: 2,
 // orange: 1
//}

// 3
// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price)
//   },
// }
// product.showPrice()

// 4
// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price)
//   },
// }

// function callAction(action) {
//   action()
// }

// // =====================================================
// callAction(product.showPrice)


//5
// Найбільше число в масиві
//Дано масив чисел:

const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48
const result5 = numbers.reduce((prev, curr) => {
  if(curr > prev) {
    return curr;
  }
  return prev;
}, 0);
console.log(result5);

//6
// Згладження вкладеного масиву
//Дано вкладений масив:


const nestedArray = [[1, 2], [3, 4], [5, 6]];
//Завдання: За допомогою reduce перетворіть вкладений масив у плаский.Очікуваний результат: [1, 2, 3, 4, 5, 6]

const flatArr = nestedArray.reduce((acc, arr)=> {
  return acc.concat(arr);

});

//7 
// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем, та false - якщо не співпадає
function savePasseWord(passeword) {
  return function(input) {
    return input === passeword;
  }
}
const checkPasseword = savePasseword("Abc123");

let isChecked = checkPasseword;

isChecked = checkPassword("123");

//8
// Підрахунок загальної вартості товарів
// Дано масив товарів:
// const cart = [
//   { product: 'Apple', price: 1, quantity: 4 },
//   { product: 'Banana', price: 0.5, quantity: 10 },
//   { product: 'Orange', price: 0.8, quantity: 6 }
// ];
//Завдання: За допомогою reduce підрахуйте загальну вартість усіх товарів у кошику.
//Очікуваний результат:
//13.8

const totalPrice = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);
console.log(totalPrice);

// ! ФОРМУЛУ СПОЧАТКУ ПРОПИСАИТИ 
// cart.reduce(() => {},0) 
// А ПОТІМ ЗАПОВНЮВАТИ ЩОБ НЕ ЗАБУВАТИ НУЛЬ В КІНЦІ



//9
// Сортування чисел за зростанням
//Дано масив чисел:
// const numbers = [5, 2, 9, 1, 5, 6];
//Завдання: Використайте toSorted, щоб відсортувати числа за зростанням.
//Очікуваний результат:




const sortedArray = numbers.toSorted((currentValue, nextValue) => {
  return currentValue = nextValue;
});

  //[1, 2, 5, 5, 6, 9]

//2 possible ---unicode

  // const numbers = [5, 2, 9, 1, 5, 6, 11];
//Завдання: Використайте toSorted, щоб відсортувати числа за зростанням.



//10 
// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість PRIORITY,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

// const note1 = new Notes()

// note1.addNote({ text: 'Note1', priority: Notes.PRIORITY.LOW })
// note1.addNote({ text: 'Note2', priority: Notes.PRIORITY.LOW })
// note1.addNote({ text: 'Note3', priority: Notes.PRIORITY.LOW })
// note1.removeNote('Note1')
// note1.updatePriority('Note2', Notes.PRIORITY.HIGHT)
// console.log(note1.items)



//11
// Сортування рядків за довжиною
//Дано той самий масив рядків:

const words = ['banana', 'apple', 'grape', 'orange', 'kiwi'];
//Завдання: Відсортуйте рядки за їхньою довжиною (від найкоротшого до найдовшого).
//Очікуваний результат:

const wordsSorted = words.toSorted((currentValue, nextValue) => {
  return currentValue.length - nextValue.length;

});
console.log(wordsSorted);
//['kiwi', 'apple', 'grape', 'banana', 'orange']

//12
// Перетворення масиву в об'єкт
//Дано масив об'єктів:
const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
// Завдання: За допомогою reduce перетворіть масив у об'єкт, де ключем буде id, а значенням — відповідний об'єкт.
//Очікуваний результат:

//{
 // 1: { id: 1, name: 'Alice' },
 // 2: { id: 2, name: 'Bob' },
 // 3: { id: 3, name: 'Charlie' }
//}
// acc-накописувач,  person-поточний ел масиву тобто об'єкт
const persons = people.reduce((acc, person) => {
  acc[person.id] = person;
  return persons;
}, 0);

//13
// Перетворення вкладеного масиву
//Дано вкладений масив:

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
//Завдання: Використайте map, щоб створити новий масив, де кожен вкладений масив буде перетворено на суму його елементів.
//Очікуваний результат:

//[3, 7, 11]

//14
//Додавання нового поля до об'єктів
//Дано масив об'єктів:

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 }
// ];
//Завдання: За допомогою map створіть новий масив, додавши поле discountedPrice, яке є зниженою ціною (на 10%).
//Очікуваний результат:






//[
//  { name: 'Laptop', price: 1000, discountedPrice: 900 },
//  { name: 'Phone', price: 500, discountedPrice: 450 }
//]

//15
//Перетворення масиву на HTML
//Дано масив імен:

// const names = ['Alice', 'Bob', 'Charlie'];
//Завдання: За допомогою map створіть масив HTML-рядків для відображення цих імен у списку.
//Очікуваний результат:

//['<li>Alice</li>', '<li>Bob</li>', '<li>Charlie</li>']

const result = names.map(name =>)


//16
//Фільтрування рядків, які починаються на "A"
//Дано масив рядків:

// const words = ['Apple', 'Banana', 'Avocado', 'Cherry', 'Apricot'];
//Завдання: Використайте filter, щоб залишити лише ті рядки, які починаються на "A".
//Очікуваний результат:

//['Apple', 'Avocado', 'Apricot']

const result = words.filter(word => word[0] === "A");
return

//17
//Фільтрування за частковим збігом
//Дано масив об'єктів:

const products = [
  { name: 'Apple iPhone', category: 'phones' },
  { name: 'Samsung Galaxy', category: 'phones' },
  { name: 'Sony TV', category: 'electronics' },
  { name: 'LG TV', category: 'electronics' }
];
//Завдання: За допомогою filter залиште лише ті продукти, назва яких містить "TV".
//Очікуваний результат:

//[
 // { name: 'Sony TV', category: 'electronics' },
 // { name: 'LG TV', category: 'electronics' }
//]

const result = products.filter(product => product.name.includes("TV")).map(product => {
  return {...product}
});
  result[0].name = "LG";

console.log(result);
console.log(products);

