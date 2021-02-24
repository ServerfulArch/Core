
"use strict";

const Managers = require("../Managers");

class Packet {

    /**
     * An interface for responding to a client request.
     * @example MyServer.Incoming(Packet => { ... });
     */
    constructor (Request, Response) {

        // Static symbols

        /**
         * Native HTTP request instance.
         * @name Packet#_Request
         * @type {Request}
         * @private
         */
        Object.defineProperty(this, "_Request", {
            value: Request
        });

        /**
         * Native HTTP response instance.
         * @name Packet#_Response
         * @type {Response}
         * @private
         */
        Object.defineProperty(this, "_Response", {
            value: Response
        });


        // Dynamic variables

        /**
         * Method used for this request.
         * @name Packet#Method
         * @type {String}
         * @readonly
         */
        Object.defineProperty(this, "Method", {
            enumerable: true,
            value: Request.method
        });

        /**
         * Headers used for this request.
         * @name Packet#Headers
         * @type {Object}
         * @readonly
         */
        Object.defineProperty(this, "Headers", {
            enumerable: true,
            value: Request.headers
        });

        /**
         * Packet's request manager instance.
         * @name Packet#Request
         * @type {RequestManager}
         * @readonly
         */
        Object.defineProperty(this, "Request", {
            enumerable: true,
            value: new (Managers.get("Request"))(Response)
        });

        /**
         * Parsed and formatted URL of this request.
         * @name Request#URL
         * @type {Object}
         * @readonly
         */
        Object.defineProperty(this, "URL", {
            enumerable: true,
            value: Managers.get("URL")(Request.url)
        });


        // Cache

        /**
         * Parsed body cache.
         * @name Packet#_Body
         * @type {Object|Array}
         * @private
         */
        Object.defineProperty(this, "_Body", {
            writable: true,
            value: null
        });

        /**
         * Parsed cookie cache.
         * @name Packet#_Cookies
         * @type {Object}
         * @private
         */
        Object.defineProperty(this, "_Cookies", {
            writable: true,
            value: null
        });

    }


    /**
     * Manages the elements of cookies, which includes the
     * creation, deletion and retrieval of the cookie items.
     * @param {String} [Key] If creating or erasing a cookie, an identifier that represents this cookie.
     * @param {String} [Value] If creating a cookie, a value for this cookie.
     * @param {CookieOptions} [Options] Additional options for the creation of the cookie.
     * @returns {Object|DataStore}
     */
    Cookie (Key, Value, Options = {}) {
        // Set
        if (Key && Value) {
            const Settings = {Value: decodeURIComponent(Value), ...Options};
            this.Request.Cookies.set(Key, Settings);
            return this.Request.Cookies;
        }

        // Erase
        if (Key) {
            this.Request.Cookies.set(Key, {Value: "", "Max-Age": 0});
            return this.Request.Cookies;
        }

        // Parse
        if (this._Cookie) return this._Cookie;
        if (!this.Headers.cookie) return {};

        const Cookie = Object.fromEntries(this.Headers.cookie.split(";")
            .map(Entry => Entry.trim().split("="))
        );

        this._Cookie = Cookie;
        return Cookie;
    }

    /**
     * Resolves and parses the request's body as JSON.
     * Rejects the Promise if any error occurred, including parse errors.
     * @returns {Promise<Object|Array>}
     */
    Body () {
        return new Promise((Resolve, Reject) => {
            if (this._Body) return Resolve(this._Body);
            let RequestInfo = "";

            this._Request
            .on("error", Reject)
            .on("data", Chunk => RequestInfo += Chunk)
            .on("end", () => {
                if (!RequestInfo) this._Body = {};
                else this._Body = JSON.parse(RequestInfo);
                return Resolve(this._Body);
            });
        });
    }

}

module.exports = Packet;
