
const Managers = require("../Managers");

class Packet {

    /**
     * An interface for responding to a client request.
     */
    constructor (Request, Response) {

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

    }

}

module.exports = Packet;
