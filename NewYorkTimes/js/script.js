
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $city = $("#city").val();
    var $street = $("#street").val();
    var $conCat = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+$city+$street ;

    // clear out old data before new request
    $body.append('<img class="bgimg" src='+$conCat+">");
    // $wikiElem.text("");
    // $nytElem.text("");
    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
