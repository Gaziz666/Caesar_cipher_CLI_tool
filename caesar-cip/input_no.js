module.exports = (argShift, action, outputFile) => {
  const fs = require('fs');

  if (!fs.existsSync( outputFile )) {
    console.error(`The output file is given but doesn't exist, error code: + ${process.stderr.fd}`)
  }else {

    const fs = require('fs');
    const readline = require('readline');
    const { pipeline, Transform } = require('stream')


    let ws = fs.createWriteStream(outputFile, { flags: 'a', flags: 'r+', defaultEncoding: 'utf8' });
    ws.isTTY = true

  
    
      const rl = readline.createInterface({
  
      input: process.stdin,
      output: ws,
      prompt: "enter  text: "
      })
      
      rl.prompt();
      rl.on('line', (line) => {
      
        let result = require('./caesar_shifr.js')(argShift, action, line)
        console.log(result)
        rl.write(result + '\n')
      }).on('close', function() {
        ws.close()
      })
   
    

    
/*
    const transformData = (s, a) => {
      return new Transform({
        transform(chunk, encoding, cb) {
          let result = require('./caesar_shifr')(s, a, chunk.toString())
          this.push(result + '\n');
          
          cb()
        }
      })
    }
    pipeline(
      inputText(),
      transformData(argShift, action),
      fs.createWriteStream(outputFile, { flags: 'a'}),
      (error) => {
        if (error) {console.log(error.message)}
        else {
          console.log('look in output.txt')
        }
      }
    )*/
  }


}