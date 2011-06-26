/* This code prevents users from dragging the page */
var preventDefaultScroll = function(event) {
    event.preventDefault();
    window.scroll(0,0);
    return false;
};

document.addEventListener('touchmove', preventDefaultScroll, false);
