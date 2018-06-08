// var exports = module.exports = {};

function getGreeting() {
    return "Hello";
}

/*exports.sayHi = function () {
    console.log(getGreeting(), 'there!');
};*/

//exports = {
module.exports = {
    sayHi: function () {
        console.log(getGreeting(), 'there!');
    }
}