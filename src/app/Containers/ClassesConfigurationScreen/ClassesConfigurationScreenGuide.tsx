import * as React from 'react';
import { getGuideContainerStyle } from '../../utils/GuideUtils';
import { SpectrumGuideStep } from '../../Components/SpectrumGuideStep/SpectrumGuideStep';
import { LoadExample } from '../../Components/LoadExample/LoadExample';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { faSeedling, faTruckLoading, faPhone, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import styles from './ClassesConfigurationScreenGuideStyles'

export const steps = [
    {
        selector: ".callsGuide",
        content: () => (<SpectrumGuideStep
            icon={faPhone}
            title={'Chamadas'}
            content={[
                "O número de chamadas representa a quantidade de requisições simuladas na topologia, a cada instância de simulação. Isto é, para cada semente e suas respectivas cargas, serão realizadas o número de chamadas configurado neste campo. É importante lembrar que o número de chamadas é proporcional ao tempo de simulação."
            ]} />),
        style: getGuideContainerStyle()
    },
    {
        selector: ".classes",
        content: () => (<SpectrumGuideStep
            icon={faLayerGroup}
            title={'Classes'}
            content={[
                "As classes representam a configuração da Qualidade de Serviço (QoS) das chamadas simuladas. É possível configurar aqui, informações como a duração média e banda média requisitada de cada conexão. ",
                "É possível também habilitar a degradação de serviço no momento do estabelecimento, isto é, tornar a conexão flexível e adptável aos recursos disponíveis.",
                "Ao habilitar a degradação de serviço, suas conexões são menos suscetíveis ao bloqueio, uma vez em que podem ser estabelecidas com menor banda requisitada, ou até mesmo são tolerantes à espera."
            ]}
        />),

        style: getGuideContainerStyle()
    },
    {
        selector: ".classesHowTo",
        content: () => (<SpectrumGuideStep
            icon={faLayerGroup}
            title={'Classes - Modo de Utilização'}
            content={[
                'A) Para configurar uma classe, basta pressionar o ícone de edição, no canto direito de cada classe.',
                'B) Para deletar uma classe de forma rápida, basta pressionar o ícone de lixeira.',
                'C) Para configurar a prioridade entre classes, arrastá-la para a posição desejada. Quando mais ao topo a classe estiver, maior é a sua prioridade (Funcionalidade futura).',
            ]}
        />),

        style: getGuideContainerStyle()
    },
];
