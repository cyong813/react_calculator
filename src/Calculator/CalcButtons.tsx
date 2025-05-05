import { Button, Grid } from '@mui/material'

import type { Button as ButtonScheme } from '../types.ts'
import { ButtonType } from '../types.ts'
import { scheme } from './calcScheme.ts'

interface Props {
    handleNumClick: (name: string) => void
    handlePercentClick: () => void
    handleDecimalClick: () => void
    handleOperatorClick: (name: string) => void
    handleClearClick: () => void
    handleEqualClick: () => void
    handleNegateInput: () => void
}

const CalcButtons = ({
    handleNumClick,
    handlePercentClick,
    handleDecimalClick,
    handleOperatorClick,
    handleClearClick,
    handleEqualClick,
    handleNegateInput
}: Props) => {
    const getClickHandlerByType = (type: string, name: string) => {
        switch (type) {
            case ButtonType.Clear:
                return handleClearClick
            case ButtonType.Decimal:
                return handleDecimalClick
            case ButtonType.Disabled:
                return () => {} // do nothing for now
            case ButtonType.Number:
                return () => handleNumClick(name)
            case ButtonType.Negate:
                return handleNegateInput
            case ButtonType.Operator:
                if (name === '=') return handleEqualClick
                return () => handleOperatorClick(name)
            case ButtonType.Percent:
                return handlePercentClick
        }
    }

    return (
        <>
            {
                scheme.map((button: ButtonScheme) => {
                    const name = button.name
                    const isDisabled = button.disabled
                    const color = button.color
                    const type = button.type
                    const clickHandler = getClickHandlerByType(type, name)
                    return (
                        <Grid size={3} key={name}>
                            <Button
                                disabled={isDisabled}
                                onClick={clickHandler}
                                sx={{ backgroundColor: color }}
                                variant='contained'
                            >
                                {name}
                            </Button>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default CalcButtons