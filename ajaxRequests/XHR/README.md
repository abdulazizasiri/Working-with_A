# using Unsplash API to request  data using XMLHttpRequest object.

## Steps to do an xhr request.

1- Create the xhr object.

```javascript
  var httpReuest = new XMLHttpRequest();

  ```

  2- use the .open() method to open the request.

    ~Note: The .open() takes a number of parameters (overloaded methods)
    the one we will use is the .open(method, url)

    method, refers to any of the http methods such as "GET", or "POST"
    url, refers to the URL we want to send our request to.

    boolean, this makes the request either async (true) or sync(false)

    ```javascript
    var httpReuest = new XMLHttpRequest();

    httpReuest.open("GET","https//SOMEDOMAIN.com",true)
      ```


  3- Sending the request using the .send method.
  This send the request to the url we want to get/post our request.


      ```javascript
      var httpReuest = new XMLHttpRequest();

      httpReuest.open("GET","https//SOMEDOMAIN.com", true)

      httpReuest.send();

        ```

  4- Handling success using the .onload() method, and it is the function called when an XMLHttpRequest transaction completes successfully.

  ```javascript
  var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url = 'https://developer.mozilla.org/';

  xmlhttp.open(method, url, true);
  xmlhttp.onload = function () {
    // Do something with the retrieved data ( found in xmlhttp.response )
  };
  xmlhttp.send();
    ```

  5- You can also handle errors using .onerror. it is the same as the .onload , but ot fires when there is any error happened.

  ```javascript
  function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred 😞' );
}

asyncRequestObject.onerror = handleError;
```
