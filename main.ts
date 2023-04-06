input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Heart)
    } else if (input.lightLevel() >= 100 && input.lightLevel() < 150) {
        basic.showIcon(IconNames.Sad)
    } else if (input.lightLevel() > 150 && input.lightLevel() < 200) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
	
})
