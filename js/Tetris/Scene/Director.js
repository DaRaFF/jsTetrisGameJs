const gamejs = require('gamejs')
const screen = require('../screen').screen
const touch = require('../../Util/touch')
const orientation = require('../../Util/orientation')
const controller = require('../../Util/controller')

const Director = function () {
  touch.init()
  orientation.init()
  controller.init()
  let onAir = false
  let activeScene = null

  this.start = function (scene) {
    onAir = true
    this.replaceScene(scene)
    return
  }

  this.replaceScene = function (scene) {
    activeScene = scene
  }

  this.getScene = function () {
    return activeScene
  }

  screen.update()
  const display = gamejs.display.setMode([screen.screen_width, screen.screen_height])

  gamejs.onTick(function(msDuration) {
    if (!onAir) return

    if (activeScene.handleEvent) gamejs.event.onEvent(activeScene.handleEvent)
    if (activeScene.update) {
      activeScene.update(msDuration)
    }
    if (activeScene.draw) {
      activeScene.draw(display)
    }
  })

  gamejs.event.onEvent(function(event) {
    activeScene.handleEvent(event)
  })

  return this
}

exports.Director = Director
