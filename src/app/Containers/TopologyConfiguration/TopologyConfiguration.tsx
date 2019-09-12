import { Button, Collapse, Grid, Typography, Zoom } from '@material-ui/core';
import { TopologyConfigurationStore } from 'app/Store/TopologyConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import Konva from 'konva';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Layer, Line, Stage } from 'react-konva';
import { LinkConfiguration } from './LinkConfiguration';
import { default as LinkLayer } from './LinkLayer';
import { NodeConfiguration } from './NodeConfigurations';
import NodeLayer from './NodeLayer';
import styles from './TopologyConfigurationStyles';

interface IProps {
    // Props type definition
    topologyConfigurationStore?: TopologyConfigurationStore
}

interface IState {
    // State type definition
    mode: number
    areToolsOpened: boolean
    gridHorizontalLines: number[]
    gridVerticalLines: number[]
}

@inject('topologyConfigurationStore')
@observer
export default class TopologyConfiguration extends React.Component<IProps, IState>{

    linkLayer?: LinkLayer = null

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
            gridVerticalLines: verticalLinesArray
        }
    }

    componentDidMount() {
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

    public onToggleToolsPressed = () => {
        this.setState({
            areToolsOpened: !this.state.areToolsOpened
        })
    }
    public onToggleGridPressed = () => {
        this.props.topologyConfigurationStore.isGridEnabled = !this.props.topologyConfigurationStore.isGridEnabled
    }

    render() {
        return (
            <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn])}>

                <div style={inline([styles.toolbarContainer, styles.centeredRow, styles.leftAlignedRow])}>
                    <Collapse in={this.state.areToolsOpened}>
                        <Grid container xs={12}>
                            <Grid item>
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
                                        <Typography variant="button">
                                            1
                                        </Typography>
                                    </div>
                                    <div style={inline([styles.topCenteredColumn, styles.flex1])}>
                                        <Typography style={inline([
                                            styles.buttonText,
                                        ])} variant="button">
                                            Cursor
                                        </Typography>
                                        <img
                                            style={inline([styles.cursorIcon])}
                                            src={require('../../Assets/Icons/icCursor.png')}
                                            alt="Ícone de nodo da topologia"
                                        />
                                    </div>
                                </Button>
                            </Grid>
                            <Grid item>
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
                                        <Typography variant="button">
                                            2
                                        </Typography>
                                    </div>
                                    <div style={inline([styles.topCenteredColumn, styles.flex1])}>
                                        <Typography style={inline([
                                            styles.buttonText,
                                        ])} variant="button">
                                            Nodos
                                        </Typography>
                                        <img
                                            style={inline([styles.nodeIcon])}
                                            src={require('../../Assets/Icons/icNode.png')}
                                            alt="Ícone de nodo da topologia"
                                        />
                                    </div>
                                </Button>
                            </Grid>

                            <Grid item>
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
                                        <Typography variant="button">
                                            3
                                        </Typography>
                                    </div>
                                    <div style={inline([styles.topCenteredColumn, styles.flex1])}>
                                        <Typography style={inline([
                                            styles.buttonText,
                                        ])} variant="button">
                                            Enlaces
                                        </Typography>
                                        <img
                                            style={inline([styles.linkNode])}
                                            src={require('../../Assets/Icons/icLink.png')}
                                            alt="Ícone de nodo da topologia"
                                        />
                                    </div>
                                </Button>
                            </Grid>
                        </Grid>
                    </Collapse>

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
                            case 'T':
                                this.onToggleToolsPressed()
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
                <NodeConfiguration />
                <Zoom in={true}>
                    <div style={inline([styles.centeredColumn, styles.leftAlignedColumn, styles.navbarButtonsContainer])}>
                        <Button style={inline([styles.shadowView, styles.openToolbarButton])} onClick={this.onToggleToolsPressed}>
                            {this.state.areToolsOpened ? 'Fechar Ferramentas [T]' : 'Abrir Ferramentas [T]'}
                        </Button>
                        <Button style={inline([styles.shadowView, styles.openToolbarButton, styles.smallMarginTop])} onClick={this.onToggleGridPressed}>
                            {this.props.topologyConfigurationStore.isGridEnabled ? 'Desabilitar Grid [G]' : 'Habilitar Grid [G]'}
                        </Button>
                    </div>
                </Zoom>

            </div >

        );
    }

};
