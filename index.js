// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      message: "which chemical did you apply?",
      type: "checkbox",
      name: "herbicides",
      choices: ["Glyphosate", "2-4D", "dimethylamine salt of quinclorac"],
    },
    {
      message: "What was the application rate?",
      type: "input",
      name: "rate",
    },
    {
      message: "What was the windspeed",
      type: "input",
      name: "wind",
    },
  ])

  .then(function (data) {
    //noconsole.log(responce);

    writeToFile("README.md", data.wind + data.rate + data.herbicides.choices);
  });
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "UTF-8", function (error) {
    if (error) {
      console.log(error);
    }
    console.log("success");
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
