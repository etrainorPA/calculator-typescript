import { Box, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import CalculatorButton from './CalculatorButton'
import Calculations from './CalculatorFunctions'
import './Calculator.css'

function CalculatorBody() {
    const calculations = new Calculations()
    const [displayNumber, setDisplayNumber] = useState(0)
    const [inputNumber, setInputNumber] = useState(0)
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
                    <Grid item xs={12} minHeight={150}>
                        <div id="display-container-div">
                            <TextField
                                id="display-number-text"
                                variant="standard"
                                fullWidth
                                color="primary"
                                focused
                                disabled
                                value={displayNumber}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} minHeight={75}>
                        <Grid container>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="7"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="8"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="9"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="+"
                                    isNumber={false}
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
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="5"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="6"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="-"
                                    isNumber={false}
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
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="2"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="3"
                                    isNumber={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="x"
                                    isNumber={false}
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
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="="
                                    isNumber={false}
                                    isEqualSign={true}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="+ / -"
                                    isNumber={false}
                                ></CalculatorButton>
                            </Grid>
                            <Grid item xs={3}>
                                <CalculatorButton
                                    buttonText="/"
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
