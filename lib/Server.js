
const Handler = require("./Service/Incoming");

const HTTP = require("http");
const {EventEmitter} = require("events");

class Server {

    constructor (Port) {

        if (typeof Port !== "number") {
            throw new TypeError("Port should be a type of Integer.");
        }

        /**
         * Server's port configuration.
         * @name Server#Port
         * @type {Number}
         * @readonly
         */
        Object.defineProperty(this, "Port", {
            enumerable: true,
            value: Port
        });

        /**
         * A structure defining all gateway listeners.
         * @name Server#Gateways
         * @type {EventEmitter}
         * @private
         */
        Object.defineProperty(this, "Gateways", {
            value: new EventEmitter()
        });

        /**
         * Server's REST connection.
         * @name Server#Connection
         * @type {HTTP}
         * @private
         */
        Object.defineProperty(this, "Connection", {
            value: null
        });

        this.Connect();

    }


    /**
     * Publishes a new server addressed by the port of this Server.
     * @returns {Server}
     * @private
     */
    Connect () {
        if (this.Connection) {
            throw new Error("Server already has a REST connection.");
        }

        const Connection = HTTP.createServer(Handler);
        this.Connection = Connection.listen(this.Port);
        return Connection;
    }

    /**
     * Registers a new function which will get executed by each request.
     * @param {Function} Handler A function which'll get executed by each request.
     * @returns {Server}
     */
    Incoming (Handler) {
        if (typeof Handler !== "function") {
            throw new TypeError("Handler should be a type of Function.");
        }

        this.Gateways.on("*", Handler);
        return this;
    }

    /**
     * Registers predefined routes based on the first argument in the URI.
     * @param {Object|String} PrefixOrList Either a new gateway key or an object with key/values.
     * @param {Function?} Handler A function which'll get executed by each of this gateway request.
     * @returns {Server}
     */
    Gateway (PrefixOrList, Handler) {
        if (typeof PrefixOrList === "object") {
            for (const [Prefix, Method] of Object.entries(PrefixOrList))
            this.Gateway(Prefix, Method);
            return this;
        }

        if (typeof PrefixOrList !== "string") throw new TypeError("Prefix should be a type of String.");
        if (typeof Handler !== "function")    throw new TypeError("Handler should be a type of Function.");

        this.Gateways.on(PrefixOrList, Handler);
        return this;
    }

}

module.exports = Server;
