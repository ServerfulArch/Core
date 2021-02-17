
"use strict";

const Managers = require("../Managers");

class Packet {

    /**
     * An interface for responding to a client request.
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

    }

}

module.exports = Packet;
