
const FS           = require("fs");
const Path         = require("path");
const {Collection} = require("qulity");

const Managers    = new Collection();
const Destination = Path.join(__dirname, "Managers");

for (const File of FS.readdirSync(Destination)) {
    const Manager = Path.join(Destination, File);
    Managers.set(Path.basename(File, ".js"), Manager);
}

module.exports = Managers;
