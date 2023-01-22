// NPM packages needed for this application to run
const fs = require('fs');
const util = require('util')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// FIXME: update questions to generate readme file
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: function (answer) {
            if (answer.length < 1) {
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
        message: 'If required, describe the steps required to install your project for the Installation Instructions section.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'If required, provide instructions for how your project can be used for the Usage Information section.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'If required, include details on how others can contribute to this project for the Contribution Guildines section.',
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
function writeToFile() {
    inquirer.prompt(questions)
        .then((data) => {
            const filename = `test.README.md`;
                fs.writeFile(filename, JSON.stringify(data, null, '\n'), (err) =>
                  err ? console.log(err) : console.log('Success!')
                )
              })
            }

// TODO: Create a function to initialize app
function init() {
    writeToFile()
};

// Function call to initialize app
init();