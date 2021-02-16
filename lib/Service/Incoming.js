
const Packet = require("./Packet");

module.exports = (Request, Response) => {
    const Payload = new Packet(Request, Response);
    return Payload;
}
