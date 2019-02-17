/**
 * @fileoverview map touch events to mouse events for drag & drop
 * @see https://github.com/oberhamsi/planetary-gamejs/blob/master/touch.js
 * @see http://ross.posterous.com/2008/08/19/iphone-touch-events-in-javascript/
 */

const EVENT_MAPPING = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup'
}

function touchHandler (event) {
  const touches = event.changedTouches
  const first = touches[0]
  const type = EVENT_MAPPING[event.type]

  const simulatedEvent = document.createEvent('MouseEvent')
  simulatedEvent.initMouseEvent(type, true, true, window, 1,
    first.screenX, first.screenY,
    first.clientX, first.clientY, false,
    false, false, false, 0 /* left */, null)

  first.target.dispatchEvent(simulatedEvent)
  if (event.type === 'touchmove') {
    event.preventDefault()
    window.scroll(0, 0)
    return
  }
  return
}

exports.init = function () {
  document.body.style['-webkit-touch-callout'] = 'none'
  document.addEventListener('touchstart', touchHandler, true)
  document.addEventListener('touchmove', touchHandler, true)
  document.addEventListener('touchend', touchHandler, true)
  document.addEventListener('touchcancel', touchHandler, true)
  return
}
