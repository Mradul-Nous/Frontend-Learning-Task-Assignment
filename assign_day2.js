// ✅ Micro Assignment: Grading System
// Write a script that:
// •	Takes marks (hardcoded or via prompt)
// •	Validates if marks are between 0–100
// •	Prints grade using if/else or switch
// •	Use ternary to check if passed or failed


//NOTE : please run this program in browser console 

let marks=parseInt(prompt("Please enter your marks"))
if(isNaN(marks)) alert("please enter marks in number only")
else if(marks<0 || marks>100 ) {
    alert("please enter the marks between 0-100")
}else if
(marks<34 ){ alert("Unfortunately, you failed the exam "); }
else{
(marks>=34 && marks <=60)?   alert("you grade is D") :
(marks >60 && marks <=80) ?  alert("your grade is C"):
(marks>80 && marks<=90) ?    alert("your grade is B"): alert("your grade is A")

}