import { Button, Collapse, Grid, Zoom, IconButton, Slider } from '@material-ui/core';
import { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import Konva from 'konva';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Layer, Line, Stage } from 'react-konva';
import { SpectrumText } from '../../Components/SpectrumText/SpectrumText';
import { LinkConfiguration } from './LinkConfiguration';
import { default as LinkLayer } from './LinkLayer';
import { NodeConfiguration } from './NodeConfigurations';
import NodeLayer from './NodeLayer';
import styles from './TopologyConfigurationStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { observe } from 'mobx';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore
}

interface IState {
    // State type definition
    mode: number
    gridHorizontalLines: number[]
    gridVerticalLines: number[]
}

@inject('topologyConfigurationStore')
@observer
export default class TopologyConfiguration extends React.Component<IProps, IState>{

    linkLayer?: LinkLayer = null

    constructor(props) {
        super(props)

        this.state = {
            mode: 0,
            gridHorizontalLines: [],
            gridVerticalLines: []
        }
    }

    componentDidMount() {

        this.createGridLines()
    }

    public createGridLines = () => {
        const horizontalLinesArray = []
        for (var i = 0; i < window.innerWidth / this.props.topologyConfigurationStore.gridSize; i++) {
            horizontalLinesArray.push(1)
        }
        const verticalLinesArray = []
        for (var i = 0; i < window.innerHeight / this.props.topologyConfigurationStore.gridSize; i++) {
            verticalLinesArray.push(1)
        }
        this.setState({
            gridHorizontalLines: horizontalLinesArray,
            gridVerticalLines: verticalLinesArray
        })
    }

    public onMouseMove = (event: Konva.KonvaEventObject<MouseEvent>) => {
        if (this.linkLayer) {
            this.linkLayer.onMouseMove(event)
        }
    }

    public onChangeModePressed = (mode: number) => {
        this.props.topologyConfigurationStore.cancelLink()
        this.setState({
            mode: mode
        })
    }

    public onToggleGridPressed = () => {
        this.props.topologyConfigurationStore.isGridEnabled = !this.props.topologyConfigurationStore.isGridEnabled
    }

    public onGridSizeChanged = (event, value) => {
        this.props.topologyConfigurationStore.gridSize = value as number
        this.createGridLines()
    }

    render() {
        return (
            <div style={inline([styles.flex1, styles.topCenteredColumn, styles.topologyConfigurationScreenContainer])}>

                <div style={inline([styles.toolbarContainer, styles.centeredRow, styles.leftAlignedRow])}>
                    <div style={inline([styles.centeredRow])}>
                        <Button
                            onClick={() => this.onChangeModePressed(0)}
                            style={inline([
                                styles.xSmallMarginLeft,
                                styles.xSmallMarginTop,
                                styles.xSmallMarginBottom,
                                styles.shadowView,
                                styles.toolbarButton,
                                styles.centeredColumn,
                                this.state.mode === 0 ? styles.toolbarButtonPressed : {}])}
                        >
                            <div style={inline([styles.keyboardShortcutNumberContainer, styles.centeredColumn])}>
                                <SpectrumText size={'c11'} weight={'semibold'}>
                                    1
                                        </SpectrumText>
                            </div>
                            <div style={inline([styles.topCenteredColumn, styles.flex1])}>
                                <SpectrumText style={inline([styles.buttonText])} size={'c13'} weight={'semibold'}
                                >
                                    Cursor
                                        </SpectrumText>
                                <img
                                    style={inline([styles.cursorIcon])}
                                    src={require('../../Assets/Icons/icCursor.png')}
                                    alt="Ícone de nodo da topologia"
                                />
                            </div>
                        </Button>
                        <Button
                            onClick={() => this.onChangeModePressed(1)}
                            style={inline([
                                styles.xSmallMarginLeft,
                                styles.xSmallMarginTop,
                                styles.xSmallMarginBottom,
                                styles.shadowView,
                                styles.toolbarButton,
                                styles.centeredColumn,
                                this.state.mode === 1 ? styles.toolbarButtonPressed : {}])}
                        >
                            <div style={inline([styles.keyboardShortcutNumberContainer, styles.centeredColumn])}>
                                <SpectrumText size={'c11'} weight={'semibold'}>
                                    2
                                        </SpectrumText>
                            </div>
                            <div style={inline([styles.topCenteredColumn, styles.flex1])}>
                                <SpectrumText style={inline([styles.buttonText])} size={'c13'} weight={'semibold'}>
                                    Nodos
                                </SpectrumText>
                                <img
                                    style={inline([styles.nodeIcon])}
                                    src={require('../../Assets/Icons/icNode.png')}
                                    alt="Ícone de nodo da topologia"
                                />
                            </div>
                        </Button>
                        <Button
                            onClick={() => this.onChangeModePressed(2)}
                            style={inline([
                                styles.xSmallMarginLeft,
                                styles.xSmallMarginTop,
                                styles.xSmallMarginBottom,
                                styles.shadowView,
                                styles.toolbarButton,
                                styles.centeredColumn,
                                this.state.mode === 2 ? styles.toolbarButtonPressed : {}])}
                        >
                            <div style={inline([styles.keyboardShortcutNumberContainer, styles.centeredColumn])}>
                                <SpectrumText size={'c11'} weight={'semibold'}>
                                    3
                                </SpectrumText>
                            </div>
                            <div style={inline([styles.topCenteredColumn, styles.flex1])}>
                                <SpectrumText style={inline([styles.buttonText])} size={'c11'} weight={'semibold'}>
                                    Enlaces
                                </SpectrumText>
                                <img
                                    style={inline([styles.linkNode])}
                                    src={require('../../Assets/Icons/icLink.png')}
                                    alt="Ícone de nodo da topologia"
                                />
                            </div>
                        </Button>
                    </div>

                    <div style={inline([styles.centeredColumn, styles.marginLeft, styles.marginRight])}>

                        <Button
                            onClick={this.onToggleGridPressed}
                            style={inline([
                                styles.centeredColumn, this.props.topologyConfigurationStore.isGridEnabled ? styles.gridButton : styles.gridButtonOff, styles.xSmallPaddingHorizontal])}>
                            <SpectrumText
                                color={this.props.topologyConfigurationStore.isGridEnabled ? Colors.colors.gray : Colors.colors.healthPink}
                                style={inline([styles.xSmallMarginRight])} size={'c13'} weight={'semibold'}>
                                {this.props.topologyConfigurationStore.isGridEnabled ? 'Desabilitar Grid [G]' : 'Habilitar Grid [G]'}
                            </SpectrumText>
                            <FontAwesomeIcon color={this.props.topologyConfigurationStore.isGridEnabled ? Colors.colors.gray : Colors.colors.healthPink} size={'1x'} icon={faBorderAll} />
                        </Button>
                        <Slider
                            defaultValue={30}
                            disabled={this.props.topologyConfigurationStore.isGridEnabled === false}
                            onChange={this.onGridSizeChanged}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay={"off"}
                            style={inline([this.props.topologyConfigurationStore.isGridEnabled ? styles.gridSlider : styles.gridSliderOff])}
                            step={5}
                            marks
                            min={10}
                            max={60}
                        />
                    </div>
                </div>

                <KeyboardEventHandler handleKeys={['1', '2', '3', 'T', 'G']}
                    onKeyEvent={(key, e) => {
                        switch (key) {
                            case '1':
                                this.onChangeModePressed(0)
                                break
                            case '2':
                                this.onChangeModePressed(1)
                                break
                            case '3':
                                this.onChangeModePressed(2)
                                break
                            case 'G':
                                this.onToggleGridPressed()
                                break
                        }
                    }}
                />

                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseMove={this.onMouseMove}
                >
                    {this.props.topologyConfigurationStore.isGridEnabled === true && <Layer listening={false}>
                        {this.state.gridHorizontalLines.map((line, i) => {
                            return <Line key={line.toString() + i.toString()} opacity={0.2} stroke={Colors.colors.primary} strokeWidth={1} points={[Math.round(i * this.props.topologyConfigurationStore.gridSize) + 0.5, 0, Math.round(i * this.props.topologyConfigurationStore.gridSize) + 0.5, window.innerHeight]}></Line>
                        })}
                        {this.state.gridVerticalLines.map((line, i) => {
                            return <Line key={line.toString() + i.toString()} opacity={0.2} stroke={Colors.colors.primary} strokeWidth={1} points={[0, Math.round(i * this.props.topologyConfigurationStore.gridSize), window.innerWidth, Math.round(i * this.props.topologyConfigurationStore.gridSize)]}></Line>
                        })}
                    </Layer>}
                    {/* Camada de nós */}

                    <LinkLayer
                        ref={ref => this.linkLayer = ref}
                        mode={this.state.mode}
                        topologyConfigurationStore={this.props.topologyConfigurationStore}
                    />
                    <NodeLayer
                        mode={this.state.mode}
                        topologyConfigurationStore={this.props.topologyConfigurationStore}
                    />

                </Stage>
                <LinkConfiguration />

            </div >

        );
    }

};
