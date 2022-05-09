$(document).ready(function() {
      function show() {
        var temp;
        var icon;
        var apiKey = "04af41c5c5bdfd373fb5c9466440b89e";
  
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=34.1526&lon=77.5771&appid=" + apiKey, function(data) {
          icon = "http://openweathermap.org/img/wn/"+data["weather"][0]['icon'] +"@2x.png";
          city_name = data["name"];
          temp = Math.round(((data["main"]["temp"] - 273.15) + Number.EPSILON) * 10) / 10 ;
  
          $(".owm-temp").text(+ ' ' + temp + '°C');
          $(".owm-country").text(city_name.toUpperCase());
          $(".owm-icon").prepend('<img id="theImg" src="' + icon + '" class="cloud"/>');
        })
  
      }
      show();
  })