import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import AutosizeInput from 'react-input-autosize';
import styles from './SpectrumTextInputStyles';


interface IProps {
    // Props type definition
    value?: string | number
    onChange?: (text: string) => void
    style?: React.CSSProperties
    inputStyle?: React.CSSProperties
    type?: 'number' | 'text'
    max?: number
    min?: number
    maxCharacters?: number
    error?: string
    step?: number
}

interface IState {
    // State type definition
    number: number;
}

export const SpectrumTextInput: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        number: 0
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onChange = (text: string) => {
        if (props.onChange) {
            if (props.type === 'number') {
                const number = parseFloat(text)
                const max = props.max ? props.max : 1000
                const min = props.min ? props.min : 0
                if (text === undefined || text === null || Number.isNaN(parseFloat(text))) {
                    props.onChange(min.toString())
                    return
                }
                props.onChange(Math.min(Math.max(number, min), max).toString())
                return
            }
            props.onChange(text)
        }
    }

    const onAddPressed = () => {
        const newNumber = parseFloat(props.value.toString()) + (props.step ? props.step : 1)
        const max = props.max ? props.max : 1000
        const min = props.min ? props.min : 0
        props.onChange(Math.min(Math.max(newNumber, min), max).toString())
    }
    const onSubtractPressed = () => {
        const newNumber = parseFloat(props.value.toString()) - (props.step ? props.step : 1)
        const max = props.max ? props.max : 1000
        const min = props.min ? props.min : 0
        props.onChange(Math.min(Math.max(newNumber, min), max).toString())
    }

    return (
        <div style={inline([styles.textInputContainer,
        styles.centeredRow,
        props.error && styles.textInputContainerError,
        styles.shadowView,
        { ...props.style }])}>

            <AutosizeInput
                inputStyle={inline([styles.textInput, props.inputStyle])}
                name="form-field-name"
                value={props.value}
                onChange={(event) => onChange(event.target.value)}
            />
            {props.type === 'number' && <div style={inline([styles.centeredColumn, styles.xSmallMarginLeft])}>
                <IconButton onClick={onAddPressed} size={'small'} aria-label="Aumentar">
                    <FontAwesomeIcon color={Colors.colors.lightGray} size={'xs'} icon={faPlusCircle} />
                </IconButton>
                <IconButton onClick={onSubtractPressed} size={'small'} aria-label="Diminuir">
                    <FontAwesomeIcon color={Colors.colors.lightGray} size={'xs'} icon={faMinusCircle} />
                </IconButton>
            </div>}
        </div>
    );
};
