// Load fs package for read/write
const fs = require("fs");
var inquirer = require('inquirer');
const args = process.argv.slice(2);

module.exports = () =>
{
  
   getArgs();
}

const getArgs = () => {
   // remove auto-loaded args
   let opt = args[0] || "-n"; 
   if (args.length == 0) {
     create_readme();
   }
   else if (opt === "-r" || opt === "--replace") {
     fs.unlink('README.md', (err) =>
     {
       if (err) throw err;
       console.log('README.md deleted')
     });
   }
}

function create_readme(name)
{
  let pname = name || " <Project Title>"
  fs.writeFile("README.md", "#" + pname, (err) =>
  {
    if (err) throw err;
    else { console.log("Created new README.md"); }
  });
}


