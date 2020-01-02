import { faCogs, faNetworkWired, faPoll, faStream } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { simulationConfigurationStoreContext } from "app/Store/SimulationConfigurationStore";
import { inline } from 'app/utils/StylesUtils';
import { observer } from "mobx-react-lite";
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { topologyConfigurationStoreContext } from '../../Store/TopologyConfigurationStore';
import { NavbarButton } from '../NavbarButton/NavbarButton';
import styles from './NavbarStyles';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const Navbar: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)
    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    const initialState: IState = {
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])


    return (
        <Fade in={true}>
            <div style={inline([styles.navbar, styles.centeredRow, styles.leftAlignedRow])}>
                <Link to="/">
                    <Button style={inline([styles.spectrumButton])} >
                        <img style={inline([styles.logo])} src={require('../../Assets/Icons/icLogo.png')} alt="" />
                    </Button>
                </Link>

                <Link to="/general-configurations">
                    <NavbarButton
                        styles={inline([styles.navbarButton])}
                        icon={faCogs}
                        isFinished={simulationConfigurationStore.areGeneralConfigurationsReady} />
                </Link>
                <Link to="/classes-configurations">
                    <NavbarButton
                        styles={inline([styles.navbarButton])}
                        icon={faStream}
                        isFinished={simulationConfigurationStore.areClassesConfigurationsReady} />
                </Link>

                <Link to="/topology-configurations">
                    <NavbarButton
                        styles={inline([styles.navbarButton])}
                        icon={faNetworkWired}
                        isFinished={topologyConfigurationStore.areTopologyConfigurationsReady} />
                </Link>

                <Link to="/summary">
                    <NavbarButton icon={faPoll} shouldShowStatus={false} isFinished={false} />
                </Link>

            </div>
        </Fade>

    );
});
