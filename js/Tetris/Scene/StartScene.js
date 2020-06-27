var gamejs = require('gamejs');
var GameScene = require('./GameScene').GameScene;
var screen = require('../screen').screen;

var StartScene = function(director) {

    this.handleEvent = function(event) {
        if (event.type === gamejs.event.MOUSE_UP) {
            director.replaceScene(new GameScene(director));
        }
    };

    this.draw = function(display) {
        display.clear();
        display.blit(startPicture);

        var font = new gamejs.font.Font('40px monospace');
        var surface = font.render('Tetris');
        display.blit(surface, [70,100]);

        font = new gamejs.font.Font('15px monospace');
        surface = font.render('created by @ralphmeier');
        display.blit(surface, [40,160]);
    };

    var startPicture = gamejs.image.load('./img/icon.png');
    return this;
};

exports.StartScene = StartScene;