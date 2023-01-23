// const licenses = require('./licenses.js');

const licenses = [
  {name: 'Apache_2.0', badge:'[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'},
  {name: 'GPLv3', badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
  {name: 'ISC', badge: '[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
  {name: 'MIT', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
  {name: 'Mozilla', badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.testing}

  ## Contributing
  ${data.contributions}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contact/Questions
  Reach out with feedback (questions, ideas, and/or concerns) on GitHub or via email 
  - GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
  - Email: ${data.email}
  `
};

module.exports = generateMarkdown;
