// Load the NPM Package inquirer
var inquirer = require("inquirer");
var questions = [
  {
    type: "input",
    name: "projName",
    message: "Project Title: "
  },

  {
    type: "input",
    name: "purpose",
    message: "Project Purpose: "
  },

  {
    type: "checkbox",
    name: "sections",
    message: "Which sections should be included",
    choices: ["Installation", "Technologies", "Examples", "Usage", "Configuration", "Contributing", "Liscense"]
  }
]


// Created a series of questions
var headings = [];

inquirer.prompt(questions).then(answers => {
  headings.push(answers.projName);
  headings.push(answers.purpose);

  if(answers.sections.length>0){

  }
  headings.push(answers.sections)
})