
# Request

* [Server](https://github.com/ServerfulArch/Core/blob/master/Documentation/Server.md)

**Requests**
* [Packet](https://github.com/ServerfulArch/Core/blob/master/Documentation/Packet.md)
* [Request](https://github.com/ServerfulArch/Core/blob/master/Documentation/Request.md)



The RequestManager is accessible through the Packet instance, using `Packet.Request`.

## [Cookies](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L22)
> A collection of all outgoing cookies. [**Read Only**]
>
> Type **{DataStore}**

## [Write](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L38)
> Outputs a body to the client and writes its state.
> | Key | Type | Description |
> | --- | --- | --- |
> | Body | String | Body to send to the client. |
>
> Returns **{RequestManager}** 

## [JSON](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L55)
> Outputs a valid JSON object and writes its state.
> | Key | Type | Description |
> | --- | --- | --- |
> | Document | Object, Array | A document to send to the client. |
>
> Returns **{RequestManager}** 

## [Render](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L65) [**Async**]
> Creates a render from an EJS template and writes it to the client.
> | Key | Type | Description |
> | --- | --- | --- |
> | Resource | String | An EJS string to render. |
> | Context? | Object | Information to apply as context to the renderer. |
>
> Returns **{RequestManager}** 

## [Headers](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L85)
> Sets a (list of) header(s) of this Packet.
> | Key | Type | Description |
> | --- | --- | --- |
> | KeyOrList | Object, String | Either a header key or an object with key/values. |
> | Value | Any | The header value when the first argument was a string. |
>
> Returns **{RequestManager}** 

## [Redirect](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L127)
> Redirects the user to another URL and ends this request.
> | Key | Type | Description |
> | --- | --- | --- |
> | Location | String | A base URL or relative path to redirect to. |
> | Status | Number | Alternate 300-based location status. |
>
> Returns **{Response}** 

## [End](https://github.com/ServerfulArch/Core/blob/master/lib/Managers/Request.js#L138)
> Marks this request as ended and sends it to the client.
> | Key | Type | Description |
> | --- | --- | --- |
> | Code | Number | A HTTP status code. |
> | Message | String? | Optional message to send within the body. |
>
> Returns **{Response}** 
