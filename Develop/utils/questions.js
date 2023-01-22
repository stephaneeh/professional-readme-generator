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
        type: 'input',
        name: 'testing',
        message: 'If required, are there any tests that should be run to validate this project for the Test Instructions section.',
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