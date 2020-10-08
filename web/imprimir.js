var $iframe = null; 

// This is supposed to fix the onload bug on IE, but it's not fired 
window.printIframeOnLoad = function() { 
    if (!$iframe.attr("src")) { return; } 
    var PDF = $iframe.get(0); 
    PDF.focus(); 

    try { 
    // This doesn't work on IE anyways 
    PDF.contentWindow.print(); 

    // I think on IE we can do something like this: 
    // PDF.document.execCommand("print", false, null); 
    } catch (e) { 
    // If we can't print it, we just open it in the current window 
    window.location = url; 
    } 
}; 

function printPdf(url) { 

    if ($iframe) { 
    $iframe.remove(); 
    } 

    $iframe = $('<iframe>', { 
    class: "hide", 
    id: "idPdf", 
    // Supposed to be a fix for IE 
    onload: "window.printIframeOnLoad()", 
    src: url 
    }); 

    $("body").prepend($iframe); 
} 