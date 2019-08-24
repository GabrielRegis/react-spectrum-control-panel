import { TopologyLink } from 'app/Models/TopologyLink';
import topologyConfigurationStore, { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import Konva from 'konva';
import { observe } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Line } from 'react-konva';
import { TopologyNode } from '../../Models/TopologyNode';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore
    nodeA: TopologyNode
    nodeB: TopologyNode
    link: TopologyLink
}

interface IState {
    // State type definition
}

@observer
export default class LinkComponent extends React.Component<IProps, IState>{

    private line?: Konva.Line = null
    constructor(props) {
        super(props)

        observe(this.props.topologyConfigurationStore.selectedNodes, () => {
            // if (this.props.topologyConfigurationStore.selectedNodes.length > 0 && this.debugLink) {
            // this.debugLink.to({
            //     strokeWidth: 15,
            //     opacity: 1,
            //     duration: 0.2
            // })
            // }
        })
        this.state = {
        }
    }

    componentDidMount() {
        this.line.to({
            strokeWidth: 15,
            opacity: 1,
            duration: 0.2
        })
    }
    public onNodeClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
        topologyConfigurationStore.selectedLink = this.props.link
    }
    public render() {

        const selectedNodes = this.props.topologyConfigurationStore && this.props.topologyConfigurationStore.selectedNodes && this.props.topologyConfigurationStore.selectedNodes.length > 0 ? this.props.topologyConfigurationStore.selectedNodes : []

        const linkConfig = {
            points: [this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id).posX,
            this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id).posY,
            this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id).posX,
            this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id).posY],
            stroke: "#FF6192",
            strokeWidth: 5,
            opacity: 0,
            // listening: false
        }

        const groupConfig = {
            // draggable: true,
            opacity: 1
        }

        return (
            <Line listening={true} onClick={this.onNodeClick} ref={ref => this.line = ref} {...linkConfig} />
        );
    }


};
