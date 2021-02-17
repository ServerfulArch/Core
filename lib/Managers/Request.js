
"use strict";

const {DataStore} = require("qulity");

class RequestManager {

    constructor (Response) {

        /**
         * Native HTTP response instance.
         * @name RequestManager#_Response
         * @type {Response}
         * @private
         */
        Object.defineProperty(this, "_Response", {
            value: Response
        });

        /**
         * A collection of all outgoing cookies.
         * @name RequestManager#Cookies
         * @type {DataStore}
         * @readonly
         */
        Object.defineProperty(this, "Cookies", {
            enumerable: true,
            value: new DataStore()
        });

    }


    // Content

    /**
     * Outputs a body to the client and writes its state.
     * @param {String} Body Body to send to the client.
     * @returns {RequestManager}
     */
    Write (Body) {
        if (typeof Body !== "string") {
            throw new TypeError("Body must be a type of String.");
        }

        this.Response.setHeader("Content-Length", Body.length);
        if (this.Cookies.size) this.ExportCookies();
        this.Response.write(Body);

        return this;
    }

    /**
     * Outputs a valid JSON object and writes its state.
     * @param {Object|Array} Document A document to send to the client.
     * @returns {RequestManager}
     */
    JSON (Document) {
        const Body = JSON.stringify(Document);
        return this.Write(Body);
    }

    /**
     * Creates a render from an EJS template and writes it to the client.
     * @param {String} Resource An EJS string to render.
     * @param {Object} [Context] Information to apply as context to the renderer.
     * @returns {RequestManager}
     */
    async Render (Resource, Context = {}) {
        const EJS = require("ejs");

        const Render = await EJS.render(Resource, Context, {
            async: true
        });

        this.Write(Render);
        return this;
    }

}

module.exports = RequestManager;
