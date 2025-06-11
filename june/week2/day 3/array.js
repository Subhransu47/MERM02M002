console.log("hello array")
let a=20;
console.log("the value is :",a)
console.log(`yhe value of a is :${a+2}`)


// const obj={
//     nmae:"xyz"
// }

// console.log(obj.name)
// obj.name="y"
// console.log(obj.name)

let str="welcome"
console.log(str[1])
str[0]="D";
console.log(str)

console.log(str.length)

//console.log(str.toLowerCase())
const newstr=str.toLowerCase();
console.log(newstr)
console.log(str.toUpperCase())

console.log("After trim :",str.trim().length);
console.log("here trim not applicable",str.length);

console.log(str.charAt(0));
console.log(str.concat("Qlith").concat("Innovation"))

const newString=str.replace("w","D")
console.log(newString)

console.log(str.slice(0,str.length));
//console.log(str.slice(-2))
console.log(str.slice(2))

// let userName=prompt("enter the name")
// console.log("".concat("@").concat(userName).concat(userName.length))

console.log(str.substring(-2))

//Array

let starr=["babul","peda","pedi","bakadi"]
console.log(starr[0])

 for(let e of starr){
    console.log(e)
 }

let numArr=[2,3,4,6,7];
let sum=0;
for(let e of numArr){
    sum=sum+e;
}

console.log(sum/(numArr.length))

let arr2=[1,2,3,4,5];
let arr3=[6,7,8]
arr2.push(6,7,"fhg",true);
arr2.pop()
console.log(arr2)

console.log(arr2.toString())

console.log(arr2.concat(arr3))

arr2.unshift(0);
console.log(arr2)
arr2.shift();
console.log(arr2)

console.log(arr2.slice(2))
console.log(arr2.slice(-2))

arr2.pop()
console.log(arr2)
arr2.splice(1,2,10)
console.log(arr2);

arr2.splice(4,1)
console.log(arr2)

console.log(arr2.includes(10));

console.log(arr2.reverse())

let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
arr.shift()
console.log(arr)

arr.splice(1,1,"ola")
console.log(arr)

arr.push("Amazon")
console.log(arr)















