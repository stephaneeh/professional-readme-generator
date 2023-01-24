// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache_2.0':
      badge = `[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellowgreen?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPLv3':
      badge = `[![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU_General_Public_v3.0-blue?style=for-the-badge)](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'MIT':
      badge = `[![MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla':
      badge = `[![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_2.0-brightgreen?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)`;
      break;      
    case 'N/A':
      badge = '';
      break;      
    }
  }

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
  ${data.license}

  ## Contact/Questions
  Reach out with feedback (questions, ideas, and/or concerns) on GitHub or via email 
  - GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
  - Email: <a href="mailto:${data.email}">${data.email}</a>
  `
};

module.exports = generateMarkdown;
