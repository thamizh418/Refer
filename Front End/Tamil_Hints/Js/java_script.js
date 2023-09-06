// console.log("Hello da!!!");
// alert('hi');
// prompt("Please enter your name ..!!");

let val = 100;
let b;
const pi = 3.14; //pi=2;
var value = 100;

console.log("let variable is new and dynamic " + val);
console.log("const variable value is fixed and cannot be changed " + pi);
console.log("var variable is old and dynamic " + value);

console.log(5 / 0);
console.log(0 / 0);
console.log(Math.sqrt(4));
console.log(Math.sqrt(-1));
console.log(b);
console.log(typeof val);
console.log("5" - 1);
console.log("five" - 1);
console.log("5" - "5");
console.log(Math.round(5.8));
console.log(Math.floor(5.8));
console.log(Math.ceil(5.1));
console.log(Math.sqrt(9));
console.log(Math.abs(-5));
console.log(Math.pow(2, 2));
console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));
console.log(Math.random());
console.log(Math.floor(Math.random() * 6));

// let name = prompt("Please enter your name ..!!");
// console.log("hii ",name);

// let seats = prompt("How many seats u want to book?");//string
// console.log("your booking 3cost is ",Number(seats)*60);

// let seats = prompt("How many seats u want to book?");//string
// console.log("your booking 3cost is ",seats+60);

let message = document.getElementById("message");
message.innerHTML = " this is from js file";

function convertCelciusToFarenheit() {
  const cel = Number(document.getElementById("cel").value);
  const far = cel * (9 / 5) + 32;
  const result = document.getElementById("result");
  result.innerHTML = far.toFixed(2) + "\xB0 F";
}

function convertFarenheitToCelcius() {
  const far = Number(document.getElementById("far").value);
  const cel = ((far - 32) * 5) / 9;
  const result = document.getElementById("result");
  result.innerHTML = cel.toFixed(2) + "\xB0 C";
}

let str1 = "String 1";
let str2 = "String 2";
let str3 = "0123456789";

console.log(str1 + " " + str2);
console.log(str3.slice(4, 8));
console.log(str3.slice(4));
console.log(str3.slice(-4));
console.log(str3.substr(4, 5));
console.log(str3.substring(4, 5));
console.log(str3.replace("789", "123"));
console.log(str3.trim()); //remove first and last apce
console.log(str3.padEnd(15, 0));
console.log(str3.padStart(15, 0));
console.log(str3[3]);
console.log(str3.charAt(3));
console.log(str3.charCodeAt(3));
console.log(str3.indexOf("4"));
console.log(str3.search(11));
console.log(str3.search(9));
console.log(str3.includes("234"));
console.log(str3.includes("243"));
console.log(str3.startsWith(0));
console.log(str3.startsWith(1));

let firstname = "Tamil";
let lastname = "English";
let statement = "comes before";

console.log(` ${firstname} ${statement} the poor ${lastname} 
                        haha`);


let arr ;

arr = ['1','b',"c",['1',2,3]];

console.log(arr);
console.log(arr[3]);
console.log(arr[3][2]);

arr.push('pushed');
console.log(arr);

arr.pop('pushed')
console.log(arr);

arr.shift();
console.log(arr);

arr.pop();
console.log();

arr.unshift('pushed');
console.log(arr);

delete arr[1];
console.log(arr);

arr.splice(1,0,'m');//(start index,delete no of elements,values to be inserted)
console.log(arr);

arr.reverse();
console.log(arr);

let str = arr.join();//array to string -> join
console.log(str);

console.log(str.split(','));//string to array -> split

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2));
console.log([...arr1,...arr2]);


function countLetters(){
    const count = document.getElementById("textcount").value;
    const result = document.getElementById("count_result");
    console.log(typeof(result));
    result.innerHTML = count.length + " letters present";
}

function ebBillCalc(){
    
    const unit = document.getElementById("eb_unit").value;
    let cost = 0;

    console.log(typeof(unit));

if(unit<=50){
     cost = unit*0.75;
}else if(unit<=150){
     cost = (50*0.75)+(unit-50)*1;
}else if(unit<=250){
    cost = (50*0.75)+(100*1)+(unit-150)*1.30;
}else{
    cost = (50*0.75)+(100*1)+(100*1.30)+(unit-250)*1.50;
}

const final_cost = document.getElementById("eb_amount");
final_cost.innerHTML = cost.toFixed(2) + "rupees";
}

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
