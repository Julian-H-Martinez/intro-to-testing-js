// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function(){
//     return "Hello, World!";
// }
//  sayHello function
function sayHello(input) {
    if (typeof input === 'undefined') {
        return helloWorld();
    } else {
        return `Hello, ${input}!`;
    }
}