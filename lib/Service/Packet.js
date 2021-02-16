
const Managers = require("../Managers");

class Packet {

    /**
     * An interface for responding to a client request.
     */
    constructor (Request, Response) {

        // Static symbols

        /**
         * Native HTTP request instance.
         * @name Packet#Request
         * @type {Request}
         * @private
         */
        Object.defineProperty(this, "Request", {
            value: Request
        });

        /**
         * Native HTTP response instance.
         * @name Packet#Response
         * @type {Response}
         * @private
         */
        Object.defineProperty(this, "Response", {
            value: Response
        });

        /**
         * A Collection including all response Managers.
         * @name Packet#Managers
         * @type {Collection}
         * @readonly
         */
        Object.defineProperty(this, "Managers", {
            value: Managers
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

    }

}

module.exports = Packet;
