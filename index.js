// Load fs package for read/write
const fs = require("fs");
const readme = "README.md";

module.exports = () => {
    // remove auto-loaded args
  let args = process.argv.slice(2);
  let opt = args[0] || "-n";
  let pname = args[1] || "Project Title"

  // default case
  if(args.length == 0){
    create_readme();
  }
  else{
    // delete existing README & create new
    if(opt === "-r" || opt === "--replace"){
      fs.unlink('README.md', (err) => { 
        if(err) throw err;
        console.log('README.md deleted')
      });
    }
    else if( opt === "-n" || opt === "--new"){
      create_readme();
    }
    
  }

  function create_readme(){
    fs.writeFile("README.md", pname ,(err) =>{
      if(err) throw err;
      else{console.log("Created new README.md");}
    })
  }
}
