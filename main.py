def on_button_pressed_a():
    global Training, Training_Name, currentSession, On
    if Training == 0:
        serial.write_string("You picked 90 degrees CW. Press A to start training and B to stop")
        serial.write_line("")
        Training = 1
        Training_Name = 1
        currentSession = []
        currentSession.append(Training_Name)
    else:
        On = 1
        serial.write_string("Start Data Collection")
        serial.write_line("")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Training, Training_Name, currentSession, On
    if Training == 0:
        serial.write_string("You picked 90 degrees CC. Press A to start training and B to stop")
        serial.write_line("")
        Training = 1
        Training_Name = 2
        currentSession = []
        currentSession.append(Training_Name)
    else:
        On = 0
        Training = 0
        serial.write_string("End Data Collection")
        serial.write_line("")
        dataSessions.append(currentSession)
        serial.write_string("Which Activity do you want to train?")
        serial.write_line("")
        serial.write_string("Button A: Motor turn 90 degrees CW")
        serial.write_line("")
        serial.write_string("Button B: Motor turn 90 degrees CC")
        serial.write_line("")
input.on_button_pressed(Button.B, on_button_pressed_b)

def TrainData(list2: List[any]):
    global Classification
    Classification = 0
Classification = 0
currentSession: List[number] = []
Training_Name = 0
dataSessions: List[List[number]] = []
On = 0
Training = 0
Training = 0
On = 0
dataSessions = []
Training_Name = 0
serial.write_string("Which Activity do you want to train?")
serial.write_line("")
serial.write_string("Button A: Motor turn 90 degrees CW")
serial.write_line("")
serial.write_string("Button B: Motor turn 90 degrees CC")
serial.write_line("")

def on_forever():
    if On == 1:
        input.set_accelerometer_range(AcceleratorRange.ONE_G)
        serial.write_number(input.acceleration(Dimension.X))
        currentSession.append(input.acceleration(Dimension.X))
        serial.write_string(",")
        serial.write_number(input.acceleration(Dimension.Y))
        currentSession.append(input.acceleration(Dimension.Y))
        serial.write_string(",")
        serial.write_number(input.acceleration(Dimension.Z))
        currentSession.append(input.acceleration(Dimension.Z))
        serial.write_line("")
basic.forever(on_forever)
