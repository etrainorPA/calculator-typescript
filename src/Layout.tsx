import { Grid } from '@mui/material'
import CalculatorBody from './CalculatorBody'
import History from './History'

const Layout = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {/*  Calculator to go here */}
                    <CalculatorBody></CalculatorBody>
                </Grid>
                <Grid item xs={4}>
                    {/* History to go here */}
                    <History></History>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout
