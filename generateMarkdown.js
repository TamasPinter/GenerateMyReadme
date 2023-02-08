const fs = require('fs');
const inquirer = require('inquirer');

function genMd(data) {
return `# ${data.title}
# Table of Contents
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributors](#contributors)\n
[License](#license)\n
[Tests](#tests)\n
[Questions](#questions)\n

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## License
![License Badge](${renderLicenseBadge(data.license)})\n
//////${data.license}//////

## Tests
${data.tests}

## Questions
${data.questions}
`;
}



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//return as image
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return 'https://img.shields.io/badge/license-MIT-red'
    } else if (license === 'Apache') {
        return  'https://img.shields.io/badge/license-Apache-blue'
    } else if (license === 'GPL') {
        return 'https://img.shields.io/badge/license-GPL-green'
    } else if (license === 'BSD') {
        return 'https://img.shields.io/badge/license-BSD-yellow'
    } else {
        return 'https://img.shields.io/badge/license-None-lightgrey'
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



module.exports = genMd;
