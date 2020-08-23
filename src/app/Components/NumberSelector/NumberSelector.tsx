import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './NumberSelectorStyles';
import { Button } from '@material-ui/core';
interface IProps {
    // Props type definition
    numbersAmount?: number
    numbers?: number[]
    step?: number
    initialNumber?: number
    selectedNumber: number
    onNumberSelected?: (number: number) => void
    style?: React.CSSProperties
}

interface IState {
    // State type definition
    numbers: number[]
    // selectedNumber: number
}

export const NumberSelector: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        numbers: [],
        // selectedNumber: props.selectedNumber
    };

    const [numbers, setNumbers] = React.useState(initialState.numbers)
    // const [selectedNumber, setSelectedNumber] = React.useState(initialState.selectedNumber)

    // ComponentDidMount
    useEffect(() => {
        if (props.numbers) {
            setNumbers(props.numbers)
        } else {
            for (let i = 0; i < props.numbersAmount; i++) {
                numbers.push(props.initialNumber + props.step * i)
            }
        }

        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onNumberPressed = (number: number) => {
        // setSelectedNumber(number)
        if (props.onNumberSelected) {
            props.onNumberSelected(number)
        }
    }

    return (
        <div style={inline([styles.centeredRow, props.style])} >
            {numbers.map((number, index) => {
                return <Button onClick={() => onNumberPressed(number)} style={inline([styles.slotsSuggestionButton, number === props.selectedNumber && styles.selectedSlotsSuggestionButton, index === 0 && { margin: 0 }])}>
                    {number}
                </Button>
            })}
        </div>
    );
};
