 /* Author: Nadia Gainer
 * Date: 03/22/24
 * File Name: weight-converter
 * Description: weight-converter
*/

"use strict";

// TODO: Implement the weight conversion logic here
 const kg = lbs(/) 2.204623

// Check if the user entered a command line argument
if (process.argv.length !== 3) {
    // write your error handling code
    console.error(stderr: "Usage:node weight-converter.js<pounds>"); 
    // end the process with an exit code of 1
process.exit(1);
}

// Convert the pounds to a float number 
const pounds = parseFloat(process.argv[2]);

if (isNaN(pounds)) {
    // write your error handling code to handle non-numeric values
    console.log("Input must be a number", Input must be a number);   
}

// apply conversion to convert pounds to kilograms 





