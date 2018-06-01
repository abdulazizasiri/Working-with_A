
Callbacks are functions that are an argument for another function. It executes usually in RESTful APIs by grabbing data from another computer/server/database (these are called heavy operation) without blocking the main thread since javascript is a single thread. it uses callbacks to process operation that might cause blocking the main thread.


An example of a callback is a jQuery method called:

```javascript

$.get 

```
