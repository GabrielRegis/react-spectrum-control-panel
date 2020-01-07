import { faPoll, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Collapse, Button } from '@material-ui/core';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { SimulationInstanceSummaryStatistics } from 'app/Models/SimulationInstanceSummaryStatistics';
import { SimulationSummary } from 'app/Models/SimulationSummary';
import { Colors, Fonts } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { v4 } from 'uuid';
import { BarChart, BarChartData } from '../BarChart/BarChart';
import { PercentageResult } from '../PercentageResult/PercentageResult';
import { SimpleStatisticsResult } from '../SimpleStatisticsResult/SimpleStatisticsResult';
import styles from './SimulationStatisticsStyles';
import { RainbowBorderButton } from '../RainbowBorderButton/RainbowBorderButton';
import Chart from "react-apexcharts";

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
                yLabel: Math.trunc(props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedBandwidthAmountMean).toString(),
                value: Math.trunc(props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedBandwidthAmountMean),
                confidenceInterval: props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedBandwidthConfidenceInterval
            } as BarChartData
        })
        bcChartData = props.statistics.blockedAmountPerCycle.map((bc, index) => {
            return {
                xLabel: ((index * props.loadStep) + props.initialLoad).toString(),
                yLabel: Math.trunc(props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedAmountMean).toString(),
                value: Math.trunc(props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedAmountMean),
                confidenceInterval: props.simulationSummary.simulationInstanceSummaries[index].statistics.totalBlockedAmountConfidenceInterval
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

    let classesBPLabels = []
    let classesBP = []
    let classesColors = []

    if (props.simulationSummary && props.simulationSummary.blockedCallsAmountPerClass) {
        classesBPLabels = props.simulationSummary.blockedCallsAmountPerClass.map((classStatistics) => {
            return classStatistics.className
        })
        classesBP = props.simulationSummary.blockedCallsAmountPerClass.map((classStatistics) => {
            return classStatistics.blockedAmount
        })
        classesColors = props.simulationSummary.blockedCallsAmountPerClass.map((classStatistics) => {
            return classStatistics.color
        })
    }

    const chartOptions = {
        dataLabels: {
            enabled: false,
            dropShadow: {
                enabled: false
            },
            style: {
                fontSize: '14px',
                fontFamily: Fonts.appBoldFont,
                fontWeight: 'bold',
            },
            background: {
                enabled: true,
                foreColor: '#fff',
            },
        },
        pie: {
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: true,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            },
        },
        stroke: {
            show: false,
            curve: 'smooth',
            width: 2,
            dashArray: 0,
        },
        labels: classesBPLabels,
        chart: {
            type: 'donut',
            fontFamily: Fonts.appFont,
            dropShadow: {
                enabled: false,
            }
        },
        fill: {
            colors: classesColors
        },
        colors: classesColors,
        segmentShowStroke: false,
        legend: {
            fontFamily: Fonts.appFontSemibold,
            fontSize: '14px',
            labels: {
                useSeriesColors: true,
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

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
                        <BarChart shouldEnableMaxValueToggle={true} maxValue={maxBPchartValue}
                            title={'Probabilidade de Bloqueio' + (props.loadStep && props.initialLoad ? ' (Média)' : '')}
                            data={bpChartData}
                            yAxisLabel={'BP (%)'}
                            xAxisLabel={props.loadStep ? 'Carga' : 'Semente'} />
                        <BarChart
                            style={inline([styles.bigMarginLeft])}
                            yAxisLabel={'Gb/s'}
                            xAxisLabel={props.loadStep ? 'Carga' : 'Semente'} maxValue={maxBBRchartValue}
                            title={'Banda Bloqueada' + (props.loadStep && props.initialLoad ? ' (Média)' : '')}
                            data={bbrChartData} />
                        <BarChart style={inline([styles.bigMarginLeft])}
                            xAxisLabel={props.loadStep ? 'Carga' : 'Semente'}
                            yAxisLabel={'Nro Chamadas'}
                            maxValue={maxBCchartValue}
                            title={'Chamadas Bloqueadas' + (props.loadStep && props.initialLoad ? ' (Média)' : '')}
                            data={bcChartData} />
                        {props.simulationSummary && props.simulationSummary.blockedCallsAmountPerClass &&
                            <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.bigMarginLeft])}>
                                <SpectrumText size={'b15'} weight={'semibold'} color={'white'}
                                    style={inline([styles.fullWidthContainer,])}>
                                    {"Comparação de Chamadas Bloqueadas por Classe"}
                                </SpectrumText>
                                <Chart
                                    width={320}
                                    options={
                                        chartOptions
                                    }
                                    series={classesBP}
                                    type={"donut"}
                                />
                            </div>
                        }
                    </div>
                </div>}
            </Collapse>


        </div>

    );
};
