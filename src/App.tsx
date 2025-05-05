import { Container, Grid, Typography } from '@mui/material'
import { useState } from 'react'

import CalcButtons from './Calculator/CalcButtons.tsx'
import CalcDisplay from './Calculator/CalcDisplay.tsx'
import {
    getValuesFromDisplay,
    getLastValueFromDisplay,
    isLastValueOperator,
    sanitizeValue
} from './helpers.ts'

const styles = {
    layout: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    display: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center'
    }
}

function App() {
    const [display, setDisplay] = useState('0')
    const [result, setResult] = useState(0)
    const [lastOperation, setLastOperation] = useState('')

    const handleNumClick = (numberStr: string) => {
        if (display === '0' || lastOperation === '=') setDisplay(numberStr)
        else setDisplay(display + numberStr)
        setLastOperation(numberStr)
    }

    const handlePercentClick = () => {
        if (isLastValueOperator(display) || display.slice(-1) === '-') return
        const operation = '%'

        // When the last operation is =, use the result
        let newDisplay
        if (lastOperation === '=') {
            newDisplay = result.toString() + operation
        } else {
            newDisplay = display + operation
        }
        setDisplay(newDisplay)
        setLastOperation(operation)
    }

    const handleDecimalClick = () => {
        if (getLastValueFromDisplay(display).includes('.')) return

        // When the last operation is =, use the result
        let newDisplay
        if (lastOperation === '=') {
            newDisplay = result.toString() + '.'
        } else {
            newDisplay = display + '.'
        }
        setDisplay(newDisplay)

        setLastOperation('.')
    }

    const handleOperatorClick = (operation: string) => {
        const lastValue = getLastValueFromDisplay(display)
        // Prevent repeat of the same operation
        if (lastValue === operation) return
        // Allow only these multi-operation combinations: *- /-
        if (['/', '*', '-'].includes(lastValue) && operation === '+') return

        // When the last operation is =, use the result
        let newDisplay
        if (lastOperation === '=') {
            newDisplay = result.toString() + ' ' + operation + ' '
        } else if (['/', '*'].includes(lastValue) && operation === '-') { // Form a negative number instead of subtraction
            newDisplay = display + ' ' + operation
        } else if (isLastValueOperator(display)) {
            newDisplay = display.slice(0, display.length-2) + ' ' + operation + ' '
        } else {
            newDisplay = display + ' ' + operation + ' '
        }
        setDisplay(newDisplay)
        setLastOperation(operation)
    }

    const handleClearClick = () => {
        if (display.trimEnd().length === 1 || lastOperation === '=') {
            setDisplay('0')
            setLastOperation('A/C')
            return
        }
        const isLastValueOp = isLastValueOperator(display)
        // Handle excess space from operators when clearing
        let newDisplay
        if (isLastValueOp) {
            newDisplay = display.slice(0, display.length-2)
        } else {
            newDisplay = display.slice(0, display.length-1)
        }
        setDisplay(newDisplay)
        setLastOperation('A/C')
    }

    const handleEqualClick = () => {
        if (['+ ', '- ', '/ ', '* '].includes(display.slice(-2))) return
        if (display.slice(-1) === '-') return

        const values = getValuesFromDisplay(display)
        const formattedValues = values.map((value) => {
            if (['+', '-', '/', '*'].includes(value)) return value
            return sanitizeValue(value)
        })
        const newResult = Number(eval(formattedValues.join('')).toPrecision(12))

        setResult(newResult)
        setLastOperation('=')
    }

    const handleNegateInput = () => {
        if (display === '0' || isLastValueOperator(display)) return

        const values = getValuesFromDisplay(display)
        const lastNumStr = getLastValueFromDisplay(display)
        const operator = values[values.length-2]

        // When the last operation is =, use the result
        if (lastOperation === '=') {
            const newDisplay = (result * -1).toString()
            setDisplay(newDisplay)
        } else {
            const isNegative = lastNumStr[0] === '-'
            const isSubtracting = operator === '-'
            if (isNegative) {
                values[values.length-1] = lastNumStr.replace('-', '')
            }
            else if (!isNegative && isSubtracting) {
                values[values.length-2] = '+'
            } else {
                values[values.length-1] = '-' + lastNumStr
            }
            setDisplay(values.join(' '))
        }

        setLastOperation('+/-')
    }

    return (
        <Container maxWidth='sm'>
            <Grid container direction='row' spacing={1} sx={styles.layout}>
                <Grid size={12}>
                    <Typography variant='h1' sx={styles.title}>Calculator</Typography>
                </Grid>
                <Grid container direction='row' size={7} sx={styles.display}>
                    <CalcDisplay
                        display={display}
                        lastOperation={lastOperation}
                        result={result}
                    />
                </Grid>
                <Grid container direction='row' size={7}>
                    <CalcButtons
                        handleNumClick={handleNumClick}
                        handlePercentClick={handlePercentClick}
                        handleDecimalClick={handleDecimalClick}
                        handleOperatorClick={handleOperatorClick}
                        handleClearClick={handleClearClick}
                        handleEqualClick={handleEqualClick}
                        handleNegateInput={handleNegateInput}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default App
