const minimist = require('minimist');

const args = minimist(process.argv.slice(2))

if (parseInt(args.s) < 0 || parseInt(args.shift) < 0) {
  console.error('Action (encode/decode) and the shift are required, please prompt it' + ', error code: ' + process.stderr.fd)
} else if ((args.s || args.shift) && 
          (args.a || args.action) && 
          !(args.o || args.output) &&
          (args.i || args.input)) {
  require('./input_read.js')(args)

} else if((args.s || args.shift) && 
          (args.a || args.action) && 
          (args.o || args.output) &&
          (args.i || args.input)) {
  require('./output_write.js')(args)

} else if ((args.s || args.shift) && (args.a || args.action)) {
  require('./action_cmd.js')(args)

} else {
  console.error('Action (encode/decode) and the shift are required, please prompt it' + ', error code: ' + process.stderr.fd)
}



/*
-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode
*/