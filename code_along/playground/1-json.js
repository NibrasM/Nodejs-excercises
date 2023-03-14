const fs = require("fs");

// const book = {
//   title: "aaaa",
//   auther: "bbbbb",
// };

// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // const parseDate = JSON.parse(bookJSON);
// // console.log(parseDate.auther);
// fs.writeFileSync("1-json.json", bookJSON);

//another code
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);

data.title = "new title";
data.auther = "new auther";

const dataToJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataToJSON);
