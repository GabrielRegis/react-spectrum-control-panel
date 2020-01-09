import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './EducationalGuideScreenStyles';
import { SpectrumScreen } from 'app/Components/SpectrumScreen/SpectrumScreen';
import { Waves } from 'app/Components/Waves/Waves';
import { Fade, Collapse } from '@material-ui/core';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { EGOpticalNetworksGuideStep } from './GuideSteps/EGOpticalNetworksGuideStep/EGOpticalNetworksGuideStep';
import { EgElasticOpticalNetworksGuideStep } from './GuideSteps/EgElasticOpticalNetworksGuideStep/EgElasticOpticalNetworksGuideStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/Theme';
import { faArrowRight, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { EgAboutSpectrumStep } from './GuideSteps/EgAboutSpectrumStep/EgAboutSpectrumStep';
import { mainStoreContext } from 'app/Store/MainStore';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
    selectedStepIndex?: number
    isTransitioningGuideStep: boolean
    guideSteps: React.ReactNode[]
}

export const EducationalGuideScreen: FunctionComponent<IProps> = observer((props) => {
    const initialState: IState = {
        selectedStepIndex: null,
        isTransitioningGuideStep: false,
        guideSteps: [<EGOpticalNetworksGuideStep />, <EgElasticOpticalNetworksGuideStep />, <EgAboutSpectrumStep />]
    };

    const mainStore = React.useContext(mainStoreContext)
    const [guideSteps, setGuideSteps] = React.useState(initialState.guideSteps)
    const [selectedStepIndex, setSelectedStepIndex] = React.useState(initialState.selectedStepIndex)
    const [isTransitioningGuideStep, setIsTransitioningGuideStep] = React.useState(initialState.isTransitioningGuideStep)

    const history = useHistory();


    // ComponentDidMount
    useEffect(() => {
        switch (mainStore.userProfile) {
            case 'EONAware':
                setGuideSteps([<EgAboutSpectrumStep />])
                break;
            case 'ONAware':
                setGuideSteps([<EgElasticOpticalNetworksGuideStep />, <EgAboutSpectrumStep />])
                break;
        }
        setSelectedStepIndex(0)


        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onPreviousPageClicked = () => {
        if (selectedStepIndex > 0) {
            setIsTransitioningGuideStep(true)
            setSelectedStepIndex(selectedStepIndex - 1)
            setTimeout(() => {
                setIsTransitioningGuideStep(false)
            }, 400)
        }
    }

    const onNextPageClicked = () => {
        if (selectedStepIndex < guideSteps.length - 1) {
            setIsTransitioningGuideStep(true)
            setSelectedStepIndex(selectedStepIndex + 1)
            setTimeout(() => {
                setIsTransitioningGuideStep(false)
            }, 400)
        } else {
            onBeginSimulatorClicked()
        }
    }

    const onBeginSimulatorClicked = () => {
        history.push('/general-configurations')
    }

    return (
        <div>
            <Waves style={inline([styles.positionAbsolute, styles.fullContainer, styles.zIndex2, { position: 'fixed' }])} />

            <SpectrumScreen style={inline([styles.fullContainer, styles.topCenteredColumn, styles.positionRelative, styles.zIndex3])} shouldHideNavbar={true}>
                <Fade timeout={{ enter: 200, exit: 0 }} in={isTransitioningGuideStep === false}>
                    <div style={inline([styles.flexStretch, styles.bigPadding, styles.fullWidthContainer, styles.centeredColumn, styles.zIndex3])}>
                        <div style={inline([styles.bigPadding, styles.infoContainer, styles.topCenteredColumn])}>
                            {

                                isTransitioningGuideStep === false && guideSteps[selectedStepIndex]
                            }
                            <div style={inline([styles.centeredRow, styles.rightAlignedRow, styles.spaceBetween, styles.fullWidthContainer, styles.bigMarginTop])}>
                                <RainbowBorderButton onClick={onPreviousPageClicked} disabled={selectedStepIndex === 0 || isTransitioningGuideStep}>
                                    <FontAwesomeIcon style={styles.xSmallMarginRight} color={Colors.colors.primary} icon={faArrowLeft} />
                                    <SpectrumText weight={'bold'}>
                                        Página Anterior
                                    </SpectrumText>
                                </RainbowBorderButton>
                                {selectedStepIndex !== guideSteps.length - 1 && <div style={inline([styles.centeredRow])}>
                                    <RainbowBorderButton disabled={true} dontDisableClick={true} onClick={onBeginSimulatorClicked} >
                                        <SpectrumText weight={'bold'}>
                                            Pular Guia Conceitual e Iniciar Simulador
                                        </SpectrumText>
                                        <FontAwesomeIcon style={styles.xSmallMarginLeft} color={Colors.colors.primary} icon={faPlay} />
                                    </RainbowBorderButton>
                                </div>}
                                <RainbowBorderButton onClick={onNextPageClicked} >
                                    <SpectrumText weight={'bold'}>
                                        {selectedStepIndex === guideSteps.length - 1 ? "Iniciar Simulador" : "Próxima Página"}
                                    </SpectrumText>
                                    <FontAwesomeIcon style={styles.xSmallMarginLeft} color={Colors.colors.primary} icon={faArrowRight} />
                                </RainbowBorderButton>
                            </div>
                        </div>
                    </div>
                </Fade>
            </SpectrumScreen >
            <KeyboardEventHandler handleKeys={['right', 'left']}
                onKeyEvent={(key, e) => {
                    switch (key) {
                        case 'right':
                            onNextPageClicked()
                            break
                        case 'left':
                            onPreviousPageClicked()
                            break
                    }
                }}
            />
        </div>
    );
});
