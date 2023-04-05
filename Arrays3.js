//Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr = (["Brigit", "Britah", "Cathy","Billy"])
for(let i=0;i<arr.length;i++ ){
    console.log(arr[i])
}
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let num = [10,8,12,6,5,15];
num.forEach(function(num){
  console.log(num*2)
});
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
let numbers = [2,9,6,2,10,3];
let c =[];
function arrayOfNumbers(numbers){
    for(let b=0;b<numbers.length;b++)
    if(b<4){
        c.push(numbers[b]*8)
    }
    else{
        c.push(numbers[b]+5)
    }
    console.log(c)
}
arrayOfNumbers(numbers)
//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
let i=0;
for(let i =0; i<arrNum.length; i++){
    if(i===4){
        break;
         }
         console.log({"arrNum":arrNum[i]});
}
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['Apple','plum','banana','strawberries','kiwi'];
// function fruit(fruits){
for(let i =0; i<fruits.length; i++){
    if(i===2){
        continue;
    }
    console.log(fruits[i]);
}

// }







