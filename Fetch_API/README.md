# FETCH API


## Some Info.

The fetch API is a  promise-based which means it utilizes the promise featured added to ES6.

NOTE: Some browser do not support promises, so one might need to add a Polyfill.


## Writing a fetch request.

The syntax:

```javascript

fetch('<URL-to-the-resource-that-is-being-requested>');

fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');


```

## More in syntax.

Promise<Response> fetch(input[, init]);
[Link to this syntax is from MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

input
This defines the resource that you wish to fetch. This can either be:
A USVString containing the direct URL of the resource you want to fetch. Some browsers accept blob: and data: as schemes.
A Request object.


init has many parameters.

## Chaining HTTP method.


```javascript
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    method: 'POST'
});
```


## handling the response.

After creating the promise, you can use the "then" method to handle all the result.


```javascript
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
}).then(function(response) {
    debugger; // work with the returned response
});

```
