
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
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="Initialization"
    export function Initialization(n: number, s: string, e: MyEnum): void {
        let Training = 0
        let On = 0
        let dataSessions = []
        let Training_Name = 0
        serial.writeString("Which Activity do you want to train?")
        serial.writeLine("")
        serial.writeString("Button A: Motor turn 90 degrees CW")
        serial.writeLine("")
        serial.writeString("Button B: Motor turn 90 degrees CC")
        serial.writeLine("")
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
