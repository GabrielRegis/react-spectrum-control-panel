import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { BlurView } from 'app/Components/BlurView/BlurView';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { simulationSummaryStoreContext } from 'app/Store/SimulationSummaryStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { v4 } from 'uuid';
import { CriticalBPEventSnapshot } from '../../Models/CriticalBPEventSnapshot';
import { CriticalEventSnapshot } from '../../Models/CriticalEventSnapshot';
import { CriticalEventStatistics } from '../CriticalEventStatistics/CriticalEventStatistics';
import styles from './CriticalEventsStatisticsStyles';

interface IProps {
    // Props type definition
    title?: string
    style?: React.CSSProperties

}

interface IState {
    // State type definition
    id: string
    selectedEvent?: CriticalBPEventSnapshot
    selectedCriticalEventCategory: 'BP' | 'FRAGMENTATION'
    criticalEvents: CriticalBPEventSnapshot[]
}

export const CriticalEventsStatistics: FunctionComponent<IProps> = observer((props) => {

    const simulationSummaryStore = React.useContext(simulationSummaryStoreContext)
    const criticalBpEvents = simulationSummaryStore.simulationSummary.criticalBPEventSnapshots ? simulationSummaryStore.simulationSummary.criticalBPEventSnapshots : []
    const criticalFragEvents = simulationSummaryStore.simulationSummary.criticalFragmentationEventSnapshots ? simulationSummaryStore.simulationSummary.criticalFragmentationEventSnapshots : []

    const initialState: IState = {
        id: v4(),
        criticalEvents: criticalFragEvents,
        selectedEvent: criticalFragEvents.length > 0 ? criticalFragEvents[0] : null,
        selectedCriticalEventCategory: 'FRAGMENTATION'
    };

    const [id, setId] = React.useState(initialState.id)

    const [criticalEvents, setCriticalEvents] = React.useState(initialState.criticalEvents)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const [selectedEvent, setSelectedEvent] = React.useState(initialState.selectedEvent)
    const [selectedCriticalEventCategory, setSelectedCriticalEventCategory] = React.useState(initialState.selectedCriticalEventCategory)

    const onLoadClicked = (event: CriticalEventSnapshot) => {
        setSelectedEvent(event)
    }

    const onCategoryClicked = (category: 'BP' | 'FRAGMENTATION') => {
        setSelectedCriticalEventCategory(category)
        if (category === 'BP') {
            setCriticalEvents(criticalBpEvents)
            setSelectedEvent(criticalBpEvents[0])
        } else {
            setCriticalEvents(criticalFragEvents)
            setSelectedEvent(criticalFragEvents[0])
        }
    }

    return (
        <div id={id} style={inline([styles.fullWidthContainer, styles.positionRelative, styles.centeredColumn, styles.leftAlignedColumn, styles.positionRelative, props.style])}>
            <div style={inline([styles.fullWidthContainer, styles.botAlignedRow, styles.leftAlignedRow, styles.positionRelative])}>
                <div style={inline([styles.leftAlignedColumn, styles.upAlignedColumn])}>
                    <SpectrumText style={inline([styles.whiteText])} size={'h3'} weight={'bold'}>
                        {'Eventos Críticos'}
                        <FontAwesomeIcon style={inline([styles.xSmallMarginLeft])} color={Colors.colors.white} size={'1x'} icon={faExclamationTriangle} />
                    </SpectrumText>
                    <div style={inline([styles.leftAlignedColumn, styles.upAlignedColumn])}>
                        <SpectrumText style={inline([styles.xSmallMarginTop])} color={Colors.colors.white} size={'c13'} weight={'light'}>
                            Selecione a carga
                        </SpectrumText>
                        <Grid container
                            spacing={2}
                            style={inline([styles.buttonsContainer,])}
                        >
                            {criticalEvents.map((event) =>
                                <Grid xs={3} style={inline([{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0 }])} item>
                                    <BlurView key={event.load + event.gainRate}>
                                        <Button onClick={() => onLoadClicked(event)}
                                            disableFocusRipple={true}
                                            style={inline([styles.loadButton, selectedEvent && selectedEvent.load === event.load && styles.selectedLoadButton])}>
                                            <SpectrumText style={inline([styles.whiteText, selectedEvent && selectedEvent.load === event.load && styles.selectedLoadButtonText])}
                                                size={'c13'}
                                                weight={'semibold'}>
                                                {event.load}
                                            </SpectrumText>
                                        </Button>
                                    </BlurView>
                                </Grid>

                            )}
                        </Grid>
                    </div>
                </div>

                <div style={inline([styles.leftAlignedColumn, styles.marginLeft])}>
                    <SpectrumText color={Colors.colors.white} size={'c13'} weight={'light'}>
                        {'Selecione a Categoria de Evento Crítico'}
                    </SpectrumText>
                    <div style={inline([styles.centeredRow, styles.leftAlignedRow])}>
                        <Button onClick={() => onCategoryClicked('FRAGMENTATION')}
                            disableFocusRipple={true}
                            style={inline([styles.categoryButton, selectedCriticalEventCategory === 'FRAGMENTATION' && styles.selectedCategoryButton])}>
                            <SpectrumText style={inline([styles.whiteText, selectedCriticalEventCategory === 'FRAGMENTATION' && styles.selectedLoadButtonText])}
                                size={'c13'}
                                weight={'semibold'}>
                                {'Fragmentação'}
                            </SpectrumText>
                        </Button>
                        <Button onClick={() => onCategoryClicked('BP')}
                            disableFocusRipple={true}
                            style={inline([styles.xSmallMarginLeft, styles.categoryButton, selectedCriticalEventCategory === 'BP' && styles.selectedCategoryButton])}>
                            <SpectrumText style={inline([styles.whiteText, selectedCriticalEventCategory === 'BP' && styles.selectedLoadButtonText])}
                                size={'c13'}
                                weight={'semibold'}>
                                {'Probabilidade de Bloqueio'}
                            </SpectrumText>
                        </Button>
                    </div>

                </div>
            </div>

            <div style={inline([styles.divider, styles.marginTop, styles.xSmallMarginBottom])} />

            <CriticalEventStatistics criticalEvent={selectedEvent} />

        </div>

    );
});
