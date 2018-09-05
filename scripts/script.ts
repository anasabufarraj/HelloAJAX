// © Anas Abu Farraj
// AJAX Training Project
// September 4, 2018

var button = document.getElementById('button');
var paragraph = document.getElementById('text');

function loadDoc() {
  // creating XMLHttpRequest (XHR) object
  var XHttpRequest = new XMLHttpRequest();

  // initializing request
  // open(method, url, async, user, psw)
  XHttpRequest.open('GET', 'sample.txt', true);

  // get data when transaction completes successfully.
  XHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      paragraph.innerText = this.responseText;
      console.log('Status', XHttpRequest.status);
      console.log(XHttpRequest.getAllResponseHeaders());
    }
  };

  // sending request
  XHttpRequest.send();
}

// catch button click event
// trigger function
button.addEventListener('click', loadDoc);
