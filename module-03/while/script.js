// Task 1

// Task 2

// Task 3

const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = fn3;

function fn3() {
  let sum = "";
  for (let i = 0; i <= 4; i++) {

    for (let j = 0; j < 3; j++) {
      sum += "*_";
      
    }
    sum += "<br>"
  }
  out3.innerHTML = sum;
}

// Task 4

const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = fn4;

function fn4() {

  let sum = "";

  for (let i = 1; i < 4; i++) {
    sum+= `${i}_`;

    for (let j = 1; j <= 5; j++) {
      const element = array[j];
      sum += `${j}*`;
    }
    
  }
}

// Task 5

const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = fn5;



function fn5() {

  let result = "";

  for (let i = 0; i < 3; i++) {
    

    for (let k = 0; k < 6; k++) {
      
      if(k % 2 === 0) {
        result += 1;
        
      } else {
        return 0;
        result += 0;
      }
    }
    result += `<br>`;
    
  } 
  out5.innerHTML = result;
}


// Task 6

// Task 7

// Task 8

// Task 9

// Task 10

// Task 11

// Task 12

// Task 13

// Task 14

// Task 15
