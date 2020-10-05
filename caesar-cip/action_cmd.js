module.exports = (argShift, action) => {
  
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "enter  text: "
    })

    rl.prompt();
    rl.on('line', (line) => {
      let result = require('./caesar_shifr.js')(argShift, action, line)
      console.log(`result text: ${result}`)
      rl.prompt();
    }).on('close', () => {
      console.log('thanks for your checking!');
      process.exit(0);
    });
   
}
