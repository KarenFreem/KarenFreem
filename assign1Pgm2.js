/* 
Course: PROG1700
Assignment 1 - Program 2
Student: Karen Freeman
Date: Sept 18, 2022
Description: This application helps calculate interest on a bank loan for the customer

Weekly Loan Calculator

1.	Program START
2.	Prompt the user to enter the amount of their loan and save it in the variable called loanAmount
3.	Prompt the user for the interest rate and save it in a variable called interestRate
4.	Prompt the user for the number of years and save it in a variable called years
5.	Calculate the weekly payment by doing the calculations of:

Program END 
Pseudocode - END
*/

"use strict";

var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 

function main()
{
    // Variables
    //Input heading for Company
    console.log("Weekly Loan Calculator\n");
    
     //Input
    //Readline module
    var loanAmount = parseFloat(readlineSync.question("Enter the amount of loan: "));
    var interestRate = parseFloat(readlineSync.question("Enter the interest rate (%): "));
    var years = parseFloat(readlineSync.question("Enter the number of years: "));
    
   
     //Calculations 
     //The bank calculates the amount of weekly payment as:
     
     var interestAmount = parseFloat(loanAmount * years * interestRate /100);
     var totalAmount = parseFloat(interestAmount + loanAmount);
     
     var yearsToWeeks = parseFloat(years * 52);
     var weeklyPayment = parseFloat(totalAmount / yearsToWeeks);
    
       //Output
    console.log("The loanAmount is: $" + loanAmount.toFixed(2));
    console.log("The interest rate is: " + interestRate);
    console.log("The years are: " + years);
    console.log("The number of weeks for the loan is: " + yearsToWeeks);
    console.log("The amount of the interest is: $" + interestAmount);
    console.log("The weekly payment is: $" + weeklyPayment.toFixed(2));
        
 }

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
