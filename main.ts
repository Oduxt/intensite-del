let intensite = 0
function bleu () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P0, 1)
}
function rouge () {
    pins.analogWritePin(AnalogPin.P1, 1)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
}
function vert () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P0, 0)
}
basic.forever(function () {
    intensite = pins.analogReadPin(AnalogPin.P0)
    if (intensite >= 500) {
        vert()
    } else if (intensite < 500 && intensite >= 200) {
        bleu()
    } else {
        rouge()
    }
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
