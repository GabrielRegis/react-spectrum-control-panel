import { Typography, Button, Slide, Zoom, Fade } from '@material-ui/core';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { inline } from '../../utils/StylesUtils';
import styles from './HomeScreenStyles';
import { SpectrumScreen } from 'app/Components/SpectrumScreen/SpectrumScreen';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import Wave from 'react-wavify'
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { Link } from 'react-router-dom';

interface IProps {
    // Props type definition
    number: number;
}

interface IState {
    // State type definition
    number: number;
    waveAnimationTrigger: boolean
    titleAnimationTrigger: boolean
}

export const HomeScreen: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        number: 0,
        waveAnimationTrigger: false,
        titleAnimationTrigger: false,
    };

    const [waveAnimationTrigger, setWaveAnimationTrigger] = React.useState(initialState.waveAnimationTrigger)
    const [titleAnimationTrigger, setTitleAnimationTrigger] = React.useState(initialState.titleAnimationTrigger)

    // ComponentDidMount
    useEffect(() => {
        setTimeout(() => {
            setTitleAnimationTrigger(true)
        }, 200)
        setTimeout(() => {
            setWaveAnimationTrigger(true)
        }, 300)
        return () => {
            //ComponentDidUnmount
        }
    }, [])


    return (
        <div style={inline([styles.fullContainer, styles.topCenteredColumn, styles.positionRelative])} >
            <div style={inline([styles.background, styles.fullContainer, styles.positionAbsolute])} />
            <div style={inline([styles.flex1, styles.zIndex2, styles.marginTop, styles.centeredColumn])}>
                <Fade timeout={1000} in={titleAnimationTrigger}>
                    <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.bigPadding, styles.titleContainer])}>
                        <SpectrumText style={inline([styles.textWithoutSelection, styles.spectrumTitleText])} size={"h1"} weight={'bold'}>
                            SPECTRUM
                            </SpectrumText>
                        <SpectrumText style={inline([styles.textWithoutSelection, styles.spectrumSubtitleText])} weight={'light'}>
                            REDES ÓPTICAS ELÁSTICAS SIMULADAS
                             </SpectrumText>
                        <RainbowDiv style={styles.rainbowA} />
                    </div>
                </Fade>
                <Fade timeout={1000} in={titleAnimationTrigger}>

                    <Link style={{ textDecoration: "none" }} to="/general-configurations">
                        <RainbowBorderButton style={inline([styles.marginTop])}>
                            <SpectrumText style={styles.startText} weight={'bold'}>
                                INICIAR
                        </SpectrumText>
                        </RainbowBorderButton>
                    </Link>
                </Fade>
            </div>

            <div style={inline([styles.flex1, styles.flexStretch, styles.waveContainer])}>

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

            <div style={inline([styles.positionAbsolute, styles.fullWidthContainer, styles.footer,])}>
                <div style={inline([styles.smallPadding, styles.botAlignedRow, styles.spaceBetween])}>
                    <SpectrumText style={inline([styles.textWithoutSelection])}>
                        Criado e desenvolvido por Gabriel Biesek Regis - 2020
                    </SpectrumText>
                    <img style={inline([styles.textWithoutSelection, styles.utfprLogo])} src={require('../../Assets/Logos/utfprLogo.png')} alt="Logotipo da UTFPR" />
                </div>
            </div>
        </div>
    );
};
