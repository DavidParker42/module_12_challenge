const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'southern1992',
  database: 'employeeTracker_db'
});

connection.connect( (err) =>{
  if(err) throw err;
});

const firstPrompt = () => {
  return inquirer
    .prompt([
        
      {
        type: "list",
        name: "action",
        message: "what would you like to do",
        choices: [
          "View all employees",
          "Add an employee",
          "Update employee role",
          "View all roles", 
          "Add role", 
          "View all departments", 
          "Add a department",
          "End"]
      },
    ])


    .then(response => {
      switch (response.action) {
      case 'View all departments':
        viewDepartment();
        break;
        case 'View all roles':
          viewroles();
          break;
      case 'View all employees':
          viewEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
        case 'Add role':
        addRoles();
        break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update employee role':
          updateEmployee();
        break;
      case "Exit":
        connection.end();
        
      }
  });
};

const viewDepartment = () => {
          connection.query('SELECT * FROM department', function (err, res) {
           if (err) throw err;
            console.table(res);
            firstPrompt();
          });
        };
        
        const viewroles = () => {
          connection.query('SELECT * FROM roles', function (err, res) {
            
           if (err) throw err;
            console.table(res);
            firstPrompt();
          });
        };
        
        const viewEmployees = () => {
          connection.query(
            'SELECT employee.id, first_name, last_name, title, salary, department_id, manager_id FROM ((department JOIN roles ON department.id = roles.department_id) JOIN employee ON roles.id = employee.role_id);',
            function (err, res) {
          
             if (err) throw err;
             console.table(res);
             firstPrompt();
            }
          );
        };
        
        const addDepartment = () => {
          inquirer.prompt([
              {
                name: 'department',
                type: 'input',
                message: 'What is the department name?',
              },
            ])
            .then(answer => {
              connection.query(
                'INSERT INTO department (name) VALUES (?)',
                [answer.department],
                function (err, res) {
                  if (err) throw err;
                  console.log('Department added!');
                  firstPrompt();
                }
              );
            });
        };
        
        const addRoles = () => {
          inquirer.prompt([
              {
                name: 'rolesTitle',
                type: 'input',
                message: 'What is the roles title?',
              },
              {
                name: 'salary',
                type: 'input',
                message: 'What is the salary for this roles?',
              },
              {
                name: 'deptId',
                type: 'input',
                message: 'What is the department ID number?',
              },
            ])
            .then(answer => {
              connection.query(
                'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
                [answer.rolesTitle, answer.salary, answer.deptId],
                function (err, res) {
                  if (err) throw err;
                  console.log('roles added!');
                  firstPrompt();
                }
              );
            });
        };
        
        const addEmployee = () => {
          inquirer.prompt([
              {
                name: 'nameFirst',
                type: 'input',
                message: "What is the employee's first name?",
              },
              {
                name: 'nameLast',
                type: 'input',
                message: "What is the employee's last name?",
              },
              {
                name: 'rolesId',
                type: 'input',
                message: "What is the employee's role id?",
              },
              {
                name: 'managerId',
                type: 'input',
                message: 'What is the manager Id?',
              },
            ])
            .then(answer => {
              connection.query(
                'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [answer.nameFirst, answer.nameLast, answer.rolesId, answer.managerId],
                function (err, res) {
                  if (err) throw err;
                  console.log('Employee added!');
                  firstPrompt();
                }
              );
            });
        };
        
        const updateEmployee = () => {
          inquirer
            .prompt([
              {
                name: 'id',
                type: 'input',
                message: 'Enter employee id',
              },
              {
                name: 'rolesId',
                type: 'input',
                message: 'Enter new roles id',
              },
            ])
            .then(answer => {
              connection.query(
                'UPDATE employee SET role_id=? WHERE id=?',
                [answer.rolesId, answer.id],
                function (err, res) {
                  if (err) throw err;
                  console.log('Employee updated!');
                  firstPrompt();
                }
              );
            });
        };
         firstPrompt();
    // create an if statement
    // .then((output) => {
    //   console.log(output);
    //   if (output.action === "view all employees"){
        
    //   }else if(output.action === "add employee"){

    //   }
    // });


 


