// function to generate markdown for README
function generateMarkdown(data) {
  return `

[![License: ${data.license.name}](https://img.shields.io/badge/License-${data.license.link}-${data.license.color}.svg)](${data.license.url})

# ${data.title}

## Description 
${data.description}
---

## TableOfContents
${data.tableofcontents}

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
---
## Installation
${data.installation}

---
## Usage
${data.usage}

---
## License 
${data.license}

---

## Contributing
${data.contributing}

---

## Tests
${data.tests}

---

## Questions
${data.questions}

Should you have any questions about the project, contact me directly at [${data.email}](mailto:${data.email}).

Check out my other repos at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
