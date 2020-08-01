// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # Title: ${data.title} 
    ## Description: ${data.description} 
    ## Usage: ${data.usage} 
    ## Credits: ${data.credits} 
    ## Contribution: ${data.contribution} 
    ## License: ${data.license} 
    ## Dependencies: ${data.dependencies} 
    ## Test: ${data.test} 
    ## Github: ${data.github} 
    ## Email: ${data.email} 

  `;
  }
  
  module.exports = generateMarkdown;
  