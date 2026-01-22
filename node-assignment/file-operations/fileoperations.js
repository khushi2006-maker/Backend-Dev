const fs = require("fs");

// Read file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  // Count words
  const words = data.split(/\s+/).length;

  // Write result to new file
  const result = `Total number of words: ${words}`;

  fs.writeFile("output.txt", result, (err) => {
    if (err) {
      console.log("Error writing file");
      return;
    }
    console.log("Word count written to output.txt");
  });
});