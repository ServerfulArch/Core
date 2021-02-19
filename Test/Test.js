
const Serverful = require("../Core");

const MyServer = new Serverful(80);

MyServer.Gateway("public",  Packet => Packet.Request.End(206, "public gateway"));
MyServer.Gateway("content", Packet => Packet.Request.End(206, "content gateway"));
MyServer.Gateway("api",     Packet => Packet.Request.End(206, "api gateway"));
