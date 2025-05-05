export enum ButtonType {
    Clear = 'clear',
    Decimal = 'decimal',
    Negate = 'negate',
    Percent = 'percent',
    Operator = 'operator',
    Number = 'number',
    Disabled = 'disabled' // Temporary - should be enabled in the future
}

export type Button = {
    name: string
    disabled: boolean
    color: string
    type: ButtonType
}