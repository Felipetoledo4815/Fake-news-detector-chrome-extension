// // Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });
chrome.storage.local.get('key', function(result) {
  console.log(result);
  var data = JSON.stringify({text: [new String(result.key)]});

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:5000/predict", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) { // 4 means done
      console.log('xhr response: '+ xhr.responseText);
      const obj = JSON.parse(xhr.responseText);
      var pred;
      if (obj.prediction == 1){
        pred = 'REAL'
        $('.detected').css({'display': 'none'});
      }
      else {
          pred = 'FAKE';
          $('.detected').css({'display': 'block'});
     
      }
      // $('#results').replaceWith(pred);
      
  }
}
console.log(data)
xhr.send(data);


    console.log('Value currently is ' + result.key);
  });