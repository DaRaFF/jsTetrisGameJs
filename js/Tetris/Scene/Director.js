const gamejs = require('gamejs')
const screen = require('Tetris/screen').screen
const touch = require('Util/touch')
const orientation = require('Util/orientation')

const Director = function () {
  touch.init()
  orientation.init()
  let onAir = false
  let activeScene = null

  function tick (msDuration) {
    if (!onAir) return

    if (activeScene.handleEvent) {
      gamejs.event.get().forEach(activeScene.handleEvent)
    } else {
      // throw all events away
      gamejs.event.get()
    }
    if (activeScene.update) {
      activeScene.update(msDuration)
    }
    if (activeScene.draw) {
      activeScene.draw(display)
    }
    return
  }


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
  gamejs.time.fpsCallback(tick, this, 100)
  return this
}

exports.Director = Director
