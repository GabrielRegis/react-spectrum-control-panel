import { Collapse, Container, Grid, IconButton, ListItem, Typography } from '@material-ui/core';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react';
import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { SpectrumTextInput } from '../../Components/SpectrumTextInput/SpectrumTextInput';
import { CallClassConfiguration } from '../../Models/CallClassConfiguration';
import styles from './FlowsConfigurationStyles';

interface IProps {
    // Props type definition
    flowClass: CallClassConfiguration
    provided: DraggableProvided
    snapshot: DraggableStateSnapshot
}

interface IState {
    // State type definition
    isOpened: boolean;
}


@observer
export class CallClassConfigurationComponent extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false
        }
    }

    public onFlowPressed = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    public render() {
        return (
            <ListItem
                ref={this.props.provided.innerRef}
                onClick={this.onFlowPressed}
                {...this.props.provided.draggableProps}
                {...this.props.provided.dragHandleProps}
                style={inline([styles.flex1,
                styles.shadowView,
                styles.flowContainer,
                styles.centeredColumn,
                styles.leftAlignedColumn,
                styles.xSmallMarginTop,
                styles.fullWidthContainer,
                this.props.provided.draggableProps.style,
                this.props.snapshot.isDragging ? styles.draggingFlowContainer : {}
                ]
                )}
            >
                <Container style={inline([styles.flex1, styles.centeredRow, styles.leftAlignedRow])}>
                    <IconButton style={inline([styles.flowClassIndicator])} />
                    <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText, styles.xSmallMarginLeft])} variant={'subtitle1'}>
                        {this.props.flowClass.name}
                    </Typography>
                </Container>
                <Collapse style={inline([styles.fullWidthContainer])} in={this.state.isOpened}>
                    <Container style={inline([styles.flex1, styles.centeredRow, styles.leftAlignedRow])}>
                        <Grid item xs={12}>
                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                    Nome da Classe
                                </Typography>
                                <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={''} onChange={(text) => { }} />
                            </div>
                            <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                    Banda requisitada
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    Realizar
                                </Typography>
                                <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={''} onChange={(text) => { }} />
                            </div>
                        </Grid>
                    </Container>
                </Collapse>

            </ListItem>
        );
    }
};
