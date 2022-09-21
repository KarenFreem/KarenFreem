/* 
Course: PROG1700
Assignment 1 - Program 3 Imperial Measure to Metric Conversion
Student: Karen Freeman
Date: Sept 21, 2022
Description: This application converts imperial measure to metric
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

    var totalOunces = parseFloat(35840 * numofTons + 224 * numofStones + 16 * numofPounds + numofOunces);
    var totalKilos = parseFloat(totalOunces / 35.274);
    var metricTons = parseFloat(totalKilos / 1000);

    //Output
    console.log(totalOunces);

    console.log("The metric weight is " + metricTonscl + ", " + totalKilos); 
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module) {
    main();

}

