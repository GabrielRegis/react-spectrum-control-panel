import { Typography, Button } from '@material-ui/core';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { inline } from '../../utils/StylesUtils';
import styles from './HomeScreenStyles';
import { SpectrumScreen } from 'app/Components/SpectrumScreen/SpectrumScreen';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import Wave from 'react-wavify'
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';

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
        <SpectrumScreen style={inline([styles.fullContainer, styles.topCenteredColumn, styles.positionRelative])} shouldHideNavbar={true}>
            <div style={inline([styles.background, styles.fullContainer, styles.positionAbsolute])} />
            <div style={inline([styles.flex1, styles.zIndex2, styles.marginTop, styles.centeredColumn])}>
                <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.bigPadding, styles.titleContainer])}>
                    <SpectrumText style={inline([styles.textWithoutSelection, styles.spectrumTitleText])} size={"h1"} weight={'bold'}>
                        SPECTRUM
                    </SpectrumText>
                    <SpectrumText style={inline([styles.textWithoutSelection, styles.spectrumSubtitleText])} weight={'light'}>
                        REDES ÓPTICAS ELÁSTICAS SIMULADAS
                    </SpectrumText>
                    <RainbowDiv style={styles.rainbowA} />
                </div>
                <RainbowBorderButton borderWidth={3} borderRadius={50} style={inline([styles.marginTop])} innerStyle={inline([styles.xSmallPaddingHorizontal])}>
                    <SpectrumText style={styles.startText} weight={'bold'}>
                        INICIAR
                    </SpectrumText>
                </RainbowBorderButton>
            </div>
            <div style={inline([styles.flex1, styles.fullWidthContainer, styles.zIndex3])}>
                <Wave fill='#0F0F14'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 60,
                        speed: 0.15,
                        points: 3
                    }}
                />
            </div>

            <div style={inline([styles.positionAbsolute, styles.fullWidthContainer, styles.footer,])}>
                <div style={inline([styles.smallPadding, styles.botAlignedRow, styles.spaceBetween])}>
                    <SpectrumText style={inline([styles.textWithoutSelection])}>
                        Criado e desenvolvido por Gabriel Biesek Regis - 2020
                    </SpectrumText>
                    <img style={inline([styles.textWithoutSelection, styles.utfprLogo])} src={require('../../Assets/Logos/utfprLogo.png')} alt="Logotipo da UTFPR" />
                </div>
            </div>
        </SpectrumScreen>
    );
};
