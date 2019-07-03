import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Fade, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import { observable } from 'mobx';
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
        if (text && text !== '') {
            simulationConfigurationStore.classesConfiguration.callsNumber = parseInt(text)
        } else {
            simulationConfigurationStore.classesConfiguration.callsNumber = 0
        }
    }

    const onAddClassClicked = () => {
        const callClass = new CallClassConfiguration()
        callClass.id = v4()
        simulationConfigurationStore.addFlowClass(callClass)
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
        simulationConfigurationStore.classesConfiguration.flowClasses = observable.array(flowClasses)
    }


    return (
        <Fade timeout={{ enter: 600 }} in={true} mountOnEnter unmountOnExit>
            <div style={inline([styles.flex1, styles.topCenteredColumn, styles.leftAlignedColumn, styles.padding, styles.shadowView])}>
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
                            <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={simulationConfigurationStore.classesConfiguration.callsNumber} onChange={onCallsTextChanged} />
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                Chamadas
                        </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                à cada iteração
                        </Typography>
                        </div>
                    </Grid>

                    <Collapse style={inline([styles.centeredColumn, styles.leftAlignedColumn, styles.flowsContainer, styles.smallMarginTop, styles.paddingBottom, styles.paddingHorizontal, styles.fullWidthContainer])} in={true}>
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
                </Grid>

            </div>
        </Fade>
    );
});
