class CalculatorFunctions {
    add(obj: CalculatorFunctionInterface) {
        return null
    }

    subtract(obj: CalculatorFunctionInterface) {
        return null
    }

    multiply(obj: CalculatorFunctionInterface) {
        return null
    }

    divide(obj: CalculatorFunctionInterface) {
        return null
    }

    addNumberInput(obj: CalculatorFunctionInterface) {
        return obj.currentDisplayNumber.toString() + obj.inputNumber.toString()
    }
}

interface CalculatorFunctionInterface {
    inputNumber: number
    currentDisplayNumber: number
}

export default CalculatorFunctions
