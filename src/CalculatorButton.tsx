import { Button } from '@mui/material'
import { couldStartTrivia } from 'typescript'

interface ButtonDeciderProps {
    buttonText: string
    isNumber: boolean
    isEqualSign?: boolean
    setDisplayNumber?: React.Dispatch<React.SetStateAction<number>>
    displayNumber?: number
}

interface ButtonProps {
    buttonText: string
    isEqualSign?: boolean
    setDisplayNumber?: React.Dispatch<React.SetStateAction<number>>
    displayNumber?: number
}

const NumberButton = ({
    buttonText,
    setDisplayNumber,
    displayNumber,
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

const FunctionButton = ({ buttonText, isEqualSign }: ButtonProps) => {
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
                    ButtonClicked(buttonText, true, isEqualSign)
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
    displayNumber?: number
) {
    console.log(`Button ${text}  has been clicked`)
    console.log(`Button ${text} is operator: ${isOperator}`)
    console.log(`Button ${text} is the equal button: ${isEqualSign}`)

    // Guard cases
    if (isEqualSign) {
    }
    if (isOperator) {
    }
    //if we reach here we assume we will have clicked a number and want to add it to the display number
    if (displayNumber === undefined) {
        console.log('display number not defined')
        return
    }
    console.log(`Display number is: ${displayNumber}`)
    let currentNumberAsString = displayNumber?.toString()
    console.log(currentNumberAsString)
    let numbersCombinedString = currentNumberAsString + text
    let numbersCombined = parseInt(numbersCombinedString)
    if (setDisplayNumber === undefined) {
        console.log('undefined - returned')
        return
    }
    console.log(numbersCombined)
    setDisplayNumber(numbersCombined)
}

const CalculatorButton = ({
    buttonText,
    isNumber,
    isEqualSign,
    setDisplayNumber,
    displayNumber,
}: ButtonDeciderProps) => {
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
                displayNumber={displayNumber}
            ></FunctionButton>
        )
    }
}

export default CalculatorButton
