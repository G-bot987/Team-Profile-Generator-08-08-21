const inquirer = require('inquirer');
const fs = require('fs');
const {licenses} = require(`./licenses/licenses.js`);
const licensesName = licenses.map(license => license.name)
const myIcon = licenses.map(license => license.icon);
console.log(myIcon)

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'This will be a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'installation instructions for your project',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'contribrution guidelines',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'test instructions',
      name: 'test',
    },

      {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: licensesName,
      },

      {
        type: 'input',
        message: 'what is your github',
        name: 'github',
      },

      {
        type: 'input',
        message: 'what is your email',
        name: 'email',
      },
  ])

  .then((data) => {
    if (data.title.trim().length === 0) return;
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    const markdown = 
`
### license
${data.license}

### table of content
*License,

*Questions

*Description

*Installation

*instructions

*Usage
 
*Contributing
 
*Tests 

### Questions 
${data.github} 
${data.email}

### Description
${data.description}

### Installation 
${data.installation}
### instructions
${data.instructions}
### Usage 
${data.usage}

### Contributing 
${data.contribting}

### Tests
${data.test}
`;

    fs.writeFile(filename,markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    


  });
  
  
