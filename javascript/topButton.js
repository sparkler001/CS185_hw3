//Get the button:
topButton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

var height=document.body.offsetHeight;

function scrollFunction() {
    if (document.body.scrollTop >= 0.25*height|| document.documentElement.scrollTop >= 0.25*height) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Quote and inspired by WEB DEV SIMPLIFIED CHANNEL FROM https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
