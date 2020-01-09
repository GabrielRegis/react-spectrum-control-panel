import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './EgElasticOpticalNetworksGuideStepStyles';
import { Fade } from '@material-ui/core';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import Typist from 'react-typist';
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import { SpectrumParagraphs } from 'app/Components/SpectrumParagraphs/SpectrumParagraphs';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const EgElasticOpticalNetworksGuideStep: FunctionComponent<IProps> = (props) => {
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

                        Redes Ópticas Elásticas
                        </Typist>
                </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "Com o objetivo de flexibilizar a utilização do espectro luminoso e, consequentemente, reduzir o desperdícios de recursos, as Redes Ópticas Elásticas (EON - Elastic Optical Networks) permitem a reserva de faixa espectral de acordo com a banda passante demandada para atender a requisição de conexão, constituindo o conceito de grades (Grids) flexíveis através da tecnologia SLICE (Spectrum-Sliced Elastic Optical Path Network).",
                    "São caracterizadas também como redesópticas elásticas aquelas que utilizam sub-comprimentos de onda para a transmissão dasrequisições (FWDM - Flexible Optical Wavelength Division Multiplexing).",
                    "As EON utilizam a multiplexação e demultiplexação através de modulações de divisão da frequência (FDM), isso é, os sinais são interpretados através do particionamento do espectro luminoso analisado no domínio da frequência. Para que as grades flexíveis sejam funcionais é necessário garantir que as portadoras utilizem frequências que possam ser sobrepostas sem perda e interferência de sinais.",
                ]} />


                <img
                    style={inline([styles.fdmOfdmImg, styles.marginTop])}
                    src={require('../../../../Assets/Images/SPECTRUM_SAVE.png')}
                    alt="Demonstração de Mux e Demux"
                />


                <SpectrumParagraphs paragraphs={[
                    "Com o objetivo de flexibilizar a utilização do espectro luminoso e, consequentemente, reduzir o desperdícios de recursos, as Redes Ópticas Elásticas (EON - Elastic Optical Networks) permitem a reserva de faixa espectral de acordo com a banda passante demandada para atender a requisição de conexão, constituindo o conceito de grades (Grids) flexíveis através da tecnologia SLICE (Spectrum-Sliced Elastic Optical Path Network).",
                    "São caracterizadas também como redesópticas elásticas aquelas que utilizam sub-comprimentos de onda para a transmissão dasrequisições (FWDM - Flexible Optical Wavelength Division Multiplexing).",
                    "As EON utilizam a multiplexação e demultiplexação através de modulações de divisão da frequência (FDM), isso é, os sinais são interpretados através do particionamento do espectro luminoso analisado no domínio da frequência. Para que as grades flexíveis sejam funcionais é necessário garantir que as portadoras utilizem frequências que possam ser sobrepostas sem perda e interferência de sinais.",
                    "A utilização e alocação de frequências ortogonais entre si por sub-portadoras, também chamadas de slots, no domínio da frequência, também conhecida por (OFDM - Orthogonal Frequency Division Multiplexing), tornou-se uma abordagem comumente utilizada na implementação e estudos das EON. A OFDM consiste em utilizar frequências ortogonais entre si, para a transmissão de sinais parelelos, os quais não se interferem."
                ]} />

                <img
                    style={inline([styles.fdmOfdmImg, styles.marginTop])}
                    src={require('../../../../Assets/Images/FDM_OFDM.png')}
                    alt="Demonstração de Mux e Demux"
                />

                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    Formatos de Modulação
                    </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "Para que um sinal seja interpretado por uma sub-portadora, é necessário que um formato de modulação o seja atrelado. Os formatos de modulação definem como os sinais devem ser decompostos para que a extração de informações possa ocorrer. Isso é, uma sub-portadora estará operando na em uma frequência definida, e utilizará um formato de modulação definido para decodificar os sinais recebidos.",
                    "A decodificação pode ser realizada através da fase, amplitude ou frequência da onda recebida. Devido ao fato das EON multiplexarem e demultiplexarem o sinal através do domínio da frequência (FDM e OFDM), somente as decodificações por amplitude e fase são utilizadas.",
                    "O formato de modulação mais simples e comum em telecomunicações é o (BPSK - Binary Phase Shift Keying). A decodificação é realizada através do deslocamento de fase das ondas do sinal, e possibilita a transmissão de no máximo um bit por símbolo, isso é, a cada sinal recebido, só receberá um valor 0 ou 1",
                    "Outro formato de modulação comumente utilizado é o (QPSK Quadrature Phase Shift Keying), que desloca a fase dos sinais enviados e recebidos a cada 90 graus, iniciando no primeiro quadrante aos 45 graus, sendo assim, é capaz de transmitir dois bits por símbolo. Isso é, se uma sub-portadora for alocada utilizando o QPSK como formato de modulação, e outra sub-portadora utilizando o BPSK como formato de modulação, o QPSK possibilitaria o dobro de dados transmitidos que o BPSK em um mesmo intervalo de tempo, utilizando os mesmos recursos ópticos.",
                ]} />

                <img
                    style={inline([styles.fdmOfdmImg, styles.marginTop])}
                    src={require('../../../../Assets/Images/MODULATIONS.png')}
                    alt="Demonstração de Mux e Demux"
                />
                <SpectrumText weight={'semibold'} size={'b17'} >
                    {"Embora existam formatos de modulação que carreguem mais bits por símbolo, como o 8QAM e o 64QAM, ao se tratar de Redes Ópticas Elásticas não é possível utilizá-los em todas as situações. Devido a grande quantidade de bits carregados através de um único símbolo, e em consequência à grandes distâncias entre nodos e possíveis interferências de sinal, tais formatos de modulação podem resultar em dados corrompidos ou perda de informação."}
                </SpectrumText>

                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    O problema do Roteamento, Atribuição de espectro e Modulação (RSA e RMLSA)
                </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "Assim como as WDM, para que uma conexão seja estabelecida com sucesso em uma EON, é necessário garantir uma ou mais rotas que satisfaçam a requisição, conhecido também como o problema de roteamento.",
                    "Diferente das WDM, é necessário alocar um caminho óptico onde as sub-portadoras, ou slots, sejam adjacentes ou subsequentes entre si. Isso se deve ao fato da utilização da divisão ortogonal da frequência (OFDM), na qual as frequências vizinhas devem operar de forma ortogonal à frequência utilizada, de forma a garantir a sobreposição correta. O problema do roteamento em conjunto com a atribuição de slots adjacentes em um caminho óptico é chamado de O Problema do Roteamento e Atribuição de Espectro (RSA - Routing and Spectrum Assignment).",
                    "Ao utilizar diferentes modulações em diferentes caminhos ópticos, o problema da modulação também deve ser resolvido. É necessário escolher a melhor forma de modulação em que a conexão se encaixa, utilizando como parâmetro a distância entre nodos. Assim, é possível calcular a quantidade de sub-portadoras necessárias para estabelecer a conexão utilizando a modulação atribuída. O RSA em conjunto com o problema da modulação é chamado de O problema do Roteamento, Atribuição de espectro e Modulação (RMLSA - Routing, Modulation and Spectrum Assignment)."
                ]} />

            </div>
        </Fade>
    );
};
