#! /usr/bin/env node
// Load fs package for read/write


const fs = require("fs");
const moment = require('moment')
const args = process.argv.slice(2);


const getArgs = () => {
  let opt = args[0];
  if (opt === '-n') {
    args.shift();
    makeMyDay(args.join(' '), moment().format('LL'));
  }
  else {
     let now = moment().format('LT');
     noteIt(args.join(' '), now)
   }
}


function noteIt(note,time){
  fs.appendFile("DITL.md", `
     \n#### ${time}\n>${note} \n`,
     null, err => {
       if(err) console.log(err)
      });
   console.log(`logged at ${time}`)
}

function makeMyDay(name,day)
{
  let pname = name || "A Day in the life"
  fs.writeFile("DITL.md", `# ${pname} \n--------\n### ${day}\n`, (err) =>
  {
    if (err) throw err;
    else { console.log("Created new DITL.md"); }
  });
}


if(getArgs()){
  console.log("Great!")
}
