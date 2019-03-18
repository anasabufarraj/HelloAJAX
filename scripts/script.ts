// © Anas Abu Farraj
// AJAX Training Project
// September 5, 2018

// var button = document.getElementById('button');
// var paragraph = document.getElementById('text');
//
// // trigger function on click
// button.addEventListener('click', function loadData() {
//   // creating XMLHttpRequest (XHR) object
//   const http = new XMLHttpRequest();
//
//   // initializing request
//   http.open('GET', 'data/sample.txt', true);
//
//   // when request state is ready.
//   http.onreadystatechange = function() {
//     // if transaction completes successfully.
//     if (this.readyState == 4 && this.status == 200) {
//       paragraph.innerText = this.responseText;
//       console.log('Status', http.status);
//       console.log(http.getAllResponseHeaders());
//     }
//   };
//
//   // sending request
//   http.send();
// });
//
// /*
// * 1- initialize a request
// * 2- on ready state change, change content
// * 3- send the request
// * 4- ready to be used by the user
// * */
