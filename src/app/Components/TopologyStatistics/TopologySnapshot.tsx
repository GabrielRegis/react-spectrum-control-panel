import { TopologySnapshotStore } from 'app/Store/TopologySnapshotStore';
import { inline } from 'app/utils/StylesUtils';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Stage } from 'react-konva';
import SnapshotLinkLayer from './SnapshotLinkLayer';
import SnapshotNodeLayer from './SnapshotNodeLayer';
import styles from './TopologySnapshotStyles';

interface IProps {
    // Props type definition
    topologySnapshotStore?: TopologySnapshotStore
}

interface IState {
    // State type definition
    mode: number
    areToolsOpened: boolean
    gridHorizontalLines: number[]
    gridVerticalLines: number[]
    stageWidth: number
}

@inject('topologySnapshotStore')
@observer
export default class TopologySnapshot extends React.Component<IProps, IState>{

    linkLayer?: SnapshotLinkLayer = null
    container?: React.RefObject<any> = React.createRef();

    constructor(props) {
        super(props)
        const horizontalLinesArray = []
        for (var i = 0; i < window.innerWidth / 20; i++) {
            horizontalLinesArray.push(1)
        }
        const verticalLinesArray = []
        for (var i = 0; i < window.innerHeight / 20; i++) {
            verticalLinesArray.push(1)
        }
        this.state = {
            mode: 0,
            areToolsOpened: true,
            gridHorizontalLines: horizontalLinesArray,
            gridVerticalLines: verticalLinesArray,
            stageWidth: 0
        }
    }

    // componentDidMount() {
    //     this.checkSize()
    //     window.addEventListener("resize", this.checkSize);

    // }
    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.checkSize);
    // }

    checkSize = () => {
        const width = this.container.current.offsetWidth;
        this.setState({
            stageWidth: width
        });
    };

    public onToggleToolsPressed = () => {
        this.setState({
            areToolsOpened: !this.state.areToolsOpened
        })
    }

    render() {
        return (
            <div ref={this.container}
                style={inline([styles.fullWidthContainer, styles.centeredColumn])}>
                <Stage
                    width={this.props.topologySnapshotStore.stageWidth}
                    height={this.props.topologySnapshotStore.stageHeight}
                >
                    <SnapshotLinkLayer
                        ref={ref => this.linkLayer = ref}
                        topologySnapshotStore={this.props.topologySnapshotStore}
                    />
                    <SnapshotNodeLayer
                        topologySnapshotStore={this.props.topologySnapshotStore}
                    />

                </Stage>

            </div >

        );
    }

};
