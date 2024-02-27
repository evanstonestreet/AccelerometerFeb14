
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
        if (On == 1) {
            serial.writeString("We are training now")
            serial.writeLine("")
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
        if (activityNum <= numOfActivities && On == 0) {
            serial.writeString("You are training activity ")
            serial.writeNumber(activityNum)
            serial.writeLine("")
            currentSession.push(activityNum)
            On = 1
            serial.writeString("Start Data Collection")
            serial.writeLine("")
            activityNum = activityNum + 1
            
        }
    }


    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="trainButtonB"
    export function trainButtonB(): void {
        if (On == 1){
            On = 0
            serial.writeString("End Data Collection")
            serial.writeLine("")
            dataSessions.push(currentSession)
            currentSession = []
            
        }

    }


    /**
     * TODO: Allows user to train the model
     * @param value describe value here, eg: 5
     */
    //% block="finish"
    export function finish(): void {
        serial.writeString("Number of activities: ")
        serial.writeNumber(numOfActivities)
        serial.writeLine("")
    }
}
