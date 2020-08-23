import { CircularProgress } from '@material-ui/core';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './PercentageResultStyles';
interface IProps {
    // Props type definition
    result: number;
    label?: string
    style?: React.CSSProperties
}

interface IState {
    // State type definition
}

export const PercentageResult: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, props.style])}>
            <SpectrumText style={inline([styles.label])} color={Colors.colors.white} size={'b17'} weight={'semibold'}>
                {props.label ? props.label : props.children}
            </SpectrumText>
            <div style={inline([styles.centeredColumn, styles.circularContainer])}>
                <CircularProgress thickness={3}
                    disableShrink={true}
                    style={inline([styles.positionAbsolute, styles.circularProgressViewBackground])}
                    variant="static" value={100} />
                <CircularProgress thickness={3} style={inline([styles.circularProgressView])} variant="static" value={props.result * 100} />
                <SpectrumText style={inline([styles.positionAbsolute, styles.result])} color={Colors.colors.white} size={'c13'} weight={'bold'}>
                    {(props.result * 100).toFixed(1) + '%'}
                </SpectrumText>
            </div>
        </div>
    );
};
