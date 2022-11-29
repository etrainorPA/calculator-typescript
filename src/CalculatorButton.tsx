import { Button } from '@mui/material'

interface ButtonDeciderProps {
    buttonText: string
    isNumber: boolean
    isEqualSign?: boolean
}

interface ButtonProps {
    buttonText: string
    isEqualSign?: boolean
}

const NumberButton = ({ buttonText }: ButtonProps) => {
    return (
        <div className="button-container">
            <Button
                variant="contained"
                className="number-button calc-button"
                size="large"
                color="primary"
                fullWidth={true}
                onClick={() => {
                    ButtonClicked(buttonText, false)
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
    isEqualSign?: boolean
) {
    console.log('Button' + { text } + 'has been clicked')
    console.log(`Button' + { text } + 'is operator: ${isOperator}`)
    console.log(`Button ${text} is the equal button: ${isEqualSign}`)
}

const CalculatorButton = ({
    buttonText,
    isNumber,
    isEqualSign,
}: ButtonDeciderProps) => {
    if (isNumber) {
        return <NumberButton buttonText={buttonText}></NumberButton>
    } else {
        return (
            <FunctionButton
                buttonText={buttonText}
                isEqualSign={isEqualSign}
            ></FunctionButton>
        )
    }
}

export default CalculatorButton
