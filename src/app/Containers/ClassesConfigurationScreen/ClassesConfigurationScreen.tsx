import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox, Collapse, Container, Divider, Fade, Grid, Grow } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { CallDegradationConfiguration } from 'app/Models/CallDegradationConfiguration';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { DragDropContext, Droppable, DropResult, ResponderProvided } from "react-beautiful-dnd";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { v4 } from "uuid";
import { CallClassConfiguration } from '../../Models/CallClassConfiguration';
import { FlowClassesList } from './FlowClassesList';
import styles from './FlowsConfigurationStyles';
import { SpectrumGuide } from '../../Components/SpectrumGuide/SpectrumGuide';
import { steps } from './ClassesConfigurationScreenGuide';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const ClassesConfigurationScreen: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)
    const initialState: IState = {
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onCallsTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.callsNumber = parseInt(text)
    }

    const onAddClassClicked = () => {
        const callClass = new CallClassConfiguration()
        callClass.id = v4()
        callClass.name = 'Classe ' + simulationConfigurationStore.classesConfiguration.flowClasses.length
        simulationConfigurationStore.addFlowClass(callClass)
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragStart = () => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass = { id: null }
    }

    const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const flowClasses = reorder(
            simulationConfigurationStore.classesConfiguration.flowClasses,
            result.source.index,
            result.destination.index
        );
        simulationConfigurationStore.classesConfiguration.flowClasses = flowClasses
    }

    const onClassNameTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.name = text
    }
    const onMinBandwidthTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.minBandwidth = parseInt(text)
    }
    const onMaxBandwidthTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth = parseInt(text)
    }
    const onMinHoldingTimeTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.minHoldingTime = parseInt(text)
    }
    const onMaxHoldingTimeTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime = parseInt(text)
    }
    const onBandDegradationTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.bandwidthDegradationRate = parseInt(text)
    }
    const onDelayToleranceTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.delayToleranceRate = parseInt(text)
    }

    const onToggleDegradationClicked = (checked) => {
        const isDegradationTolerant = simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.isDegradationTolerant
        if (isDegradationTolerant) {
            simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration = new CallDegradationConfiguration()
            return
        }
        const degradationConfiguration: CallDegradationConfiguration = {
            isDegradationTolerant: true,
            bandwidthDegradationRate: 0,
            delayToleranceRate: 0
        }
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration = degradationConfiguration
    }

    const isDegradationTolerant = simulationConfigurationStore.classesConfiguration.selectedFlowClass &&
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration &&
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.isDegradationTolerant === true

    return (
        <div>
            <SpectrumGuide shouldLaunchGuideOnRender={true} tourSteps={steps} />
            <Fade timeout={{ enter: 600 }} in={true} mountOnEnter unmountOnExit>
                <div style={inline([styles.flex1, styles.topCenteredColumn, styles.paddingHorizontal])}>
                    <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn, styles.leftAlignedColumn, styles.xSmallMarginTop])}>
                        <SpectrumText size={'h2'} weight={'bold'} color={Colors.colors.primary}>
                            Configurações das Requisições
                        </SpectrumText>

                        <div style={inline([styles.fullWidthContainer])}>
                            <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                <SpectrumText
                                    className={'callsGuide'}
                                    color={Colors.colors.primary} size={'b17'} weight={'bold'}>
                                    Chamadas
                                </SpectrumText>
                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                    Realizar
                                </SpectrumText>
                                <SpectrumTextInput
                                    style={inline([styles.xSmallMarginLeft])}
                                    type={'number'}
                                    min={10}
                                    max={10000}
                                    value={simulationConfigurationStore.classesConfiguration.callsNumber}
                                    onChange={onCallsTextChanged} />
                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                                    Chamadas
                                </SpectrumText>
                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                    à cada ciclo
                                </SpectrumText>
                            </div>

                            <div style={inline([styles.flowsContainer, styles.upAlignedRow, styles.smallMarginTop,])}>
                                <div style={inline([styles.leftAlignedColumn, styles.flex1])}>
                                    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                                        <Droppable droppableId="list">
                                            {(provided, snapshot) => (
                                                <FlowClassesList provided={provided} snapshot={snapshot} flowClasses={simulationConfigurationStore.classesConfiguration.flowClasses} />
                                            )}
                                        </Droppable>
                                    </DragDropContext>


                                </div>
                                <div style={inline([styles.botAlignedColumn, styles.bigMarginLeft])}>
                                    <img style={inline([styles.listPlaceholder])} src={require('../../Assets/Icons/listPlaceholder.svg')} alt="" />
                                    <Button
                                        onClick={onAddClassClicked}
                                        style={inline([
                                            styles.xSmallMarginTop,
                                            styles.addClassButton,
                                            styles.paddingHorizontal,
                                            styles.shadowView
                                        ])}>
                                        <SpectrumText style={inline([styles.xSmallMarginRight])} color={Colors.colors.primary} size={'b15'} weight={'bold'}>
                                            Adicionar Classe
                                        </SpectrumText>
                                        <FontAwesomeIcon size={'2x'} style={inline([styles.addIcon])} icon={faPlusCircle} />
                                    </Button>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </Fade>
        </div>

    );
});
