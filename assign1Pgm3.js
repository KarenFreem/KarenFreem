/* 
Course: PROG1700
Assignment 1 - Program 3 Imperial Measure to Metric Conversion
Student: Karen Freeman
Date: Sept 21, 2022
Description: This application converts imperial measure t0 metric

Imperial to Metric Conversion

Pseudocode:
Program START
1.Prompt the user to enter the number of tons
2.Prompt the user to enter the number of stone
3.Prompt the user to enter the number of pounds
4.Prompt the user to enter the number of ounces

5.Calculate the weight by performing the following calculations:
        First, convert all the weights to ounces:
                total ounces = 35840 * tons + 224 * stone + 16 * pounds + ounces

        Calculate the kilos by doing the following calculations:
                total kilos = total ounces / 35.274

        Calculate the tons by doing the following calculations:
                use parseInt function to break down the kilos: 
                metric tons = parseInt(kilos/1000)
        
        Finally,
        Calculate the ounces by creating a placeholder variable (interVariable) to hold the value of total kilos as an integer
        Then, calculate the number of grams by: subtracting the total kilos from the intervariable value and multiply by 1000

        var interimVariable = parseInt(totalKilos);
        var numofGrams = parseFloat((totalKilos) - interimVariable)*1000;

6. Output the information to the user
  
   Program END
   */

"use strict";

var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main() {
    // Input
    console.log("Imperial to Metric Conversion\n");

    //Input
    //Readline module
    var numofTons = parseInt(readlineSync.question("Enter the number of tons: "));
    var numofStones = parseInt(readlineSync.question("Enter the number of stone: "));
    var numofPounds = parseInt(readlineSync.question("Enter the number of pounds: "));
    var numofOunces = parseInt(readlineSync.question("Enter the number of ounces: "));

    //Calculations
    var totalOunces = parseFloat((35840 * numofTons) + (224 * numofStones) + (16 * numofPounds) + numofOunces); //working

    var totalKilos = parseFloat(totalOunces / 35.274); //working

    var metricTons = parseInt(totalKilos / 1000); //working

    var varkilos =  parseInt(totalKilos - (numofTons * 1000)); //working
    
    //Calculations cont'd for number of grams:   
    //Make a placeholder variable called interimVariable to hold the value of totalkilos as an integer  
    var interimVariable = parseInt(totalKilos);
    var numofGrams = parseFloat((totalKilos) - interimVariable)*1000;
   
    //Output of the three variables:
    var outputText = `\nThe metric weight is ${metricTons} metric tons, ${varkilos} kilos, and ${numofGrams.toFixed(1)} grams.`; 
    console.log(outputText); 

}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module) {
    main();

}

