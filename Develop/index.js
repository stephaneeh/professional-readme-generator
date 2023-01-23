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
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project?',
        validate: function (answer) {
            if (answer == "" || answer == null) {
                return console.log("Please enter a description of your project"); }
                return true;
            }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps required to install your project for the Installation Instructions section.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for how your project can be used for the Usage Information section.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Include details on how others can contribute to this project for the Contribution Guildines section.',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Are there any tests that should be run to validate this project for the Test Instructions section.',
    },
      {
        type: 'list',
        name: 'licenses',
        message: 'Which license do you wish to use?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
      }
];


// TODO: Create a function to write README file

const writeFile = util.promisify(fs.writeFile);

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