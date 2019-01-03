// Load the NPM Package inquirer
var inquirer = require("inquirer");

let document = {};

var questHeaders = [
  {
    type: "input",
    name: "projName",
    message: "Project Title: ",
    default: function() {
      return '<TITLE>';
    }
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
    choices: ["Installation", "Technologies", "Examples", "Usage", "Configuration", "Contributing", "License"]
  }
]


function ask(section){
  let text = [];
  inquirer.prompt([
    {
      type: 'input',
      name: 'content',
      message: 'Text content'
    },
    {
      type: 'confirm',
      name: 'addMore',
      message: `Continue adding to <${section}> section?`,
      default: false
    }
  ]).then(answer => {
       text.push(answer.content);
       if(answer.addMore){
         ask(section);
       }
       else{
         return text.join("\n*")
        }
  });
}

function fillSections(sections){

  sections.map( (section,i) => {
    return new Promise(ask(section[i]));
  });
}

function startPrompts(){
// starts all of the inquirer prompts
  inquirer.prompt(questHeaders).then(answers => {
    document.title = answers.projName.split(' ').join('-')
    document.description = answers.purpose
    document.sections = answers.sections;
  }).then(() => {
   fillSections(document.sections);
    
  })
}
startPrompts();

