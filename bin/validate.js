const { readFile, stat } = require("fs/promises");
const fetch = require("node-fetch");

// validate teams
(async () => {
  const [argv1, argv2, ...changedFiles] = process.argv; // single string or array of files changed
  console.log("changedFiles: ", changedFiles)
  let passedValidation = true;
  for (const changedFile of changedFiles) {
    console.log(changedFile)
    if (!changedFile.startsWith("_data/handles")) {
      continue;
    }
    // handle handles file validation
    const blob = await readFile("./" + changedFile);
    let parsedHandle;
    try {
      parsedHandle = JSON.parse(blob);
    } catch (err) {
      console.error(`Unable to parse JSON file at ${changedFile}`);
      passedValidation = false;
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(parsedHandle, "members")) {
      for (const member of parsedHandle.members) {
        const res = await fetch(`https://api.code4rena.com/api/get-team?id=${member}`)
        if (res.status !== 200) {
          console.error(`Team member ${member} does not exist.`);
          passedValidation = false;
        }
      }
    } else {
      console.error("Team must have 1 or more members");
      passedValidation = false;
    }
  }
  if (!passedValidation) {
    throw new Error(
      "❌  Team validation failed. See above log for more information."
    );
  }
})();