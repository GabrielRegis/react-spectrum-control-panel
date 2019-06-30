import { Grid, Typography } from '@material-ui/core';
import { SimulationGeneralConfiguration } from 'app/Models/SimulationGeneralConfiguration';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { SpectrumTextInput } from '../../Components/SpectrumTextInput/SpectrumTextInput';
import styles from './SimulationConfigurationStyles';

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

export const SimulationConfiguration: FunctionComponent<IProps> = observer((props) => {
    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)

    const initialState: IState = {
        cycles: simulationConfigurationStore.simulationGeneralConfiguration.cycles,
        minLoad: simulationConfigurationStore.simulationGeneralConfiguration.minLoad,
        maxLoad: simulationConfigurationStore.simulationGeneralConfiguration.maxLoad,
        loadStep: simulationConfigurationStore.simulationGeneralConfiguration.loadStep,
        iterations: simulationConfigurationStore.simulationGeneralConfiguration.iterations
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
        const iterations = ((maxLoad - minLoad) / loadStep) + 1
        setIterations(iterations)

        const generalConfigurations: SimulationGeneralConfiguration = {
            cycles: cycles,
            minLoad: minLoad,
            maxLoad: maxLoad,
            loadStep: loadStep,
            iterations: iterations,
        }
        simulationConfigurationStore.updateGeneralConfigurations(generalConfigurations)
    }, [minLoad, maxLoad, loadStep])

    const onCycleTextChanged = (text: string) => {
        if (text && text !== '') {
            setCycles(parseInt(text))
        } else {
            setCycles(0)
        }
    }
    const onMinLoadTextChanged = (text: string) => {
        if (text && text !== '') {
            setMinLoad(parseInt(text))
        } else {
            setMinLoad(0)
        }
    }
    const onMaxLoadTextChanged = (text: string) => {
        if (text && text !== '') {
            setMaxLoad(parseInt(text))
        } else {
            setMaxLoad(0)
        }
    }

    const onLoadStepTextChanged = (text: string) => {
        if (text && text !== '') {
            setLoadStep(parseInt(text))
        } else {
            setLoadStep(0)
        }
    }

    return (
        <div style={inline([styles.flex1, styles.topCenteredColumn, styles.leftAlignedColumn, styles.padding, styles.configurationContainer])}>
            <Typography variant="h5" style={inline([styles.primaryText])}>
                Configurações Gerais
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                Ciclos
                            </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                Realizar
                            </Typography>
                            <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={cycles} onChange={onCycleTextChanged} />
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'subtitle1'}>
                                Ciclos
                            </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                para o cálculo das métricas
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                Carga
                            </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                Aumentar a carga de
                            </Typography>
                            <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={minLoad} onChange={onMinLoadTextChanged} />
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                até
                            </Typography>
                            <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={maxLoad} onChange={onMaxLoadTextChanged} />
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                Erlangs
                            </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                incrementando
                            </Typography>
                            <SpectrumTextInput style={inline([styles.xSmallMarginLeft])} value={loadStep} onChange={onLoadStepTextChanged} />
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
            </Typography>
        </div>
    );
});
