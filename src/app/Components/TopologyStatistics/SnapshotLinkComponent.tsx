import { TopologyLink } from 'app/Models/TopologyLink';
import { TopologySnapshotStore } from 'app/Store/TopologySnapshotStore';
import { Colors } from 'app/Theme';
import Konva from 'konva';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Line } from 'react-konva';
import { TopologyNode } from '../../Models/TopologyNode';

interface IProps {
    // Props type definition
    topologySnapshotStore?: TopologySnapshotStore
    nodeA: TopologyNode
    nodeB: TopologyNode
    link: TopologyLink
}

interface IState {
    // State type definition
    isSelected: boolean
}

@observer
export default class SnapshotLinkComponent extends React.Component<IProps, IState>{

    private line?: Konva.Line = null
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
        }
    }

    componentDidMount() {
        this.line.to({
            strokeWidth: 15,
            opacity: 0.8,
            duration: 0.2
        })
    }
    public onLinkClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
        if (this.state.isSelected) {
            this.deselectLink()
            return
        }
        this.selectLink()
    }

    public deselectLink = () => {
        this.setState({
            isSelected: false
        })
        this.props.topologySnapshotStore.selectedLink = null
        this.props.topologySnapshotStore.selectedLinkComponent = null
        this.line.to({
            duration: 0.2,
            stroke: Colors.colors.lightGray,
            strokeWidth: 15
        })
    }
    public selectLink = () => {

        // Check if there is any link selected and deselect it
        if (this.props.topologySnapshotStore.selectedLinkComponent) {
            this.props.topologySnapshotStore.selectedLinkComponent.deselectLink()
        }

        this.setState({
            isSelected: true
        })
        this.props.topologySnapshotStore.selectedLink = this.props.link
        this.props.topologySnapshotStore.selectedLinkComponent = this
        this.line.to({
            duration: 0.2,
            stroke: Colors.colors.healthPink,
            strokeWidth: 20
        })
    }

    public render() {

        const linkConfig = {
            points: [this.props.topologySnapshotStore.nodes.get(this.props.nodeA.id).posX,
            this.props.topologySnapshotStore.nodes.get(this.props.nodeA.id).posY,
            this.props.topologySnapshotStore.nodes.get(this.props.nodeB.id).posX,
            this.props.topologySnapshotStore.nodes.get(this.props.nodeB.id).posY],
            stroke: Colors.colors.lightGray,
            strokeWidth: 5,
            opacity: 0,
            listening: true
        }


        return (
            <Line listening={true} onClick={this.onLinkClick} ref={ref => this.line = ref} {...linkConfig} />
        );
    }


};
