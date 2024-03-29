#! /usr/bin/env node
import inquirer from "inquirer";
// 1 Create Random Number
// 2 User Input Number
// 3 Compare user input with random number and show resuly
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        typr: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congtratulations! you gussed right number.");
}
else {
    console.log("You gussed wrong number");
}
