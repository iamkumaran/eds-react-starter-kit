// import fs from 'fs';

export default function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'Create a React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter component name (should be same as `block` name)',
      },
      {
        type: 'confirm',
        name: 'useTypeScript',
        message: 'Use TypeScript (Recommended)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'react-app/app/{{name}}/index.tsx',
        templateFile: 'plop-templates/tsx-template/index.tsx.template',
      },
      {
        type: 'add',
        path: 'react-app/app/{{name}}/index.css',
        templateFile: 'plop-templates/tsx-template/index.css.template',
      },
      {
        type: 'add',
        path: 'react-app/app/{{name}}/components/App.tsx',
        templateFile: 'plop-templates/tsx-template/components/App.tsx.template',
      },
      // function customAction(answers) {
      //   const { name } = answers;
      //   const jsonFile = `./components.json`;
      //   // console.log('aaaaaaa', answers);
      //   // const fs = require('fs');

      //   // Read the JSON file
      //   const data = fs.readFileSync(jsonFile);

      //   // Parse the JSON
      //   const jsonData = JSON.parse(data);

      //   // Modify the object
      //   jsonData[name] = `./react-app/app/${name}/index.jsx`;

      //   // Stringify the object
      //   const updatedData = JSON.stringify(jsonData, null, 2); // 2 spaces for indentation

      //   // Write back to the file
      //   fs.writeFileSync(jsonFile, updatedData);
      //   return 'Component Added';
      // },
    ],
  });
}
