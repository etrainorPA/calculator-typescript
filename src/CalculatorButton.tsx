import { Button } from '@mui/material'

interface ButtonDeciderProps {
    buttonText: string
    isNumber: boolean
    isEqualSign?: boolean
    setDisplayNumber?: React.Dispatch<React.SetStateAction<number>>
    displayNumber?: number
    operatorFunction?: Function
}

interface ButtonProps {
    buttonText: string
    isEqualSign?: boolean
    setDisplayNumber?: React.Dispatch<React.SetStateAction<number>>
    displayNumber?: number
    operatorFunction?: Function
}

const NumberButton = ({
    buttonText,
    setDisplayNumber,
    displayNumber,
    operatorFunction,
}: ButtonProps) => {
    return (
        <div className="button-container">
            <Button
                variant="contained"
                className="number-button calc-button"
                size="large"
                color="primary"
                fullWidth={true}
                onClick={() => {
                    ButtonClicked(
                        buttonText,
                        false,
                        undefined,
                        setDisplayNumber,
                        displayNumber
                    )
                }}
            >
                {buttonText}
            </Button>
        </div>
    )
}

const FunctionButton = ({
    buttonText,
    isEqualSign,
    setDisplayNumber,
    displayNumber,
    operatorFunction,
}: ButtonProps) => {
    if (isEqualSign === undefined) {
        isEqualSign = false
    }
    return (
        <div className="button-container">
            <Button
                variant="contained"
                className="function-button calc-button"
                size="large"
                color={isEqualSign ? 'warning' : 'secondary'}
                fullWidth={true}
                onClick={() => {
                    ButtonClicked(
                        buttonText,
                        true,
                        isEqualSign,
                        setDisplayNumber,
                        displayNumber,
                        operatorFunction
                    )
                }}
            >
                {buttonText}
            </Button>
        </div>
    )
}

function ButtonClicked(
    text: string,
    isOperator: boolean,
    isEqualSign?: boolean,
    setDisplayNumber?: React.Dispatch<React.SetStateAction<number>>,
    displayNumber?: number,
    operatorFunction?: Function
) {
    // console.log(`Button ${text}  has been clicked`)
    // console.log(`Button ${text} is operator: ${isOperator}`)
    // console.log(`Button ${text} is the equal button: ${isEqualSign}`)
    let currentNumberAsString = displayNumber?.toString()
    if (currentNumberAsString === undefined) {
        // console.log(`currentNumber as string not defined!!!`)
        return
    }
    let currentNumberAsInt = parseInt(currentNumberAsString)

    // Guard cases
    if (isEqualSign === true) {
        //! Should be calling the Equals function
        console.log('Equals sign pressed!')
        if (operatorFunction !== undefined) {
            operatorFunction(true)
        }
        return
    }
    if (text === 'AC') {
        // console.log(text)
        //! This should be the Clear function
        if (operatorFunction !== undefined) {
            operatorFunction()
        }
        return
    }
    if (isOperator) {
        // console.log('attempting operator button function')
        if (text === '+ / -') {
            if (currentNumberAsInt !== 0) {
                // will turn posative number to negative and vice versa
                let newDisplay = currentNumberAsInt * -1
                if (setDisplayNumber !== undefined) {
                    // console.log('attempting to change to ' + newDisplay)
                    setDisplayNumber(newDisplay)
                }
            }
        } else {
            //
            if (operatorFunction !== undefined) {
                // console.log('calling operator function!')
                operatorFunction(text)
            }
        }
        return
    }
    //if we reach here we assume we will have clicked a number and want to add it to the display number
    if (displayNumber === undefined) {
        // console.log('display number not defined')
        return
    }
    // console.log(`Display number is: ${displayNumber}`)

    console.log(currentNumberAsString)
    let numbersCombinedString = currentNumberAsString + text
    let numbersCombined = parseInt(numbersCombinedString)
    if (setDisplayNumber === undefined) {
        // console.log('undefined - returned')
        return
    }
    // console.log(numbersCombined)
    setDisplayNumber(numbersCombined)
}

const CalculatorButton = ({
    buttonText,
    isNumber,
    isEqualSign,
    setDisplayNumber,
    displayNumber,
    operatorFunction,
}: ButtonDeciderProps) => {
    //? should I refactor
    if (isNumber) {
        return (
            <NumberButton
                buttonText={buttonText}
                setDisplayNumber={setDisplayNumber}
                displayNumber={displayNumber}
            ></NumberButton>
        )
    } else {
        return (
            <FunctionButton
                buttonText={buttonText}
                isEqualSign={isEqualSign}
                setDisplayNumber={setDisplayNumber}
                displayNumber={displayNumber}
                operatorFunction={operatorFunction}
            ></FunctionButton>
        )
    }
}

export default CalculatorButton
