import { faCogs, faNetworkWired, faPlayCircle, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CircularProgress, Container, Typography, Zoom } from '@material-ui/core';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { NavbarButton } from '../../../Components/NavbarButton/NavbarButton';
import { Placeholder } from '../Placeholder/Placeholder';
import styles from './SummaryPlaceholderStyles';

interface IProps {
    // Props type definition
    onPlaySimulationPressed: () => void
    isLoading: boolean
}

interface IState {
    // State type definition
}

export const SummaryPlaceholder: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)
    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <Zoom in={true}>
            <div style={inline([styles.centeredColumn, styles.marginTop, styles.shadowView, styles.padding, styles.infosContainer])}>
                <Typography
                    style={inline([styles.simulationTitle, styles.xSmallMarginBottom])}
                    variant={'button'}>
                    Resumo de simulação
                </Typography>
                <Placeholder />
                <Typography
                    style={inline([styles.simulationSubtitle, styles.marginTop])}
                    variant={'button'}>
                    Configurações obrigatórias
                </Typography>
                <Container>
                    <Container style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                        <NavbarButton
                            icon={faCogs}
                            styles={inline([styles.navbarButton])}
                            isFinished={simulationConfigurationStore.areGeneralConfigurationsReady} />
                        <Typography style={inline([styles.xSmallMarginLeft])} variant={'button'}>
                            Configurações gerais
                        </Typography>
                    </Container>
                    <Container style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                        <NavbarButton
                            icon={faStream}
                            styles={inline([styles.navbarButton])}
                            isFinished={simulationConfigurationStore.areClassesConfigurationsReady} />
                        <Typography style={inline([styles.xSmallMarginLeft])} variant={'button'}>
                            Configurações de classes
                        </Typography>
                    </Container>
                    <Container style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                        <NavbarButton
                            styles={inline([styles.navbarButton])}
                            icon={faNetworkWired}
                            isFinished={topologyConfigurationStore.areTopologyConfigurationsReady} />
                        <Typography style={inline([styles.xSmallMarginLeft])} variant={'button'}>
                            Configurações de topologia
                        </Typography>
                    </Container>
                </Container>
                <Zoom in={!props.isLoading}>
                    <div style={inline([styles.centeredColumn, styles.smallMarginTop])}>
                        <Button onClick={props.onPlaySimulationPressed} style={inline([styles.startSimulationButton])} >
                            <div style={inline([styles.flex1, styles.centeredRow])}>
                                <Typography style={inline([styles.startSimulationButtonText])} variant={'button'}>
                                    Iniciar Simulação
                                </Typography>
                                <FontAwesomeIcon size={'2x'} style={inline([styles.addIcon])} icon={faPlayCircle} />
                            </div>
                            <Zoom style={inline([styles.positionAbsolute])} in={props.isLoading}>
                                <CircularProgress style={{ ...styles.flex1 }} color="secondary" />
                            </Zoom>
                        </Button>
                    </div>
                </Zoom>
            </div>
        </Zoom>
    );
});
