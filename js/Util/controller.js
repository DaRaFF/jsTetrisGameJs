const gamejs = require('gamejs')

function connecthandler (e) {
  addgamepad(e.gamepad)
}

function addgamepad (gamepad) {
  console.log('gamepad connected')
}

function triggerEvent (type, keycode) {
  const evt = new Event(type, {'bubbles': true, 'cancelable': false})
  evt.keyCode = keycode
  document.dispatchEvent(evt)
}

function controllerHandler (event) {
  const controller = navigator.getGamepads()[0]

  // cross down
  if (controller.buttons[13].pressed) {
    triggerEvent('keydown', gamejs.event.K_DOWN)
  }
  // B
  if (controller.buttons[1].pressed) {
    triggerEvent('keydown', gamejs.event.K_UP)
  }
  // cross up
  if (controller.buttons[12].pressed) {
    triggerEvent('keydown', gamejs.event.K_UP)
  }
  // cross left
  if (controller.buttons[14].pressed) {
    triggerEvent('keydown', gamejs.event.K_LEFT)
  }
  // cross right
  if (controller.buttons[15].pressed) {
    triggerEvent('keydown', gamejs.event.K_RIGHT)
  }
}

function disconnectHandler (event) {
  console.log('disconnected gamepad')
}

exports.init = function () {
  // this is the most simple gameloop, but it needs to be improved
  setInterval(controllerHandler, 70)

  const haveEvents = window.GamepadEvent
  if (haveEvents) {
    window.addEventListener('gamepadconnected', connecthandler)
    window.addEventListener('gamepaddisconnected', disconnectHandler)
  }

  const haveWebkitEvents = window.WebKitGamepadEvent
  if (haveWebkitEvents) {
    window.addEventListener('webkitgamepadconnected', connecthandler)
    window.addEventListener('webkitgamepaddisconnected', disconnectHandler)
  }

  return
}
