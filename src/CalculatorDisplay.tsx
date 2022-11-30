import { TextField } from '@mui/material'

interface CalculaterDisplayInterface {
    displayNumber: number
}

const CalculatorDisplay = ({ displayNumber }: CalculaterDisplayInterface) => {
    return (
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
    )
}

export default CalculatorDisplay
