var button = document.getElementById('button');
var paragraph = document.getElementById('text');
function loadDoc() {
    var XHttpRequest = new XMLHttpRequest();
    XHttpRequest.open('GET', 'sample.txt', true);
    XHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            paragraph.innerText = this.responseText;
            console.log('Status', XHttpRequest.status);
            console.log(XHttpRequest.getAllResponseHeaders());
        }
    };
    XHttpRequest.send();
}
button.addEventListener('click', loadDoc);
//# sourceMappingURL=script.js.map