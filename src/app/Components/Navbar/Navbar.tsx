import { faCogs, faNetworkWired, faPoll, faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
    number: number;
}

export const Navbar: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        number: 0
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])


    return (
        <div style={inline([styles.navbar, styles.centeredRow, styles.leftAlignedRow,])}>
            <Link to="/">
                <Button style={inline([styles.navbarButton])} >
                    <img style={inline([styles.logo])} src={require('../../Assets/Icons/icLogo.png')} alt="" />
                </Button>
            </Link>

            <Link to="/simulation-configuration">
                <Button style={inline([styles.navbarButton])} >
                    <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={faCogs} />
                </Button>
            </Link>
            <Link to="/flow-configuration">
                <Button style={inline([styles.navbarButton])}>
                    <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={faStream} />
                </Button>
            </Link>

            <Link to="/topology-configuration">
                <Button style={inline([styles.navbarButton])}>
                    <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={faNetworkWired} />
                </Button>
            </Link>

            <Link to="/summary">
                <Button style={inline([styles.navbarButton])}>
                    <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={faPoll} />
                </Button>
            </Link>

        </div>
    );
};
