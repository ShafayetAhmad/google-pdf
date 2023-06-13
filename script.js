function searchGoogle() {
  var query = document.getElementById("query").value;
  var concatenatedQuery = query + " Doctype.pdf";
  var googleUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(concatenatedQuery);
  window.open(googleUrl, "_blank");
}

function searchPDFDrive() {
  var query = document.getElementById("query").value;
  var pdfDriveUrl =
    "https://www.pdfdrive.com/search?q=" +
    encodeURIComponent(query);
  window.open(pdfDriveUrl, "_blank");
}

function searchGutenberg() {
  var query = document.getElementById("query").value;
  var GutenbergUrl =
    "https://www.gutenberg.org/ebooks/search/?query=" +
    encodeURIComponent(query);
  window.open(GutenbergUrl, "_blank");
}

function searchGenesis() {
  var query = document.getElementById("query").value;
  var GenesisUrl =
    "https://libgen.is/search.php?req=" + encodeURIComponent(query);
  window.open(GenesisUrl, "_blank");
}

function academictorrents() {
  var query = document.getElementById("query").value;
  var atUrl =
    "https://academictorrents.com/browse.php?search=" +
    encodeURIComponent(query);
  window.open(atUrl, "_blank");
}

function archive() {
  var query = document.getElementById("query").value;
  var archiveUrl =
    "https://archive.org/details/texts?query=" + encodeURIComponent(query);
  window.open(archiveUrl, "_blank");
}
