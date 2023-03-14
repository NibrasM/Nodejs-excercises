const fs = require("fs");

// fs.appendFileSync("notes.txt", " I live in  Palestine");
fs.writeFileSync("file_system_exce", "this is orginal");
fs.writeFileSync(
  "copy_to_file_system_exce",
  fs.readFileSync("file_system_exce")
);

fs.renameSync("copy_to_file_system_exce", "copy_of_fs_exc");
console.log(fs.readdirSync("./"));

console.log(fs.statSync("file_system_exce").size);
