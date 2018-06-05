(function(){

let http = new XMLHttpRequest();
http.open("GET","https://api.unsplash.com/search/photos?page=1&query=flowers",false);
// fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');
http.send();
}())
