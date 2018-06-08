function ourSome(array, callback) {
    for(var i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return 'true ' + array;
        }
    }
    return 'false ' + array;
}
function isUppercase(letter) {
    return letter === letter.toUpperCase();
}
var letters = ['a' , 'B', 'c'];
var isSomeUppercase = ourSome(letters, isUppercase);
var isSomeLowercase = ourSome(letters, function(letter) {
    return !isUppercase(letter);
});
console.log(isSomeUppercase);
console.log(isSomeLowercase);
var isSomeUppercase = letters.some(isUppercase);
var isSomeLowercase = letters.some(function(letter) {
    return !isUppercase(letter);
});
console.log(isSomeUppercase);
console.log(isSomeLowercase);

function onlyIf(array, test, action) {
    var newArray = [];
        for(var i = 0; i < array.length; i++) {
            if(test(array[i])){
                var x = action(array[i]);
                newArray[i] = x;
            } else {
                newArray[i] = array[i];
            }
        }
    return newArray;
}
var numbers = [1,2,3];
function isOdd(number) {
    return number % 2 === 1;
}
function addOne(number) {
    return number + 1;
}
var addOneToOdd = onlyIf(numbers, isOdd, addOne);
console.log(addOneToOdd);

