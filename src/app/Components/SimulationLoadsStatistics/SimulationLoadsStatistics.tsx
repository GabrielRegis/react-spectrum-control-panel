import { Button, Grid } from '@material-ui/core';
import { BlurView } from 'app/Components/BlurView/BlurView';
import { SimulationInstanceSummary } from 'app/Models/SimulationInstanceSummary';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { SimulationClassesStatistics } from '../SimulationClassesStatistics/SimulationClassesStatistics';
import { SimulationStatistics } from '../SimulationStatistics/SimulationStatistics';
import { SpectrumText } from '../SpectrumText/SpectrumText';
import styles from './SimulationLoadsStatisticsStyles';
interface IProps {
    // Props type definition
    simulationInstanceSummaries: SimulationInstanceSummary[]
    cycleNum: number
    style?: React.CSSProperties

}

interface IState {
    // State type definition
    selectedInstance?: SimulationInstanceSummary
}

export const SimulationLoadsStatistics: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        selectedInstance: props.simulationInstanceSummaries.length > 0 ? props.simulationInstanceSummaries[0] : null
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const [selectedInstance, setSelectedInstance] = React.useState(initialState.selectedInstance)

    const onLoadClicked = (instance: SimulationInstanceSummary) => {
        setSelectedInstance(instance)
    }

    return (
        <div style={inline([styles.fullWidthContainer, styles.upAlignedRow, styles.leftAlignedRow, styles.spaceBetween, props.style])}>
            <div style={inline([styles.leftAlignedColumn, styles.upAlignedColumn])}>
                <SpectrumText style={inline([styles.whiteText])} color={Colors.colors.white} size={'h3'} weight={'bold'}>
                    Resultado à cada Interação
                </SpectrumText>
                <SpectrumText style={inline([styles.xSmallMarginTop])} color={Colors.colors.white} size={'c13'} weight={'light'}>
                    Selecione a carga
                </SpectrumText>
                <Grid container
                    spacing={2}
                    style={inline([styles.buttonsContainer,])}
                >
                    {props.simulationInstanceSummaries.map((instance) =>
                        <Grid xs={3} item>
                            <BlurView key={instance.id}>
                                <Button onClick={() => onLoadClicked(instance)}
                                    disableFocusRipple={true}
                                    style={inline([styles.loadButton, selectedInstance && selectedInstance.load === instance.load && styles.selectedLoadButton])}>
                                    <SpectrumText style={inline([styles.whiteText, selectedInstance && selectedInstance.load === instance.load && styles.selectedLoadButtonText])}
                                        size={'c13'}
                                        weight={'semibold'}>
                                        {instance.load}
                                    </SpectrumText>
                                </Button>
                            </BlurView>
                        </Grid>

                    )}
                </Grid>
            </div>
            <div style={inline([styles.verticalDivider, styles.marginRight])} />

            <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn, styles.leftAlignedColumn])}>
                <SpectrumText style={inline([styles.whiteText])} color={Colors.colors.white} size={'h3'} weight={'bold'}>
                    {'Resultados para carga \u00a0' + selectedInstance.load}
                </SpectrumText>
                <SimulationStatistics cycleNum={props.cycleNum} statistics={selectedInstance.statistics} />
                <div style={inline([styles.divider, styles.marginTop, styles.marginBottom])} />

                <SimulationClassesStatistics simulationInstanceSummary={selectedInstance} />
            </div>


        </div>
    );
};
