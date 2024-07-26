import inquirer from "inquirer";
const inp = await inquirer.prompt({
    name: "insan",
    type: "input",
    message: "Enter your name...",
});
console.log(`Hey ${inp.insan}! would you like to learn Ai today?`);
