import { TopologyNode } from 'app/Models/TopologyNode';
import { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import Konva from 'konva';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Rect } from 'react-konva';
import { v4 } from "uuid";
import { NodeComponent } from './NodeComponent';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore
    mode: number
}

interface IState {
    // State type definition
}

@inject('topologyConfigurationStore')
@observer
export default class NodeLayer extends React.Component<IProps, IState>{
    private layer?: Konva.Layer = null
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    public onLayerClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
        if (this.props.mode !== 1) {
            return
        }
        const mousePos = this.layer.getStage().getPointerPosition()
        const id = v4()
        const newNode: TopologyNode = {
            id: id,
            shouldConvert: true,
            name: id,
            posX: this.props.topologyConfigurationStore.isGridEnabled ? Math.round(mousePos.x / 40) * 40 : mousePos.x,
            posY: this.props.topologyConfigurationStore.isGridEnabled ? Math.round(mousePos.y / 40) * 40 : mousePos.y
        }
        this.props.topologyConfigurationStore.nodes.set(newNode.id, newNode)
    }

    public onDeleteNode = (node: TopologyNode) => {
        this.props.topologyConfigurationStore.deleteNode(node)
    }

    public render() {
        return (
            <Layer
                ref={ref => this.layer = ref}
                onClick={this.onLayerClick}
            >
                <Rect opacity={0} width={window.innerWidth - 5} height={window.innerHeight - 80} />
                {this.props.topologyConfigurationStore && this.props.topologyConfigurationStore.nodes && Array.from(this.props.topologyConfigurationStore.nodes.values()).map((node) => {
                    return <NodeComponent
                        mode={this.props.mode}
                        topologyConfigurationStore={this.props.topologyConfigurationStore}
                        key={node.id}
                        node={node}
                        onNodeDeleted={() => this.onDeleteNode(node)}
                    />
                })}
            </Layer>
        );
    }


};
