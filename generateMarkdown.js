// function to generate markdown for README
function generateMarkdown(data) {
  return `

[![Github License](https://img.shields.io/badge/License-${data.license.link}-${data.license.color}.svg)](${data.license.url})

# Title: ${data.title}


## Description 
${data.description}
---

## TableOfContents
${data.tableofcontents}

* [Installation](#installation)
* [Usege](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
---
## Installation
${data.installation}
---
## Useage
${data.usage}
[![Github License](https://img.shields.io/badge/License-${data.license.link}-${data.license.color}.svg)](${data.license.url})

---
## License 
${data.title} is licensed under the ${data.license.name} License

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

Check out my other projects at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
