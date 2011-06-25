var Tetris = require('Tetris/Tetris').Tetris;
var screen = require('Tetris/screen').screen;

/* This code prevents users from dragging the page */
var preventDefaultScroll = function(event) {
    event.preventDefault();
    window.scroll(0,0);
    return false;
};

/* Touch input handling */
var parseTouchInput = function(event){
    var touch = event.touches[0];
    if( screen.getInnerHeight() * 2 / 3 <= touch.pageY){
        Tetris.game.player.input = "DOWN";
        return;
    }
    if( screen.getInnerWidth() * 1 / 3 >= touch.pageX){
        Tetris.game.player.input = "LEFT";
        return;
    }
    if( screen.getInnerWidth() * 1 / 3 <= touch.pageX && screen.getInnerWidth() * 2 / 3 >= touch.pageX){
        Tetris.game.player.input = "TURN";
        return;
    }
    Tetris.game.player.input = "RIGHT";
};

document.addEventListener('touchmove', preventDefaultScroll, false);
window.addEventListener('touchstart', parseTouchInput, false);

