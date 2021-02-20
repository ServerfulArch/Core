
# Packet

* [Server](https://github.com/ServerfulArch/Core/blob/master/Documentation/Server.md)

**Requests**
* [Packet](https://github.com/ServerfulArch/Core/blob/master/Documentation/Packet.md)
* [Request](https://github.com/ServerfulArch/Core/blob/master/Documentation/Request.md)

An interface for responding to a client request.
```js
MyServer.Incoming(Packet => { ... });
```



# Values
## [.Method](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L39)
> Method used for this request. [**Read Only**]
>
> Type **{String}**

## [.Headers](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L50)
> Headers used for this request. [**Read Only**]
>
> Type **{Object}**

## [.Request](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L61)
> Packet's request manager instance. [**Read Only**]
>
> Type **{RequestManager}**

## [.URL](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L72)
> Parsed and formatted URL of this request. [**Read Only**]
>
> Type **{Object}**
