// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

const b2 = document.querySelector("button.b-2");
const out2 = document.querySelector("div.out-2");
b2.onclick = fn2;

function fn2() {
  out2.innerHTML = 
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const b3 = document.querySelector("button.b-3");
const out3 = document.querySelector("div.out-3");
b3.onclick = fn3;

function fn3() {
  for (const key in obj3) {
    obj3[key] === "hi" ? (out3.innerHTML += obj3[key] + " ") : out3.innerHTML;
    
    const element = object[key];
    
    
  }
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
const b4 = document.querySelector("button.b-4");
const out4 = document.querySelector("div.out-4");
b4.onclick = fn4;

  function fn4() {
    let str = "";
    for (const key in obj4) {
      str += `${key} ${obj3[key]} <br/>`;

    }
    out4.innerHTML = str;   //споачатку зібрати в рядок а потів робити вставку в out4 через innerhtml щоб не пергружати браузер, спосатку синхронний код а потім асинхронний
  }
// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const b5 = document.querySelector("button.b-5");
const out5 = document.querySelector("div.out-5");
b5.onclick = fn5;

  function fn5(object, selector) {
    let str = "";
    for (const key in object) {
    str += `${key} ${obj3[key]} <br/>`;
    }
    selector.innerHTML = str;
  }
  const obj5 = {
    one: 1,
    two: 2,
  };
  // `${key} : ${arr[key]} <br>`
  function fn5(object, selector) {
    let res = "";
    for (const key in object) {
       const value = object[key];
      res += `${key} : ${value} <br>`
      
    }
    selector.innerHTML = res;
  }

// Task 6

const b6 = document.querySelector("button.b-6");
const out6 = document.querySelector("div.out-6");
const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");

const obj6 = {
  b: 17,
  e: 22,
};

b6.onclick = fn6;

function fn6() {

  const key = input61.value;
  const value = input62.value;
  obj6[key] = value;
  fn5(obj6, out6);
};



// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

const b7 = document.querySelector("button.b-7");
const out7 = document.querySelector("div.out-7");
const input7 = document.querySelector(".i-7");

b7.onclick = fn7;

function fn7() {
  let result = 0;
  const searchKey = input7.value;
  for (const key in obj7) {
    if (searchKey === key) {
      result = 1;
      break;
    } 
    out7.innerHTML = result; //result на початку нуль якщо знайдено результат, перезаписується, якщо ні покаже нуль зазначений початково в let result
  }

}

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
