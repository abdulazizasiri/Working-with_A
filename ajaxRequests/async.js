// window.onload = function() {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    console.log(http);
  }
  http.open("GET", "data/tweets.json", true);
  http.send();


};

// STEPS

/*
1- request not initilize
2- request has been set up
3- request has been sent
4- request is in process
4- request is complete

// SOURCE:  the youtuber, the net ninja
*/



// callback function


  window.onload = function() {

    $.getJSON("data/tweets.json",function(data){
      console.log(datalist);
    });
    console.log("TEST")

 }
