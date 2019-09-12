import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { SimulationConfiguration } from 'app/Models/SimulationConfiguration';
import { runSimulation } from 'app/Services/Api';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import TopologyUtils from 'app/utils/TopologyUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { v4 } from 'uuid';
import { TopologyConfiguration } from '../../Models/TopologyConfiguration';
import { SummaryPlaceholder } from './SummaryPlaceholder/SummaryPlaceholder';
import styles from './SummaryScreenStyles';

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

        const nodes = Array.from(topologyConfigurationStore.nodes.values()).map((node) => {
            const newNode = {
                ...node,
                position: {
                    x: node.posX,
                    y: node.posY
                }
            }
            return newNode
        })

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
        console.log(simulationConfigurations)
        runSimulation(simulationConfigurations).then((response) => {
            console.log(response)
        })
        // spectrumSocketServer.emit('startSimulation', simulationConfigurations)
    }


    const onSnackBarClosed = () => {
        setSnackbackMessage(null)
    }

    return (
        <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn])}>

            <img style={inline([styles.positionAbsolute, styles.placeholder])} src={require('../../Assets/Icons/summaryPlaceholder.svg')} alt="" />

            <SummaryPlaceholder
                isConnected={isConnected}
                isLoading={isLoading}
                onPlaySimulationPressed={onPlaySimulationPressed} />

            {false && <CircularProgress style={{ ...styles.flex1 }} color="secondary" />}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={snackbackMessage !== undefined && snackbackMessage !== null && snackbackMessage !== ''}
                autoHideDuration={3000}
                onClose={onSnackBarClosed}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{snackbackMessage}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={onSnackBarClosed}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>
    );
});
