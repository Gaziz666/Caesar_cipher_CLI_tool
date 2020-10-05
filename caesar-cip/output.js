module.exports = (argShift, action, inputFile, outputFile) => {
  const fs = require('fs');

  if (!fs.existsSync( inputFile )) {
    console.error(`The input file is given but doesn't exist, error code: + ${process.stderr.fd}`)
  } else if (!fs.existsSync( outputFile )) {
    console.error(`The output file is given but doesn't exist, error code: + ${process.stderr.fd}`)
  }else {
    const fs = require('fs');
    const { pipeline, Transform } = require('stream')

    const transformData = (s, a) => {
      return new Transform({
        transform(chunk, encoding, cb) {
          let result = require('./caesar_shifr')(argShift, action, chunk.toString())
          this.push(result + '\n');
          cb()
        }
      })
    }
    pipeline(
      fs.createReadStream(inputFile),
      transformData(argShift, action),
      fs.createWriteStream(outputFile, { flags: 'a'}),
      (error) => {
        if (error) {console.log(error.message)}
        else {
          console.log('look in output.txt')
        }
      }
    )
  }


}