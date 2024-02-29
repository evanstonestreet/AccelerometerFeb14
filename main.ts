input.onButtonPressed(Button.A, function () {
    custom.trainButtonA()
})
input.onButtonPressed(Button.B, function () {
    custom.trainButtonB()
})
// iterator that tells us which activity we are training
let activityNum = 0
// Keeps track of the number of activity blocks dragged in by the user
let numOfActivities = 0
let Training = 0
// Indicates if we are in testing mode(1 for testing, 0 for not)
let Testing = 0
let dataSessionsNew: number[][] = []
let currentSessionNew: number[] = []
let TrainingOn = 0
let finished = 0
custom.Initialization()
custom.activity(50)
custom.activity(10)
basic.forever(function () {
    custom.train()
    custom.finish()
})
