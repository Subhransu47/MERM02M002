console.log("hello Qlith innovation");

console.log(1!=="1");

console.log("2"-1);//
console.log('10'-'4'-'3'-2 + '5');

let a=2;
let b=a++;
console.log(a,b);//a=3,b=2

console.log(0 == '');
console.log(0 === '');
console.log(!false);
console.log(!! "false");


//conditional statement
let age=30;
//if-else statement
if(age>=18){
    console.log("He/She can eligible for voting");
}else{
    console.log("He/She can  not eligible for voting");
}
 
//if-else statement
let stMark=40;
if(stMark>=90){
    console.log("Grade A");
}else if(stMark>=80){
    console.log("Grade B");
}else if(stMark>=60){
    console.log("Grade C");
}else{
    console.log("Fail");
}

//Ternary operator
//
let stAge=16
console.log("stAge>=18" ? "can vote" :"can't vote");

// chk the number is divisible by 5 ?
// let number = prompt("enter a number")
// if(number%5==0){
//     console.log("divisible");
// }else {
//     console.log(" not divisible");
// }



// loops
// 1.for loops
// 2.while loop
// 3.do-while loop

for(let i=1;i<=10;i++)
{
    console.log(i)
}


console.log("while loop example")
let i=1;
while(i<=5)
{
    console.log(i)
    i++
}


console.log("do while loop example")
let n=i;
do{
    console.log(n)
    n++
}while(n<=15);


// non primitive data type
// object

let obj={
    // name:"xyz",
    age:30,
    phone:34567,
    email:"xyz@gmail.com"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["email"])
console.log(obj.ghj)
obj.name="y"
console.log(obj.name)

let arr=[1,2,3,4,5,6];
// console.log(typeof arr)



// for in
for(const key in obj){
    console.log(obj[key])
}


for(let idx in arr){
    console.log(arr[idx])
}


// for-of
for(const e of arr){
    console.log(e)
}

// for(const e of obj){
//     console.log(e)
// }


let str="Qlith innovation"
console.log("length is :",str.length)

console.log(str[0])
console.log(str[obj])

str[0]="D"
console.log(str)

// interpollation of string
let c=20
console.log("value is :",(c+1))
console.log("value is: ${c}+1")


