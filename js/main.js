var gamejs = require('gamejs');

function main() {
    var Director = require('Tetris/Scene/Director').Director;
    var StartScene = require('Tetris/Scene/StartScene').StartScene;
    var director = new Director();
    var startScene = new StartScene(director);
    director.start(startScene);
};

gamejs.preload([
    'img/icon.png',
    'img/blocks.png'
    ]);
gamejs.ready(main);
