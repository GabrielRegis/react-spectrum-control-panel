import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Transition } from 'react-transition-group';
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
        <div style={inline([styles.fullWidthContainer, styles.topCenteredColumn])}>
            <Transition in={true} timeout={2000}>{
                (state) => (
                    <div style={inline([styles.teste, (state === 'entered' ? styles.testeOn : {})])}>TESTE</div>
                )
            }
            </Transition>
            <Grid style={inline([styles.fullWidthContainer])} container spacing={3}>
                <Grid item xs={12}>
                    <Paper>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper >xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper >xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
            </Grid>
        </div >
    );
};
