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

// const b2 = document.querySelector("button.b-2");
// const out2 = document.querySelector("div.out-2");
// b2.onclick = fn2;

// // function fn2() {
// //   out2.innerHTML = 


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
  // const obj5 = {
  //   one: 1,
  //   two: 2,
  // };
  // // `${key} : ${arr[key]} <br>`
  // function fn5(object, selector) {
  //   let res = "";
  //   for (const key in object) {
  //      const value = object[key];
  //     res += `${key} : ${value} <br>`;
      
  //   }
  //   selector.innerHTML = res;
  // }

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
const b8 = document.querySelector("button.b-8");
const out8 = document.querySelector("div.out-8");
const input8 = document.querySelector(".i-8");

b8.onclick = fn8;

function fn8() {
  let result = 0;
  const searchKey = input8.value;
  for (const key in obj8) {
    if (searchKey === key) {
      result = odj8[key];
      break;
    } 
  }
    out8.innerHTML = result;
  
}
// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const b9 = document.querySelector("button.b-9");
const out9 = document.querySelector("div.out-9");
const input9 = document.querySelector(".i-9");

b9.onclick = fn9;

function fn9() {
  const searchValue = Number(input9.value);
  let result = "";

  for (const key in obj9) {

    if (obj9[key] === searchValue ) {
      result += `${key} `;
    }
    out9.textContent = result;
  }
} 


// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};
const test10 = 22;
const b10 = document.querySelector("button.b-10");
const out10 = document.querySelector("div.out-10");
const input10 = document.querySelector(".i-10");

b10.onclick = fn10;

function fn10() {
  
  
  for (const key in obj10) {
    if (obj10[key] === test10 ) {
      
       out10.innerHTML = true;
       return;
    }
  
  }
 out10.innerHTML = false;
} 


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

// delete obj11.b;
const b11 = document.querySelector("button.b-11");
const out11 = document.querySelector("div.out-11");
const input11 = document.querySelector(".i-11");

b11.onclick = fn11;

function fn11() {

  delete obj11[input11.value];

//   for (const key in obj11) {
//     if (key === input11.value ) {
//       delete obj11[key];
       
//     }
//   }
  fn5(obj11, out11);
}



// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

const b12 = document.querySelector("button.b-12");
const out12 = document.querySelector("div.out-12");
const input12 = document.querySelector(".i-12");

b12.onclick = fn12;

function fn12() {
  const value12 = Number(input12.value);
  for (const key in obj12) {
    if ( value12 === obj12[key]) {
      delete obj12[key];
    }
  }
fn5(obj12, out12);
}
// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

const b13 = document.querySelector("button.b-13");
const out13 = document.querySelector("div.out-13");
const input13 = document.querySelector(".i-13");

b13.onclick = fn13;

function fn13() {
  let total = 0;

  for (const key in obj13) {
    //console.log(obj13[])
    if (typeof obj13[key] === "number" && !Number.isNaN(+obj13[key])) {

      total += obj13[key];
    }
  }
  out13.innerHTML = total;
}
// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

const b14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");


b14.onclick = () => {
  fn14(obj14);
};

function fn14(object) {
   let result14 = "";
   //console.log(key);
  for ( const key in object) {
    const arr = object[key]; //[1, 2, 3]
     result14 += `${arr[0]}`; //"1"

  }
  out14.innerHTML = result14;
  }
  


// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

const b15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");


b15.onclick = () => {
  fn15(obj15);
};

function fn15(object) {
   let result15 = "";
   //console.log(key);
  for ( const key in obj15) {
    //console.log(object[key]);
    for (const number of object[key]) {
      //console.log(number);
        result15 += `${number}`;
    }

  }
  out15.innerHTML = result15;
  }
  

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

const b16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");


b16.onclick = () => {
  fn16(obj16);
};

function fn16(object) {
   let result16 = "";
      //console.log(key);
  for (const key in obj16) {
    for(const _key in obj16[key]) {
        console.log(_key);
        if(_key === "name") {
          result16 += `${obj16[key][_key]} `;
        }
    }
  }
  out16.innerHTML = result16;
}

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

const b17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");


b17.onclick = () => {
  fn17(obj17);
};

function fn17(obj17) {
   let result17 = "";
      //console.log(key);
  for (const key in obj17) {  //iis8sj перебираємо 1 рівень вкладеності
     for(const innerKey in obj17[key]) {   //дістамо з об'єкту 2
    //     console.log(_key);
        innerKey;
        //console.log(obj17[key][innerKey]);
      if(obj17[key][innerKey] > 30) {
        //condole.log(obj17[key].name)
           result17 += `${obj17[key].name} `;
      }
    }
  }
  out17.innerHTML = result17;
}
//Я 17 так сделал, подойдет такое решение?
// function fn17(object) {
//   for (let key in object) {
//     object[key].age > 30 ? (out17.innerHTML += `${object[key].name} `) : null;
//      if (object[key].age > 30) {
//       out17.innerHTML += `${object[key].name} `;
//      }
//   }
// }
// Task 18  not end , to finish with photos verify!!!!!
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const b18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");
const input18 = document.querySelector(".i-18");
b18.onclick = fn18;


function fn18() {
  const station = input18.value;
    out18.innerHTML = obj18[station].join(" ") || "";
    }
  
// Я немного замудренно наверное, но сделал так
// function fn18() {
//   const normalizedInput = i18.value.toLowerCase();

  // if (!Object.keys(obj18).includes(normalizedInput)) {
  //   return (out18.textContent = "");
  // }
  // for (let key in obj18) {
  //   if (key === normalizedInput) {
  //     out18.textContent = obj18[key].join(" ");
  //   }
  // }

//   const entries = Object.entries(obj18);
//   for (const entry of entries) {
//     if (entry[0] === normalizedInput) {
//       out18.textContent = entry[1].join(" ");
//       return;
//     }
//   }
//   out18.textContent = "";
// }

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const b19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");
const input19 = document.querySelector(".i-19");

b19.onclick = fn19;

function fn19() {
  const station = input19.value.toLowerCase();
  for (const key in obj19) {
    //console.log(obj19[key]);
    const line = obj19[key].map(stationName => stationName.toLawerCase());
    if (line.includes(station)) {
      out19.innerHTML = `${key}`;
    }
  return 0;
  }
}
out19.innerHTML = "";
  
//рішення Івана
// function fn19() {
//   if (document.querySelector(".i-19").value.toLowerCase() in obj19) {
//     document.querySelector(".out-19").style.backgroundColor = document
//       .querySelector(".i-19")
//       .value.toLowerCase();
//   }
// }
// document.querySelector(".b-19").onclick = fn19;

// Рішення Алекса       Я ось так зробив з різними варіаціями)
// function fn19() {
  // for (let key in obj19) {
  //   for (let i = 0; i < obj19[key].length; i++) {
  //     if (obj19[key][i].toLowerCase() === i19.value.toLowerCase()) {
  //       out19.textContent = key;
  //       return;
  //     }
  //   }
  // }
  // out19.textContent = "";

  // const values = Object.entries(obj19);

  // for (const value of values) {
  //   let normalizedValue = value[1].toString().toLowerCase().split(",");
  //   const normalizedInput = i19.value.toLowerCase();

  //   if (normalizedValue.includes(normalizedInput)) {
  //     out19.textContent = value[0];
  //     return;
  //   }
  //   out19.textContent = "";
  // }

  

  // for (const obj in obj19) {
  //   const normalizeInput =
  //     i19.value[0].toUpperCase() + i19.value.slice(1).toLowerCase();
  //   if (obj19[obj].includes(normalizeInput)) {
  //     out19.textContent = obj;
  //     return;
  //   }
  //   out19.textContent = "";
  // }






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

const b20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");
const input20 = document.querySelector(".i-20");
b20.onclick = fn20;



b20.onclick = fn20;


function fn20() {
  let str = "";
  for (const key in obj20) {
    for (const item of obj20[key]) {
      if (item[1] === 2) {
        str += item[0] + " ";
      }
    }
  }
    out20.innerHTML = str;
  }
  

