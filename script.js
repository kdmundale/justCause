function getJoke(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://icanhazdadjoke.com/";

  xmlhttp.open("GET", url, true);
  //xmlhttp.setRequestHeader(User-Agent:, "kdmundale192@stevenscollege.edu");
  xmlhttp.setRequestHeader("Accept", "application/json");
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var result= xmlhttp.responseText;
      var jsResult = JSON.parse(result);
      var dadJoke = jsResult.joke;
      document.getElementById('jokeDisplay').innerHTML = dadJoke;
    };
  };
};
