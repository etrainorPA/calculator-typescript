import { Button } from '@mui/material'

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

const FunctionButton = ({
    buttonText,
    isEqualSign,
    setDisplayNumber,
    displayNumber,
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
                        displayNumber
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
    displayNumber?: number
) {
    console.log(`Button ${text}  has been clicked`)
    console.log(`Button ${text} is operator: ${isOperator}`)
    console.log(`Button ${text} is the equal button: ${isEqualSign}`)
    let currentNumberAsString = displayNumber?.toString()
    if (currentNumberAsString === undefined) {
        return
    }
    let currentNumberAsInt = parseInt(currentNumberAsString)

    // Guard cases
    if (isEqualSign) {
    }
    if (text === 'AC') {
        console.log(text)
        if (setDisplayNumber !== undefined) {
            setDisplayNumber(0)
        }
        return
    }
    if (isOperator) {
        switch (text) {
            case '+ / -':
                if (currentNumberAsInt !== 0) {
                    // will turn posative number to negative and vice versa
                    let newDisplay = currentNumberAsInt * -1
                    if (setDisplayNumber !== undefined) {
                        console.log('attempting to change to' + newDisplay)
                        setDisplayNumber(newDisplay)
                    }
                }
                break
        }
        return
    }
    //if we reach here we assume we will have clicked a number and want to add it to the display number
    if (displayNumber === undefined) {
        console.log('display number not defined')
        return
    }
    console.log(`Display number is: ${displayNumber}`)

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
                setDisplayNumber={setDisplayNumber}
                displayNumber={displayNumber}
            ></FunctionButton>
        )
    }
}

export default CalculatorButton
