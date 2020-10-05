module.exports = (argShift, action, inputFile) => {
  
    const fs = require('fs');
    
    if (!fs.existsSync( inputFile ) ) {
      console.error(`The input file is given but doesn't exist, error code: + ${process.stderr.fd}`)
    }
    else {
      let text = fs.createReadStream(inputFile)
      text.on('data', (chunk) => {
        console.log(`input  text: ${chunk.toString()}`)
        let result = require('./caesar_shifr')(argShift, action, chunk.toString())
        console.log(`result text: ${result}`)

      })
    }
}
