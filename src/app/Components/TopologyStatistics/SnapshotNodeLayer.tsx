import { TopologySnapshotStore } from 'app/Store/TopologySnapshotStore';
import Konva from 'konva';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Rect } from 'react-konva';
import { SnapshotNodeComponent } from './SnapshotNodeComponent';

interface IProps {
    // Props type definition
    topologySnapshotStore?: TopologySnapshotStore
}

interface IState {
    // State type definition
}

@inject('topologySnapshotStore')
@observer
export default class SnapshotNodeLayer extends React.Component<IProps, IState>{
    private layer?: Konva.Layer = null
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    public render() {
        return (
            <Layer
                ref={ref => this.layer = ref}
                listening={false}
            >
                <Rect opacity={0} width={window.innerWidth - 5} height={window.innerHeight - 80} />
                {this.props.topologySnapshotStore && this.props.topologySnapshotStore.nodes && Array.from(this.props.topologySnapshotStore.nodes.values()).map((node) => {
                    return <SnapshotNodeComponent
                        topologySnapshotStore={this.props.topologySnapshotStore}
                        key={node.id}
                        node={node}
                    />
                })}
            </Layer>
        );
    }


};
