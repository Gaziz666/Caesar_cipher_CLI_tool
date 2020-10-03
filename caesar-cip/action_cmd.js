module.exports = (args) => {
  
  if (args.action === 'encode' || args.a === 'encode') {
    const readline = require('readline');
    let argShift = args.s || args.shift
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "enter text: "
    })
    rl.prompt();
    rl.on('line', (line) => {
      let result = line.split('').map(item => {
        let itemCharCode = item.charCodeAt(0);
        let charCodeLength = 0

        if (itemCharCode > 64 && itemCharCode < 91) {
          charCodeLength = 65
        } else if (itemCharCode > 96 && itemCharCode < 123) {
          charCodeLength = 97
        }

        if (charCodeLength !==0) {
          item = (((itemCharCode - charCodeLength) + argShift) % 26) + charCodeLength
          return String.fromCharCode(item)
        } 

        return item
      })

      console.log(result.join(''))
      rl.prompt();
    }).on('close', () => {
      console.log('thanks for your checking!');
      process.exit(0);
    });
  } else if (args.action === 'decode' || args.a === 'decode') {
    const readline = require('readline');
    let argShift = args.s || args.shift
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "enter text: "
    })
    rl.prompt();

    rl.on('line', (line) => {
      let result = line.split('').map(item => {
        let itemCharCode = item.charCodeAt(0);
        let charCodeLength = 0
        
        if (itemCharCode > 64 && itemCharCode < 91) {
          charCodeLength = 65
        } else if (itemCharCode > 96 && itemCharCode < 123) {
          charCodeLength = 97
        }

        if (charCodeLength !==0) {
          item = ((26 + ((itemCharCode - charCodeLength) - argShift)) % 26) + charCodeLength
          return String.fromCharCode(item)
        } 

        return item
      })

      console.log(result.join(''))
      rl.prompt();
    }).on('close', () => {
      console.log('thanks for your checking!');
      process.exit(0);
    });
  }
}
