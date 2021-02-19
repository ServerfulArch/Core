
# Server

* [Server](https://github.com/ServerfulArch/Core/blob/master/Documentation/Server.md)

**Requests**
* [Packet](https://github.com/ServerfulArch/Core/blob/master/Documentation/Packet.md)
* [Request](https://github.com/ServerfulArch/Core/blob/master/Documentation/Request.md)

The main interface for a Serverful server.
```js
const MyServer = new Serverful(80);
```

| Key | Type | Description |
| --- | --- | --- |
| Port | Number | A port for this instance to listen to. |



# Values
## [.Port](https://github.com/ServerfulArch/Core/blob/master/lib/Server.js#L23)
> Server's port configuration. [**Read Only**]
>
> Type **{Number}**

# Methods
## [.Incoming(Handler)](https://github.com/ServerfulArch/Core/blob/master/lib/Server.js#L75)
> Registers a new function which will get executed by each request.
> | Key | Type | Description |
> | --- | --- | --- |
> | Handler | Function | A function which'll get executed by each request. |
>
> Returns **{Server}** 

## [.Gateway(PrefixOrList, Handler)](https://github.com/ServerfulArch/Core/blob/master/lib/Server.js#L89)
> Registers predefined routes based on the first argument in the URI.
> | Key | Type | Description |
> | --- | --- | --- |
> | PrefixOrList | Object, String | Either a new gateway key or an object with key/values. |
> | Handler | Function | A function which'll get executed by each of this gateway request. |
>
> Returns **{Server}** 
