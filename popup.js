let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
  chrome.tabs.getSelected(null, function(tab) {
      
      chrome.tabs.sendMessage(tab.id, {method: "getText"}, function(response) {
        console.log(response)
        if(response.method=="getText"){
            console.log(response.data);
            chrome.tabs.create({url: chrome.extension.getURL('newTab.html')});
        }
    });
});  