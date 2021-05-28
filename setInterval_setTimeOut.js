
function callFunc(){
    console.log("this is Set Time Out");
}

console.log(100);
console.log(200);
setTimeout(() => {
    callFunc();
    console.log("Hello User");
}, 4000);

console.log(500);
setInterval(() => {
    console.log("I am Set Interval");
}, 2000);
