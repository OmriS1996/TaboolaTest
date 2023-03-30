"use strict";

function getData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        callback(null, data);
      } else {
        callback(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
