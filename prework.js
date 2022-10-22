// Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

//     def hello_name(user_name):
function helloUser(USERNAME){
    return (`hello ${USERNAME}`)
}
console.log(helloUser('DooDooBrain'))   


// Question 2
// Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing



function firstOdds(){
    for(i=1;i<100;i+=2){
    console.log(i)
    }
}
firstOdds()
    
                
// Question 3
// Please write a Python function, max_num_in_list to return the max number of a given list. The first line of the code has been defined as below.
function MaxNumInList(someList){
    return Math.max(...someList)
    }
console.log(MaxNumInList([1,2,3,4,5,100]))
console.log(MaxNumInList([1,2,3,2010,4,5,]))
console.log(MaxNumInList([221,2,3,4,5,100]))
// Question 4
// Write a function to return if the given year is a leap year. A leap year is divisible by 4, but not divisible by 100, unless it is also divisible by 400. The return should be boolean Type (true/false).


function isLeapYear(aYear){
    if((aYear%4 == 0 && aYear%100 != 0) || (aYear%4 == 0 && aYear%100 == 0 && aYear%400 == 0)){
        return(`${aYear} is a leap year`)
    }else{
        return`${aYear} is not a leap year`
    }
}
console.log(isLeapYear(2024))


// Question 5
// Write a function to check to see if all numbers in list are consecutive numbers. For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not consecutive numbers. The return should be boolean Type.

function is_consecutive(numList){
for(i=0; i<numList.length; i++)
    {
    
    }
}
console.log([1,2,3,4,5])
