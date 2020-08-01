const inquirer = require('inquirer');
const fs = require('fs');
var path = require('path');
var generateMarkdown = require("./generateMarkdown");



// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project.",
        default: "Title",
    },
    {
        type: "input",
        name: "description",
        message: "What general info should others know about your project?",
        default: "No description provided.",
    },
    {
        type: "input",
        name: "usage",
        message: "What should users know about using your repo?",
        default: "No special instructions or guidelines.",
    },
    {
        type: "input",
        name: "credits",
        message: "Please give credit to anyone or anything that deserves it.",
        default: "No credits are necessary.",
    },
    {
        type: "input",
        name: "contribution",
        message: "What should users know about contributing to your repo?",
        default: "No special instructions or guidelines.",
    },
    {
        type: "rawlist",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to test the app?",
        default: "npm test",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        default: "username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter an email at which users can reach you.",
        default: "email@none",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    console.log("Let's make your README.");
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown({ ...answers }));
    });
}

// function call to initialize program
init();

// The generated README includes the following sections: 

// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions