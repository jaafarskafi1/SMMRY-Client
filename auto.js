const logic = require('./logic');

let input = process.argv.slice(2).join(' ');

logic.summarize(input);