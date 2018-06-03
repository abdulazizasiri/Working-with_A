
When working with AJAX requests, we use the constructor called, XMLHttpRequest

```javascript
  let http = new XMLHttpRequest(); // create an ajax object.
  http.onreadystatechange = function() {
    console.log(http);
  }
  http.open("GET", "data/tweets.json", true);
  http.send();

};

```
