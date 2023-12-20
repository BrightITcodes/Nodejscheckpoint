const fs = require("fs");

// Step 1: Create a file named "welcome.txt" with content "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error creating the file:", err);
    return;
  }
  console.log('File "welcome.txt" created successfully.');
});
