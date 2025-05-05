import { Button, ButtonType } from '../types.ts'
import { grey } from '@mui/material/colors'

export const scheme: Button[] = [
    {
        name: 'AC',
        disabled: false,
        color: grey[500],
        type: ButtonType.Clear
    },
    {
        name: '+/-',
        disabled: false,
        color: grey[500],
        type: ButtonType.Negate
    },
    {
        name: '%',
        disabled: false,
        color: grey[500],
        type: ButtonType.Percent
    },
    {
        name: '/',
        disabled: false,
        color: 'orange',
        type: ButtonType.Operator
    },
    {
        name: '7',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '8',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '9',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '*',
        disabled: false,
        color: 'orange',
        type: ButtonType.Operator
    },
    {
        name: '4',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '5',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '6',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '-',
        disabled: false,
        color: 'orange',
        type: ButtonType.Operator
    },
    {
        name: '1',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '2',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '3',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '+',
        disabled: false,
        color: 'orange',
        type: ButtonType.Operator
    },
    {
        name: ' ',
        disabled: true,
        color: 'grey',
        type: ButtonType.Disabled
    },
    {
        name: '0',
        disabled: false,
        color: 'grey',
        type: ButtonType.Number
    },
    {
        name: '.',
        disabled: false,
        color: 'grey',
        type: ButtonType.Decimal
    },
    {
        name: '=',
        disabled: false,
        color: 'orange',
        type: ButtonType.Operator
    }
]