
module.exports = {
    // General statuses
    100: "Continue",
    102: "Processing",

    200: "OK",
    201: "Created",
    202: "Accepted",

    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",

    // Server management
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    408: "Request Timeout",

    // Pre-requisites
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",

    // Timeout
    429: "Too Many Requests",

    // Server errors
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
};
