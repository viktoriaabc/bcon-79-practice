//1
a = 7;
b = 9;
const result1 = a * b;
console.log(result1);

//2
c = 7;
d = 9;
const result2 = c / d;
const out2 = document.querySelector(".out-2");
console.log(out2);
out2.textContent = result2;

//3
const e = 3;
const f = 5;
const result3 = e +f;
const out3 = document.querySelector(".out-3");
console.log(out3);
out3.textContent = result3;

//4
const e1 = "3";
const f1 = 5;
const result4 = e1 + f1;
const out4 = document.querySelector(".out-4");
console.log(out4);
out4.textContent = result4;
//5
const e2 = 3;
const f2 = 0;
const result5 = e2 / f2;
const out5 = document.querySelector(".out-5");
console.log(out5);
out5.textContent = result5;

//6
const e3 = 3;
const f3 = "Hello";
const result6 = e3 + f3;
const out6 = document.querySelector(".out-6");
//console.log(out6);
out6.textContent = result6;

//7
const e4 = 3;
const f4 = "Hello";
const result7 = e4 * f4;
const out7 = document.querySelector(".out-7");
out7.textContent = result7;

//8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
// console.log(btn8);

btn8.onclick = fn8;

function fn8() {
// const userInput = input8.value;
// out8.textContent = userInput;
out8.textContent = input8.value;
input8.value = ""; //записали пустий рядок щоб витерти//
}


//9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = t9;

function t9() {
out9.textContent = input9.value;
input9.value = ""; 
}

//10
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const input10 = document.querySelector(".i-10");

btn10.onclick = t10;

function t10 () {
out10.textContent = input10.value;
input10.value = "";
}

//11
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const input11 = document.querySelector(".i-11");

btn11.onclick = t11;

function t11 () {
  out11.textContent = input11.value + 55;
}

//12
const input12_1 = document.querySelector(".i-12-1");
const input12_2 = document.querySelector(".i-12-2");
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");

btn12.onclick = t12;
function t12 () {
out12.textContent = input12_1.value + input12_2.value;
}

//13
const btn13 = document.querySelector(".b-13");
const input13_1 = document.querySelector(".i-13-1");
const input13_2 = document.querySelector(".i-13-2");
const k = Number(input13_1.value);
console.log(k);
const l = Number(input13_2.value);
console.log(l);
const out13 = document.querySelector(".out-13");

btn13.onclick = t13;

function t13() {
  out13.textContent = k + l;
  console.log(out13);
}
 //14
 const btn14 = document.querySelector(".b-14");
const input14 = document.querySelector(".i-11");

btn14.onclick = t14;

function t14 () {
  const result14 = input14.value;
   result14 = "Go";
}