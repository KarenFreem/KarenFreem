/* 
Course: PROG1700
Assignment 1 - Program 2
Student: Karen Freeman
Date: Sept 21, 2022
Description: This application helps calculate the weekly payment on a loan for the user

Pseudocode:
Weekly Loan Calculator
Program START
Prompt the user to enter the amount of their loan and save it in the variable called loanAmount
Prompt the user for the interest rate and save it in a variable called interestRate
Prompt the user for the number of years and save it in a variable called years
Make a variable called iAmount whcih is used as a temporary variable to hold the value of the interest rate / 5200 (constant amount)
Make a variable called 

Calculate the weekly payment by doing the calculations of:

Step 1: iAmount = interest rate /5200
Step 2: Break down the calculations for weekly payment:

        The weekly payment is equal to iAmount/(1-1+iAmount)**(-52 * years) *principle

        Create a interim variable to hold the number for the next process:
                var interVariable = 1 - (1 + iAmount)**(-52 * years)
    
        Then create a variable called weeklyPayment and perform the following calculations to find the weekly payment:
                parseFloat(iAmount / interVariable) * loanAmount 

Display the weekly payment to the user
Program END 

Program END 
Pseudocode - END
*/

"use strict";

var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 

function main()
{
    // Variables
    //Output: heading for Company
    console.log("Weekly Loan Calculator\n");
    
     //Input
    //Readline module
    var loanAmount = parseFloat(readlineSync.question("Enter the amount of the loan: "));
    var interestRate = parseFloat(readlineSync.question("Enter the interest rate (%): "));
    var years = parseFloat(readlineSync.question("Enter the number of years: "));
    
   
     //Calculations 
     //The bank calculates the amount of weekly payment as:
     
     var iAmount = interestRate / 5200;

     var interVariable = 1 - (1 + iAmount)**(-52 * years);
    
     var weeklyPayment = parseFloat(iAmount / interVariable) * loanAmount; 

    //Output
    console.log(`The loanAmount is: $${loanAmount.toFixed(2)}`);
    console.log(`The interest rate is: ${interestRate}`);
    console.log(`The years are: ${years}\n`);
    console.log(`The weekly payment is: $${weeklyPayment.toFixed(2)}`);
    
 }

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
