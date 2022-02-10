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
let strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
	
})
