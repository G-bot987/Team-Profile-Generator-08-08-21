const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'what is your location?',
      name: 'location',
      choices: ['london', 'birmingham', 'manchester', 'other'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  
  
// //   userdata
// const inputData = (X)

// fs.appendFile('filename', `${process.argv[2]}\n`, (err) =>
// err ? console.error(err) : console.log('test')
// );