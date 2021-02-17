
"use strict";

module.exports = BaseURL => {
    const ParsedURL = new URL(BaseURL, "http://localhost/");

    return {
        Raw:     BaseURL,
        Path:    ParsedURL.pathname,
        Gateway: ParsedURL.pathname.split("/")[1],

        Hash:   FormURL.hash || undefined,
        Search: FormURL.searchParams
    };
}
