function searchGoogle() {
  var query = document.getElementById("query").value;
  var concatenatedQuery = query + " Doctype.pdf";
  var searchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(concatenatedQuery);

  window.open(searchUrl, "_blank");
}


// TODO: add multiple pdf sites
