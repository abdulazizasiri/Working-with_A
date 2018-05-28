
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $city = $("#city").val();
    var $street = $("#street").val();
    var $conCat = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+$street+", "+$city ;

    $("#greeting").text("So, you want to live at: "+$street+","+$city )
    $body.append('<img class="bgimg" src='+$conCat+">");
    // $wikiElem.text("");
    // $nytElem.text("");
    // load streetview
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'q':$street+","+$city,
    'api-key': "70bc4527b0df4f8b96747be82eb44518"
    });
    $.getJSON(url, function(data) {

      data.response.docs.forEach((i)=>{

        $("#nytimes-articles").after("<li class=articel> <a href="+i.web_url+">"+i.headline.main+"</a></li>")
      })
    })

    return false;
};

$('#form-container').submit(loadData);
