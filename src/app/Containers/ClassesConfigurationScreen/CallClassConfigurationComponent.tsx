import { ListItem, Typography } from '@material-ui/core';
import { css } from 'aphrodite';
import { inline } from 'app/utils/StylesUtils';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { CallClassConfiguration } from '../../Models/CallClassConfiguration';
import { SimulationConfigurationStore } from '../../Store/SimulationConfigurationStore';
import styles from './FlowsConfigurationStyles';

interface IProps {
    // Props type definition
    flowClass: CallClassConfiguration
    provided: DraggableProvided
    snapshot: DraggableStateSnapshot
    simulationConfigurationStore?: SimulationConfigurationStore
}

interface IState {
    // State type definition
}

@inject('simulationConfigurationStore')
@observer
export class CallClassConfigurationComponent extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    public onFlowPressed = () => {
        this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass = this.props.flowClass
    }

    public render() {

        const isSelected = this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass === this.props.flowClass

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
                styles.xSmallMarginBottom,
                styles.fullWidthContainer,
                this.props.provided.draggableProps.style,
                this.props.snapshot.isDragging ? styles.draggingFlowContainer : {}
                ]
                )}
                className={css(isSelected && styles.aphroditeStyles.selectedFlowContainer)}
            >
                <div style={inline([styles.flex1, styles.centeredRow, styles.leftAlignedRow])}>
                    <div style={inline([styles.flowClassIndicator])} />
                    <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText, styles.xSmallMarginLeft])} variant={'subtitle1'}>
                        {this.props.flowClass.name}
                    </Typography>
                </div>

            </ListItem>
        );
    }
};
