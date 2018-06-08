'use strict';

function some(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true;
        }
    }
    return false;
}

function isUppercase(letter) {
    leter = 'a';

    //return typeof letter === 'string' &&
    return letter === letter.toUpperCase();
}

function isLowercase(letter) {
    return !isUppercase(letter);
}

var capitalLetters = ['A', 'B', 'C'];
var lowercaseLetters = ['a', 'b', 'c'];
var mixedLetters = ['A', 'b', 'C'];

console.log(capitalLetters, 'some(capitalLetters, isUppercase)', some(capitalLetters, isUppercase));
console.log(lowercaseLetters, 'some(lowercaseLetters, isUppercase)', some(lowercaseLetters, isUppercase));
console.log(mixedLetters, 'some(mixedLetters, isUppercase)', some(mixedLetters, isUppercase));

console.log(capitalLetters, 'some(capitalLetters, isLowercase)', some(capitalLetters, isLowercase));
console.log(lowercaseLetters, 'some(lowercaseLetters, isLowercase)', some(lowercaseLetters, isLowercase));
console.log(mixedLetters, 'some(mixedLetters, isLowercase)', some(mixedLetters, isLowercase));

console.log(capitalLetters, 'capitalLetters.some(isUppercase)', capitalLetters.some(isUppercase));
console.log(lowercaseLetters, 'lowercaseLetters.some(isUppercase)', lowercaseLetters.some(isUppercase));
console.log(mixedLetters, 'mixedLetters.some(isUppercase)', mixedLetters.some(isUppercase));

console.log(capitalLetters, 'capitalLetters.some(isLowercase)', capitalLetters.some(isLowercase));
console.log(lowercaseLetters, 'lowercaseLetters.some(isLowercase)', lowercaseLetters.some(isLowercase));
console.log(mixedLetters, 'mixedLetters.some(isLowercase)', mixedLetters.some(isLowercase));

// will crash
// console.log([1, 2, 3, 'A', 'b', "?"], "some([1, 2, 3, 'A', 'b'], isUppercase)", some([1, 2, 3, 'A', 'b'], isUppercase));

function printIt(it) {
    console.log("It is " + it);
}

function onlyIf(array, test, action) {
    array.forEach(function (element) {
        if (test(element)) {
            action(element);
        }
    });
}

console.log(capitalLetters, 'onlyIf(capitalLetters, isUppercase, printIt)');
onlyIf(capitalLetters, isUppercase, printIt);

console.log(lowercaseLetters, 'onlyIf(lowercaseLetters, isUppercase, printIt)');
onlyIf(lowercaseLetters, isUppercase, printIt);

console.log(mixedLetters, 'onlyIf(mixedLetters, isUppercase, printIt)');
onlyIf(mixedLetters, isUppercase, printIt);

console.log(capitalLetters, 'onlyIf(capitalLetters, isLowercase, printIt)');
onlyIf(capitalLetters, isLowercase, printIt);

console.log(lowercaseLetters, 'onlyIf(lowercaseLetters, isLowercase, printIt)');
onlyIf(lowercaseLetters, isLowercase, printIt);

console.log(mixedLetters, 'onlyIf(mixedLetters, isLowercase, printIt)');
onlyIf(mixedLetters, isLowercase, printIt);

console.log(capitalLetters, 'capitalLetters.filter(isUppercase).forEach(printIt)');
capitalLetters.filter(isUppercase).forEach(printIt);

console.log(lowercaseLetters, 'lowercaseLetters.filter(isUppercase).forEach(printIt)');
lowercaseLetters.filter(isUppercase).forEach(printIt);

console.log(mixedLetters, 'mixedLetters.filter(isUppercase).forEach(printIt)');
mixedLetters.filter(isUppercase).forEach(printIt);