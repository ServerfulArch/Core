
# Serverful

> An interface for creating HTTP servers, together with powerful features and extensions.


# Features
* Effective and performant HTTP interface.
* Shortcut behaviour, like gateways and redirects.
* Optional integration of EJS templates.
* Native cookie parsing.
* Rich extension management.

## Links
* [Documentations](https://github.com/ServerfulArch/Core/blob/master/Documentation/Index.md)
* [Github](https://github.com/Serverful/Core)

## Extensions
* [Public file server](https://github.com/ServerfulArch/Public)
* [View selector](https://github.com/ServerfulArch/Views)

## Installation
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

Registration of Serverful extensions.
```js
Serverful.Extension(ServerfulExtension);
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
// Handler
// Redirect the user relatively or absolute.
Packet.Request.Redirect("/dashboard/index");
Packet.Request.Redirect("https://duckduckgo.com/");

// Render an EJS template.
Packet.Request.Render(EJSTemplate, Document)
.then(() => Packet.Request.End(200))
.catch(() => Packet.Request.End(500));

// JSON.
Packet.Request.JSON(Document);
```


This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
