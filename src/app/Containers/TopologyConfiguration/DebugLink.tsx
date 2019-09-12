import { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import Konva from 'konva';
import { observer } from 'mobx-react';
import * as React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Group, Line } from 'react-konva';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore

}

interface IState {
    // State type definition
    mousePosition: { x: number, y: number }
}

@observer
export default class DebugLink extends React.Component<IProps, IState>{
    private debugLink?: Konva.Line = null

    constructor(props) {
        super(props)

        this.state = {
            mousePosition: { x: this.props.topologyConfigurationStore.selectedNodes[0].posX, y: this.props.topologyConfigurationStore.selectedNodes[0].posY }
        }
    }

    componentDidMount() {
        this.debugLink.to({
            strokeWidth: 15,
            opacity: 1,
            duration: 0.2
        })
    }

    public onMouseMove = (event: Konva.KonvaEventObject<MouseEvent>) => {
        const mousePos = this.debugLink ? this.debugLink.getStage().getPointerPosition() : { x: 0, y: 0 }
        this.setState({
            mousePosition: mousePos
        })
    }


    public render() {

        const selectedNodes = this.props.topologyConfigurationStore && this.props.topologyConfigurationStore.selectedNodes && this.props.topologyConfigurationStore.selectedNodes.length > 0 ? this.props.topologyConfigurationStore.selectedNodes : []

        const debugLinkConfig = {
            points: [selectedNodes.length > 0 ? selectedNodes[0].posX : 0, selectedNodes.length > 0 ? selectedNodes[0].posY : 0, this.state.mousePosition.x, this.state.mousePosition.y],
            stroke: "#FF6192",
            strokeWidth: 5,
            opacity: 0,
            listening: false
        }

        return (
            <Group listening={false}>
                <KeyboardEventHandler handleKeys={['x', 'del']}
                    onKeyEvent={(key, e) => {
                        this.props.topologyConfigurationStore.cancelLink()
                    }}
                />
                <Line listening={false} ref={ref => this.debugLink = ref} {...debugLinkConfig} />

            </Group>
        );
    }


};
