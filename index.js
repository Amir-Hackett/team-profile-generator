const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

var teamArray = []

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
            type: "input",
            name: "email",
            message: "What is the managers email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?",
        },  
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamArray.push(manager)
        createPage()
    })
}

function chooseEmployee (){
    inquirer.prompt([
        {
            type: "list",
            name: "employeeChoice",
            choices: ["engineer", "intern", "finish building team"]
        }
    ]).then(response => {
        if(response.employeeChoice === "finish building team"){
            createPage()
        } else if(response.employeeType === "engineer"){
            addEngineer()
        } else {
            addIntern()
        }
    })
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
          },
    
          {
            type: "input",
            name: "id",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
          },
    
          {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
          },  
    ]).then(response => {
        const Intern = new Intern(response.name, response.id, response.email, response.school)
        teamArray.push(intern)
        createPage()
    })
}

function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamArray.push(engineer);
      createPage()
    });
}
