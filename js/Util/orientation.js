/**
 * @fileoverview handle mobile events for screen orientation
 * @see http://www.sitepoint.com/iphone-development-12-tips-2/
 */

var gamejs = require('gamejs');
var screen = require('Tetris/screen').screen;

function orientationHandler(event){
    screen.update();
    gamejs.display.setMode([screen.screen_width, screen.screen_height]);
   return;
};

exports.init = function(){
   document.addEventListener("orientationchange", orientationHandler, true);
   return;
};
