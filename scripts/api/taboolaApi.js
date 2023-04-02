function getData(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        setTimeout(function () {
          openAndSend("GET", url);
        }, 3000);
      }
    }
  };

  openAndSend("GET", url);

  function openAndSend(method, url) {
    xhr.open(method, url);
    xhr.send();
  }
}
