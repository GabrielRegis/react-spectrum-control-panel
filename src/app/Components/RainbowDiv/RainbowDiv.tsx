import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './RainbowDivStyles';
import { css } from 'aphrodite';
interface IProps {
    // Props type definition
    style?: React.CSSProperties
    disabled?: boolean
}

interface IState {
    // State type definition
}

export const RainbowDiv: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div className={css(props.disabled === true ? styles.aphroditeStyles.disabledRainbowView : styles.aphroditeStyles.rainbowView)} style={inline([props.style])}  >
            {props.children}
        </div>
    );
};
