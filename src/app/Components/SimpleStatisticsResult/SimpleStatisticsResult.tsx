import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './SimpleStatisticsResultStyles';
interface IProps {
    // Props type definition
    label?: string;
    result?: string | number;
    unity?: string;
    style?: React.CSSProperties
}

interface IState {
    // State type definition
}

export const SimpleStatisticsResult: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        number: 0
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.upAlignedColumn, styles.leftAlignedColumn, props.style])}>
            <SpectrumText style={inline([styles.label, styles.miniTextSpacing])} size={'c13'} weight={'light'} color={'white'}>
                {props.label}
            </SpectrumText>
            <div style={inline([styles.centeredRow, styles.botAlignedRow])}>
                <SpectrumText style={inline([styles.result])} size={'b17'} weight={'bold'} color={'white'}>
                    {props.result}
                </SpectrumText>
                {props.unity && <SpectrumText style={inline([styles.unity])} size={'c13'} weight={'light'} color={'white'}>
                    {props.unity}
                </SpectrumText>}
            </div>
        </div>
    );
};
