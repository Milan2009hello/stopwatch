let start = 0
let end = 0
let d = 0
let sec = 0
let msec = 0
input.onButtonPressed(Button.A, function () {
    if (!(start)) {
        start = input.runningTime()
        end = 0
    } else {
        d = input.runningTime() - start
        start = 0
        basic.clearScreen()
        basic.pause(1000)
        sec = Math.idiv(d, 1000)
        msec = d % 1000
        basic.showString("" + sec + "." + msec)
    }
})
basic.forever(function () {
    if (start) {
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
