KY040.OnPinPressed(DigitalPin.P14, function () {
    basic.showIcon(IconNames.Heart)
})
KY040.onTurned(direction.clockwise, function () {
    basic.showArrow(ArrowNames.West)
})
KY040.onTurned(direction.counterclockwise, function () {
    basic.showArrow(ArrowNames.East)
})
KY040.setKY040(DigitalPin.P15, DigitalPin.P1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
