import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './SpectrumScreenStyles';
import { Navbar } from '../Navbar/Navbar';
interface IProps {
    // Props type definition
    shouldHideNavbar?: boolean
    style?: React.CSSProperties
    overflowYHidden?: boolean
}

interface IState {
    // State type definition
}

export const SpectrumScreen: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const shouldShowNavbar = props.shouldHideNavbar !== true

    return (
        <div style={inline([styles.fullContainer, {
            overflowX: 'hidden',
            overflowY: props.overflowYHidden === true ? 'hidden' : 'visible'
        }])}>
            {shouldShowNavbar && <Navbar />}
            <div style={inline([styles.flex1, props.style])}>
                {props.children}
            </div>
        </div>
    );
};
