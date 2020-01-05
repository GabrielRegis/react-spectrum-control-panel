import { faCogs, faNetworkWired, faPlayCircle, faStream, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CircularProgress, Container, Typography, Zoom, Fade } from '@material-ui/core';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavbarButton } from '../../../Components/NavbarButton/NavbarButton';
import { Placeholder } from '../Placeholder/Placeholder';
import styles from './SummaryPlaceholderStyles';
import { SpectrumScreen } from 'app/Components/SpectrumScreen/SpectrumScreen';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { Waves } from 'app/Components/Waves/Waves';
import { Colors } from 'app/Theme';

import ScaleLoader from "react-spinners/ScaleLoader";

interface IProps {
    // Props type definition
    onPlaySimulationPressed: () => void
    isLoading: boolean
    isConnected: boolean
}

interface IState {
    // State type definition
    titleAnimationTrigger: boolean,

}

export const SummaryPlaceholder: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)
    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    const initialState: IState = {
        titleAnimationTrigger: false,
    };

    const [titleAnimationTrigger, setTitleAnimationTrigger] = React.useState(initialState.titleAnimationTrigger)


    // ComponentDidMount
    useEffect(() => {
        setTimeout(() => {
            setTitleAnimationTrigger(true)
        }, 200)
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const isSimulationReady = simulationConfigurationStore.areClassesConfigurationsReady &&
        simulationConfigurationStore.areGeneralConfigurationsReady &&
        topologyConfigurationStore.areTopologyConfigurationsReady && props.isConnected

    return (
        <div style={inline([styles.centeredColumn, styles.flexStretch, styles.fullWidthContainer])}>
            <div style={inline([styles.background, styles.fullContainer, styles.positionAbsolute])} />
            <div style={inline([styles.flex1, styles.zIndex2, styles.marginTop, styles.centeredColumn])}>
                <Fade timeout={1000} in={titleAnimationTrigger}>
                    <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.bigPadding, styles.titleContainer])}>
                        <SpectrumText style={inline([styles.textWithoutSelection, styles.spectrumTitleText])} size={"h1"} weight={'bold'}>
                            {isSimulationReady ? 'CONFIGURAÇÃO COMPLETA' : 'CONFIGURAÇÕES PENDENTES'}
                        </SpectrumText>
                        {isSimulationReady === false && <SpectrumText style={inline([styles.textWithoutSelection, styles.simulationSubtitle, styles.xSmallMarginTop])} size={"h1"} weight={'light'}>
                            {'Verifique se todas as etapas de configuração foram completas'}
                            <FontAwesomeIcon style={styles.xSmallMarginLeft} color={Colors.colors.primary} icon={faExclamationCircle} />
                        </SpectrumText>}
                        {isSimulationReady && <RainbowDiv style={styles.rainbowA} />}
                    </div>
                </Fade>
                <Fade timeout={1000} in={titleAnimationTrigger && isSimulationReady}>
                    <RainbowBorderButton disabled={props.isLoading} onClick={props.onPlaySimulationPressed} style={inline([styles.marginTop])} innerStyle={inline([styles.centeredRow])}>
                        <SpectrumText style={styles.startText} weight={'bold'}>
                            {props.isLoading ? "CARREGANDO" : "INICIAR SIMULAÇÃO"}
                        </SpectrumText>
                        {props.isLoading &&
                            <div style={inline([styles.centeredColumn, styles.flexStretch, styles.xSmallMarginLeft, { marginTop: 8 }])}>
                                <ScaleLoader
                                    height={30}
                                    color={simulationConfigurationStore.colors[1]}
                                    loading={true}
                                />
                            </div>
                        }
                    </RainbowBorderButton>
                </Fade>
            </div>

            <Waves />
        </div>
    );
});
