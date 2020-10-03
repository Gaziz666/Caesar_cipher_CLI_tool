module.exports = (args) => {
  const fs = require('fs');
  const through2 = require('through2')

  let argShift = args.s || args.shift;
  let inputFile = args.i || args.input;
  let outputFile = args.o || args.output
  
  if (!fs.existsSync( inputFile )) {
    console.error(`The input file is given but doesn't exist, error code: + ${process.stderr.fd}`)
  } else if (!fs.existsSync( outputFile )) {
    console.error(`The output file is given but doesn't exist, error code: + ${process.stderr.fd}`)
  }else {
    const fs = require('fs');
    const { pipeline } = require('stream')

    pipeline(
      fs.createReadStream(inputFile),
      
      fs.createWriteStream(outputFile),
      (error) => {
        if (error) {console.log(error.message)}
        else {

        }
      }
    )
  }


}