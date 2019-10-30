import { faPoll, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';
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
import styles from './InstanceCriticalEventStatisticsStyles';

interface IProps {
    // Props type definition

    title?: string
    style?: React.CSSProperties

}

interface IState {
    // State type definition
    id: string
}

export const InstanceCriticalEventStatistics: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        id: v4()
    };

    const [id, setId] = React.useState(initialState.id)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])


    return (
        <div id={id} style={inline([styles.fullWidthContainer, styles.centeredColumn, styles.leftAlignedColumn, styles.positionRelative, props.style])}>
            <div style={inline([styles.fullWidthContainer, styles.upAlignedRow, styles.leftAlignedRow, styles.spaceBetween, styles.positionRelative])}>
                <div style={inline([styles.leftAlignedColumn, styles.upAlignedColumn])}>
                    {props.title && <SpectrumText style={inline([styles.whiteText])} size={'h3'} weight={'bold'}>
                        {props.title}
                        <FontAwesomeIcon style={inline([styles.xSmallMarginLeft])} color={Colors.colors.white} size={'1x'} icon={faExclamationTriangle} />
                    </SpectrumText>}

                </div>


            </div>
            <div style={inline([styles.divider, styles.marginTop, styles.marginBottom])} />

        </div>

    );
};
