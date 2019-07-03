import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAdjust, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './NavbarButtonStyles';

interface IProps {
    // Props type definition
    isFinished: number | boolean
    icon: IconProp
    styles?: React.CSSProperties
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
        <Button style={inline([styles.navbarButton, props.styles])} >
            <FontAwesomeIcon color={Colors.colors.primary} size={'2x'} icon={props.icon} />
            <div style={inline([styles.buttonStatusContainer, styles.centeredColumn])}>
                <FontAwesomeIcon
                    style={inline([styles.checkIconOff, props.isFinished ? styles.checkIconOn : {}])}
                    icon={props.isFinished ? faCircle : faAdjust} />
            </div>
        </Button>
    );
};
