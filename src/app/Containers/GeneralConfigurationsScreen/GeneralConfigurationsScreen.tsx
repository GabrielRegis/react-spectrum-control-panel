import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Fade, Grid, Typography } from "@material-ui/core";
import { SpectrumText } from "app/Components/SpectrumText/SpectrumText";
import { GeneralConfigurations } from "app/Models/GeneralConfigurations";
import { simulationConfigurationStoreContext } from "app/Store/SimulationConfigurationStore";
import { Colors } from "app/Theme";
import { inline } from "app/utils/StylesUtils";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import Tour from "reactour";
import { SpectrumTextInput } from "../../Components/SpectrumTextInput/SpectrumTextInput";
import { steps } from "./GeneralConfigurationScreenGuide";
import styles from "./GeneralConfigurationsScreenStyles";
import { SpectrumGuide } from '../../Components/SpectrumGuide/SpectrumGuide';
import { SpectrumScreen } from "app/Components/SpectrumScreen/SpectrumScreen";
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { NextStepButton } from "app/Components/NextStepButton/NextStepButton";


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

export const GeneralConfigurationsScreen: FunctionComponent<IProps> = observer(
  props => {
    // Utiliza a store das configurações da simulação
    const simulationConfigurationStore = React.useContext(
      simulationConfigurationStoreContext
    );

    const initialState: IState = {
      cycles:
        simulationConfigurationStore.generalConfiguration.simulationCycles,
      minLoad: simulationConfigurationStore.generalConfiguration.minLoad,
      maxLoad: simulationConfigurationStore.generalConfiguration.maxLoad,
      loadStep: simulationConfigurationStore.generalConfiguration.loadStep,
      iterations: simulationConfigurationStore.generalConfiguration.iterations
    };

    // ComponentDidMount
    useEffect(() => {
      return () => {
        //ComponentDidUnmount
      };
    }, []);

    const [cycles, setCycles] = React.useState(initialState.cycles);
    const [minLoad, setMinLoad] = React.useState(initialState.minLoad);
    const [maxLoad, setMaxLoad] = React.useState(initialState.maxLoad);
    const [loadStep, setLoadStep] = React.useState(initialState.loadStep);
    const [iterations, setIterations] = React.useState(initialState.iterations);

    // Calcula as iterações de simulação, quando minLoad, maxLoad ou loadStep é alterado.
    // Atualiza, também, a store das configurações gerais
    useEffect(() => {
      const iterations = Math.floor((maxLoad - minLoad) / loadStep) + 1;
      setIterations(iterations);

      const generalConfigurations: GeneralConfigurations = {
        simulationCycles: cycles,
        minLoad: minLoad,
        maxLoad: maxLoad,
        loadStep: loadStep,
        iterations: iterations
      };
      simulationConfigurationStore.updateGeneralConfigurations(
        generalConfigurations
      );
    }, [cycles, minLoad, maxLoad, loadStep]);

    const onCycleTextChanged = (text: string) => {
      setCycles(parseInt(text));
    };
    const onMinLoadTextChanged = (text: string) => {
      setMinLoad(parseInt(text));
    };
    const onMaxLoadTextChanged = (text: string) => {
      setMaxLoad(parseInt(text));
    };

    const onLoadStepTextChanged = (text: string) => {
      setLoadStep(parseInt(text));
    };

    const tourSteps = steps;

    return (
      <SpectrumScreen style={inline([styles.fullWidthContainer, styles.topCenteredColumn, styles.positionRelative, styles.flexStretch])}>
        <Fade style={inline([styles.flexStretch])} timeout={{ enter: 600 }} in={true} mountOnEnter unmountOnExit>
          <div style={inline([styles.flex1, styles.topCenteredColumn, styles.paddingHorizontal])}>
            <div
              style={inline([
                styles.topCenteredColumn,
                styles.leftAlignedColumn,
                styles.fullWidthContainer,
                styles.xSmallMarginTop
              ])}
            >
              <SpectrumText
                size={"h2"}
                weight={"bold"}
                color={Colors.colors.primary}
              >
                Configurações Gerais
            </SpectrumText>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={inline([
                      styles.centeredRow,
                      styles.leftAlignedRow,
                      styles.xSmallMarginTop
                    ])}
                  >
                    <SpectrumText
                      className={"seedsGuide"}
                      color={Colors.colors.primary}
                      size={"b17"}
                      weight={"bold"}
                    >
                      Sementes
                  </SpectrumText>
                    <SpectrumText
                      style={inline([styles.xSmallMarginLeft])}
                      color={Colors.colors.primary}
                      size={"b15"}
                    >
                      Simular com
                  </SpectrumText>
                    <SpectrumTextInput
                      type={"number"}
                      style={inline([styles.xSmallMarginLeft])}
                      max={6}
                      value={cycles}
                      onChange={onCycleTextChanged}
                    />
                    <SpectrumText
                      style={inline([styles.xSmallMarginLeft])}
                      color={Colors.colors.primary}
                      size={"b15"}
                      weight={"semibold"}
                    >
                      Sementes
                  </SpectrumText>
                    <SpectrumText color={Colors.colors.primary} size={"b15"}>
                      {"\u00a0" + "para o cálculo das métricas"}
                    </SpectrumText>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={inline([styles.centeredRow, styles.leftAlignedRow])}
                  >
                    <SpectrumText
                      className={"loadGuide"}
                      color={Colors.colors.primary}
                      size={"b17"}
                      weight={"bold"}
                    >
                      Carga
                  </SpectrumText>
                    <SpectrumText
                      style={inline([styles.xSmallMarginLeft])}
                      size={"b15"}
                    >
                      Aumentar a carga de
                  </SpectrumText>
                    <SpectrumTextInput
                      style={inline([styles.xSmallMarginLeft])}
                      type={"number"}
                      value={minLoad}
                      max={maxLoad}
                      onChange={onMinLoadTextChanged}
                    />
                    <SpectrumText
                      style={inline([styles.xSmallMarginLeft])}
                      size={"b15"}
                    >
                      até
                  </SpectrumText>
                    <SpectrumTextInput
                      style={inline([styles.xSmallMarginLeft])}
                      type={"number"}
                      value={maxLoad}
                      onChange={onMaxLoadTextChanged}
                    />
                    <SpectrumText
                      style={inline([styles.xSmallMarginLeft])}
                      size={"b15"}
                      weight={"semibold"}
                    >
                      Erlangs
                  </SpectrumText>
                    <SpectrumText size={"b15"}>
                      {"," + "\u00a0" + "incrementando"}
                    </SpectrumText>
                    <SpectrumTextInput
                      style={inline([styles.xSmallMarginLeft])}
                      type={"number"}
                      value={loadStep}
                      onChange={onLoadStepTextChanged}
                    />
                    <SpectrumText
                      style={inline([styles.xSmallMarginLeft])}
                      size={"b15"}
                    >
                      à cada iteração, resultando em
                  </SpectrumText>
                    <SpectrumText size={"b15"} weight={"semibold"}>
                      {"\u00a0" + iterations + "\u00a0"}
                    </SpectrumText>
                    <SpectrumText size={"b15"}>
                      iterações à cada ciclo.
                  </SpectrumText>
                  </div>
                </Grid>
              </Grid>
            </div>
            <img
              style={inline([styles.listPlaceholder])}
              src={require("../../Assets/Icons/generalSettingsPlaceholder.svg")}
              alt=""
            />
            <SpectrumGuide tourSteps={steps} shouldLaunchGuideOnRender={true} />
            <NextStepButton style={inline([styles.marginTop])} nextRoute={"/classes-configurations"} />
          </div>
        </Fade>
      </SpectrumScreen>
    );
  }
);
