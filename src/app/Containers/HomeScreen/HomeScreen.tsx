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
import { Waves } from 'app/Components/Waves/Waves';

interface IProps {
    // Props type definition
    number: number;
}

interface IState {
    // State type definition
    titleAnimationTrigger: boolean
}

export const HomeScreen: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        titleAnimationTrigger: false,
    };

    const [titleAnimationTrigger, setTitleAnimationTrigger] = React.useState(initialState.titleAnimationTrigger)

    // ComponentDidMount
    useEffect(() => {
        setTimeout(() => {
            setTitleAnimationTrigger(true)
        }, 200)
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

            <Waves />

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
