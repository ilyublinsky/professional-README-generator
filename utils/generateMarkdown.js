// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var badge;
var link;
var section;

function renderLicenseBadge(license) {
  if (license === 'none') {
    let badge = ""
  } else {
    let badge = `[!${License}](https://img.shields.io/badge/${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'none') {
    let link = ""
  } else {
  let link = `https://opensource.org/licenses/${license}`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    section - ""
  } else {
  renderLicenseBadge(license)
  renderLicenseLink(license)
  section = `${badge}(${link})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseSection(data,license)

  return `# ${data.title}
 - - - - - -

## Table of Contents
 - - - - - - 
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Demo](#Demo)
 - [Github](#Github)
 - [License](#License)
 
 ## Description
 - - - - -
 ${data.description}

 ## Installation
 - - - - -
 ${data.install}

 ## Usage
 - - - - -
 ${data.usage}

 ## Tests
 - - - - -
${data.test}

## Contributors
 - - - - -
 ${data.contribute}

 ## Github
 - - - - -
 ${data.github}

 ## License
 - - - - -
 ${section}

`
}

module.exports = generateMarkdown;
