// $( document ).ready(function() {

window.onload = function() {

  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    if (http.readyState === 4 && http.status === 200){
          console.log(JSON.parse(http.response));
          console.log(http.responseType);
    }
  }
 http.open("GET", 'tweets.json', true); // true means async call.
  http.send();


}
