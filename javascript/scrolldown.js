var autoScrollDelay = 1
var autoScrollSpeed = 1
var autoScrollTimer
function setAutoScroll(newValue) {
    autoScrollDelay = newValue ? newValue : autoScrollDelay //using autoScrollDelay instead of autoScrollSpeed
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer)
    }
    if (autoScrollDelay) {
        autoScrollTimer = setInterval(function(){
            window.scrollBy(0,autoScrollSpeed)
      },autoScrollDelay)
    }
}
setAutoScroll(10) // higher number scrolls slower
