// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkDown = require("./generateMarkdown");

//questions for users
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Tell me about your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have?",
    choices: [
      {
        name: "MIT",
        value: {
          name: "MIT",
          link: "MIT",
          url: "https://opensource.org/licenses/MIT",
          color: "orange",
        },
      },
      {
        name: "GPL",
        value: {
          name: "GPL",
          link: "GPLv3",
          url: "https://opensource.org/licenses/gpl-3.0",
          color: "blue",
        },
      },
    ],
  },

  {
    type: "input",
    name: "installation",
    message: "What input should be run for questions?",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "What input should be run for tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "Any repo questions?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Any thoughts to add?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("readMe.md", generateMarkDown(answers));
  });
}

// function call to initialize program
init();
