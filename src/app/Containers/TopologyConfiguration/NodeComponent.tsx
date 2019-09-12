import { TopologyNode } from 'app/Models/TopologyNode';
import { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import { Colors, Fonts } from 'app/Theme';
import Konva from 'konva';
import { observer } from 'mobx-react';
import * as React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Circle, Group, Rect, Text } from 'react-konva';
interface IProps {
    // Props type definition
    node: TopologyNode
    topologyConfigurationStore?: TopologyConfigurationStore
    onNodeSelected?: () => void
    onNodeDeleted: () => void
    mode: number
}

interface IState {
    // State type definition
    isFocused: boolean
    isSelected: boolean
}

@observer
export class NodeComponent extends React.Component<IProps, IState> {

    group?: Konva.Group = null
    tipGroup?: Konva.Group = null
    outterNode?: Konva.Circle = null
    innerNode?: Konva.Circle = null

    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
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
        this.releaseNode()

        this.group.setAttrs({
            node: this.props.node
        })
    }

    public dragNode = () => {
        this.applyFocusedNodeStyle()
        this.setState({
            isFocused: true,
        })
    }

    public releaseNode = () => {
        this.setState({
            isFocused: false
        })
        if (this.state.isSelected === false) {
            this.applyUnfocusedNodeStyle()
        }
    }

    public deselectNode = () => {
        this.props.topologyConfigurationStore.selectedNode = null
        this.props.topologyConfigurationStore.selectedNodeComponent = null
        this.applyUnfocusedNodeStyle(() => {
            this.setState({
                isSelected: false,
                isFocused: false
            })
        })
    }
    public selectNode = () => {
        this.applyFocusedNodeStyle()
        this.setState({
            isSelected: true
        })
        if (this.props.topologyConfigurationStore.selectedNodeComponent) {
            this.props.topologyConfigurationStore.selectedNodeComponent.deselectNode()
        }
        this.props.topologyConfigurationStore.selectedNode = this.props.node
        this.props.topologyConfigurationStore.selectedNodeComponent = this
    }

    public onNodeClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
        switch (this.props.mode) {
            case 2:
                this.props.topologyConfigurationStore.selectedNodes.push(this.props.node)
                if (this.props.topologyConfigurationStore.selectedNodes.length === 2) {
                    this.props.topologyConfigurationStore.createLink()
                }
                break
            default:
                if (this.state.isSelected) {
                    this.deselectNode()
                    return
                }
                this.selectNode()
                break
        }

    }

    public onNodeMove = (event: Konva.KonvaEventObject<DragEvent>) => {
        if (this.props.topologyConfigurationStore.nodes.has(this.props.node.id) && this.group) {
            this.props.topologyConfigurationStore.nodes.get(this.props.node.id).posX = this.group.attrs.x
            this.props.topologyConfigurationStore.nodes.get(this.props.node.id).posY = this.group.attrs.y
        }
    }

    public onNodeDragStart = (event: Konva.KonvaEventObject<DragEvent>) => {

        if (this.props.mode === 2) {
            return
        }

        this.dragNode()

        if (this.tipGroup) {
            this.tipGroup.to({
                opacity: 1,
                duration: 0.2,
                easing: Konva.Easings.EaseInOut,
            })
        }

    }
    public onNodeDragEnd = (event: Konva.KonvaEventObject<DragEvent>) => {
        this.releaseNode()

        if (this.tipGroup) {
            this.tipGroup.to({
                opacity: 0,
                duration: 0.2,
                easing: Konva.Easings.EaseInOut,
            })
        }

        if (this.props.topologyConfigurationStore.nodes.has(this.props.node.id) && this.group) {
            this.props.topologyConfigurationStore.nodes.get(this.props.node.id).posX = this.props.topologyConfigurationStore.isGridEnabled ? Math.round(this.group.attrs.x / this.props.topologyConfigurationStore.gridSize) * this.props.topologyConfigurationStore.gridSize : this.group.attrs.x
            this.props.topologyConfigurationStore.nodes.get(this.props.node.id).posY = this.props.topologyConfigurationStore.isGridEnabled ? Math.round(this.group.attrs.y / this.props.topologyConfigurationStore.gridSize) * this.props.topologyConfigurationStore.gridSize : this.group.attrs.y
        }

    }

    public onDeleteNode = () => {
        if (this.state.isFocused) {
            this.group.to({
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
                duration: 0.2,
                easing: Konva.Easings.EaseInOut,
            })
            setTimeout(() => {
                this.props.onNodeDeleted()
            }, 200)
        }
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
                fillLinearGradientColorStops: [0, "#FF6192", 1, "#FF66B1"]
            });
            this.innerNode.to({
                duration: 0.2,
                radius: 40,
                easing: Konva.Easings.EaseInOut,
                fillLinearGradientColorStops: [0, "#EA5EA3", 1, "#FF457E"]
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
            fillLinearGradientColorStops: this.state.isSelected || this.state.isFocused ? [0, "#9cacfc", 1, "#cc9bfd"] : [0, "#FF6192", 1, "#FF66B1"],
            opacity: 0.8,
            scaleX: 1,
            scaleY: 1,
            shadowColor: "#6a82fb",
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
            fillLinearGradientColorStops: this.state.isSelected || this.state.isFocused ? [0, "#6a82fb", 1, "#ab5afc"] : [0, "#EA5EA3", 1, "#FF457E"],
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            shadowColor: "#6a82fb",
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowOpacity: 0.2,
            easing: Konva.Easings.EaseInOut
        }

        const groupConfig = {
            draggable: this.props.mode !== 2,
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
                onDragMove={this.onNodeMove}
                onDragStart={this.onNodeDragStart}
                onDragEnd={this.onNodeDragEnd}
            >
                <KeyboardEventHandler handleKeys={['x', 'del']}
                    onKeyEvent={(key, e) => {
                        this.onDeleteNode()
                    }}
                />
                <Circle
                    ref={ref => this.outterNode = ref}
                    {...outterNodeConfig}
                />
                <Circle
                    ref={ref => this.innerNode = ref}
                    {...innerNodeConfig}
                />
                <Group listening={false} ref={ref => this.tipGroup = ref}
                    x={-150} y={-120} >
                    <Rect width={300} height={60} fill={Colors.colors.extraLightGray} cornerRadius={5} />
                    <Text
                        width={300}
                        y={20}
                        fill={Colors.colors.primary}
                        fontSize={18}
                        fontFamily={Fonts.fontFamilies.primary}
                        align={'center'}
                        verticalAlign={'center'}
                        text={'Pressione X ou Z para deletar'} />
                </Group>


            </Group >
        );
    }


};
