import { CriticalBPEventSnapshot } from 'app/Models/CriticalBPEventSnapshot';
import { CriticalFragmentationEventSnapshot } from 'app/Models/CriticalFragmentationEventSnapshot';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { SimpleStatisticsResult } from '../SimpleStatisticsResult/SimpleStatisticsResult';
import { SnapshotSlots } from '../TopologyStatistics/SnapshotSlots';
import TopologySnapshot from '../TopologyStatistics/TopologySnapshot';
import styles from './CriticalEventStatisticsStyles';

interface IProps {
    // Props type definition
    criticalEvent: CriticalFragmentationEventSnapshot
    style?: React.CSSProperties

}

interface IState {
    // State type definition
}

export const CriticalEventStatistics: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const bpCriticalEvent = props.criticalEvent as CriticalBPEventSnapshot

    return (
        props.criticalEvent ? <div style={inline([styles.fullWidthContainer, styles.positionRelative, styles.centeredColumn, styles.leftAlignedColumn, styles.positionRelative, props.style])}>
            <div style={inline([styles.centeredRow])}>
                <SimpleStatisticsResult
                    style={inline([styles.simpleStatisticsContainer])}
                    label={'Iteração do Evento Crítico'}
                    result={props.criticalEvent.currentEvent.toString()} />
                <SimpleStatisticsResult
                    style={inline([styles.simpleStatisticsContainer])}
                    label={'Número total de Iterações do Ciclo'}
                    result={props.criticalEvent.eventsAmount.toString()} />
                {props.criticalEvent.fragmentation ? <SimpleStatisticsResult
                    style={inline([styles.simpleStatisticsContainer])}
                    label={'Fragmentação da Topologia na Iteração'}
                    result={(props.criticalEvent.fragmentation * 100).toFixed(2).toString() + '%'} /> :
                    <SimpleStatisticsResult
                        style={inline([styles.simpleStatisticsContainer])}
                        label={'Total de Chamadas Bloqueadas na Iteração'}
                        result={bpCriticalEvent.blockedAmount} />}
                {/* <SimpleStatisticsResult
                    style={inline([styles.simpleStatisticsContainer])}
                    label={'Ganho'}
                    result={props.criticalEvent.gainRate.toPrecision(2).toString() + 'x à mais do que a última iteração.'} /> */}
            </div>
            <div style={inline([styles.fullWidthContainer, styles.topologyContainer, styles.xSmallMarginTop])}>
                <TopologySnapshot />
            </div>
            <div style={inline([styles.fullWidthContainer, styles.topologyContainer, styles.xSmallPadding, styles.smallMarginTop])}>
                <SnapshotSlots criticalEvent={props.criticalEvent} />
            </div>

        </div> : <div />

    );
};
