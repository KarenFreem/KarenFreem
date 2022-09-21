/* 
Course: PROG1700
Assignment 1 - Program 3 Imperial Measure to Metric Conversion
Student: Karen Freeman
Date: Sept 21, 2022
Description: This application converts imperial measure to metric

Imperial to Metric Conversion

Program START
Prompt the user to enter the number of tons
Prompt the user to enter the number of stone
Prompt the user to enter the number of pounds
Prompt the user to enter the number of ounces

Calculate the weight by doing the following calculations:
First calculate the ounces:
        total ounces = 35840 * tons + 224 * stone + 16 * pounds + ounces

Calculate the kilos by doing the following calculations:
        total kilos = total ounces / 35.274

Calculate the tons by doing the following calculations:
         use parseInt function to break down the kilos: metric tons = parseInt(kilos/1000)
*/

"use strict";

var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main() {
    // Input
    console.log("Imperial to Metric Conversion\n");

    //Input
    //Readline module
    var numofTons = parseFloat(readlineSync.question("Enter the numbert of tons: "));
    var numofStones = parseFloat(readlineSync.question("Enter the number of stones: "));
    var numofPounds = parseFloat(readlineSync.question("Enter the number of pounds: "));
    var numofOunces = parseFloat(readlineSync.question("Enter the number of ounces: "));

    //Calculations
    var totalOunces = parseFloat((35840 * numofTons) + (224 * numofStones) + (16 * numofPounds) + numofOunces);
    var totalKilos = parseFloat(totalOunces / 35.274);
    var metricTons = parseInt(totalKilos / 1000);
   // var grams = 
    console.log("the metric tons are: " + metricTons);
    console.log("The kilos are: " + totalKilos);
   // console.log("The grams are: " + );

    //Output
 //console.log("The metric weight is " + metricTons + " metric tons, " + totalKilos + " kilos, and "); 
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module) {
    main();

}

