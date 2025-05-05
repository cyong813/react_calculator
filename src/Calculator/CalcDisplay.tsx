import { Box, Grid, Typography } from '@mui/material'

const styles = {
    layout: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText: {
        textAlign: 'right'
    },
    displayBox: {
        height: '50px',
        maxHeight: '50px',
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap'
    }
}

interface Props {
    display: string,
    lastOperation: string,
    result: number
}

const CalcDisplay = ({
    display,
    lastOperation,
    result
}: Props) => {
    const showResult = lastOperation === '=' && display !== '0' && result.toString() !== display
    return (
        <>
            <Grid size={12}>
                <Box sx={styles.displayBox}>
                    <Typography variant='h3' sx={styles.displayText}>{display}</Typography>
                </Box>
            </Grid>
            <Grid size={12}>
                <Box sx={styles.displayBox}>
                    {
                        showResult &&
                        <Typography variant='h3' sx={styles.displayText}>{result}</Typography>
                    }
                </Box>
            </Grid>
        </>
    )
}

export default CalcDisplay