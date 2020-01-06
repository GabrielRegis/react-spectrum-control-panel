import { faPlusSquare as fasPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare as farPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from '@material-ui/core';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { SpectrumText } from '../SpectrumText/SpectrumText';
import styles from './BarChartStyles';

interface IProps {
    style?: React.CSSProperties
    shouldEnableMaxValueToggle?: boolean
    data: BarChartData[]
    title?: string
    xAxisLabel?: string
    yAxisLabel?: string
    maxValue?: number
}

interface IState {
    // State type definition
    maxValue: number
    shouldUseMaxValue: boolean
}

export interface BarChartData {
    value?: number
    xLabel?: string
    yLabel?: string
    confidenceInterval?: number
}

export const BarChart: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        maxValue: 1,
        shouldUseMaxValue: true
    };

    const [maxValue, setMaxValue] = React.useState(initialState.maxValue)
    const [shouldUseMaxValue, setShouldUseMaxValue] = React.useState(initialState.shouldUseMaxValue)


    // ComponentDidMount
    useEffect(() => {

        if (props.maxValue === null || props.maxValue === undefined) {
            updateMaxValue()
        }

    }, [])

    const updateMaxValue = () => {
        let maxValueAux = 0
        props.data.forEach((dat) => {
            if (dat.value > maxValueAux) {
                maxValueAux = dat.value
            }
        })
        setMaxValue(maxValueAux)
    }

    const onToggleShouldUseMaxValue = (isChecked) => {
        setShouldUseMaxValue(!shouldUseMaxValue)
    }

    const renderBar = (data: BarChartData, index: number) => {
        const selectedMaxValue = shouldUseMaxValue ? (props.maxValue ? props.maxValue : maxValue) : 1
        return <div key={data.value + index} style={inline([styles.fullHeightContainer, styles.centeredColumn, styles.botAlignedColumn, index !== 0 && styles.xSmallMarginLeft])}>
            <SpectrumText size={'c13'} weight={'semibold'} color={'white'}
                style={inline([styles.fullWidthContainer, styles.textAlignHorizontalCenter, {
                    bottom: (data.value / selectedMaxValue) * 45 + '%',
                    zIndex: 5,
                }])}>
                {data.yLabel}
            </SpectrumText>
            <div style={inline([styles.bar, styles.fullWidthContainer, styles.positionRelative, styles.topCenteredColumn, {
                flex: data.value / selectedMaxValue,
                opacity: (data.value / selectedMaxValue * 2) + 0.2
            }])}>
                {data.confidenceInterval && <div style={inline([styles.confidenceInterval, styles.positionAbsolute, {
                    height: data.confidenceInterval / 10,
                    top: -data.confidenceInterval / 20,
                    opacity: 0.7
                }])} />}
            </div>
            {data.xLabel && <SpectrumText size={'c11'} weight={'light'} color={'white'}
                style={inline([styles.fullWidthContainer, styles.textAlignHorizontalCenter, styles.xSmallMarginTop])}>
                {data.xLabel}
            </SpectrumText>}
        </div>
    }

    return (
        <div style={inline([styles.barChart, styles.leftAlignedColumn, styles.positionRelative, props.style])}>
            <div style={inline([styles.upAlignedRow, styles.spaceBetween])}>
                {props.title && <SpectrumText size={'b15'} weight={'semibold'} color={'white'}
                    style={inline([styles.fullWidthContainer])}>
                    {props.title}
                </SpectrumText>}
                {props.shouldEnableMaxValueToggle === true && <Checkbox
                    style={inline([styles.checkbox])}
                    checked={shouldUseMaxValue}
                    //@ts-ignore
                    icon={<FontAwesomeIcon color={Colors.colors.white} icon={farPlusSquare} />}
                    //@ts-ignore
                    checkedIcon={<FontAwesomeIcon color={Colors.colors.white} icon={fasPlusSquare} />}
                    onChange={onToggleShouldUseMaxValue}
                />}
            </div>

            <div style={inline([styles.leftAlignedRow, styles.smallPaddingHorizontal, styles.botAlignedRow, styles.fullHeightContainer, styles.xSmallMarginTop, styles.fullWidthContainer])}>
                {props.data.map((data, index) => {
                    return renderBar(data, index)
                })}
            </div>

            <div style={inline([styles.xAxis, styles.fullWidthContainer, styles.rightAlignedRow])}>
                <SpectrumText style={inline([styles.flex1, styles.rightAlignedColumn, styles.axisText])} weight={'light'} color={'white'}
                >
                    {props.xAxisLabel}
                </SpectrumText>
            </div>
            <div style={inline([styles.yAxis, styles.rightAlignedRow])}>
                <SpectrumText style={inline([styles.flex1, styles.rightAlignedColumn, styles.axisText])} size={'c11'} weight={'light'} color={'white'}
                >
                    {props.yAxisLabel ? props.yAxisLabel : " % "}
                </SpectrumText>
            </div>

        </div>
    );
};
