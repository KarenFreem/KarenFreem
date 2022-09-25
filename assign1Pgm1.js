/* 
Course: PROG1700
Assignment 1 - Program 1
Student: Karen Freeman
Date: Sept 21, 2022
Description: This application helps Hipster's records store add up the total 
cost for the customer. It includes the company's markup.

--Making a change

Pseudocode:
1.	Program START
2.	Prompt to ask the user to enter their name and store it in a variable called custName
3.	Prompt to ask the user for their distance in kilometers for delivery and store it in a variable called deliveryDist
4.	Prompt to ask the user for the cost of records purchased and store it in a variable called preTaxCost
5.	Calculate the purchaseCost by multiplying the preTaxCost by 14% sales tax (1.14).
6.	Calculate the deliveryCost by multiplying the deliveryDist by 15 ($15 is charged per kl for delivery.
7.	Calculate the total cost by adding the purchase cost to the delivery cost (purchaseCost + deliveryCost).
8.	Display all the variable values to the user. 
9.	Program END 
*/
// DO NOT EDIT: The main function to house our program code 
"use strict";

var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // Variables
    //Input heading for Company
    console.log("Hipster's Local Vinyl Records - Customer Order Details\n");
    
     //Input
    //Readline module
    //Input
    var custName = readlineSync.question("Enter the customer's name: ");
    var deliveryDist = parseFloat(readlineSync.question("Enter the distance in kilometers for delivery: "));
    var preTaxCost = parseFloat(readlineSync.question("Enter the cost of records purchased: "));
   
     //Calculations 
     //Hipster's charges $15 per kl (this is calculated with deliveryDist x 15)
     //Hipster's charges a sales tax of 14% on their records (preTaxCost x 1.14)
   
    var purchaseCost = parseFloat(preTaxCost * 1.14);
    var deliveryCost = parseFloat(deliveryDist * 15); 
    var totalCost = parseFloat(purchaseCost + deliveryCost); 

    //Output
    console.log(`\nPurchase summary for ${custName}`); 
    console.log(`Delivery Cost: $${deliveryCost.toFixed(2)}`);
    console.log(`Purchase Cost: $${purchaseCost.toFixed(2)}`);
    console.log(`Total Cost: $${totalCost.toFixed(2)}`); 
 }

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
