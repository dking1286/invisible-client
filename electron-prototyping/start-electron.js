const childProcess = require('child_process')
const spawn = childProcess.spawn;

const electronProcess = spawn('./node_modules/electron/dist/electron', ['.'])

console.log('Hello')

const ls = spawn('ls')

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
