
"use strict";

const Packet = require("./Packet");

module.exports = (Request, Response, Server) => {
    const Payload = new Packet(Request, Response);

    Server.Gateways.emit("*", Payload);
    const Gateway = Payload.URL.Gateway;
    if (Gateway) Server.Gateways.emit(Gateway, Payload);

    return Payload;
}
