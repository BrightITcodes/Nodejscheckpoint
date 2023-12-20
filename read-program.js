const fs = require("fs");

// Step 2: Read and console.log data from "welcome.txt"
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log('Data from "hello.txt":', data);
});
