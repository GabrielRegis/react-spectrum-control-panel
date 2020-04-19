import * as React from 'react';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { faSeedling, faTruckLoading, faPoll, faUserCheck, faCheckCircle, faCross, faWindowClose, faSortNumericUp, faPhoneSlash, faBarcode, faStream, faExclamationTriangle, faBraille } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/Theme';
import { getGuideContainerStyle } from 'app/utils/GuideUtils';
import { SpectrumGuideStep } from 'app/Components/SpectrumGuideStep/SpectrumGuideStep';
import { simulationConfigurationStoreContext } from '../../../Store/SimulationConfigurationStore'
import { inline } from 'app/utils/StylesUtils';
import styles from './ResultsScreenStyles'
import { FragmentationExample } from './FragmentationExample/FragmentationExample';
export const steps = [
  {
    selector: ".summaryGeneral",
    content: () => (<SpectrumGuideStep
      icon={faPoll}
      title={'Resultados Gerais'}
      content={[
        "Aqui serão apresentados os resultados gerais da simulação."
      ]} />),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryGeneralNumberResults",
    content: () => (<SpectrumGuideStep
      icon={faSortNumericUp}
      title={'Resultados Numéricos'}
      content={[
        "Os resultados numéricos mostrados aqui são relacionados à todas as iterações, de todos os ciclos.",
      ]}
      renderExtraComponent={() => {

        const configStore = React.useContext(simulationConfigurationStoreContext)

        return <div>
          <div style={inline([styles.fullWidthContainer, styles.text13, styles.primaryText, styles.regularText])} color={'white'}>
            {"Por exemplo, para o resultado de Total de chamadas, se temos\u00a0"}
            <strong >
              {configStore.generalConfiguration.simulationCycles}
            </strong>
            {"\u00a0Sementes,\u00a0"}
            <strong >
              {configStore.generalConfiguration.iterations}
            </strong>
            {"\u00a0Iterações por ciclo e\u00a0"}
            <strong >
              {configStore.classesConfiguration.callsNumber}
            </strong>
            {"\u00a0Chamadas por iteração, teremos\u00a0"}
            <strong >
              {configStore.generalConfiguration.iterations * configStore.generalConfiguration.simulationCycles * configStore.classesConfiguration.callsNumber}
            </strong>
            {"\u00a0Chamadas no total."}
          </div>
        </div>
      }}
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryGeneralNumberResultsSuccessCalls",
    content: () => (<SpectrumGuideStep
      icon={faCheckCircle}
      title={'Chamadas Atendidas'}
      content={[
        "As chamadas atendidas representam todas as requesições que tiveram sucesso ao serem transmitidas, do início ao fim, no tempo esperado, utilizando a banda larga previamente definida.",
      ]}
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryGeneralNumberResultsBlockedCalls",
    content: () => (<SpectrumGuideStep
      icon={faPhoneSlash}
      title={'Chamadas Bloqueadas'}
      content={[
        "As chamadas bloqueadas representam todas as requisições de chamadas que foram rejeitadas por falta de recurso óptico para que pudessem ser alocadas corretamente.",
      ]}
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryGeneralChartResults",
    content: () => (<SpectrumGuideStep
      icon={faPoll}
      title={'Resultados Ilustrados'}
      content={
        [
          "Aqui são apresentados gráficos contendo resultados em relação à carga (Iteração) simulada.",
          "A Probabilidade de Bloqueio caracteriza a porcentagem de chamadas que foram bloqueadas durante à simulação.",
          "Neste contexto, a Probabilida de Bloqueio média é mostrada para cada carga simulada. O intervalo de confiança também é ilustrado (Linha vertical rosa entre elementos do gráfico). A média, para cada carga, é calculada através do resultado obtido à cada semente.",
          "A Banda Bloqueada representa o somatório de banda larga, em Gigabytes, de todas as conexões bloqueadas.",
          "Por último, é apresentado uma breve comparação entre a proporção de chamadas bloqueadas por classe de conexão.",
        ]
      }
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryLoadResults",
    content: () => (<SpectrumGuideStep
      icon={faPoll}
      title={'Resultados Por Carga'}
      content={
        [
          "De forma a possibilitar uma análise mais detalhada, é possível filtrar os resultados à cada carga. Todos os resultados presentes na seção de resultados gerais serão apresentados aqui também.",
          "A grande diferênça é os gráficos farão uma análise separada por ciclos (Sementes), ou seja, o Eixo X dos gráficos serão as sementes utilizadas na simulação.",
          "Para filtrar os resultados, basta selecionar uma das cargas simuladas."
        ]
      }
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryLoadResultsSelectLoad",
    content: () => (<SpectrumGuideStep
      icon={faPoll}
      title={'Resultados Por Carga'}
      content={
        [
          "Para filtrar os resultados, basta selecionar uma das cargas simuladas."
        ]
      }
    />
    ),
    style: getGuideContainerStyle()
  },

  {
    selector: ".summaryClassResults",
    content: () => (<SpectrumGuideStep
      icon={faStream}
      title={'Resultados Por Classe'}
      content={
        [
          "É possível ainda filtrar por Classe de Conexão, ao selecionar uma das classes configuradas."
        ]
      }
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryCriticalEvents",
    content: () => (<SpectrumGuideStep
      icon={faExclamationTriangle}
      title={'Eventos Críticos'}
      content={
        [
          "Por último, é possível visualizar o estado dos enlaces da topologia em eventos críticos.",
          "No SPECTRUM, eventos críticos são caracterizados por um aumento significativo na probabilidade de bloqueio ou fragmentação da topologia em uma das interações.",
          "A Visualização do estado dos enlaces em momentos de eventos críticos é crucial para entender se as chamadas estão sendo distribuídas de forma inteligente e eficaz entre os slots de cada enlace."
        ]
      }
    />
    ),
    style: getGuideContainerStyle()
  },
  {
    selector: ".summaryFragmentation",
    content: () => (<SpectrumGuideStep
      icon={faBraille}
      title={'Fragmentação'}
      content={
        [
          "Devido à partição do espectro luminoso através de pequenos sub-portadoras, a possibilidade de alocação de requisições de pequenas e grandes taxas de transmissão se tornou viável.",
          "Ao remover conexões com poucos slots subsequentes, seguidos de slots de outras conexões com maior número de sub-portadoras, o espectro luminoso pode ser fragmentado ao longo do tempo."
        ]
      }
      renderExtraComponent={() => <FragmentationExample />}
    />
    ),
    style: getGuideContainerStyle()
  },
];
