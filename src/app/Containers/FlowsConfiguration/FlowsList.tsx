import { List } from '@material-ui/core';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { Flow } from '../../Models/Flow';
import { FlowComponent } from './FlowComponent';
import styles from './FlowsConfigurationStyles';

interface IProps {
    // Props type definition
    flows: Flow[]
    provided: DroppableProvided
    snapshot: DroppableStateSnapshot
}

interface IState {
    // State type definition
}

@observer
export class FlowsList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
    }

    public renderFlow = (flow: Flow, index: number) => {

        return <Draggable key={flow.id} draggableId={flow.id} index={index}>
            {(provided, snapshot) =>
                <FlowComponent flow={flow} provided={provided} snapshot={snapshot} />
            }
        </Draggable>
    }

    public render() {
        return (
            <List
                ref={this.props.provided.innerRef}
                {...this.props.provided.droppableProps}
                style={inline([styles.fullWidthContainer, styles.topCenteredColumn,])}>
                {this.props.flows.map((flow, index) => {
                    return this.renderFlow(flow, index)
                })}
                {this.props.provided.placeholder}
            </List>
        );
    }
};
