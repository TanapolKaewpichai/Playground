let readlineSynce = require("readline-sync");

let name = readlineSynce.question("What is your name?");

if (name.includes("!")) {
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
