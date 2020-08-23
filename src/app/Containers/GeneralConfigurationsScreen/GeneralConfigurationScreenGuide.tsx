import * as React from 'react';
import { getGuideContainerStyle } from '../../utils/GuideUtils';
import { SpectrumGuideStep } from '../../Components/SpectrumGuideStep/SpectrumGuideStep';
import { LoadExample } from '../../Components/LoadExample/LoadExample';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { faSeedling, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/Theme';

export const steps = [
  {
    selector: ".seedsGuide",
    content: () => (<SpectrumGuideStep
      icon={faSeedling}
      title={'Sementes'}
      content={[
        "As sementes representam um número randômico que é utilizado para controlar as distribuições matemáticas que geram a instância de uma simulação. Quanto maior o número de sementes utilizadas, mais simulações serão realizadas. Sendo assim, o número de sementes está diretamente relacionada ao tempo de simulação e o nível de confiança dos resultados."
      ]} />),
    style: getGuideContainerStyle()
  },
  {
    selector: ".loadGuide",
    content:

      () => (<SpectrumGuideStep
        icon={faTruckLoading}
        title={'Carga'}
        content={[
          "A carga controla o fluxo de conexões em um determinado espaço e período de tempo. Quanto maior for a carga, mais conexões compartilharão o espectro físico, resultando em recursos mais escassos. Uma alta carga simula situações do mundo real, onde milhares de conexões são abertas em um pequeno período de tempo."
        ]}
        renderExtraComponent={() => <div>
          <LoadExample />
          <SpectrumText color={Colors.colors.primary} size={'c13'}>
            {'Deslize a barra para simular a alteração de carga e o comportamento das conexões em um quadro de tempo.'}
          </SpectrumText>
        </div>}
      />),
    style: getGuideContainerStyle()
  },
];
