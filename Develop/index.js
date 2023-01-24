// NPM packages needed for this application to run
const fs = require('fs');
const util = require('util')
const inquirer = require('inquirer');
const generateMarkdown = require(`./utils/generateMarkdown.js`);

const questions = [
    {
        type: 'input',
        name: 'githubUser',
        message: 'Please enter your github username',
        validate: function (answer) {
            if (answer == "" || answer == null) {
                return console.log("Please enter your username"); }
                return true;
            }
    },
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
        default: 'n/a',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for how your project can be used for the Usage Information section.',
        default: 'n/a',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Include details on how others can contribute to this project for the Contribution Guildines section.',
        default: 'n/a',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Are there any tests that should be run to validate this project for the Test Instructions section.',
        default: 'n/a',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you wish to use?',
        choices: ['Apache_2.0','GPLv3','MIT','Mozilla','N/A'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please add an email address for your project',
        validate: function (answer) {
            if (answer == "" || answer == null) {
                return console.log("Please enter a contact email address"); }
                return true;
            }
    },
];


// TODO: Create a function to write README file
const writeFile = util.promisify(fs.writeFile);

function writeToFile() {
    inquirer.prompt(questions)
        .then((data) => {
        fs.writeFile(`${data.title}-README.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('ReadMe file created!'))
    });
};

// TODO: Create a function to initialize app
function init() {
    writeToFile()
};

// Function call to initialize app
init();