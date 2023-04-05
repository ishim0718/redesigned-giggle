const fs = require('fs');
var inquirer = require('inquirer');
const {Square, Circle, Triangle} = require('./lib/shapes.js');

function svgFileCreator({text, textColor}, shapeContent) {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeContent}
    <text x="150" y="100" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}

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
        name: 'textColor',
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
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (You can enter either CSS color keyword or hexadecimal number)',
    },
];

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
        var shapeContent = '';
        var shape = '';
        if(answers.shape == "Circle") {
            shape = new Circle();
        } else if(answers.shape == "Square") {
            shape = new Square();
        } else if(answers.shape == "Triangle") {
            shape = new Triangle();
        }
        shape.setColor(answers.shapeColor);
        shapeContent = shape.render();
        const content = svgFileCreator(answers, shapeContent);
        fs.writeFile("logo.svg", content, (err) =>
            err ? console.log(err) : console.log("Generated logo.svg"))
    })
};

init();