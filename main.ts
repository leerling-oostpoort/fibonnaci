input.onButtonPressed(Button.A, function () {
    v3 = v2
    v2 = v1
    v1 = v3 - v2
    basic.clearScreen()
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    v1 = v2
    v2 = v3
    v3 = v1 + v2
    basic.clearScreen()
    basic.pause(500)
})
let v3 = 0
let v2 = 0
let v1 = 0
v1 = 0
v2 = 1
v3 = 1
basic.clearScreen()
basic.pause(500)
basic.forever(function () {
    basic.showNumber(v2)
})
