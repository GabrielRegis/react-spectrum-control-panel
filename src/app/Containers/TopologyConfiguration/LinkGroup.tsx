import { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import Konva from 'konva';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Group, Rect } from 'react-konva';
import DebugLink from './DebugLink';
import LinkComponent from './LinkComponent';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore
    mode: number
}

interface IState {
    // State type definition
}

@observer
export default class LinkGroup extends React.Component<IProps, IState>{
    private group?: Konva.Group = null
    private debugLink?: DebugLink = null

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
    }

    public onMouseMove = (event: Konva.KonvaEventObject<MouseEvent>) => {
        if (this.debugLink) {
            this.debugLink.onMouseMove(event)
        }
    }


    public render() {

        return (
            <Group
                ref={ref => this.group = ref}
                listening={true}
            >
                <Rect opacity={0} width={window.innerWidth - 5} height={window.innerHeight - 80} />
                {this.props.topologyConfigurationStore.selectedNodes &&
                    this.props.topologyConfigurationStore.selectedNodes.length > 0 && this.props.mode === 2 && <DebugLink
                        ref={ref => this.debugLink = ref}
                        topologyConfigurationStore={this.props.topologyConfigurationStore} />}
                {this.props.topologyConfigurationStore && this.props.topologyConfigurationStore.links && Array.from(this.props.topologyConfigurationStore.links.values()).map((link) => {
                    return <LinkComponent
                        key={link.id}
                        topologyConfigurationStore={this.props.topologyConfigurationStore}
                        link={link}
                        nodeA={link.nodeA}
                        nodeB={link.nodeB} />
                })}
            </Group>
        );
    }


};
