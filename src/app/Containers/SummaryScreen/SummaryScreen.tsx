import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { SimulationConfiguration } from 'app/Models/SimulationConfiguration';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import socketIOClient from "socket.io-client";
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
    socket: any
}

export const SummaryScreen: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)
    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    const initialState: IState = {
        isConnected: false,
        snackbackMessage: null,
        isLoading: false,
        socket: socketIOClient('http://localhost:4113')
    };

    const [isConnected, setIsConnected] = React.useState(initialState.isConnected)
    const [snackbackMessage, setSnackbackMessage] = React.useState(initialState.snackbackMessage)
    const [isLoading, setIsLoading] = React.useState(initialState.isLoading)
    const [socket, setSocket] = React.useState(initialState.socket)

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
        socket.on("connect", onSocketConnected);
        socket.on('simulationSummary', onSimulationFinished)
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

        const topologyConfiguration: TopologyConfiguration = {
            id: v4(),
            nodes: nodes,
            links: Array.from(topologyConfigurationStore.links.values())
        }

        //Converte de array observável para objeto, em si
        // const flowClasses = simulationConfigurationStore.classesConfiguration.flowClasses.map((callClass) => {
        //     const newCallClass: CallClassConfiguration = {
        //         id: callClass.id,
        //         name: callClass.name,
        //         minBandwidth: callClass.minBandwidth,
        //         maxBandwidth: callClass.maxBandwidth,
        //         minHoldingTime: callClass.minHoldingTime,
        //         maxHoldingTime: callClass.maxHoldingTime,
        //         frequency: callClass.frequency,
        //         degradationConfiguration: callClass.degradationConfiguration
        //     }
        //     return newCallClass
        // })

        // const classesConfiguration: ClassesConfiguration = {
        //     callsNumber: simulationConfigurationStore.classesConfiguration.callsNumber,
        //     flowClasses: flowClasses
        // }

        // console.log(classesConfiguration)


        const simulationConfigurations: SimulationConfiguration = {
            generalConfigurations: simulationConfigurationStore.generalConfiguration,
            classesConfiguration: simulationConfigurationStore.classesConfiguration,
            topologyConfiguration: topologyConfiguration
        }
        console.log(simulationConfigurations)
        socket.emit('startSimulation', simulationConfigurations)
    }


    const onSnackBarClosed = () => {
        setSnackbackMessage(null)
    }

    return (
        <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn])}>

            <SummaryPlaceholder
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
