chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('got message')
        if(request.method == "getText"){
            sendResponse({data: document.all[0].outerHTML, method: "getText"}); //same as innerText
        }
    }
);