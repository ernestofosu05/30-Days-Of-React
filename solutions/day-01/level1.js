let arr = [];
let arr1 = [1,2,3,4,5,6];
let arrLength = arr.length;
let firstItem = arr1[0];
let middleItem = arr1[Math.round(arr1.length / 2)];
let lastItem = arr1[arr1.length.length - 1];
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
//console.log(itCompanies.split(" "));
console.log(itCompanies.indexOf("StreetShop"));
itCompanies.splice(itCompanies[-1]);
itCompanies.splice(0);

/*
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/ 

//let user_age = prompt('Enter your age:');
let user_age = 15;
if(user_age >= 18){
    console.log('You are old enough to drive');
} else {
    console.log(`You need to wait for ${18-user_age} year to drive`);
}

/*
Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.
*/

let myAge = 35, yourAge = 30;
if(myAge > yourAge) {
    console.log("I am older than you");
}

/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in two ways

using if else
ternary operator.
*/
let a = 4, b = 3;

if(a>b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

a > b ?
 "a is greater than b" :
 "a is less than b";