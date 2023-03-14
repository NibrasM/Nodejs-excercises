const chalk = require("chalk");
const yargs = require("yargs");

// const greenMsg = chalk.blue.inverse.bold("Success");
// console.log(greenMsg);
// const command = process.argv[2];
// console.log(process.argv);

// if (command === "add") {
//   console.log("adding note");
// } else if (command === "remove") {
//   console.log("Removing note");
// }

//yargs part:

//create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title", argv.title);
    console.log("body: ", argv.body);
  },
});

yargs.parse();

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("Removing the note!");
  },
});

// console.log(yargs.argv);
