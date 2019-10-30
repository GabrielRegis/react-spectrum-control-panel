import { TopologyNode } from 'app/Models/TopologyNode';
import { TopologySnapshotStore } from 'app/Store/TopologySnapshotStore';
import { Colors } from 'app/Theme';
import Konva from 'konva';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Circle, Group } from 'react-konva';
interface IProps {
    // Props type definition
    node: TopologyNode
    topologySnapshotStore?: TopologySnapshotStore
    onNodeSelected?: () => void
}

interface IState {
    // State type definition
    isSelected: boolean
}

const unfocusedNodeOutterGradient = [0, Colors.colors.unfocusedNodeOutterA, 1, Colors.colors.unfocusedNodeOutterB]
const focusedNodeOutterGradient = [0, Colors.colors.unfocusedNodeOutterA, 1, Colors.colors.unfocusedNodeOutterB]
const unfocusedNodeInnerGradient = [0, Colors.colors.unfocusedNodeInnerA, 1, Colors.colors.unfocusedNodeInnerB]
const focusedNodeInnerGradient = [0, Colors.colors.unfocusedNodeOutterA, 1, Colors.colors.unfocusedNodeOutterB]

@observer
export class SnapshotNodeComponent extends React.Component<IProps, IState> {

    group?: Konva.Group = null
    tipGroup?: Konva.Group = null
    outterNode?: Konva.Circle = null
    innerNode?: Konva.Circle = null

    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
    }

    componentDidMount() {
        if (this.tipGroup) {
            this.tipGroup.to({
                opacity: 0,
                scaleX: 1,
                scaleY: 1,
                duration: 0
            })
        }
        if (this.group) {
            this.group.to({
                duration: 0.1,
                opacity: 1,
                scaleX: 0.7,
                scaleY: 0.7,
                easing: Konva.Easings.EaseInOut,
            })
        }
        this.applyUnfocusedNodeStyle()

        this.group.setAttrs({
            node: this.props.node
        })
    }


    public deselectNode = () => {
        this.props.topologySnapshotStore.selectedNode = null
        this.props.topologySnapshotStore.selectedNodeComponent = null
        this.applyUnfocusedNodeStyle(() => {
            this.setState({
                isSelected: false,
            })
        })
    }
    public selectNode = () => {
        this.applyFocusedNodeStyle()
        this.setState({
            isSelected: true
        })
        if (this.props.topologySnapshotStore.selectedNodeComponent) {
            this.props.topologySnapshotStore.selectedNodeComponent.deselectNode()
        }
        this.props.topologySnapshotStore.selectedNode = this.props.node
    }

    public onNodeClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
        if (this.state.isSelected) {
            this.deselectNode()
            return
        }
        this.selectNode()
    }

    public applyFocusedNodeStyle = (then?: () => void) => {
        if (this.outterNode && this.innerNode) {
            this.outterNode.to({
                duration: 0.2,
                easing: Konva.Easings.EaseInOut,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
                radius: 55,
                fillLinearGradientColorStops: [0, "#9cacfc", 1, "#cc9bfd"]
            });
            this.innerNode.to({
                duration: 0.2,
                radius: 45,
                easing: Konva.Easings.EaseInOut,
                fillLinearGradientColorStops: [0, "#6a82fb", 1, "#ab5afc"]
            });
            setTimeout(() => {
                if (then) {
                    then()
                }
            }, 200)
        }
    }
    public applyUnfocusedNodeStyle = (then?: () => void) => {
        if (this.outterNode && this.innerNode) {
            this.outterNode.to({
                duration: 0.2,
                radius: 50,
                easing: Konva.Easings.EaseInOut,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
                fillLinearGradientColorStops: [0, '#ff4b1f', 1, '#ff9068']
            });
            this.innerNode.to({
                duration: 0.2,
                radius: 40,
                easing: Konva.Easings.EaseInOut,
                fillLinearGradientColorStops: [0, '#ff5f6d', 1, '#ffC371']
            });
            setTimeout(() => {
                if (then) {
                    then()
                }
            }, 200)
        }
    }

    public render() {
        const outterNodeConfig = {
            radius: 50,
            fillLinearGradientStartPoint: { x: -50, y: 0 },
            fillLinearGradientEndPoint: { x: 50, y: 0 },
            fillLinearGradientColorStops: this.state.isSelected ? [0, "#9cacfc", 1, "#cc9bfd"] : [0, '#ff4b1f', 1, '#ff9068'],
            opacity: 0.8,
            scaleX: 1,
            scaleY: 1,
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowOpacity: 0.2,
            easing: Konva.Easings.EaseInOut
        }
        const innerNodeConfig = {
            radius: 40,
            fillLinearGradientStartPoint: { x: -35, y: 0 },
            fillLinearGradientEndPoint: { x: 35, y: 0 },
            fillLinearGradientColorStops: this.state.isSelected ? [0, "#6a82fb", 1, "#ab5afc"] : [0, '#ff5f6d', 1, '#ffC371'],
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowOpacity: 0.2,
            easing: Konva.Easings.EaseInOut
        }


        const groupConfig = {
            draggable: false,
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            x: this.props.node.posX,
            y: this.props.node.posY,
        }
        return (
            <Group
                ref={ref => this.group = ref}
                {...groupConfig}
                listening={true}
                onClick={this.onNodeClick}
            >
                <Circle
                    ref={ref => this.outterNode = ref}
                    {...outterNodeConfig}
                />
                <Circle
                    ref={ref => this.innerNode = ref}
                    {...innerNodeConfig}
                />
            </Group >
        );
    }


};
