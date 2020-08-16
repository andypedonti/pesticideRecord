// function to generate markdown for README
// use this to make a module that exports something
function generateMarkdown(data) {
  return `# ${data.title} 
  
          
          ##  Description
          ${data.description}

          ##  Table of Contents
          * Installation
          * Usage
          * License
          * Contributing
          * Test
          * Questions
          
          ##Installation
          ${data.installation}

          ## License
          ![license badge](${data.license})
          
          
          



`;
}

module.exports = generateMarkdown;

//take +'s out, wrap all variables into ${}'s
//what is this for?
//how do i tell someone how to install this
