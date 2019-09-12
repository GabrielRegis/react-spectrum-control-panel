import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAdjust, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import Lottie from 'lottie-react-web';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './NavbarButtonStyles';

interface IProps {
    // Props type definition
    isFinished: number | boolean
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

    return (
        <Button disableFocusRipple={true} style={inline([styles.navbarButton, props.styles])} >
            <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={props.icon} />
            {props.shouldShowStatus !== false && <div style={inline([styles.buttonStatusContainer, styles.centeredColumn])}>
                <FontAwesomeIcon
                    style={inline([styles.checkIconOff, props.isFinished ? styles.checkIconOn : {}])}
                    icon={props.isFinished ? faCircle : faAdjust} />
                {props.isFinished && <Lottie
                    style={inline([styles.positionAbsolute])}
                    options={{
                        animationData: require('../../Assets/Animations/checkAnimation.json'),
                        loop: false,
                    }}
                />}
            </div>}
        </Button>
    );
};
