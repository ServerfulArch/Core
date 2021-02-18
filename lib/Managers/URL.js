
"use strict";

module.exports = BaseURL => {
    const ParsedURL = new URL(BaseURL, "http://localhost/");
    const Path = ParsedURL.pathname.split("/").filter(Pr => !!Pr);

    return {
        Raw:      BaseURL,
        Path:     ParsedURL.pathname,
        Gateway:  Path[0],
        Endpoint: Path.pop(),

        Hash:   ParsedURL.hash || undefined,
        Search: ParsedURL.searchParams
    };
}
