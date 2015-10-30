
function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    //var $location = this[0].value + ', ' + this[1].value;
    var $street = this[0].value;
    var $city = this[1].value;
    var address = $street + ', ' + $city;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $greeting.text('You want to live at ' + address);
    var imageUrl = 'https://maps.googleapis.com/maps/api/streetview?location=' + address + '&size=600x400';
    var imgHTTP = '<img class="bgimg" src="' + imageUrl + '">'
    $(imgHTTP).appendTo('body');
    
    // get NY Times articles
    $.getJSON('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + $city + '&sort=newest&api-key=e85356e69c155699342a0949a8fa12ae%3A4%3A73337668', function(data){        
        
    })
    .success(function(data) {
        var items = [];
        $.each(data.response.docs, function(key, val) {
            items.push("<li class='article'><a href='" + val.web_url + "'>" + val.headline.main + "</a></li>");
        });

        $(items.join("")).appendTo($nytElem);
    })
    .error(function(){
        $('<li>No articles found!</li>').appendTo($nytElem)
    });
    

    // get Wikipedia articles
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch1&type=json&search=' + $city + '',
        dataType: 'jsonp',
        success: function(response) { 
            //console.log(response[1]);
            var articles = response[1];
            for (var i = 0; i < articles.length; i++) {
                articleStr = articles[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            };
        }
    })

    return false;
};

$('#form-container').submit(loadData);
