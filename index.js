// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        default: 'Project Name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
    },
    {
        type: 'input',
        name: 'description',
        default: 'Project Scope',
        message: 'Enter a detailed description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter any installtion information that is required for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Are there any guidlines for conrtibuting to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List all tests that have been written for your project, seperated by commas. If there are any examples, please provide those as well.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose one license from the following:',
        choices: [
                "none",
                "afl-3.0",
                "apache-2.0",
                "bsl-1.0",
                "bsd-2-clause",
                "bsd-3-clause",
                "bsd-3-clause-clear",
                "cc",
                "wtfpl",
                "ecl-2.0",
                "epl-2.0",
                "gpl-3.0",
                "ISC",
                "lppl-1.3c",
                "mit",
                "ms-pl",
                "osl-3.0",
                "ncsa",
                "unlicense",
                "zlib"

        ]
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        err ? console.log(err) : console.log('You have successfully generated a README file!')
    });
}

// TODO: Create a function to initialize app
function init() {
inquirer
.prompt(questions)
.then((response) => {
    writeToFile("README.md", generateMarkdown(response));
})
}
// Function call to initialize app
init();
