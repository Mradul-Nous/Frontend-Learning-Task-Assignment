// Create 4 functions: add, subtract, multiply, divide
// •	Log result in each
// •	Wrap in another function calculate(a, b, operation)
// •	Use arrow functions for at least two operations


//IIfe function 

(()=>{
    console.log("Hi, I am a IIfe function ")
})()

function calculate(a,b,operation){
    function add(){ console.log(a+b)}         //function declaration
    const subtract=function(){console.log(a-b)}       //function expression
    //using arrow functions
    const multiply=()=>{console.log(a*b)}
    const divide=()=>{console.log(a/b)}
    const operations={add,subtract,multiply,divide}
    
    return operations[operation]
}

calculate(3,4,"divide")()
calculate(3,4,"add")()
calculate(3,4,"subtract")()
calculate(3,4,"multiply")()



