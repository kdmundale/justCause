function getJoke(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://icanhazdadjoke.com/";

  xmlhttp.open("GET", url, true);
  xmlhttp.setRequestHeader('User-Agent', "https://kdmundale.github.io/justCause/");
  xmlhttp.setRequestHeader("Accept", "application/json");
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var result= xmlhttp.responseText;
      var jsResult = JSON.parse(result);
      var dadJoke = jsResult.joke;
      document.getElementById('title').style.display = 'none';
      document.getElementById('jokeDisplay').style.display = "inline-block";
      document.getElementById('jokeDisplay').innerHTML = dadJoke;
    };
  };
};
