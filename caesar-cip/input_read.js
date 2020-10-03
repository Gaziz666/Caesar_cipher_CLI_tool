module.exports = (args) => {
  
    const fs = require('fs');

    let argShift = args.s || args.shift;
    let inputFile = args.i || args.input;
    
    if (!fs.existsSync( inputFile ) ) {
      console.error(`The input file is given but doesn't exist, error code: + ${process.stderr.fd}`)
    }
    else {
      let text = fs.createReadStream(inputFile)
      text.on('data', (chunk) => {
        console.log(`input  text: ${chunk.toString()}`)
        let result = chunk.toString().split('').map(item => {
          let itemCharCode = item.charCodeAt(0);
          let charCodeLength = 0

          if (itemCharCode > 64 && itemCharCode < 91) {
            charCodeLength = 65
          } else if (itemCharCode > 96 && itemCharCode < 123) {
            charCodeLength = 97
          }

          if (charCodeLength !==0) {
            if (args.action === 'encode' || args.a === 'encode') {
              item = (((itemCharCode - charCodeLength) + argShift) % 26) + charCodeLength
            } else {
              item = ((26 + ((itemCharCode - charCodeLength) - argShift)) % 26) + charCodeLength
            }
            return String.fromCharCode(item)
          } 

          return item

        })
        console.log(`result text: ${result.join('')}`)

      })
    }
}
