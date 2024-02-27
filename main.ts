input.onButtonPressed(Button.A, function () {
    custom.trainButtonA()
})
function Initialization () {
    Training = 0
    On = 0
    dataSessions = []
    Training_Name = 0
    serial.writeString("Which Activity do you want to train?")
    serial.writeLine("")
    serial.writeString("Button A: Motor turn 90 degrees CW")
    serial.writeLine("")
    serial.writeString("Button B: Motor turn 90 degrees CC")
    serial.writeLine("")
}
input.onButtonPressed(Button.B, function () {
    custom.trainButtonB()
})
let Training_Name = 0
let On = 0
let Training = 0
let activityNum = 0
let numOfActivities = 0
let dataSessions: number[][]
let currentSession: number[]
Initialization()
basic.forever(function () {
    if (On == 1) {
        let currentSession2: number[] = []
        input.setAccelerometerRange(AcceleratorRange.OneG)
        serial.writeNumber(input.acceleration(Dimension.X))
        currentSession2.push(input.acceleration(Dimension.X))
        serial.writeString(",")
        serial.writeNumber(input.acceleration(Dimension.Y))
        currentSession2.push(input.acceleration(Dimension.Y))
        serial.writeString(",")
        serial.writeNumber(input.acceleration(Dimension.Z))
        currentSession2.push(input.acceleration(Dimension.Z))
        serial.writeLine("")
    }
})
