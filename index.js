const inquirer = require("inquirer");




const menu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "what would you like to do",
        choices: ["view all employees","add employee","update employee","view all roles", "add role", "view all departments", "add department"]
      },
    ])

    // create an if statement
    .then((output) => {
      console.log(output);
      if (output.action === "view all employees"){
        
      }else if(output.action === "add employee"){

      }
    });
};

 


