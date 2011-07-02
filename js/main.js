if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var Director = require('Tetris/Director').Director;
    var StartScene = require('Tetris/Scene/StartScene').StartScene;
}

function main() {
    var director = new Director(400,400);
    var startScene = new StartScene(director);
    director.start(startScene);
};

gamejs.preload(['img/icon.png'])
gamejs.ready(main);
