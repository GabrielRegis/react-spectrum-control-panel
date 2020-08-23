import { TopologyLink } from 'app/Models/TopologyLink';
import topologyConfigurationStore, { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import { Colors, Fonts } from 'app/Theme';
import TopologyUtils from 'app/utils/TopologyUtils';
import Konva from 'konva';
import { observe } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Group, Line, Rect, Text } from 'react-konva';
import { TopologyNode } from '../../Models/TopologyNode';
import { ModulationUtils } from '../../utils/ModulationUtils';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore
    nodeA: TopologyNode
    nodeB: TopologyNode
    link: TopologyLink
}

interface IState {
    // State type definition
    isSelected: boolean
    isModulationTipVisible: boolean
}

@observer
export default class LinkComponent extends React.Component<IProps, IState>{

    private line?: Konva.Line = null
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
            isModulationTipVisible: false
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
        topologyConfigurationStore.selectedLink = null
        topologyConfigurationStore.selectedLinkComponent = null
        this.line.to({
            duration: 0.2,
            stroke: Colors.colors.primary,
            strokeWidth: 15
        })
    }
    public selectLink = () => {

        // Check if there is any link selected and deselect it
        if (topologyConfigurationStore.selectedLinkComponent) {
            topologyConfigurationStore.selectedLinkComponent.deselectLink()
        }

        this.setState({
            isSelected: true
        })
        topologyConfigurationStore.selectedLink = this.props.link
        topologyConfigurationStore.selectedLinkComponent = this
        this.line.to({
            duration: 0.2,
            stroke: Colors.colors.healthPink,
            strokeWidth: 20
        })
    }

    public getInfoContainerX = () => {
        const isLeftNodeANode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id).posX < this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id).posX
        let leftNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id)
        let rightNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id)

        if (isLeftNodeANode) {
            leftNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id)
            rightNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id)
        }

        const rightNodeX = rightNode.posX
        const leftNodeX = leftNode.posX

        const posX = (Math.abs(rightNodeX - leftNodeX) / 2) + leftNodeX

        return posX - 50
    }
    public getInfoContainerY = () => {
        const isATopNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id).posY < this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id).posY
        let topNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id)
        let botNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id)

        if (isATopNode) {
            topNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id)
            botNode = this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id)
        }

        const topNodeY = topNode.posY
        const botNodeY = botNode.posY

        const posY = (Math.abs(botNodeY - topNodeY) / 2) + topNodeY

        return posY - 20
    }

    public getLinkDistance = () => {

        let nodeA = this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id)
        let nodeB = this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id)

        return TopologyUtils.getLinkDistance(nodeA, nodeB)
    }

    public showModulationTip = () => {
        this.setState({
            isModulationTipVisible: true
        })
    }
    public hideModulationTip = () => {
        this.setState({
            isModulationTipVisible: false
        })
    }

    public render() {

        const selectedNodes = this.props.topologyConfigurationStore && this.props.topologyConfigurationStore.selectedNodes && this.props.topologyConfigurationStore.selectedNodes.length > 0 ? this.props.topologyConfigurationStore.selectedNodes : []

        const linkConfig = {
            points: [this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id).posX,
            this.props.topologyConfigurationStore.nodes.get(this.props.nodeA.id).posY,
            this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id).posX,
            this.props.topologyConfigurationStore.nodes.get(this.props.nodeB.id).posY],
            stroke: Colors.colors.primary,
            strokeWidth: 5,
            opacity: 0,
        }
        const infoContainerConfig = {
            x: this.getInfoContainerX(),
            y: this.getInfoContainerY(),

            listening: false
        }

        const groupConfig = {
            // draggable: true,
            opacity: 0.8
        }

        const distance = this.getLinkDistance()
        const bestModulation = ModulationUtils.getBestModulation(distance)
        return (
            <Group>
                <Line listening={true} onClick={this.onLinkClick} ref={ref => this.line = ref} {...linkConfig} />
                <Group
                    {...infoContainerConfig}
                >
                    <Rect width={100} shadowEnabled={true}
                        shadowBlur={25}
                        shadowOpacity={0.1}
                        shadowOffset={{ x: 1.2, y: 1.2 }} height={30} opacity={0.75} fill={Colors.colors.extraLightGray} cornerRadius={30} />
                    <Text
                        width={100}
                        y={10}
                        fill={Colors.colors.primary}
                        fontSize={12}
                        fontFamily={Fonts.fontFamilies.primary}
                        align={'center'}
                        verticalAlign={'center'}
                        text={distance ? distance.toPrecision(4) + 'Km' : ''} />
                    <Text
                        width={50}
                        y={-10}
                        listening={true}
                        onMouseEnter={this.showModulationTip}
                        onMouseLeave={this.hideModulationTip}
                        fill={bestModulation ? bestModulation.color : Colors.colors.primary}
                        fontSize={10}
                        fontFamily={Fonts.fontFamilies.primary}
                        fontStyle={'bold'}
                        align={'center'}
                        verticalAlign={'center'}
                        text={bestModulation ? bestModulation.name : ''} />
                    {this.state.isModulationTipVisible && <Text
                        width={200}
                        y={-50}
                        listening={false}
                        fill={bestModulation ? bestModulation.color : Colors.colors.primary}
                        fontSize={10}
                        fontFamily={Fonts.fontFamilies.primary}
                        align={'left'}
                        verticalAlign={'center'}
                        text={'Esta é a modulação máxima permitida por este enlace.'} />}
                </Group>
            </Group>
        );
    }


};
