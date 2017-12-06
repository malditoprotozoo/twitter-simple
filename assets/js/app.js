var tweet = document.getElementById("tweet");
var seccionTweets = document.getElementById("tweets-aqui");

tweet.addEventListener("click", function() {
  var comentario = document.getElementById("comentario").value;
  document.getElementById("comentario").value = "";
  /* Si la variable comentario tiene un string vacio, 
  entonces aplica lo siguiente */
  if (comentario !== "" && comentario !== " "){
    var contenedorParrafo = document.createElement("div");
    var parrafo = document.createElement("p");
    var textoTweet = document.createTextNode(comentario);
    parrafo.appendChild(textoTweet);
    contenedorParrafo.appendChild(parrafo);
    seccionTweets.appendChild(contenedorParrafo);
    contenedorParrafo.setAttribute("class", "posteo");
  /* En caso contrario, adviertele al usuario que ingrese algún texto */
  } else {
    alert("Ingresa algo");
  }

});