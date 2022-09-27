const inquirer = require('inquirer');
const fs = require("fs");
const { title } = require('process');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your github username?',
            name: "github"
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What are the details of your project?',
            name: 'details'
        },
        {
            type: 'input',
            message: 'What are the steps for installation?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What are the some of the benefits of your project?',
            name: 'benefits'
        },
        {
            type: 'input',
            message: 'What licenses if any does your project use?',
            name: 'license'
        },
        {
            type: 'input',
            message: 'Were there any contributions or contributors to your project?',
            name: 'contributor'
        },
        {
            type: 'input',
            message: 'What steps were taken to test the project?',
            name: 'test'
        }

    ]).then((data) => {
        fs.writeFile("GeneratedReadme.md", JSON.stringify(data, null, '\t'), (err) => {
            err ? console.log(err) : console.log("Success!")
        })
    });