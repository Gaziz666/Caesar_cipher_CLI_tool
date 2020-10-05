const minimist = require('minimist');

const args = minimist(process.argv.slice(2))

let shift = args.s || args.shift,
    action = args.a || args.action,
    output = args.o || args.output,
    input = args.i || args.input;

if (parseInt(args.s) < 0 || parseInt(args.shift) < 0) {
  console.error('Action (encode/decode) and the shift are required, please prompt it' + ', error code: ' + process.stderr.fd)
} else if (shift && 
          (action) && 
          !output &&
          input) {
  require('./output_no.js')(shift, action, input)

} else if(shift && 
          (action) && 
          output &&
          input) {
  require('./output.js')(shift, action, input, output)

} else if(shift && 
          (action) && 
          output &&
          !input) {
  require('./input_no.js')(shift, action, output)

} else if (shift && action) {
  require('./action_cmd.js')(shift, action)

} else {
  console.error('Action (encode/decode) and the shift are required, please prompt it' + ', error code: ' + process.stderr.fd)
}



/*
-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode
*/