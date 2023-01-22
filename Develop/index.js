// NPM packages needed for this application to run
const fs = require('fs');
const util = require('util')
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// FIXME: update questions to generate readme file
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: function (answer) {
            if (answer == "" || answer == null) {
                return console.log("Please enter a title for your project"); }
                return true;
            }
    },
];

const writeFile = util.promisify(fs.writeFile);
// TODO: Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions)
        .then((data) => 
            writeFile("README-application.md", generateMarkdown(data))
        )
          .then(() => console.log("README file created"))
          .catch((err) => console.error(err));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
};

// Function call to initialize app
init();