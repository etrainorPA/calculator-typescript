import { Grid } from '@mui/material'
import { useState } from 'react'
import CalculatorBody from './CalculatorBody'
import History from './History'

function Layout() {
    console.log('layout rendered')
    const [historyNumbers, setHistoryNumbers] = useState([0])

    function UpdateHistNums(num: number) {
        let currentHistoryNumbers = historyNumbers
        currentHistoryNumbers.push(num)
        setHistoryNumbers(currentHistoryNumbers)
        console.log('his numbs: ' + historyNumbers)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {/*  Calculator to go here */}
                    <CalculatorBody
                        setHistoryNumbersFunction={UpdateHistNums}
                    ></CalculatorBody>
                </Grid>
                <Grid item xs={4}>
                    {/* History to go here */}
                    <History numbers={historyNumbers}></History>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout
