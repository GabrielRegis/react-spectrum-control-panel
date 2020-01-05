import { Button } from '@material-ui/core';
import { BlurView } from 'app/Components/BlurView/BlurView';
import { SimulationInstanceSummary } from 'app/Models/SimulationInstanceSummary';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { ClassSummary } from '../../Models/ClassSummary';
import { SimulationStatistics } from '../SimulationStatistics/SimulationStatistics';
import { SpectrumText } from '../SpectrumText/SpectrumText';
import styles from './SimulationClassesStatisticsStyles';
import { RainbowBorderButton } from '../RainbowBorderButton/RainbowBorderButton';
interface IProps {
    // Props type definition
    simulationInstanceSummary: SimulationInstanceSummary
    style?: React.CSSProperties

}

interface IState {
    // State type definition
    selectedSummary?: ClassSummary
}

export const SimulationClassesStatistics: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        selectedSummary: props.simulationInstanceSummary.classSummaries.length > 0 ? props.simulationInstanceSummary.classSummaries[0] : null
    };

    // ComponentDidMount
    useEffect(() => {
        setSelectedSummary(props.simulationInstanceSummary.classSummaries.length > 0 ? props.simulationInstanceSummary.classSummaries[0] : null)
        return () => {
            //ComponentDidUnmount
        }
    }, [props.simulationInstanceSummary])

    const [selectedSummary, setSelectedSummary] = React.useState(initialState.selectedSummary)

    const onClassPressed = (instance: ClassSummary) => {
        setSelectedSummary(instance)
    }

    return (
        <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn, styles.leftAlignedColumn, props.style])}>
            <div style={inline([styles.leftAlignedColumn, styles.upAlignedColumn, styles.fullWidthContainer])}>
                <SpectrumText style={inline([styles.whiteText])} color={Colors.colors.white} size={'h3'} weight={'bold'}>
                    Resultado para cada Classe
                </SpectrumText>
                <SpectrumText style={inline([styles.xSmallMarginTop])} color={Colors.colors.white} size={'c13'} weight={'light'}>
                    Selecione a Classe
                </SpectrumText>
                <div style={inline([styles.fullWidthContainer, styles.leftAlignedRow, styles.upAlignedRow, styles.buttonsContainer])}>
                    {props.simulationInstanceSummary.classSummaries.map((classSummary) =>
                        <RainbowBorderButton key={classSummary.id} onClick={() => onClassPressed(classSummary)}
                            innerStyle={styles.secondaryColorBackground}
                            style={inline([selectedSummary && selectedSummary.classId === classSummary.classId && styles.selectedLoadButton])}>
                            <SpectrumText style={inline([styles.whiteText, selectedSummary && selectedSummary.classId === classSummary.classId && styles.selectedLoadButtonText])} size={'b17'} weight={'semibold'}>
                                {classSummary.className}
                            </SpectrumText>
                        </RainbowBorderButton>
                    )}
                </div>
            </div>

            <SimulationStatistics style={inline([styles.marginTop])} cycleNum={props.simulationInstanceSummary.cycleNum} statistics={selectedSummary.statistics} />

        </div>
    );
};
