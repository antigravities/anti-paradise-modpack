const fs = require("fs");

const manifest = fs.readFileSync("./manifest.json", "utf8");
const { dependencies, for_game_version } = JSON.parse(manifest);

const info = `[View on Thunderstore](https://thunderstore.io/c/lethal-company/p/Cutie/anti_paradise/)

Assembled for version **${for_game_version}**.

Click to download:

${dependencies.map(i => `- [${i.split("-")[1]} ${i.split("-")[2]}](https://thunderstore.io/package/download/${i.replaceAll("-", "/")}/)`).join("\n")}
`;

fs.writeFileSync("./release.md", info);