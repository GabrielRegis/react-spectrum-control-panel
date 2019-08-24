import { List } from '@material-ui/core';
import { inline } from 'app/utils/StylesUtils';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { CallClassConfiguration } from '../../Models/CallClassConfiguration';
import { CallClassConfigurationComponent } from './CallClassConfigurationComponent';
import styles from './FlowsConfigurationStyles';

interface IProps {
    // Props type definition
    flowClasses: CallClassConfiguration[]
    provided: DroppableProvided
    snapshot: DroppableStateSnapshot
}

interface IState {
    // State type definition
}

@inject('simulationConfigurationStore')
@observer
export class FlowClassesList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
    }

    public renderFlow = (flowClass: CallClassConfiguration, index: number) => {

        return <Draggable key={flowClass.id} draggableId={flowClass.id} index={index}>
            {(provided, snapshot) =>
                <CallClassConfigurationComponent flowClass={flowClass} provided={provided} snapshot={snapshot} />
            }
        </Draggable>
    }

    public render() {
        return (
            <List
                ref={this.props.provided.innerRef}
                {...this.props.provided.droppableProps}
                style={inline([styles.flex1, styles.topCenteredColumn])}>
                {this.props.flowClasses.map((flow, index) => {
                    return this.renderFlow(flow, index)
                })}
                {this.props.provided.placeholder}
            </List>
        );
    }
};
