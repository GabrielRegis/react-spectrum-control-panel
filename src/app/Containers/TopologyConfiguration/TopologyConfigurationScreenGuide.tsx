import { faBook, faNetworkWired, faICursor, faArrowUp, faMousePointer, faCircle, faLink, faGripLines, faGripHorizontal, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { SpectrumGuideStep } from '../../Components/SpectrumGuideStep/SpectrumGuideStep';
import { getGuideContainerStyle } from '../../utils/GuideUtils';
import ReactPlayer from 'react-player'
import { inline } from 'app/utils/StylesUtils';
import styles from './TopologyConfigurationScreenGuideStyles'

export const steps = [
    {
        selector: ".videoTutorial",
        content: () => (<SpectrumGuideStep
            icon={faNetworkWired}
            title={'Editor de Topologia'}
            // renderExtraComponent={() =>
            //     <iframe allowFullScreen={true}
            //         frameBorder={0}
            //         id="ytplayer" width="330" height="360"
            //         src="http://www.youtube.com/embed/yhfxpOY4E8Q?autoplay=1&origin=http://example.com"
            //     />
            // }
            content={[
                "As Redes de Computador são representadas por Topologias/Grafos. Aqui será configurada a Topologia da simulação, nas quais serão definidos nodos e enlaces, bem como suas propriedades físicas."
            ]}
        />
        ),
        style: getGuideContainerStyle()
    },
    {
        selector: ".cursorMode",
        content: () => (<SpectrumGuideStep
            icon={faMousePointer}
            title={'Modo Cursor'}
            content={[
                "Para mover, selecionar ou editar um nodo ou enlace, utilize o Modo Cursor e pressione em um dos elementos da topologia já definidos."
            ]}
        />
        ),
        style: getGuideContainerStyle()
    },
    {
        selector: ".nodeMode",
        content: () => (<SpectrumGuideStep
            icon={faCircle}
            title={'Modo Nodo'}
            content={[
                "Para adicionar um novo nodo, utilize o Modo Nodo e pressione em qualquer lugar da área de desenho abaixo."
            ]}
            renderExtraComponent={() => <div style={inline([styles.centeredRow])}>
                <img src={require('app/Assets/Gifs/nodes.gif')} alt="" />
            </div>}
        />
        ),
        style: getGuideContainerStyle()
    },
    {
        selector: ".linkMode",
        content: () => (<SpectrumGuideStep
            icon={faGripLines}
            title={'Modo Enlace'}
            content={[
                "Para adicionar um enlace nodo, utilize o Modo Nodo e pressione em qualquer par de nodos já definidos na área de desenho abaixo."
            ]}
            renderExtraComponent={() => <div style={inline([styles.centeredRow])}>
                <img src={require('app/Assets/Gifs/links.gif')} alt="" />
            </div>}
        />
        ),
        style: getGuideContainerStyle()
    },
    {
        selector: ".gridTutorial",
        content: () => (<SpectrumGuideStep
            icon={faRulerHorizontal}
            title={'Sistema Grid'}
            content={[
                "É possível habilitar e desabilitar o sistema de grid para o posicionamento auxiliado de nodos.",
                "Utilize a barra deslizante para aumentar ou diminuir o espaçamento automático ao posicionar nodos."
            ]}
        />
        ),
        style: getGuideContainerStyle()
    },

    {
        selector: ".cursorMode",
        content: () => (<SpectrumGuideStep
            icon={faMousePointer}
            title={'Deletar Nodo'}
            content={[
                "Para deletar um nodo, selecione o Modo Cursor e comece a arrastar o nodo escolhido. Ao arrastar, pressione a tecla Z ou X para deletá-lo."
            ]}
            renderExtraComponent={() => <div style={inline([styles.centeredRow])}>
                <img src={require('app/Assets/Gifs/deleteNode.gif')} alt="" />
            </div>}
        />
        ),
        style: getGuideContainerStyle()
    },

    {
        selector: ".cursorMode",
        content: () => (<SpectrumGuideStep
            icon={faMousePointer}
            title={'Editar um Enlace'}
            content={[
                "Para editar ou deletar um enlace, selecione o Modo Cursor e selecione um dos enlaces desejados.",
                "Ao editar o enlace, é possível editar o número de slots e a capacidade em Ghz de cada um.",
                "É importante lembrar que em um cenário real, quanto maior o número de slots e maior sua capacidade individual, mais recursos financeiros a Rede demandará."
            ]}
            renderExtraComponent={() => <div style={inline([styles.centeredRow, styles.fullWidthContainer])}>
                <img style={inline([styles.fullWidthContainer])} src={require('app/Assets/Gifs/editLink.gif')} alt="" />
            </div>}
        />
        ),
        style: getGuideContainerStyle()
    },
];
