const { readFile, stat } = require("fs/promises");
const path = require("path");
const fetch = require("node-fetch");

const changedFiles = process.argv[2];
const fn = async () => {
  let passedValidation = true;
  for (const changedFile of changedFiles) {
    if (changedFile.startsWith("_data/handles")) {
      // handle handles file validation
      const blob = await readFile("./" + handleFile);
      let parsedHandle;
      try {
        parsedHandle = JSON.parse(blob);
      } catch (err) {
        console.error(`Unable to parse JSON file at ${handleFile}`);
        passedValidation = false;
        continue;
      }
      if (Object.prototype.hasOwnProperty.call(parsedHandle, "members")) {
        Array.prototype.forEach.call(parsedHandle.members, (member) => {
          if (!uniqueHandles.has(member)) {
            console.error(
              `Team specified in ${handleFile} has unregistered handle: ${member}`
            );
            passedValidation = false;
          }
        });
      } else {
        console.log("no members");
        const res = await fetch(`https://api.code4rena.com/api/get-team?id=karl`)
        const res2 = await fetch(`https://api.code4rena.com/api/get-team?id=carlos_sf`)
        console.log(res)
        console.log(res2)
      }
    } else if (changedFile.startsWith("_data/orgs")) {
      // handle orgs file validation
    }
  }
}
(async () => {
  const res = await fetch(`https://api.code4rena.com/api/get-team?id=karl`)
  const res2 = await fetch(`https://api.code4rena.com/api/get-team?id=carlos_sf`)
  console.log(res)
  console.log(res2)
})();