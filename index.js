//import libraries

const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');

//const questions for markdown info

const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub username please',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your project title please',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project and relevant info',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe how to use your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list any contributors to your project',
        name: 'contributors',
    },
    {
        type: 'list',
        message: 'Please select a license for your project',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please enter a link to your GitHub page',
        name: 'tests',
    },
    {
        type: 'email',
        message: 'Please enter your email address',
        name: 'questions',
    }
]


// TODO: Create a function to initialize app and write README file
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        let genMd = markdown(response);
        fs.appendFile('Readme.md', genMd, (err) => {
            if (err) throw err;
            console.log('The file has been created!');
        })
    })
}

// Function call to initialize app
init();
