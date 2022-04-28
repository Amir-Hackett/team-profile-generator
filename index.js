const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const dist = path.resolve(__dirname, "dist")
const distPath = path.join(dist, "index.html")
const createTeam = require('./src/template')
var teamArray = []

function assembleTeam(){

  function chooseEmployee(){
    inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "employeeChoice",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }]).then(function (response) {
        switch(response.employeeChoice) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            createHTML();
        }
      })
  }

function addManager(){
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is the managers name?",
        },
        {
            type: "text",
            name: "id",
            message: "What is the managers employee ID?",
        },
        {
            type: "text",
            name: "email",
            message: "What is the managers email address?",
        },
        {
            type: "text",
            name: "officeNumber",
            message: "What is the managers office number?",
        },  
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamArray.push(manager)
        chooseEmployee()
    })
}

function addIntern(){
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is the intern's name?"
          },
    
          {
            type: "text",
            name: "id",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "text",
            name: "email",
            message: "What is the intern's email address?"
          },
    
          {
            type: "text",
            name: "school",
            message: "What school does the intern attend?"
          },  
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        teamArray.push(intern)
        chooseEmployee()
    })
}

function addEngineer() {
    inquirer.prompt([
      {
        type: "text",
        name: "name",
        message: "What is the engineer's name?"
      },

      {
        type: "text",
        name: "id",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "text",
        name: "email",
        message: "What is the engineer's email address?"
      },

      {
        type: "text",
        name: "github",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamArray.push(engineer);
      chooseEmployee()
    });
}

function createHTML() {
    console.log("Team Assembled!")
    fs.writeFileSync(distPath, createTeam(teamArray), "UTF-8")
}

chooseEmployee()

}

assembleTeam()