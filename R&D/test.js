const data = require("./CountryCodes.json");
const modifiedData = require("./CountryCodes.json");
// const fs = require("fs");

//Modified data script
// const modifiedData = data.map((item) => {
//   const { emoji, unicode, ...rest } = item; // Destructure and extract emoji, unicode; keep the rest of the properties
//   return rest; // Return the modified object without the emoji and unicode properties
// });

// // Convert modifiedData to JSON string
// const jsonData = JSON.stringify(modifiedData, null, 2);

// // Write JSON data to a new file
// fs.writeFile("modified_data.json", jsonData, "utf8", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("Data has been written to modified_data.json");
//   }
// });

for (let i = 0; i < data.length; i++) {
  const originalItem = data[i];
  const modifiedItem = modifiedData[i];

  const keysOriginal = Object.keys(originalItem);
  const keysModified = Object.keys(modifiedItem);

  const addedKeys = keysModified.filter((key) => !keysOriginal.includes(key));
  const removedKeys = keysOriginal.filter((key) => !keysModified.includes(key));

  if (addedKeys.length > 0 || removedKeys.length > 0) {
    console.log(`Differences found in item at index ${i}:`);
    console.log(`Added keys: ${addedKeys}`);
    console.log(`Removed keys: ${removedKeys}`);
  }
}
