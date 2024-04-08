#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AED: 3.67,
    

}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.magenta("Enter from Currency"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.blue("Enter from Currency"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("Enter your Amount")
    }
]);

let fromAmount = currency[user_answer.from];  //Exchange Rate
let toAmount = currency[user_answer.to];      //Exchange Rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;  //USD base currency
let convertedAmount = Math.floor(baseAmount * toAmount);
console.log(chalk.greenBright(`Your ${user_answer.from} ${user_answer.amount} is equal to ${user_answer.to} ${convertedAmount}`));
