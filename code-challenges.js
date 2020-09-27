// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const arrayShuffler = (array) => {
    //check for empty array
    //let shiftedArray = []
    //let shuffledArray = []
    if (array.length === 0){
        return "The array is empty"
    }
    else {
        //shift array
        array.shift()
        //shuffle array using sort
        for (let i = array.length - 1; i > 0; i--) {
            array.sort(() => Math.random() - 0.5);
        }
    }
    return array
}

console.log(arrayShuffler(collections));
console.log(arrayShuffler(collections));
console.log(arrayShuffler(collections));
console.log(arrayShuffler(collections));
console.log(arrayShuffler(collections));
console.log(arrayShuffler(collections));





// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cuber = (array) => {
    //create an empty sum to add onto
    let sum = 0
    //map through each value to cube
    let cubedArray = array.map(value => {
        return value ** 3
    })
    //map through array to += sum
    cubedArray.map(value => {
        sum += value
    })
    return sum
}

console.log(cuber(cubeAndSum1));
console.log(cuber(cubeAndSum2));




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//create a function
const minMaxFinder = (array) => {
    //create empty array to hold min and max
    let minMaxArray = []
    //using Math.min and spread operator to push min into array
    minMaxArray.push(Math.min(...array))
    //using Math.min and spread operator to push max into array
    minMaxArray.push(Math.max(...array))
    return minMaxArray
}

console.log(minMaxFinder(nums1));
console.log(minMaxFinder(nums2));


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const randoCap = (string) => {
    //create an array of letters
    let arrayOfLetters = string.split("")
    //map through array of letters
    let changedArray = arrayOfLetters.map((letter, index) => {
            //if index is even, lowercase it
        if (index % 2 === 0){
            return letter.toLowerCase()
        }
            //if index is odd, uppercase it
        else {
            return letter.toUpperCase()
        }
    })
    //return map and join array back into fixed string
    return changedArray.join("")
}

console.log(randoCap(testString1));
console.log(randoCap(testString2));


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//create a function that takes in two arrays
const noDuplicateVals = (array1, array2) => {
    //create empty array to be pushed to
    finalArray = []
    //map through each value of array1
    array1.map(value =>{
        //if finalarray includes array1 value, no push into finalArray
        if (finalArray.includes(value) === false){
            finalArray.push(value)
        }
    })
    //map through each value of array2
    array2.map(value =>{
        //if finalarray includes array2 value, no push into finalArray
        if (array1.includes(value) === false){
            finalArray.push(value)
        }
    })
    //returns array with no duplicate values
    return finalArray
}

console.log(noDuplicateVals(arr1, arr2));