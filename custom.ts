
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: Initializes program with variables
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="Initialization"
    export function Initialization(): void {
        serial.writeString("Would you like to Train or Test? (Button A for Train, Button B for Test)")
        serial.writeLine("")
    }

    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="Train"
    export function train(): void {
        if (Training == 0 && Testing == 0){
            Training = 1
        }
        
        if (TrainingOn == 1) {
            serial.writeString("We are training now")
            serial.writeLine("")
            input.setAccelerometerRange(AcceleratorRange.OneG)
            serial.writeNumber(input.acceleration(Dimension.X))
            currentSessionNew.push(input.acceleration(Dimension.X))
            serial.writeString(",")
            serial.writeNumber(input.acceleration(Dimension.Y))
            currentSessionNew.push(input.acceleration(Dimension.Y))
            serial.writeString(",")
            serial.writeNumber(input.acceleration(Dimension.Z))
            currentSessionNew.push(input.acceleration(Dimension.Z))
            serial.writeLine("")
        }
    }


    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="Turn the motor by %degrees degrees"
    export function activity(degrees: number): void {
        numOfActivities = numOfActivities + 1
    }


    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="trainButtonA"
    export function trainButtonA(): void {
        if (Training == 1){
            if (activityNum <= numOfActivities && TrainingOn == 0) {
                serial.writeString("You are training activity ")
                serial.writeNumber(activityNum)
                serial.writeLine("")
                currentSessionNew.push(activityNum)
                TrainingOn = 1
                serial.writeString("Start Data Collection")
                serial.writeLine("")
                activityNum = activityNum + 1

            }
        }
    }


    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="trainButtonB"
    export function trainButtonB(): void {
        if (Training == 1){
            if (TrainingOn == 1) {
                TrainingOn = 0
                serial.writeString("End Data Collection")
                serial.writeLine("")
                dataSessionsNew.push(currentSessionNew)
                currentSessionNew = []

            }
        }
    }


    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="finish"
    export function finish(): void {
        if (activityNum > numOfActivities){
            serial.writeString("Number of activities: ")
            serial.writeNumber(numOfActivities)
            serial.writeLine("")
        }
    }
}
