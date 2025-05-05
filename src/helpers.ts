export const getValuesFromDisplay = (display: string) => {
    return display.split(' ').filter(val => val !== '')
}

export const getLastValueFromDisplay = (display: string) => {
    const values = getValuesFromDisplay(display)
    return values?.[values.length-1] ?? ''
}

export const isLastValueOperator = (display: string) => {
    return ['* ', '/ ', '+ ', '- '].includes(display.slice(-2))
}

export const sanitizeValue = (value: string) => {
    if (value.includes('%')) {
        let newVal
        const percentCount = value.split('%').length - 1
        newVal = parseFloat(value)
        for (let i= 0; i < percentCount; i++) {
            newVal /= 100
        }
        return newVal
    }
    return value
}