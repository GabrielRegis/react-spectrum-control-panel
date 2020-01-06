import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { SimulationConfiguration } from 'app/Models/SimulationConfiguration';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { simulationSummaryStoreContext } from 'app/Store/SimulationSummaryStore';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import TopologyUtils from 'app/utils/TopologyUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { v4 } from 'uuid';
import { TopologyConfiguration } from '../../Models/TopologyConfiguration';
import { ResultsScreen } from './ResultsScreen/ResultsScreen';
import { SummaryPlaceholder } from './SummaryPlaceholder/SummaryPlaceholder';
import styles from './SummaryScreenStyles';
import { topologySnapshotStoreContext } from 'app/Store/TopologySnapshotStore';
import { observable } from 'mobx';
import { SpectrumScreen } from 'app/Components/SpectrumScreen/SpectrumScreen';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
    isConnected: boolean
    snackbackMessage?: string
    isLoading?: boolean
}

export const SummaryScreen: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)
    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)
    const simulationSummaryStore = React.useContext(simulationSummaryStoreContext)
    const topologySnapshotStore = React.useContext(topologySnapshotStoreContext)

    const initialState: IState = {
        isConnected: true,
        snackbackMessage: null,
        isLoading: false,
    };

    const [isConnected, setIsConnected] = React.useState(initialState.isConnected)
    const [snackbackMessage, setSnackbackMessage] = React.useState(initialState.snackbackMessage)
    const [isLoading, setIsLoading] = React.useState(initialState.isLoading)

    const onSocketConnected = (data) => {
        console.log("socket connected");
        setIsConnected(true);
        setSnackbackMessage('Conectado ao servidor com sucesso!')
        setIsLoading(false)
    }

    const onSimulationFinished = (data) => {
        console.log(data)
    }

    // ComponentDidMount
    useEffect(() => {
        // spectrumSocketServer.on("connect", onSocketConnected);
        // spectrumSocketServer.on('simulationSummary', onSimulationFinished)
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onPlaySimulationPressed = () => {
        setIsLoading(true)


        let left = window.innerWidth
        let top = window.innerHeight
        let right = 0
        let bottom = 0
        const nodes = Array.from(topologyConfigurationStore.nodes.values()).map((node) => {
            if (node.posX < left) {
                left = node.posX
            }
            if (node.posY < top) {
                top = node.posY
            }
            if (node.posX > right) {
                right = node.posX
            }
            if (node.posY > bottom) {
                bottom = node.posY
            }
            const newNode = {
                ...node,
                position: {
                    x: node.posX,
                    y: node.posY
                }
            }

            return newNode
        })

        topologySnapshotStore.links = observable.map(new Map());
        topologySnapshotStore.nodes = observable.map(new Map());
        topologySnapshotStore.selectedLink = null
        topologySnapshotStore.selectedLinkComponent = null

        Array.from(topologyConfigurationStore.nodes.values()).forEach((node) => {
            const newNode = {
                ...node,
                posY: node.posY - top + 60,
                posX: node.posX - left + 60
            }
            topologySnapshotStore.nodes.set(newNode.id, newNode)
        })
        Array.from(topologyConfigurationStore.links.values()).forEach((link) => {
            topologySnapshotStore.links.set(link.id, link)
        })

        console.log({
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            width: right - left
        })

        topologySnapshotStore.stageWidth = right - left + 120
        topologySnapshotStore.stageHeight = bottom - top + 120


        // Calculates links distance.
        topologyConfigurationStore.links.forEach((link) => {
            topologyConfigurationStore.links.get(link.id).distance = TopologyUtils.getLinkDistance(link.nodeA, link.nodeB)
        })

        const topologyConfiguration: TopologyConfiguration = {
            id: v4(),
            nodes: nodes,
            links: Array.from(topologyConfigurationStore.links.values())
        }

        const simulationConfigurations: SimulationConfiguration = {
            generalConfigurations: simulationConfigurationStore.generalConfiguration,
            classesConfiguration: simulationConfigurationStore.classesConfiguration,
            topologyConfiguration: topologyConfiguration
        }

        simulationSummaryStore.runSimulation(simulationConfigurations).then((response) => {
            setIsLoading(false)
        })
    }


    const onSnackBarClosed = () => {
        setSnackbackMessage(null)
    }

    return (
        <SpectrumScreen overflowYHidden={simulationSummaryStore.simulationSummary === null || simulationSummaryStore.simulationSummary === undefined}
            style={inline([styles.positionRelative, styles.topCenteredColumn, styles.fullContainer])}>
            {simulationSummaryStore.simulationSummary ? <ResultsScreen /> :
                <SummaryPlaceholder
                    isConnected={isConnected}
                    isLoading={simulationSummaryStore.isLoading}
                    onPlaySimulationPressed={onPlaySimulationPressed} />
            }

        </SpectrumScreen>
    );
});
