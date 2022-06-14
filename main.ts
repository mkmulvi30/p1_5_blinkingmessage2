input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.StickFigure)
        basic.showLeds(`
            # . . # .
            . # . # .
            . . # # #
            . # . # .
            # . . # .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            . # . . #
            . # . # .
            # # # . .
            . # . # .
            . # . . #
            `)
        basic.showIcon(IconNames.StickFigure)
        basic.clearScreen()
    }
})
basic.showString("COLE")
basic.clearScreen()
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.showString("PERRY")
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.clearScreen()
images.createImage(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `).showImage(0)
basic.showNumber(1)
basic.clearScreen()
