input.onButtonPressed(Button.A, function () {
    number_of_strike += 1
    basic.pause(500)
    basic.showString("S")
    basic.showNumber(number_of_strike)
    if (number_of_strike == 3) {
        basic.clearScreen()
        basic.showString("OUT")
    }
})
input.onButtonPressed(Button.AB, function () {
    let out = 0
    basic.pause(100)
    basic.showNumber(4)
    number_of_strike = 0
    number_of_balls = 0
    basic.showNumber(out)
    basic.showNumber(number_of_strike)
})
input.onButtonPressed(Button.B, function () {
    number_of_balls += 1
    basic.pause(500)
    basic.showString("B")
    basic.showNumber(number_of_balls)
    if (number_of_balls == 4) {
        basic.clearScreen()
        basic.showString("WALK")
    }
})
let number_of_balls = 0
let number_of_strike = 0
basic.showLeds(`
    # . . # .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
basic.clearScreen()
basic.forever(function () {
	
})
