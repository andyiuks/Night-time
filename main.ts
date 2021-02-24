basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.lightLevel() > 128) {
        led.setBrightness(50)
    } else {
        led.setBrightness(175)
    }
})
