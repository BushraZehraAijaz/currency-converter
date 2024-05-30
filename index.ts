#! /usr/bin/env node

import inquirer from 'inquirer'

let c_value: {[key: string]: number} = {
    PKR: 279.72,
    CAD: 0.73,
    USD: 1 
}

let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Converting from",
    choices: ['PKR', 'CAD', 'USD']
},
{
    type: "list",
    name: "to",
    message: "Converting to",
    choices: ['PKR', 'CAD', 'USD']
},
{
    type: "number",
    name: "amount",
    message: "Your amount to convert"
}

])

console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);