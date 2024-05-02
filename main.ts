#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourfull welcome message
console.log(
  chalk.bold.bgMagenta(`\n\t\t\ Welcome to the words counter application`
));
let answers = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "write your sentence"
  },
]);
//using trim and split method in next step

let words = answers.sentence.trim().split(" ");
console.log("=".repeat(50));
console.log(chalk.bold.blackBright("Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold(words.length)}`));
