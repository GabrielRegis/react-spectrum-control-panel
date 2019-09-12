import { Typography } from '@material-ui/core';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { inline } from '../../utils/StylesUtils';
import styles from './HomeScreenStyles';
interface IProps {
    // Props type definition
    number: number;
}

interface IState {
    // State type definition
    number: number;
}

export const HomeScreen: FunctionComponent<IProps> = (props) => {
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
        <div style={inline([styles.topCenteredColumn, styles.homescreenBackground])}>
            <div style={inline([styles.topCenteredColumn, styles.bigPadding])}>
                <Typography variant={'h1'} >
                    SPECTRUM
                </Typography>
            </div>
        </div >
    );
};
