import { Slide } from '@material-ui/core';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import Wave from 'react-wavify';
import styles from './WavesStyles';

interface IProps {
    // Props type definition
    style?: React.CSSProperties
}

interface IState {
    // State type definition
    waveAnimationTrigger: boolean
}

export const Waves: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        waveAnimationTrigger: false
    };

    const [waveAnimationTrigger, setWaveAnimationTrigger] = React.useState(initialState.waveAnimationTrigger)


    // ComponentDidMount
    useEffect(() => {

        setTimeout(() => {
            setWaveAnimationTrigger(true)
        }, 300)

        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.flex1, styles.flexStretch, styles.waveContainer, props.style])}>
            <Slide timeout={1000} direction={'up'} in={waveAnimationTrigger}>
                <div style={inline([styles.flex1, styles.flexStretch, styles.waveContainer, styles.positionRelative])}>
                    <div style={inline([styles.flex1, styles.flexStretch, styles.fullWidthContainer, styles.positionAbsolute, { zIndex: -1, top: 200 }])}>
                        <Wave fill='#EE7752'
                            style={{
                                width: '100%',
                            }}
                            paused={false}
                            options={{
                                height: 40,
                                amplitude: 60,
                                speed: 0.3,
                                points: 3
                            }}
                        />
                    </div>
                    <div style={inline([styles.flex1, styles.flexStretch, styles.fullWidthContainer, styles.positionAbsolute, { zIndex: -1, top: 230 }])}>
                        <Wave fill='#E73C7E'
                            style={{
                                width: '100%'
                            }}
                            paused={false}
                            options={{
                                height: 40,
                                amplitude: 60,
                                speed: 0.1,
                                points: 3
                            }}
                        />
                    </div>
                    <div style={inline([styles.flex1, styles.flexStretch, styles.fullWidthContainer, styles.positionAbsolute, { zIndex: -1, top: 260 }])}>
                        <Wave fill='#23A6D5'
                            style={{
                                width: '100%'
                            }}
                            paused={false}
                            options={{
                                height: 40,
                                amplitude: 20,
                                speed: 0.2,
                                points: 5
                            }}
                        />
                    </div>
                    <Wave fill='#0F0F14'
                        style={{
                            width: '100%'
                        }}
                        paused={false}
                        options={{
                            height: 300,
                            amplitude: 60,
                            speed: 0.15,
                            points: 3
                        }}
                    />
                </div>
            </Slide>
        </div>
    );
};
