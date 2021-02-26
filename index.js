// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');
 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        default: 'Project Name'
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
    },
    {
        type: 'input',
        name: 'description',
        default: 'Project Scope'
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
        type: 'checkbox',
        name: 'license'
        message: 'Choose one license from the following:',
        choices: [
                "Academic Free License v3.0	afl-3.0",
                "Apache License, Version 2.0",
                "Boost Software License 1.0",
                "BSD 2-clause 'Simplified' license",
                "BSD 3-clause 'New' or 'Revised' license",
                "BSD 3-clause Clear license",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Common Public License Version 1.0 (CPL)",
                "Creative Commons license family",
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What The F*ck You Want To Public License",
                "Educational Community License v2.0",
                "Eclipse Public License 1.0",
                "Eclipse Public License 2.0",
                "European Union Public License 1.1",
                "GNU Affero General Public License v3.0",
                "GNU General Public License family",
                "GNU General Public License v2.0",
                "GNU General Public License v3.0",
                "ISC",
                "LaTeX Project Public License v1.3c",
                "Microsoft Public License (Ms-PL)",
                "MIT License",
                "Mozilla Public License 2.0",
                "Open Software License 3.0",
                "PostgreSQL License",
                "SIL Open Font License 1.1",
                "University of Illinois/NCSA Open Source License",
                "The Unlicense",
                "zLib License"
        ]
        function (response) {
            if (response.length > 1) {
                return console.log("You may only choose one license.");
            } if {
                (response.length < 1) {
                    return console.log("You must choose one a license.");
            }
            return true;
        },
    }
    
    {
        
    }


    }
    .then(answers => {
      })
    .catch(error => {
        if(error.isTtyError) {
        } else {
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data) {
        console.log("You have successfully generated your professional README.md!")
        catch (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
promptUser().then((answers) => {
    try {
      const html = generateHTML(answers);
      fs.writeFileSync('index.html', html);
      console.log('Successfully wrote to index.html');
    } catch (error) {
      console.log(error);
    }
  });
}

const writeFileAsync = generateMd.promisify(writeToFile);
// Function call to initialize app
init();
