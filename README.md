
# Serverful
## The core Serverful library

[[Contribute](#issues-contributing--license)] [[Documentation](https://github.com/ServerfulArch/Core/blob/master/Documentation/Index.md)]

> An interface for creating HTTP servers, together with powerful features and extensions.


# Main Features
* Effective and performant HTTP interface.
* Shortcut behaviour, like gateways and redirects.
* Optional integration of EJS templates.
* Native cookie parsing.

## Links
* [Documentations](https://github.com/ServerfulArch/Core/blob/master/Documentation/Index.md)
* [Github](https://github.com/Serverful/Core)

## Extensions
* [Public file server](https://github.com/ServerfulArch/Public)

## Install/Import
`npm install @serverful/core`
```js
const Serverful = require("@serverful/core");
// ...
```


# Usage
Creation of a Serverful instance.
```js
const MyServer = new Serverful(Port);
```

## Gateways
```js
// /**
MyServer.Incoming(Handler);

// /public/**
MyServer.Gateway("public", Handler);

// /api/**
MyServer.Gateway("api", Handler);
```

## Requests
```js
// Redirect the user relatively or absolute.
Packet.Request.Redirect("/dashboard/");
Packet.Request.Redirect("https://duckduckgo.com/");

// Render an EJS template.
Packet.Request.Render(EJSTemplate, Document)
.then(() => Packet.Request.End(200))
.catch(() => Packet.Request.End(500));

// JSON.
Packet.Request.JSON(Document);
```


# Issues, Contributing & License
Before making an issue for a bug or feature submittion, please ensure that it hasn't already been created [on the repository](https://github.com/ServerfulArch/Core/issues).

This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
