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
        return "Hello, World!";
    }else if(input === true){
        return "Hello, World!"
    }else if(input === false){
        return "Hello, World!";
    }else {
        return `Hello, ${input}!`;
    }
}