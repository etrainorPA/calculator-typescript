class CalculatorFunctions {
    add(displayNumber: number, previousNumber: number): number {
        return previousNumber + displayNumber
    }

    subtract(displayNumber: number, previousNumber: number): number {
        return previousNumber - displayNumber
    }

    multiply(displayNumber: number, previousNumber: number): number {
        return previousNumber * displayNumber
    }

    divide(displayNumber: number, previousNumber: number): number {
        return displayNumber / previousNumber
    }
}

// can I use interface to control paramaters for class methods?
interface CalculatorFunctionInterface {
    inputNumber: number
    currentDisplayNumber: number
}

export default CalculatorFunctions
