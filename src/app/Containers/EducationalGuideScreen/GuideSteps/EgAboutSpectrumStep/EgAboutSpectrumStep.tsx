import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './EgAboutSpectrumStepStyles';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { Fade } from '@material-ui/core';
import Typist from 'react-typist';
import { RainbowDiv } from 'app/Components/RainbowDiv/RainbowDiv';
import { SpectrumParagraphs } from 'app/Components/SpectrumParagraphs/SpectrumParagraphs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/Theme';
import { faPlay, faFolder } from '@fortawesome/free-solid-svg-icons';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';
import { Link } from 'react-router-dom';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const EgAboutSpectrumStep: FunctionComponent<IProps> = (props) => {
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

                        Sobre o Spectrum
                        </Typist>
                </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "O Spectrum é um simulador de Redes Ópticas Elásticas (EON) cujo objetivo é promover simulações de forma abstraída, com configurações práticas e visuais. É também uma ferramenta para ensino do comportamento de uma Rede EON. Para que uma simulação seja configurada corretamente, deverá passar por três etapas principais:",
                ]} />

                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    Etapa A - Configurações Gerais
                </SpectrumText>
                <SpectrumParagraphs paragraphs={[
                    "Nesta etapa, será definido o número de sementes utilizadas para cada carga da Simulação. Será definida também o intervalo de cargas, bem como seu incremento por ciclo.",
                ]} />
                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    Etapa B - Configurações das Classes (QoS)
                </SpectrumText>
                <SpectrumParagraphs paragraphs={[
                    "Aqui serão estabelecidas as configurações relacionadas a Qualidade de Serviço (QoS) da simulação, nas quais poderá adicionar, remover e editar classes de conexões. As classes possuem atributos como banda média requisitada, duração média, cor de identificação, nome e frequeência de aparição.",
                ]} />
                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    Etapa C - Editor de Topologia
                </SpectrumText>
                <SpectrumParagraphs paragraphs={[
                    "Nesta etapa, poderá desenhar uma topologia do zero, adicionando ou removendo nodos e enlaces. É possível também editar os atributos de cada enlance, bem como o número de slots e capacidade em Gh/z de cada slot.",
                ]} />
                <SpectrumText style={inline([styles.fullWidthContainer, styles.marginTop])} size={'h3'} weight={'semibold'}>
                    Licensa
                    </SpectrumText>
                <RainbowDiv style={styles.rainbowDivider} />
                <SpectrumParagraphs paragraphs={[
                    "O Spectrum foi desenvolvido inteiramente como produto de um Trabalho de Conclusão de Curso (TCC), para receber o título de Bacharel em Sistemas de Informação pela UTFPR - Curitiba, por Gabriel Biesek Regis.",
                    "O Spectrum possui um código totalmente aberto, e poderá ser alterado livremente, desde que as alterações sejam aprovadas através de requisições de alteração (Pull Requests) no repositório do projeto.",
                    "Em caso de citação acadêmica, utilizar (SPECTRUM, Regis - 2020)."
                ]} />
                <div style={inline([styles.centeredRow, styles.xSmallMarginTop])}>

                    <SpectrumText >
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
                    </SpectrumText>
                    <RainbowBorderButton style={styles.xSmallMarginLeft}>
                        <SpectrumText weight={'bold'}>
                            <FontAwesomeIcon style={inline([styles.xSmallMarginRight])} color={Colors.colors.primary} icon={faFolder} />
                            Servidor
                        </SpectrumText>
                    </RainbowBorderButton>
                    <Link to="https://github.com/GabrielRegis/spring-spectrum-service">
                        <RainbowBorderButton>
                            <SpectrumText weight={'bold'}>
                                <FontAwesomeIcon style={inline([styles.xSmallMarginRight])} color={Colors.colors.primary} icon={faFolder} />
                                Cliente
                        </SpectrumText>
                        </RainbowBorderButton>
                    </Link>
                </div>


            </div>
        </Fade>
    );
};

