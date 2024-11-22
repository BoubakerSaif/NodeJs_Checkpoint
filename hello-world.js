// import http from "http";
// task 1 tdha7ek
// console.log("Hello World");

// task 2

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1>Hello Node</h1>");
//     res.end();
//   }
// });

// server.listen(3000);

// task 3

// import fs from "fs";

// fs.writeFile("welcome.txt", "text", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Created Successfully");
//   }
// });

// fs.readFile("welcome.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// task 4
import generator from "generate-password";

const password = generator.generate({
  length: 20,
  numbers: true,
  uppercase: true,
  lowercase: true,
  symbols: true,
});

console.log(password);
