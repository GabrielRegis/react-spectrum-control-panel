import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './EGOpticalNetworksGuideStepStyles';
import { SpectrumScreen } from 'app/Components/SpectrumScreen/SpectrumScreen';
import { Waves } from 'app/Components/Waves/Waves';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import Typist from 'react-typist';
import { Fade } from '@material-ui/core';
import { SpectrumParagraphs } from 'app/Components/SpectrumParagraphs/SpectrumParagraphs';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const EGOpticalNetworksGuideStep: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (

        <Fade timeout={1000} in={true}>
            <div style={inline([styles.flexStretch, styles.fullWidthContainer, styles.centeredColumn, styles.zIndex3])}>
                <SpectrumText weight={'bold'} style={inline([styles.headerText, styles.fullWidthContainer])}>
                    <Typist cursor={{
                        show: false,
                        hideWhenDoneDelay: 300
                    }} avgTypingDelay={30}>

                        Redes Ópticas
                </Typist>
                </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    'As Redes Ópticas surgiram com o propósito de ampliar a disponibilidade de recursos e a velocidade de transmissão de dados. São consideradas soluções atraentes para suportar o rápido crescimento da Internet.',
                    'Nestas redes, utiliza-se o meio óptico para transmissão de dados, sendo assim altas taxas de transmissão de dados são atingidas através de fibras ópticas, as quais são constituídas majoritariamente de vidro.'
                ]} />

                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    MUX e DEMUX
                </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "As Redes Ópticas são capazes de transmitir diversas e distintas conexões em uma única fibra óptica, através da paralelização e compartilhamento do espectro luminoso entre uma ou mais requisições. Para que isso seja possível, é necessário multiplexar os sinais eletrônicos que serão enviados à uma Onda Portadora.",
                    "Por definição, os dispositivos Multiplexadores tem como objetivo converter dados de várias entradas em uma única saída, utilizando uma estratégia de modulação do sinal. O processo inverso é denominado Demultiplexação, realizado por dispositivos Demultiplexadores.",
                    "O formato de modulação e as estratégias de conversão, seja no domíniodo tempo (TDM - Time-Division Multiplexing), da frequência (FDM - Frequency-Division Multiplexing) ou através de diferentes comprimentos de onda (WDM - Wavelenght-Division Multiplexing) dos sinais podem variar dependendo da tecnologia utilizada."
                ]} />

                <img
                    style={inline([styles.muxDemuxImg, styles.marginTop])}
                    src={require('../../../../Assets/Images/MUX_DEMUX.png')}
                    alt="Demonstração de Mux e Demux"
                />

                <SpectrumText style={inline([styles.fullWidthContainer, styles.bigMarginTop])} size={'h3'} weight={'semibold'}>
                    Redes Ópticas WDM
                        </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "As Redes Ópticas por multiplexação de comprimento de onda (Wavelength Division Multiplexing- WDM) permitem a divisão do espectro luminoso presente uma única fibra em diferentes canais, cada um sendo transmitido através de um comprimento de onda que não se sobrepõem com os demais.",
                    "Ou seja, o critério utilizado para realizar o processo de multiplexação (Junção), e demultiplexação (Separação) é o comprimento de onda de cada sinal recebido. Os comprimentos de onda alocados são espaçados, comumente, em 50hz no domínio da frequência, possibilitando a transmissão de até 100 (Gbps - Gigabits por segundo) por canal.",
                    "Em uma rede WDM, uma conexão é provisionada sobre um caminho óptico, o qual é estabelecido através da resolução do problema de Roteamento e Alocação de Comprimento de Onda (RWA - Routing and Wavelength Assignment), o qual consiste em encontrar uma rota que satisfaça a conexão entre dois nodos da topologia, bem como a distribuição de comprimentos disponíveis de cada em enlace."
                ]} />
            </div>
        </Fade>
    );
};
