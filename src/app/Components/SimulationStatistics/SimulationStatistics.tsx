import { faPoll, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Collapse, Button } from '@material-ui/core';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { SimulationInstanceSummaryStatistics } from 'app/Models/SimulationInstanceSummaryStatistics';
import { SimulationSummary } from 'app/Models/SimulationSummary';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { v4 } from 'uuid';
import { BarChart, BarChartData } from '../BarChart/BarChart';
import { PercentageResult } from '../PercentageResult/PercentageResult';
import { SimpleStatisticsResult } from '../SimpleStatisticsResult/SimpleStatisticsResult';
import styles from './SimulationStatisticsStyles';
import { RainbowBorderButton } from '../RainbowBorderButton/RainbowBorderButton';

interface IProps {
    // Props type definition
    statistics: SimulationInstanceSummaryStatistics
    simulationSummary?: SimulationSummary
    initialLoad?: number
    loadStep?: number
    cycleNum: number
    title?: string
    style?: React.CSSProperties

}

interface IState {
    // State type definition
    id: string
    isCollapsed: boolean
}

export const SimulationStatistics: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        id: v4(),
        isCollapsed: false
    };

    const [id, setId] = React.useState(initialState.id)
    const [isCollapsed, setIsCollapsed] = React.useState(initialState.isCollapsed)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onToggleStatistics = () => {
        setIsCollapsed(!isCollapsed)
    }

    const blockedAmount = props.statistics.totalBlockedAmount
    const callsAmount = props.statistics.totalCallsAmount
    const successCallsAmount = props.statistics.totalSuccessAmount

    const blockedAmountMean = props.statistics.totalBlockedAmountMean
    const callsAmountMean = props.statistics.totalCallsAmountMean
    const successCallsAmountMean = props.statistics.totalSuccessAmountMean

    let bpChartData: BarChartData[] = []
    let bbrChartData: BarChartData[] = []
    let bcChartData: BarChartData[] = []

    if (props.loadStep && props.initialLoad) {
        bpChartData = props.statistics.blockProbabilityPerCycle.map((bp, index) => {
            return {
                xLabel: ((index * props.loadStep) + props.initialLoad).toString(),
                yLabel: (bp * 100).toFixed(1) + '%',
                value: bp,
                confidenceInterval: props.simulationSummary.simulationInstanceSummaries[index].statistics.blockProbabilityConfidenceInterval
            } as BarChartData
        })
        bbrChartData = props.statistics.totalBlockedBandwidthAmountPerCycle.map((bbr, index) => {
            return {
                xLabel: ((index * props.loadStep) + props.initialLoad).toString(),
                yLabel: bbr.toString(),
                value: bbr,
                confidenceInterval: props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedBandwidthConfidenceInterval
            } as BarChartData
        })
        bcChartData = props.statistics.blockedAmountPerCycle.map((bc, index) => {
            return {
                xLabel: ((index * props.loadStep) + props.initialLoad).toString(),
                yLabel: bc.toString(),
                value: bc,
                // confidenceInterval: props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedAmountMean
            } as BarChartData
        })
    } else {
        for (let i = 0; i < props.cycleNum; i++) {
            bpChartData.push({
                xLabel: (i + 1).toString(),
                yLabel: (props.statistics.blockProbabilityPerCycle[i] * 100).toFixed(1) + '%',
                value: props.statistics.blockProbabilityPerCycle[i],
            })
            bbrChartData.push({
                xLabel: (i + 1).toString(),
                yLabel: props.statistics.totalBlockedBandwidthAmountPerCycle[i].toString(),
                value: props.statistics.totalBlockedBandwidthAmountPerCycle[i],
            })

            bcChartData.push({
                xLabel: (i + 1).toString(),
                yLabel: props.statistics.blockedAmountPerCycle[i].toString(),
                value: props.statistics.totalBlockedBandwidthAmountPerCycle[i],
            })
        }
    }

    let maxBPchartValue = 0
    bpChartData.forEach((dat) => {
        if (dat.value > maxBPchartValue) {
            maxBPchartValue = dat.value
        }
    })
    let maxBBRchartValue = 0
    bbrChartData.forEach((dat) => {
        if (dat.value > maxBBRchartValue) {
            maxBBRchartValue = dat.value
        }
    })
    let maxBCchartValue = 0
    bcChartData.forEach((dat) => {
        if (dat.value > maxBCchartValue) {
            maxBCchartValue = dat.value
        }
    })


    return (
        <div id={id} style={inline([styles.fullWidthContainer, styles.centeredColumn, styles.leftAlignedColumn, styles.positionRelative, props.style])}>
            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                {props.title && <SpectrumText style={inline([styles.whiteText])} size={'h3'} weight={'bold'}>
                    {props.title}
                    <FontAwesomeIcon style={inline([styles.xSmallMarginLeft])} color={Colors.colors.white} size={'1x'} icon={faPoll} />
                </SpectrumText>}
                <RainbowBorderButton
                    innerStyle={inline([styles.secondaryColorBackground])}
                    style={inline([props.title && styles.smallMarginLeft])}
                    onClick={onToggleStatistics} >
                    <SpectrumText style={inline([styles.whiteText, styles.xSmallMarginRight])} size={'b15'} weight={'bold'}>
                        {isCollapsed ? 'Expandir' : 'Minimizar'}
                    </SpectrumText>
                    <FontAwesomeIcon color={Colors.colors.lightGray} size={'lg'} icon={faExpand} />
                </RainbowBorderButton>
            </div>
            <Collapse in={!isCollapsed}>
                {!isCollapsed && <div style={inline([styles.fullWidthContainer])}>
                    <div style={inline([styles.fullWidthContainer, styles.upAlignedRow, styles.leftAlignedRow, styles.spaceBetween, styles.positionRelative])}>
                        <div style={inline([styles.leftAlignedColumn, styles.upAlignedColumn])}>

                            <Grid container spacing={2} style={inline([styles.upAlignedRow, styles.xSmallMarginTop])}>
                                <Grid item xs={3}>
                                    <SimpleStatisticsResult
                                        style={inline([styles.simpleStatisticsContainer])}
                                        label={'Média de Chamadas com Sucesso'}
                                        result={successCallsAmountMean.toFixed(0)} />
                                </Grid>

                                <Grid item xs={3}>
                                    <SimpleStatisticsResult
                                        style={inline([styles.simpleStatisticsContainer])}
                                        label={'Média de Chamadas bloqueadas'}
                                        result={blockedAmountMean.toFixed(0)} />
                                </Grid>

                                <Grid item xs={3}>
                                    <SimpleStatisticsResult
                                        style={inline([styles.simpleStatisticsContainer])}
                                        label={'Total de Chamadas com Sucesso'}
                                        result={successCallsAmount} />
                                </Grid>

                                <Grid item xs={3}>
                                    <SimpleStatisticsResult
                                        style={inline([styles.simpleStatisticsContainer])}
                                        label={'Total de Chamadas bloqueadas'}
                                        result={blockedAmount} />
                                </Grid>

                                <Grid item xs={3}>
                                    <SimpleStatisticsResult
                                        style={inline([styles.simpleStatisticsContainer])}
                                        label={'Total de Chamadas'}
                                        result={callsAmount} />
                                </Grid>
                            </Grid>
                        </div>

                        <div style={inline([styles.verticalDivider])} />

                        <div style={inline([styles.centeredRow])}>
                            <PercentageResult style={inline([styles.marginRight])} label={'Bloqueadas'} result={props.statistics.blockProbabilityMean} />
                            <PercentageResult label={'Sucedidas'} result={1 - props.statistics.blockProbabilityMean} />
                        </div>
                    </div>
                    <div style={inline([styles.divider, styles.marginTop, styles.marginBottom])} />
                    <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                        <BarChart shouldEnableMaxValueToggle={true} maxValue={maxBPchartValue} title={'Probabilidade de Bloqueio'} data={bpChartData} xAxisLabel={props.loadStep ? 'Carga' : 'Semente'} />
                        <BarChart style={inline([styles.bigMarginLeft])} yAxisLabel={'Gbs'} xAxisLabel={props.loadStep ? 'Carga' : 'Semente'} maxValue={maxBBRchartValue} title={'Banda Bloqueada'} data={bbrChartData} />
                        <BarChart style={inline([styles.bigMarginLeft])} xAxisLabel={props.loadStep ? 'Carga' : 'Semente'} maxValue={maxBCchartValue} title={'Chamadas Bloqueadas'} data={bcChartData} />
                    </div>
                </div>}
            </Collapse>


        </div>

    );
};
