const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const data = [];

const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Enter your ID number.",
      name: "id",
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "email",
    },
    {
      type: "list",
      message: 'What is your role"',
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);

  if (answers.role === "Manager") {
    const managerA = await inquirer.prompt([
      {
        type: "input",
        message: "Enter your office number.",
        name: "OfficeNumber",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerA.officeNumber
    );
    data.push(newManager);
  }
  if (answers.role === "Intern") {
    const internA = await inquirer.prompt([
      {
        type: "input",
        message: "What school do you attend.",
        name: "school",
      },
    ]);
    const newintern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internA.school
    );
    data.push(newintern);
  }
  if (answers.role === "Engineer") {
    const engineerA = await inquirer.prompt([
      {
        type: "input",
        message: "Enter your GitHub username.",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      engineerA.github
    );
    data.push(newEngineer);
  }
};

async function promptQuestions() {
  await questions();

  const memberAnswers = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      message: "What would you like to do?",
      choices: ["Add member", "Create team"],
    },
  ]);
  if (memberAnswers.addMember === "Add member") {
    return promptQuestions();
  }
  return createTeam();
}

promptQuestions();

function createTeam() {
  fs.writeFileSync("./output.index.html", generateHtml(data));
}
