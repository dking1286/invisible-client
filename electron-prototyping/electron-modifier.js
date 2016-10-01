const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function createInstructions(instructions) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, 'instructions.js'), instructions, err => {
      if (err) return reject(new Error(err));

      resolve();
    });
  })
}

function startElectron() {
  const electronProcess = spawn(
    './node_modules/electron/dist/electron', ['.']
  )
}

createInstructions("console.log('Hello world!')")
  .then(startElectron)
  .catch(err => {throw err});
