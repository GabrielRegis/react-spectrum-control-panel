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
            props.onChange(text)
        }
    }

    return (
        <div style={inline([styles.textInputContainer, styles.xSmallPadding, { ...props.style }])}>
            {/* <TextField
                value={props.value}
                onChange={(event) => onChange(event.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            /> */}

            <AutosizeInput
                inputStyle={inline([styles.textInput])}
                name="form-field-name"
                value={props.value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
};
