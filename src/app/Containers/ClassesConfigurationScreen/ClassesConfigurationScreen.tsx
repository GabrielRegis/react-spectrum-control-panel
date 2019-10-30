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

    const onRemoveClassPressed = () => {
        const newClasses = simulationConfigurationStore.classesConfiguration.flowClasses.filter((classes) => {
            return classes.id !== simulationConfigurationStore.classesConfiguration.selectedFlowClass.id
        })
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.id = null
        simulationConfigurationStore.classesConfiguration.flowClasses = newClasses
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
        <Fade timeout={{ enter: 600 }} in={true} mountOnEnter unmountOnExit>
            <div style={inline([styles.flex1, styles.topCenteredColumn, styles.paddingHorizontal])}>
                <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn, styles.leftAlignedColumn, styles.xSmallMarginTop])}>
                    <SpectrumText size={'h2'} weight={'bold'} color={Colors.colors.primary}>
                        Configurações das Requisições
                    </SpectrumText>

                    <div style={inline([styles.fullWidthContainer])}>
                        <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                            <SpectrumText
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

                        <Grid item xs={12} style={inline([styles.upAlignedRow, styles.leftAlignedRow, styles.xSmallMarginTop])} >
                            <Collapse
                                style={inline([
                                    styles.topCenteredColumn,
                                    styles.leftAlignedColumn,
                                    styles.flowsContainer,
                                ])}
                                in={true}>
                                <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                                    <Droppable droppableId="list">
                                        {(provided, snapshot) => (
                                            <FlowClassesList provided={provided} snapshot={snapshot} flowClasses={simulationConfigurationStore.classesConfiguration.flowClasses} />
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                <Button
                                    onClick={onAddClassClicked}
                                    style={inline([
                                        styles.xSmallMarginTop,
                                        styles.addClassButton,
                                        styles.paddingHorizontal,
                                        styles.shadowView
                                    ])}>
                                    <SpectrumText style={inline([styles.xSmallMarginRight])} size={'b15'} weight={'bold'}>
                                        Adicionar Classe
                                    </SpectrumText>
                                    <FontAwesomeIcon size={'2x'} style={inline([styles.addIcon])} icon={faPlusCircle} />
                                </Button>
                            </Collapse>
                            <Grow in={simulationConfigurationStore.classesConfiguration.selectedFlowClass.id !== null}>
                                <div style={inline([
                                    styles.topCenteredColumn,
                                    styles.xSmallPadding,
                                    styles.flex1,
                                    styles.selectedClassContainer,
                                    styles.xSmallMarginLeft
                                ])}>

                                    <Container style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallPaddingHorizontal])}>
                                        <Grid item xs={12}>
                                            <div style={inline([styles.centeredRow, styles.spaceBetween, styles.xSmallMarginTop,])}>
                                                <SpectrumText size={'b20'} weight={'bold'}>
                                                    Configuração de Classe
                                                </SpectrumText>
                                                <Button onClick={onRemoveClassPressed} style={inline([styles.deleteButton, styles.centeredColumn, styles.xSmallPaddingHorizontal])}>
                                                    <SpectrumText style={inline([styles.whiteText, styles.xSmallMarginRight])} size={'c13'} weight={'semibold'}>
                                                        Deletar [D]
                                                    </SpectrumText>
                                                    <FontAwesomeIcon color={Colors.colors.white} size={'1x'} icon={faTrash} />
                                                </Button>
                                            </div>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                                <SpectrumText size={'b17'} weight={'semibold'}>
                                                    Nome da Classe
                                                </SpectrumText>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.name}
                                                    onChange={onClassNameTextChanged} />
                                            </div>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                                <SpectrumText size={'b17'} weight={'semibold'}>
                                                    Banda requisitada
                                                </SpectrumText>
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                    Requisitar entre
                                                </SpectrumText>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    max={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.minBandwidth}
                                                    onChange={onMinBandwidthTextChanged} />
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                    e
                                                </SpectrumText>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth}
                                                    onChange={onMaxBandwidthTextChanged} />
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                                                    GB/s
                                                </SpectrumText>
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                    de banda larga.
                                                </SpectrumText>
                                            </div>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                                <SpectrumText size={'b17'} weight={'semibold'}>
                                                    Duração
                                                </SpectrumText>
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                    Durar entre
                                                </SpectrumText>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.minHoldingTime}
                                                    min={1}
                                                    max={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime}
                                                    onChange={onMinHoldingTimeTextChanged} />
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                    e
                                                </SpectrumText>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    min={1}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime}
                                                    onChange={onMaxHoldingTimeTextChanged} />
                                                <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                                                    Instantes.
                                            </SpectrumText>
                                            </div>
                                            <Divider style={inline([styles.xSmallMarginTop])} />
                                            <SpectrumText style={inline([styles.xSmallMarginTop])} size={'b20'} weight={'semibold'}>
                                                Degradação de Serviço no estabelecimento
                                                <Checkbox
                                                    checked={simulationConfigurationStore.classesConfiguration.selectedFlowClass &&
                                                        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration &&
                                                        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.isDegradationTolerant === true}
                                                    onChange={onToggleDegradationClicked}
                                                    value="checkedA"
                                                    inputProps={{
                                                        'aria-label': 'primary checkbox',
                                                    }}
                                                />
                                            </SpectrumText>
                                            {isDegradationTolerant && <Fade in={true}>
                                                <div style={inline([styles.fullWidthContainer])}>
                                                    <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                                                        <SpectrumText size={'b17'} weight={'semibold'}>
                                                            Degradação de Banda
                                                        </SpectrumText>
                                                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                            Permitir que a conexão seja estabelecida com até
                                                        </SpectrumText>
                                                        <SpectrumTextInput
                                                            type={'number'}
                                                            style={inline([styles.xSmallMarginLeft])}
                                                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.bandwidthDegradationRate}
                                                            max={99}
                                                            onChange={onBandDegradationTextChanged} />
                                                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'} >
                                                            %
                                                        </SpectrumText>
                                                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                            de banda à menos.
                                                        </SpectrumText>
                                                    </div>
                                                    <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                                        <SpectrumText size={'b17'} weight={'semibold'}>
                                                            Atraso
                                                        </SpectrumText>
                                                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                                            Permitir que a conexão atrase até
                                                        </SpectrumText>
                                                        <SpectrumTextInput
                                                            type={'number'}
                                                            style={inline([styles.xSmallMarginLeft])}
                                                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.delayToleranceRate}
                                                            max={99}
                                                            onChange={onDelayToleranceTextChanged} />
                                                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                                                            Instantes
                                                        </SpectrumText>
                                                    </div>
                                                </div>
                                            </Fade>}
                                        </Grid>
                                    </Container>
                                </div>
                            </Grow>
                        </Grid>
                    </div>
                </div>
                <img style={inline([styles.listPlaceholder])} src={require('../../Assets/Icons/listPlaceholder.svg')} alt="" />
                <KeyboardEventHandler handleKeys={['d', 'del']}
                    onKeyEvent={onRemoveClassPressed}
                />
            </div>
        </Fade>
    );
});
