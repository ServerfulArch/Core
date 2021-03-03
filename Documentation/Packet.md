
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

# Methods
## [.Cookie(Key?, Value?, Options?)](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L111)
> Manages the elements of cookies, which includes the creation, deletion and retrieval of the cookie items.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key? | String | If creating or erasing a cookie, an identifier that represents this cookie. |
> | Value? | String | If creating a cookie, a value for this cookie. |
> | Options? | CookieOptions | Additional options for the creation of the cookie. |
>
> Returns **{Object|DataStore}** 

## [.Body(QueryEncoded?)](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L145)
> Resolves and parses the request's body as JSON or URL-encoded string. Rejects the Promise if any error occurred, including parse errors.
> | Key | Type | Description |
> | --- | --- | --- |
> | QueryEncoded? | Boolean | Whether to parse the body as query parameters. |
>
> Returns **{Promise<Object|Array>}** 

# Typedefs
## [CookieOptions](https://github.com/ServerfulArch/Core/blob/master/lib/Structures/Packet.js#L179)
> Additional options for a response cookie. 
> | Key | Type | Description |
> | --- | --- | --- |
> | Domain | String | A domain where this cookie can be accessed from. Defaults to the `DOMAIN` environment variable. |
> | Age | Number | A period in seconds to keep this cookie. Defaults to the `DEFAULT_COOKIE_AGE` environment variable, or 300. |
> | Secure | Boolean | Whether or not this cookie should only be used on HTTPS. Defaults to the `DEFAULT_COOKIE_SECURE` environment variable, or true. |
> | HttpOnly | Boolean | Whether or not this cookie can only be accessed by HTTP, not frontend `document.cookie`. Defaults to the `DEFAULT_COOKIE_HTTP` environment variable, or false. |
>
> Type **{Object}**
