import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import CalculatorButton from './CalculatorButton'
import './Calculator.css'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorFunctions from './CalculatorFunctions'

// Body will be the parent that will hold all component children
function CalculatorBody() {
    const [displayNumber, setDisplayNumber] = useState(0)
    const [previousNumber, setPreviousNumber] = useState(0)
    const [activeOperator, setActiveOperator] = useState('')
    const [isDecimalActive, setIsDecimalActive] = useState(false)
    const calcFuncs = new CalculatorFunctions()

    function Clear(): void {
        console.log('Clear called!')
        setDisplayNumber(0)
        setPreviousNumber(0)
        setActiveOperator('')
        setIsDecimalActive(false)
    }

    function Equals(isCalledFromEqualButton: boolean): void {
        console.log(
            'Equals function called. From equals button: ' +
                isCalledFromEqualButton
        )
        let result: number = 0
        switch (activeOperator) {
            case '+':
                result = calcFuncs.add(previousNumber, displayNumber)
                break
            case '-':
                result = calcFuncs.subtract(displayNumber, previousNumber)
                break
            case '/':
                result = calcFuncs.divide(previousNumber, displayNumber)
                break
            case 'x':
                result = calcFuncs.multiply(previousNumber, displayNumber)
                break
            default:
                console.log('equals function called with no operator')
        }

        if (isCalledFromEqualButton) {
            setActiveOperator('')
            setPreviousNumber(0)
            setDisplayNumber(result)
        } else {
            console.log('is false')
            setPreviousNumber(result)
            setDisplayNumber(0)
        }
        //TODO: Add result to the history section
    }

    function UseCalculatorOperators(symbol: string): void {
        console.log('Operator functions called! Using symbol ' + symbol)
        setActiveOperator(symbol)
        if (previousNumber !== 0 && displayNumber !== 0) {
            //! If both of these are set then we need to do an equal on these 2 numbers
            Equals(false)
            return
        }
        if (displayNumber !== 0) {
            setPreviousNumber(displayNumber)
            setDisplayNumber(0)
        }
    }
    return (
        <div
            id="calculator-body"
            className="calculator-body"
            data-testid="calculator-tab"
        >
            <p>Calculator here</p>
            <Box
                sx={{
                    height: 750,
                    backgroundColor: 'gray',
                    borderRadius: 10,
                    border: 2.5,
                    borderColor: 'black',
                }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        minHeight={150}
                        data-testid="calculator-number-display"
                    >
                        <CalculatorDisplay
                            displayNumber={displayNumber}
                        ></CalculatorDisplay>
                    </Grid>
                    <Grid item xs={12} minHeight={75}>
                        <Grid container>
                            <Grid item xs={3} data-testid="button-seven">
                                <CalculatorButton
                                    buttonText="7"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="8"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="9"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="+"
                                    isNumber={false}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                    operatorFunction={UseCalculatorOperators}
                                ></CalculatorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} minHeight={75}>
                        <Grid container>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="4"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3} data-testid="button-five">
                                <CalculatorButton
                                    buttonText="5"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="6"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="-"
                                    isNumber={false}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                    operatorFunction={UseCalculatorOperators}
                                ></CalculatorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} minHeight={75}>
                        <Grid container>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="1"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="2"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="3"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3} data-testid="button-multiply">
                                <CalculatorButton
                                    buttonText="x"
                                    isNumber={false}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                    operatorFunction={UseCalculatorOperators}
                                ></CalculatorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} minHeight={75}>
                        <Grid container>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="0"
                                    isNumber={true}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3} data-testid="button-equals">
                                <CalculatorButton
                                    buttonText="="
                                    isNumber={false}
                                    isEqualSign={true}
                                    displayNumber={displayNumber}
                                    operatorFunction={Equals}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="+ / -"
                                    isNumber={false}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="/"
                                    isNumber={false}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                    operatorFunction={UseCalculatorOperators}
                                ></CalculatorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} minHeight={75}>
                        <Grid container>
                            <Grid item xs={8}>
                                <CalculatorButton
                                    buttonText="AC"
                                    isNumber={false}
                                    setDisplayNumber={setDisplayNumber}
                                    displayNumber={displayNumber}
                                    operatorFunction={Clear}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={4}>
                                <CalculatorButton
                                    buttonText="."
                                    isNumber={false}
                                ></CalculatorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default CalculatorBody
