import { Button } from '@material-ui/core';
import { BlurView } from 'app/Components/BlurView/BlurView';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { simulationSummaryStoreContext } from 'app/Store/SimulationSummaryStore';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { CriticalEventsStatistics } from '../../../Components/CriticalEventsStatistics/CriticalEventsStatistics';
import { SimulationLoadsStatistics } from '../../../Components/SimulationLoadsStatistics/SimulationLoadsStatistics';
import { SimulationStatistics } from '../../../Components/SimulationStatistics/SimulationStatistics';
import styles from './ResultsScreenStyles';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/Theme';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { steps } from './ResultsScreenGuide';
import SpectrumGuide from 'app/Components/SpectrumGuide/SpectrumGuide';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const ResultsScreen: FunctionComponent<IProps> = observer((props) => {
    const simulationSummaryStore = React.useContext(simulationSummaryStoreContext)
    const guide: React.MutableRefObject<any> = React.useRef(null)

    const initialState: IState = {
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onInfoClicked = () => {
        if (guide && guide.current && guide.current.openGuide) {
            guide.current.openGuide()
        }
    }


    const simulationInstanceSummaries = simulationSummaryStore.simulationSummary.simulationInstanceSummaries

    return (
        <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn, styles.positionRelative])}>
            <SpectrumGuide ref={guide} shouldLaunchGuideOnRender={true} tourSteps={steps} />

            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.positionAbsolute, styles.newSimulationButton])}>

                <RainbowBorderButton onClick={() => {
                    simulationSummaryStore.simulationSummary = null
                }}>
                    <SpectrumText size={'b15'} weight={'bold'}>
                        Simular novamente
                </SpectrumText>
                </RainbowBorderButton>
                <RainbowBorderButton
                    onClick={onInfoClicked}
                    style={styles.xSmallMarginLeft}
                    innerStyle={inline([
                        styles.centeredRow, {
                            width: 0
                        }
                    ])}
                >
                    <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={faInfoCircle} />
                </RainbowBorderButton>

            </div>
            <div className={"summaryGeneral"} style={inline([styles.statisticsContainer, styles.marginTop, styles.centeredRow,])}>
                <BlurView style={inline([styles.bigPadding, styles.centeredColumn])} >
                    <SimulationStatistics
                        title={'Resultados Gerais'}
                        cycleNum={simulationSummaryStore.simulationSummary.cycleNum}
                        loadStep={simulationSummaryStore.simulationSummary.loadStep}
                        initialLoad={simulationSummaryStore.simulationSummary.startLoad}
                        simulationSummary={simulationSummaryStore.simulationSummary}
                        statistics={simulationSummaryStore.simulationSummary.statistics} />
                </BlurView>
            </div>
            <div className={"summaryLoadResults"} style={inline([styles.statisticsContainer, styles.intanceStatisticsContainer, styles.smallMarginTop, styles.centeredRow,])}>
                <BlurView blurAmount={20} style={inline([styles.bigPadding, styles.centeredColumn])} >
                    <SimulationLoadsStatistics
                        cycleNum={simulationSummaryStore.simulationSummary.cycleNum}
                        simulationInstanceSummaries={simulationInstanceSummaries} />
                </BlurView>
            </div>

            <div style={inline([styles.statisticsContainer, styles.criticalEventsContainer, styles.smallMarginTop, styles.centeredRow,])}>
                <BlurView style={inline([styles.bigPadding, styles.centeredColumn])} >
                    <CriticalEventsStatistics
                    />
                </BlurView>
            </div>

        </div>
    );
});
