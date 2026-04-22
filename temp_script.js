
    window.onerror = function(message, source, lineno, colno, error) {
        var errDiv = document.createElement('div');
        errDiv.style.cssText = 'color:red; background:white; position:fixed; z-index:9999; top:0; left:0; width:100%; padding:20px; font-size:20px; border-bottom: 2px solid black; font-family: monospace;';
        errDiv.innerHTML = '<b>JS ERROR:</b> ' + message + '<br>Line: ' + lineno;
        document.body.appendChild(errDiv);
        return false;
    };
    
