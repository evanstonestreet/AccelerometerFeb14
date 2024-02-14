input.onButtonPressed(Button.A, function () {
    if (Training == 0) {
        serial.writeString("You picked 90 degrees CW. Press A to start training and B to stop")
        serial.writeLine("")
        Training = 1
        Training_Name = 1
        currentSession = []
        currentSession.push(Training_Name)
    } else {
        On = 1
        serial.writeString("Start Data Collection")
        serial.writeLine("")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Training == 0) {
        serial.writeString("You picked 90 degrees CC. Press A to start training and B to stop")
        serial.writeLine("")
        Training = 1
        Training_Name = 2
        currentSession = []
        currentSession.push(Training_Name)
    } else {
        On = 0
        Training = 0
        serial.writeString("End Data Collection")
        serial.writeLine("")
        dataSessions.push(currentSession)
        serial.writeString("Which Activity do you want to train?")
        serial.writeLine("")
        serial.writeString("Button A: Motor turn 90 degrees CW")
        serial.writeLine("")
        serial.writeString("Button B: Motor turn 90 degrees CC")
        serial.writeLine("")
    }
})
function TrainData (list: any[]) {
    Classification = 0
}
let Classification = 0
let currentSession: number[] = []
let Training_Name = 0
let dataSessions: number[][] = []
let On = 0
let Training = 0
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
basic.forever(function () {
    if (On == 1) {
        input.setAccelerometerRange(AcceleratorRange.OneG)
        serial.writeNumber(input.acceleration(Dimension.X))
        currentSession.push(input.acceleration(Dimension.X))
        serial.writeString(",")
        serial.writeNumber(input.acceleration(Dimension.Y))
        currentSession.push(input.acceleration(Dimension.Y))
        serial.writeString(",")
        serial.writeNumber(input.acceleration(Dimension.Z))
        currentSession.push(input.acceleration(Dimension.Z))
        serial.writeLine("")
    }
})
