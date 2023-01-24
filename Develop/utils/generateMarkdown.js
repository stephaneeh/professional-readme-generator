//Function to generate markdown data based off user input
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
  This application is covered under the ${data.license} license.

  ## Questions
  Reach out with feedback (questions, ideas, and/or concerns) on GitHub or via email 
  - GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
  - Email: <a href="mailto:${data.email}">${data.email}</a>
  `
};

module.exports = generateMarkdown;
