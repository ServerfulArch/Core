
"use strict";

const Keywords = require("./Keywords");

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

        this.Headers("Content-Length", Body.length);
        if (this.Cookies.size) this.ExportCookies();
        this._Response.write(Body);

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


    // Headers

    /**
     * Sets a (list of) header(s) of this Packet.
     * @param {Object|String} KeyOrList Either a header key or an object with key/values.
     * @param {*} Value The header value when the first argument was a string.
     * @returns {RequestManager}
     */
    Headers (KeyOrList, Value) {
        if (typeof KeyOrList === "object") {
            for (const [Key, Val] of Object.entries(KeyOrList))
            this.Headers(Key, Val);
            return this;
        }

        if (typeof KeyOrList !== "string") {
            throw new TypeError("KeyOrList should be a type of String.");
        }

        this._Response.setHeader(KeyOrList, Value);
        return this;
    }

    /**
     * Sends the cookies of this request to the client.
     * @returns {RequestManager}
     */
    ExportCookies () {
        const Jar = this.Cookies.map((Cookie, Key) => [`${Key}=${Cookie.Value}`,
            `Max-Age=${Cookie.hasOwnProperty("Max-Age") ? Cookie["Max-Age"] : process.env.COOKIE_DEFAULT_AGE}`,
            "SameSite=Strict", `Domain=${process.env.DOMAIN}`, "Path=/",
            "Secure", "HttpOnly"
        ]).join("; ");

        this.Headers("Set-Cookie", Jar);
        this.Cookies.clear();

        return this;
    }


    // State

    /**
     * Redirects the user to another URL and ends this request.
     * @param {String} Location A base URL or relative path to redirect to.
     * @param {Number} Status Alternate 300-based location status.
     * @returns {Response}
     */
    Redirect (Location, Status) {
        this.Headers("Location", Location);
        return this.End(Status || 303);
    }

    /**
     * Marks this request as ended and sends it to the client.
     * @param {Number} Code A HTTP status code.
     * @param {String?} Message Optional message to send within the body.
     * @returns {Response}
     */
    End (Code, Message = undefined) {
        this._Response.statusCode = Code;

        if (typeof Message === "string") {
            const Keyword = Keywords[Code];
            this.JSON({Key: Keyword, Message, Code});
            this._Response.statusMessage = `${Keyword}: ${Message}`;
        }

        if (this.Cookies.size) this.ExportCookies();
        return this._Response.end();
    }

}

module.exports = RequestManager;
