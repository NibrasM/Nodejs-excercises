const fs = require("fs");

fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const users = JSON.parse(data).users;

  const newUser = {
    id: 4,
    name: "Dave",
    email: "dave@example.com",
  };
  users.push(newUser);

  fs.writeFile("users.json", JSON.stringify({ users }), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("New user added!");
  });
});
