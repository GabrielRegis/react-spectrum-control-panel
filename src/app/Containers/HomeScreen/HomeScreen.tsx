import { Fade } from '@material-ui/core';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { Waves } from 'app/Components/Waves/Waves';
import { Colors } from 'app/Theme';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { inline } from '../../utils/StylesUtils';
import styles from './HomeScreenStyles';
import { useHistory } from "react-router-dom";
import { mainStoreContext } from 'app/Store/MainStore';
import Typist from 'react-typist';

interface IProps {
    // Props type definition
    number: number;
}

interface IState {
    // State type definition
    titleAnimationTrigger: boolean
    shouldShowMenu: boolean
}

export const HomeScreen: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        titleAnimationTrigger: false,
        shouldShowMenu: false
    };

    const mainStore = React.useContext(mainStoreContext)
    const [titleAnimationTrigger, setTitleAnimationTrigger] = React.useState(initialState.titleAnimationTrigger)
    const [shouldShowMenu, setShouldShowMenu] = React.useState(initialState.shouldShowMenu)
    const history = useHistory();


    // ComponentDidMount
    useEffect(() => {
        setTimeout(() => {
            setTitleAnimationTrigger(true)
        }, 200)
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onBeginClicked = () => {
        setShouldShowMenu(true)
    }

    const navigateToEducationalGuide = () => {
        history.push('/educational-guide')
    }

    const onEONAwareClicked = () => {
        mainStore.userProfile = 'EONAware'
        navigateToEducationalGuide()
    }
    const onONAwareClicked = () => {
        mainStore.userProfile = 'ONAware'
        navigateToEducationalGuide()
    }
    const onNewbieClicked = () => {
        mainStore.userProfile = 'Newbie'
        navigateToEducationalGuide()
    }


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
                <Fade style={shouldShowMenu && styles.positionAbsolute} timeout={{ enter: 1000, exit: 300 }} in={titleAnimationTrigger && shouldShowMenu === false}>
                    <RainbowBorderButton onClick={onBeginClicked} style={inline([styles.marginTop])}>
                        <SpectrumText style={styles.startText} weight={'bold'}>
                            INICIAR
                            </SpectrumText>
                    </RainbowBorderButton>
                </Fade>

                <Fade style={shouldShowMenu === false && styles.positionAbsolute} timeout={1000} in={shouldShowMenu === true}>
                    <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.questionsContainer, styles.padding])}>
                        {shouldShowMenu && <SpectrumText weight={'bold'} color={Colors.colors.primary} size={'h2'}>
                            <Typist cursor={{
                                hideWhenDone: true,
                                hideWhenDoneDelay: 300
                            }} avgTypingDelay={30}>
                                Sobre o seu conhecimento em Redes Ópticas Elásticas:
                            </Typist>
                        </SpectrumText>}
                        <RainbowBorderButton onClick={onEONAwareClicked} style={inline([styles.marginTop])}>
                            <SpectrumText style={styles.startText} weight={'bold'}>
                                A) POSSUO CONHECIMENTO
                            </SpectrumText>
                        </RainbowBorderButton>
                        <RainbowBorderButton onClick={onNewbieClicked} style={inline([styles.xSmallMarginTop])}>
                            <SpectrumText style={styles.startText} weight={'bold'}>
                                B) NÃO POSSUO CONHECIMENTO
                            </SpectrumText>
                        </RainbowBorderButton>
                        <RainbowBorderButton onClick={onONAwareClicked} style={inline([styles.xSmallMarginTop])}>
                            <SpectrumText style={styles.startText} weight={'bold'}>
                                C) POSSUO CONHECIMENTO SOMENTE EM REDES ÓPTICAS
                            </SpectrumText>
                        </RainbowBorderButton>
                    </div>
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
