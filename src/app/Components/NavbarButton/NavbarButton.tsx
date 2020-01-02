import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAdjust, faCircle, faCheck, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Fade } from '@material-ui/core';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import Lottie from 'lottie-react-web';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './NavbarButtonStyles';
import { RainbowDiv } from '../RainbowDiv/RainbowDiv';

interface IProps {
    // Props type definition
    isFinished: boolean | number
    icon: IconProp
    styles?: React.CSSProperties
    shouldShowStatus?: boolean
}

interface IState {
    // State type definition
}

export const NavbarButton: FunctionComponent<IProps> = (props) => {

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const isFinished = props.isFinished !== false && props.isFinished !== null && props.isFinished !== undefined

    return (
        <Button disableFocusRipple={true} style={inline([styles.navbarButton, props.styles])} >
            <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={props.icon} />
            {props.shouldShowStatus !== false && <div style={inline([styles.buttonStatusContainer, styles.centeredColumn])}>
                {
                    isFinished ? <RainbowDiv style={inline([styles.rainbowA, styles.centeredColumn])}>
                        <FontAwesomeIcon
                            style={inline([styles.checkIconOn, styles.flexStretch])}
                            icon={faCheckCircle} />
                    </RainbowDiv> :
                        <FontAwesomeIcon
                            style={inline([styles.checkIconOff])}
                            icon={faExclamationCircle} />
                }
            </div>}
        </Button>
    );
};
