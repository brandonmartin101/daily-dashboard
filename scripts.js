console.log("hello from afar");

var bingURL = "http://www.bing.com/HPImageArchive.aspx?format=rss&idx=0&n=1&mkt=en-US";
$.ajax({
  type: "GET",
  url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(bingURL),
  beforeSend: function() {
    console.log("starting background load");
  },
  dataType: "json",
  error: function(){
    alert('Unable to load feed, Incorrect path or invalid feed');
  },
  success: function(xml){
    var values = xml.responseData.feed.entries;
    console.log(values);
    console.log(xml.responseData.feed.entries);
    $.each(xml.responseData.feed.entries, function (i, e) {
      console.log("titl   : " + e.title);
      console.log("link   : " + e.link);

      var backgroundLink = e.link;
      $("body").css("background","url('http://www.bing.com"+backgroundLink+"')");

    });
  }
})
  .done(function(data) {
    console.log("background loaded");
  })
  .fail(function() {
    console.log("background load failed");
  });

$("#asanaSortable").sortable();
$(".asana").hover(
  function() {
    $(this).css("background-color","rgb(200,200,200)");
  }, function() {
    $(this).css("background-color","rgb(150,150,150)");
  });

$("#dailySortable").sortable();
$(".daily").hover(
  function() {
    $(this).css("background-color","rgb(200,200,200)");
  }, function() {
    $(this).css("background-color","rgb(150,150,150)");
  });
