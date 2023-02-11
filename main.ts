radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        arm = value
    }
    if (name == "R") {
        roll = value
    }
    if (name == "T") {
        throttle = value
    }
})
let throttle = 0
let roll = 0
let arm = 0
let radiogruppe = 42
radio.setGroup(radiogruppe)
basic.showNumber(radiogruppe)
while (arm) {
    basic.showIcon(IconNames.Skull)
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (arm) {
        hoverbit.start_cushion_simple()
        hoverbit.forward_power_simple(throttle)
    } else {
        hoverbit.stop_all_motors()
    }
    hoverbit.direction_simple(roll)
})
basic.forever(function () {
    basic.showNumber(throttle)
})
