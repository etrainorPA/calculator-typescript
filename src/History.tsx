import { TextareaAutosize } from '@mui/material'

interface HistoryProps {
    numbers: number[]
}

function History({ numbers }: HistoryProps) {
    console.log('History rendered - ' + numbers)
    let test = ''
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i]
        test = test.concat(`${n.toString()} \n`)
        console.log(test)
    }
    return (
        <div data-testid="history-tab">
            <p>History Here!</p>
            <TextareaAutosize
                maxRows={30}
                minRows={30}
                aria-label="minimum height"
                placeholder="History"
                style={{ minWidth: 100 }}
                // defaultValue={test}
                value={test}
            />
            <p>{test}</p>
        </div>
    )
}

export default History
