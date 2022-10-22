//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let words = dog_string.split(" ", ",")

function findWords(i){
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]) {
                return "Matched dog_name"
            }
        }
    }
    return "No matches"
}

console.log(findWords())
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// anArr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    for (i=1;i<arr.length;i+2){
       if(data[i] %2 == 0){
        delete data[i];
        data[i] == "even index";
       }
    }
}
//Expected output
//
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]