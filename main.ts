KY040.OnPinPressed(DigitalPin.P14, function () {
    Pix_Numb = 0
    strip.clear()
    strip.show()
    basic.showIcon(IconNames.Tortoise)
})
KY040.onTurned(direction.clockwise, function () {
    basic.showArrow(ArrowNames.West)
})
KY040.onTurned(direction.counterclockwise, function () {
    basic.showArrow(ArrowNames.East)
    Pix_Numb += 1
})
let Pix_Numb = 0
let strip: neopixel.Strip = null
KY040.setKY040(DigitalPin.P15, DigitalPin.P1)
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
Pix_Numb = 0
strip.clear()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip.setPixelColor(Pix_Numb, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
