import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './RainbowBorderButtonStyles';
import { css } from 'aphrodite';
import { RainbowDiv } from '../RainbowDiv/RainbowDiv';
import { Button } from '@material-ui/core';
import { Colors } from 'app/Theme';
interface IProps {
    // Props type definition
    style?: React.CSSProperties
    innerStyle?: React.CSSProperties
    middleStyle?: React.CSSProperties
    borderRadius?: number
    borderWidth?: number
    onClick?: () => void
    disabled?: boolean
}

interface IState {
    // State type definition
}

export const RainbowBorderButton: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <Button disabled={props.disabled} onClick={props.onClick} style={inline([{ borderRadius: props.borderRadius ? props.borderRadius : 50, }, props.style])} disableFocusRipple>
            <RainbowDiv disabled={props.disabled} style={inline([{
                borderRadius: props.borderRadius ? props.borderRadius : 50,
                padding: props.borderWidth ? props.borderWidth : 3,
            }, styles.textWithoutSelection, props.middleStyle])}>
                <div style={inline([styles.flex1,
                {
                    borderRadius: props.borderRadius ? props.borderRadius : 50,
                    padding: props.borderWidth ? props.borderWidth : 3,
                },
                styles.whiteContainer, styles.xSmallPaddingHorizontal, props.innerStyle])}>
                    {props.children}
                </div>
            </RainbowDiv>
        </Button>

    );
};
