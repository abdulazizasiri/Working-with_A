// $( document ).ready(function() {

window.onload = function(){

  function get(url){
    return new Promise (function(resolve, reject){
    var xhttp = new XmlHttpRequest();
    xhttp.open("GET",url,true);
    xhttp.onload = function(){
      if (xhttp.status === 200 ){
        resolve(JSON.parse(xhttp.response));
      } else {
        reject(xhttp.statusText);
      }
    };
    xhttp.onerror = function () {
      reject(xhttp.statusText);
    };
    xhttp.send();
  });
}

var promise = get('tweets.json');
promise.then(function(data){
  console.log(data);
})

}
