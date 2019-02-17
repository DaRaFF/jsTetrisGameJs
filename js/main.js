const gamejs = require('gamejs')

function main () {
  const Director = require('Tetris/Scene/Director').Director
  const StartScene = require('Tetris/Scene/StartScene').StartScene
  const director = new Director()
  const startScene = new StartScene(director)
  director.start(startScene)
}

gamejs.preload([
  'img/icon.png',
  'img/blocks.png'
])
gamejs.ready(main)
