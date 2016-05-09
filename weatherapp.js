
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
              $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=17ad6be3014a19387f70ac276ebbb306", function(json) {
                  var kelvin = json.main.temp;
                  var fahr = Math.floor(1.8 * (kelvin - 273) + 32);
                  var cel = Math.floor(kelvin - 273);
                  $("#data").append(fahr + " F");
                  var toggle = true;
                  $('#data').on("click", function(){
                    if(toggle){
                      $("#data").html(cel + " C");
                      toggle = false;
                    }else{
                      $("#data").html(fahr + " F");
                      toggle = true;
                    }
                  });
                  if(fahr > 80){
                    $('#weatherpic').append("<img src ='http://newsms.fm/wp-content/uploads/2013/06/Sun.jpg'>")
                  }else if(fahr >60 && fahr <= 80){
                    $('#weatherpic').append("<img src ='http://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/a/e2/ae2d58a4-cea3-11e5-b3b2-d3e12daefebc/56b8fc8f08e38.image.jpg?resize=620%2C404'>")
                  }else if(fahr > 30 && fahr <= 60){
                    $('#weatherpic').append("<img src ='https://s-media-cache-ak0.pinimg.com/736x/dd/0e/e3/dd0ee3451bd25351afb3526c0742c13c.jpg'>")
                  }else if(fahr > 0 && fahr <= 30){
                    $('#weatherpic').append("<img src ='http://www.cold-sore-cures-and-treatments.com/wp-content/uploads/2012/04/Cold-Weather.jpg'>")
                  }else{
                    $('#weatherpic').append("<img src ='http://www.bestmag.co.uk/sites/default/files/styles/news-listings-image/public/freezing%20winter_0.jpg?itok=rK5Fe-UQ'>")
                  }
              });
        });
}
