import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Container, Divider, Fade, Grid, Grow, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { DragDropContext, Droppable, DropResult, ResponderProvided } from "react-beautiful-dnd";
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

    return (
        <Fade timeout={{ enter: 600 }} in={true} mountOnEnter unmountOnExit>
            <div style={inline([styles.flex1, styles.topCenteredColumn])}>
                <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.configurationContainer, styles.padding, styles.shadowView, styles.zIndex3])}>
                    <Typography variant="h5" style={inline([styles.primaryText])}>
                        Configurações das Requisições
                    </Typography>

                    <Grid container style={inline([styles.fullWidthContainer])} spacing={1}>
                        <Grid item xs={12}>
                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                    Chamadas
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    Realizar
                                </Typography>
                                <SpectrumTextInput
                                    style={inline([styles.xSmallMarginLeft])}
                                    type={'number'}
                                    min={10}
                                    max={1000}
                                    value={simulationConfigurationStore.classesConfiguration.callsNumber}
                                    onChange={onCallsTextChanged} />
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                    Chamadas
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    à cada iteração
                                </Typography>
                            </div>
                        </Grid>

                        <Grid style={inline([styles.fullWidthContainer, styles.row])} >
                            <Collapse style={inline([styles.centeredColumn, styles.leftAlignedColumn, styles.flowsContainer, styles.smallMarginTop, styles.paddingBottom, styles.paddingHorizontal])} in={true}>
                                <DragDropContext onDragEnd={onDragEnd}>
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
                                    <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText, styles.xSmallMarginRight])} variant={'subtitle1'}>
                                        Adicionar Classe
                                    </Typography>
                                    <FontAwesomeIcon size={'2x'} style={inline([styles.addIcon])} icon={faPlusCircle} />
                                </Button>
                            </Collapse>
                            <Grow in={simulationConfigurationStore.classesConfiguration.selectedFlowClass.id !== null}>
                                <div style={inline([
                                    styles.topCenteredColumn,
                                    styles.xSmallPadding,
                                    styles.flex1,
                                    styles.selectedClassContainer,
                                    styles.bigMarginLeft
                                ])}>
                                    <Container style={inline([styles.centeredRow, styles.leftAlignedRow])}>
                                        <Grid item xs={12}>
                                            <div style={inline([styles.centeredRow, styles.spaceBetween, styles.xSmallMarginTop,])}>
                                                <Typography paragraph style={inline([styles.primaryText])} variant={'h6'}>
                                                    Configuração de Classe
                                                </Typography>
                                                <Button onClick={onRemoveClassPressed} style={inline([styles.deleteButton, styles.centeredColumn, styles.xSmallPaddingHorizontal])}>
                                                    <Typography style={inline([styles.primaryText, styles.whiteText, styles.xSmallMarginRight])} variant={'button'}>
                                                        Deletar
                                                    </Typography>
                                                    <FontAwesomeIcon color={Colors.colors.white} size={'1x'} icon={faTrash} />
                                                </Button>
                                            </div>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                                    Nome da Classe
                                                </Typography>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.name}
                                                    onChange={onClassNameTextChanged} />
                                            </div>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                                    Banda requisitada
                                                </Typography>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    Requisitar entre
                                                </Typography>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    max={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.minBandwidth}
                                                    onChange={onMinBandwidthTextChanged} />
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    e
                                                </Typography>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth}
                                                    onChange={onMaxBandwidthTextChanged} />
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                                    GB/s
                                                </Typography>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    de banda larga.
                                                </Typography>
                                            </div>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                                    Duração
                                            </Typography>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    Durar entre
                                            </Typography>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.minHoldingTime}
                                                    min={1}
                                                    max={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime}
                                                    onChange={onMinHoldingTimeTextChanged} />
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    e
                                            </Typography>
                                                <SpectrumTextInput
                                                    style={inline([styles.xSmallMarginLeft])}
                                                    type={'number'}
                                                    min={1}
                                                    value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime}
                                                    onChange={onMaxHoldingTimeTextChanged} />
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                                    Instantes.
                                            </Typography>
                                            </div>
                                            <Divider style={inline([styles.xSmallMarginTop])} />
                                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'h6'}>
                                                Degradação de Serviço no estabelecimento
                                        </Typography>
                                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                                    Degradação de Banda
                                            </Typography>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    Permitir que a conexão seja estabelecida com até
                                            </Typography>
                                                <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={20} onChange={(text) => { }} />

                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                                    %
                                            </Typography>
                                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                                    de banda à menos.
                                            </Typography>
                                            </div>
                                        </Grid>
                                    </Container>
                                </div>
                            </Grow>
                        </Grid>
                    </Grid>
                </div>
                <img style={inline([styles.listPlaceholder])} src={require('../../Assets/Icons/listPlaceholder.svg')} alt="" />
            </div>
        </Fade>
    );
});
