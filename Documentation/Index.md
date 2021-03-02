
# Serverful Documentations

### Install/Import
`npm install @serverful/core`
```js
const Serverful = require("@serverful/core");
```

### Classes
* [Server](https://github.com/ServerfulArch/Core/blob/master/Documentation/Server.md)

**Requests**
* [Packet](https://github.com/ServerfulArch/Core/blob/master/Documentation/Packet.md)
* [Request](https://github.com/ServerfulArch/Core/blob/master/Documentation/Request.md)

### Extensions
Registers a validated extension for Serverful.
```js
Serverful.Extension(ServerfulExtension);
```

Plugins can differ from each other, and sometimes they don't require you to register them using this function. See the usage guide of the extension(s) you're using.
