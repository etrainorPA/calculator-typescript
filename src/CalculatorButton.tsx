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
        <div style={{ padding: '5px' }}>
            <Button
                variant="contained"
                className="number-button"
                size="large"
                color="primary"
                fullWidth={true}
                style={{ minHeight: '80px', minWidth: '40px' }}
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
        <div style={{ padding: '5px' }}>
            <Button
                variant="contained"
                className="function-button"
                size="large"
                color={isEqualSign ? 'warning' : 'secondary'}
                fullWidth={true}
                style={{ minHeight: '80px', minWidth: '40px' }}
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
