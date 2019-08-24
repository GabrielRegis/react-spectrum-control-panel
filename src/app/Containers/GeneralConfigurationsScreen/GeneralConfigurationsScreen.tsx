import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Fade, Grid, Typography } from '@material-ui/core';
import { GeneralConfigurations } from 'app/Models/GeneralConfigurations';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { SpectrumTextInput } from '../../Components/SpectrumTextInput/SpectrumTextInput';
import styles from './GeneralConfigurationsScreenStyles';

interface IProps {
    // Props type definition
}

interface IState {
    // Número de ciclos
    cycles?: number;
    // Carga mínima
    minLoad?: number;
    // Carga máxima
    maxLoad?: number;
    // Incremento de carga
    loadStep?: number;
    // Número de iterações à cada ciclo de simulação
    iterations?: number;
}

// Classe que representa a tela de configurações gerais.
// Parâmetros de configuração:
// Número de ciclos da simulação: Quantas sementes aleatórias serão utilizadas para gerar os ciclos se simulação.
// Carga mínima: Para cada ciclo de simulação, esta é a carga inicial, da primeira iteração da simulação.
// Carga máxima: Para cada ciclo de simulação, esta é a carga final, da última iteração da simulação.
// Incremento de carga: O incremento na carga, ocorrido a cada iteração.
// Iterações: Número de iterações calculado automaticamente.

export const GeneralConfigurationsScreen: FunctionComponent<IProps> = observer((props) => {

    // Utiliza a store das configurações da simulação
    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)

    const initialState: IState = {
        cycles: simulationConfigurationStore.generalConfiguration.simulationCycles,
        minLoad: simulationConfigurationStore.generalConfiguration.minLoad,
        maxLoad: simulationConfigurationStore.generalConfiguration.maxLoad,
        loadStep: simulationConfigurationStore.generalConfiguration.loadStep,
        iterations: simulationConfigurationStore.generalConfiguration.iterations
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])


    const [cycles, setCycles] = React.useState(initialState.cycles)
    const [minLoad, setMinLoad] = React.useState(initialState.minLoad)
    const [maxLoad, setMaxLoad] = React.useState(initialState.maxLoad)
    const [loadStep, setLoadStep] = React.useState(initialState.loadStep)
    const [iterations, setIterations] = React.useState(initialState.iterations)

    // Calcula as iterações de simulação, quando minLoad, maxLoad ou loadStep é alterado.
    // Atualiza, também, a store das configurações gerais
    useEffect(() => {
        const iterations = Math.floor((maxLoad - minLoad) / loadStep) + 1
        setIterations(iterations)

        const generalConfigurations: GeneralConfigurations = {
            simulationCycles: cycles,
            minLoad: minLoad,
            maxLoad: maxLoad,
            loadStep: loadStep,
            iterations: iterations,
        }
        simulationConfigurationStore.updateGeneralConfigurations(generalConfigurations)
    }, [minLoad, maxLoad, loadStep])

    const onCycleTextChanged = (text: string) => {
        setCycles(parseInt(text))
    }
    const onMinLoadTextChanged = (text: string) => {
        setMinLoad(parseInt(text))
    }
    const onMaxLoadTextChanged = (text: string) => {
        setMaxLoad(parseInt(text))
    }

    const onLoadStepTextChanged = (text: string) => {
        setLoadStep(parseInt(text))
    }

    return (
        <Fade timeout={{ enter: 600 }} in={true} mountOnEnter unmountOnExit>
            <div style={inline([styles.flex1, styles.topCenteredColumn])}>
                <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.paddingHorizontal, styles.xSmallMarginTop])}>
                    <Typography variant={'h4'} style={inline([styles.primaryText])}>
                        Configurações Gerais
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                    Ciclos
                                    </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    Realizar
                                    </Typography>
                                <SpectrumTextInput
                                    type={'number'}
                                    style={inline([styles.xSmallMarginLeft])}
                                    value={cycles}
                                    onChange={onCycleTextChanged} />
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                    Ciclos
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    para o cálculo das métricas
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={inline([styles.centeredRow, styles.leftAlignedRow])}>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                    Carga
                                    </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    Aumentar a carga de
                                    </Typography>
                                <SpectrumTextInput
                                    style={inline([styles.xSmallMarginLeft])}
                                    type={'number'}
                                    value={minLoad}
                                    max={maxLoad}
                                    onChange={onMinLoadTextChanged} />
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    até
                                    </Typography>
                                <SpectrumTextInput
                                    style={inline([styles.xSmallMarginLeft])}
                                    type={'number'}
                                    value={maxLoad}
                                    onChange={onMaxLoadTextChanged} />
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                    Erlangs
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    incrementando
                                    </Typography>
                                <SpectrumTextInput
                                    style={inline([styles.xSmallMarginLeft])}
                                    type={'number'}
                                    value={loadStep}
                                    onChange={onLoadStepTextChanged} />
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    à cada iteração, resultando em
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                    {iterations}
                                </Typography>
                                <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                    iterações à cada ciclo.
                                    </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <img style={inline([styles.listPlaceholder])} src={require('../../Assets/Icons/generalSettingsPlaceholder.svg')} alt="" />
                <Button
                    size={'large'}
                    style={inline([styles.centeredColumn, styles.xSmallPaddingHorizontal, styles.nextButton, styles.marginTop])}>
                    <Typography style={inline([styles.primaryText, styles.whiteText, styles.xSmallMarginRight])} variant={'button'}>
                        Avançar
                    </Typography>
                    <FontAwesomeIcon color={Colors.colors.white} size={'1x'} icon={faArrowRight} />
                </Button>
            </div>

        </Fade>
    );
});
