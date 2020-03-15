import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './LoadExampleStyles';
import { Colors } from 'app/Theme';
import { Slider } from '@material-ui/core';
import { SpectrumText } from '../SpectrumText/SpectrumText';

interface IProps {
    // Props type definition
    style?: React.CSSProperties
}

interface IState {
    // State type definition
    sliderValue: number
}

interface Flow {
    label: string
    color: string
    multiplyValue: number
}

export const LoadExample: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        sliderValue: 50
    };

    const minValue = 50
    const maxValue = 350

    const [sliderValue, setSliderValue] = React.useState(initialState.sliderValue)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const flows: Flow[] = [
        {
            label: 'Conexão A',
            color: Colors.colors.healthPink,
            multiplyValue: 1
        },
        {
            label: 'Conexão B',
            color: Colors.colors.healthPink,
            multiplyValue: -1
        },
        {
            label: 'Conexão C',
            color: Colors.colors.healthPink,
            multiplyValue: 0.2
        },
    ]

    const onSliderChange = (event: any, newValue: number) => {
        setSliderValue(newValue);
    };


    const renderFlow = (flow: Flow) => {
        return <div style={inline([styles.flowContainer, styles.centeredColumn, styles.xSmallMarginTop, {
            backgroundColor: flow.color,
            transform: `translate(${((flow.multiplyValue / 5) * (maxValue - sliderValue))}px, ${0}px)`

        }])}>
            <SpectrumText size={'b15'} color={'white'}>
                {flow.label}
            </SpectrumText>
        </div>
    }

    return (
        <div style={inline([styles.centeredColumn, styles.fullContainer, props.style])} >
            {flows.map(flow => {
                return renderFlow(flow)
            })}

            <SpectrumText
                style={inline([styles.marginTop, styles.fullWidthContainer])}
                weight={'semibold'}
                color={'white'}>
                {'Carga: ' + sliderValue + ' Erlangs'}
            </SpectrumText>
            <Slider
                defaultValue={30}
                onChange={onSliderChange}
                style={{
                    color: Colors.colors.pink
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay={"off"}
                step={50}
                marks
                min={minValue}
                max={maxValue}
            />
        </div>
    );
};
