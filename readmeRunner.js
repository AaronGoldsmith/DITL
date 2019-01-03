// Load the NPM Package inquirer
var inquirer = require("inquirer");

let document = {text: []};

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
         let summary = text.join("\n*");
         return Section(section,summary);
        }
  })
  .catch((err) => { console.log(err)});
}

function Section(header,text){
  this.header = header;
  this.text = text;
  this.render = function(){
    return "##" + header + "\n" + text;
  }
}
/* async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
} */


function getPrompts(){
// starts all of the inquirer prompts
  inquirer.prompt(questHeaders).then(answers => {
    document.title = answers.projName.split(' ').join('-')
    document.description = answers.purpose
    document.sections = answers.sections;
  }).then(() => {
    console.log(document.text);
    return ;
  })
  .catch((err)=>{console.log(err)})

}
if(getPrompts()){
  document.sections.forEach(section => document.text.push(ask(section)));
}

