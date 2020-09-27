// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const moment = require("moment");
const { type } = require("os");
//var geolocation = require("geolocation");
const generateMarkdown = require("./utils/generateMarkdown");

let pesticideQuestios = [
  {
    message: "which chemical did you apply?",
    type: "checkbox",
    name: "herbicides",
    choices: [
      "Glyphosate",
      "2-4D",
      "dimethylamine salt of quinclorac",
      "Fenoxaprop-p-ethyl",
    ],
  },
  {
    message: "what unit of measure did the pesticide use",
    type: "checkbox",
    name: "units",
    choices: ["Gallon", "pound", "fluid ounce"],
  },
  {
    message: "What volume was applied?",
    type: "input",
    name: "volume",
  },
  {
    message: "how many square feet did you treat?",
    type: "input",
    name: "area",
  },
  {
    message: "how many ounces of product were mixed in each gallon?",
    type: "input",
    name: "rate",
  },
  {
    message: "What was the windspeed",
    type: "input",
    name: "wind",
  },
  {
    message: "What was the temperature",
    type: "input",
    name: "temp",
  },
];
let actualQuestions = [
  {
    message: "What is the Title of your Project?",
    type: "input",
    name: "title",
  },
  {
    message: " Briefly describe your project",
    type: "input",
    name: "description",
  },
  {
    message: "What are the installation intructions?",
    type: "input",
    name: "installation",
  },
  {
    message: "What is the permissible use of the project?",
    type: "input",
    name: "usage",
  },
  {
    message: "What is the project licence?",
    type: "list",
    choices: ["MIT", "GPL"],
    name: "license",
  },
  {
    message: "What are the contibution guidelines?",
    type: "input",
    name: "contributing",
  },
  {
    message: "What are the testing instructions?",
    type: "input",
    name: "testing",
  },
  {
    message: "What is your github profile",
    type: "input",
    name: "github",
  },
  {
    message: "What is your email address?",
    type: "input",
    name: "email",
  },
];

currentTime = moment().format("MMMM Do h:mm");
console.log(currentTime);
//node module for geolocation
// location = geolocation.getCurrentPosition();
// console.log(location);

//api documentation

// getCurrentPosition(setPosition);

// function setPosition(position) {
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   console.log(lat);
//   console.log(lon);

// let url =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=" +
//   lat +
//   "&lon=" +
//   lon +
//   "&exclude&appid=021e0ef373e6b3285caac8c9e9b52544";

// $.ajax({
//   url: url,
//   method: "GET",
// }).then(function (responce) {
//   console.log(responce);
// });
// }

//put this into a function functionAskquestions(){}
function AskQuestions() {
  inquirer.prompt(actualQuestions).then(function (data) {
    //noconsole.log(responce);
    data.currentTime = currentTime;
    data.license = "https://img.shields.io/badge/license-" + data.license;
    let filename = "pesticides-" + currentTime + ".md";
    writeToFile(filename, generateMarkdown(data));
  });
  // function to write README file
  //Does this need to say process.argv[2] instead of data? and if so how do you tie in inquirer?
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "UTF-8", function (error) {
      if (error) {
        console.log(error);
      }
      console.log("success");
    });
  }
}
// function to initialize program
function init() {
  //call function for asking questions
  //askQuestions(){}
  AskQuestions();
}

// function call to initialize program
init();
