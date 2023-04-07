// Loan eligibility calculator based on parameters below.
// age > 18
// family income < 100,000
// grade A || B

let age = parseInt(prompt("Enter Your age"));
let income = parseInt(prompt("Enter your family income"));
let grade = prompt("Enter your grade (A/B/C/D/E");

const checkElegibility =(age, income, grade)=>{

    if(age >= 18 && income < 100000 && (grade === "A" || grade ==="B") ){
        console.log("Your are eligible for loan")
    } else {
        console.log("You are not eligible for loan")
    }
}
checkElegibility(age, income, grade);