const fs = require("fs");

const manifest = fs.readFileSync("./manifest.json", "utf8");
const { dependencies } = JSON.parse(manifest);

const info = `[View on Thunderstore](https://thunderstore.io/package/Cutie/anti_paradise/)\\nClick to download:\\n${dependencies.map(i => `- [${i.split("-")[1]} ${i.split("-")[2]}](https://thunderstore.io/package/download/${i.replaceAll("-", "/")}/)`).join("\\n")}`;

console.log(info);