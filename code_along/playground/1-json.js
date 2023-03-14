const book = {
  title: "aaaa",
  auther: "bbbbb",
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parseDate = JSON.parse(bookJSON);
