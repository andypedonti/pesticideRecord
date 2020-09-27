// function to generate markdown for README
// use this to make a module that exports something
function generateMarkdown(data) {
  return `# ${data.title} 
  
          
  ##  Description
  ${data.description}

  ##  Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Contact](#Contact Info)
  * [Questions](#Questions)
          
  ##  Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ##  License
  ![license badge](${data.license})

  ##  Contributing
  ${data.contributing}
  
  ##  Test  
  ${data.testing}

  ##  Questions
  ###  Please reach out to me at the following info if you have any questions about the app.
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;

//how do i tell someone how to install this
