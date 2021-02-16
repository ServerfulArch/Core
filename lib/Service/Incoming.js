
const Packet = require("./Packet");

module.exports = (Request, Response, Server) => {
    const Payload = new Packet(Request, Response);
    Server.Gateways.emit("*", Payload);
    return Payload;
}
