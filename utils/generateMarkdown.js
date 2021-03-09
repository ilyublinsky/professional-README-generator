// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var link;
var section;

function renderLicenseBadge(license) {
  if (license === 'none') {
    return ""
  } else {
    return `[!${license}](https://img.shields.io/badge/${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'none') {
    return ""
  } else {
  return `https://opensource.org/licenses/${license}`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return section = ""
  } else {
  renderLicenseBadge(license)
  renderLicenseLink(license)
   console.log(license);
   console.log(renderLicenseBadge(license));
   console.log(renderLicenseLink(license));
  return `${renderLicenseBadge(license)}(${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

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
 ${renderLicenseSection(data.license)}

`
}

module.exports = generateMarkdown;
