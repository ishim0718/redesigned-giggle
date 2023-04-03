// const fs = require('fs');
var inquirer = require('inquirer');
// const path = require('path');
// const shapes = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your brand\'s logo', 
        validate: (answer) => {
            if (answer.length > 3){
                return 'Answer is too long, please enter only up to 3 characters'
            }
            return true
            }
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like your text to be? (You can enter either CSS color keyword or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color would you like your shape to be? (You can enter either CSS color keyword or hexadecimal number)',
    },
];

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
    })
};

init();