import { TopologySnapshotStore } from 'app/Store/TopologySnapshotStore';
import Konva from 'konva';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Layer } from 'react-konva';
import SnapshotLinkComponent from './SnapshotLinkComponent';

interface IProps {
    // Props type definition
    topologySnapshotStore?: TopologySnapshotStore
}

interface IState {
    // State type definition
}

@observer
export default class SnapshotLinkLayer extends React.Component<IProps, IState>{
    private layer?: Konva.Layer = null

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
    }



    public render() {

        return (
            <Layer
                ref={ref => this.layer = ref}
                listening={true}
            >
                {this.props.topologySnapshotStore && this.props.topologySnapshotStore.links && Array.from(this.props.topologySnapshotStore.links.values()).map((link) => {
                    return <SnapshotLinkComponent
                        key={link.id}
                        topologySnapshotStore={this.props.topologySnapshotStore}
                        link={link}
                        nodeA={link.nodeA}
                        nodeB={link.nodeB} />
                })}
            </Layer>
        );
    }


};
