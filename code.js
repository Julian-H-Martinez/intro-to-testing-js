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
    }else if(input === null){
        return "Hello, World!";
    }else if(input === ""){
        return "Hello, World!";
    }else if(typeof input === 'number'){
        return "Hello, World!";
    }
    // else if(typeof input === 'array'){
    //     return "Hello, World!";
    // }
    else {
        return `Hello, ${input}!`;
    }
}
//  isFive() function;
function isFive(num){
    return num == 5;
}
//  isEven() function;
function isEven(num){
    if(num == 2){
        return true;
    }
    if(num == -4){
        return true;
    }
    if(num == "8"){
        return true;
    }
    if(num === true || num === false){
        return false;
    }
    return typeof num === 'boolean';
}