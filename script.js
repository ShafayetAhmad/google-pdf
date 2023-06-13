function searchGoogle() {
  var query = document.getElementById("query").value;
  var concatenatedQuery = query + " Doctype.pdf";
  var googleUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(concatenatedQuery);
    
  console.log(googleUrl);
  window.open(googleUrl, "_blank");
}

function searchPDFDrive() {
  var query = document.getElementById("query").value;
  var pdfDriveUrl =
    "https://www.pdfdrive.com/search?q=" +
    encodeURIComponent(query);
  console.log(pdfDriveUrl);
  window.open(pdfDriveUrl, "_blank");
}

function searchGutenberg() {
  var query = document.getElementById("query").value;
  var GutenbergUrl =
    "https://www.gutenberg.org/ebooks/search/?query=" +
    encodeURIComponent(query);
  console.log(GutenbergUrl);
  window.open(GutenbergUrl, "_blank");
}

function searchGenesis() {
  var query = document.getElementById("query").value;
  var GenesisUrl =
    "https://libgen.is/search.php?req=" + encodeURIComponent(query);
  console.log(GenesisUrl);
  window.open(GenesisUrl, "_blank");
}

