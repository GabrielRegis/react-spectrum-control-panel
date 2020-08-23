import { faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid } from '@material-ui/core';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { SpectrumText } from '../../Components/SpectrumText/SpectrumText';
import styles from './NodeConfigurationStyles';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
    shouldConvert: boolean,
}

export const NodeConfiguration: FunctionComponent<IProps> = observer((props) => {

    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    const initialState: IState = {
        shouldConvert: true,
    };

    const [shouldConvert, setShouldConvert] = React.useState(initialState.shouldConvert)

    useEffect(() => {
        if (topologyConfigurationStore.selectedNode) {
            setShouldConvert(topologyConfigurationStore.selectedNode.shouldConvert)
        } else {
            setShouldConvert(true)
        }
    }, [topologyConfigurationStore.selectedNode])

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onClosePressed = () => {
        if (topologyConfigurationStore.selectedNodeComponent) {
            topologyConfigurationStore.selectedNodeComponent.deselectNode()
        }
    }

    const onApplyPressed = () => {
        if (topologyConfigurationStore.selectedNode) {
            topologyConfigurationStore.selectedNode.shouldConvert = shouldConvert
            topologyConfigurationStore.selectedNodeComponent.deselectNode()
        }
    }
    const onApplyToAllPressed = () => {
        if (topologyConfigurationStore.selectedNode) {
            topologyConfigurationStore.nodes.forEach((node) => {
                topologyConfigurationStore.nodes.get(node.id).shouldConvert = shouldConvert
            })
            topologyConfigurationStore.selectedNodeComponent.deselectNode()
        }
    }

    const onDeletePressed = () => {
        if (topologyConfigurationStore.selectedNode) {
            topologyConfigurationStore.deleteNode(topologyConfigurationStore.selectedNode)
            topologyConfigurationStore.selectedNode = null
            topologyConfigurationStore.selectedNodeComponent = null
        }
    }

    const onShouldConvertChanged = (shouldConvert: boolean) => {
        setShouldConvert(shouldConvert)
    }

    return (

        <div style={inline([styles.nodeConfigurationContainer, topologyConfigurationStore.selectedNode ? { right: 0 } : {}])}>

            <KeyboardEventHandler handleKeys={['D', 'S', 'A', 'F']}
                onKeyEvent={(key, e) => {
                    switch (key) {
                        case 'F':
                            onClosePressed()
                            break
                        case 'S':
                            onApplyPressed()
                            break
                        case 'A':
                            onApplyToAllPressed()
                            break
                        case 'D':
                            onDeletePressed()
                            break
                    }
                }}
            />

            <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.padding])}>
                <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.fullWidthContainer, styles.spaceBetween])}>
                    <SpectrumText size={'h3'} weight={'bold'}>
                        Configurações de Nodo
                    </SpectrumText>
                    <div style={inline([styles.centeredRow])}>
                        <Button onClick={onDeletePressed}
                            style={inline([styles.centeredRow, styles.trashButton])}>
                            <FontAwesomeIcon color={Colors.colors.white} icon={faTrash} />
                            <p style={inline([styles.primaryText, styles.whiteText, styles.shortcutText])}>
                                {'[D]'}
                            </p>
                        </Button>
                        <Button onClick={onClosePressed}
                            style={inline([styles.centeredRow, styles.closeButton])}>
                            <FontAwesomeIcon color={Colors.colors.primary} icon={faTimesCircle} />
                            <p style={inline([styles.primaryText, styles.primaryColorText, styles.shortcutText])}>
                                {'[F]'}
                            </p>
                        </Button>
                    </div>

                </div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                            <SpectrumText size={'b17'} weight={'bold'}>
                                Realizar conversão de sinal
                            </SpectrumText>
                            <Button onClick={() => onShouldConvertChanged(false)} style={inline([styles.xSmallMarginLeft, shouldConvert === false ? styles.shouldConvertAnswerButtonChecked : styles.shouldConvertAnswerButton])}>
                                Não
                            </Button>
                            <Button onClick={() => onShouldConvertChanged(true)} style={inline([shouldConvert ? styles.shouldConvertAnswerButtonChecked : styles.shouldConvertAnswerButton])}>
                                Sim
                            </Button>
                        </div>
                    </Grid>
                    <Grid style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])} item xs={12}>
                        <Button onClick={onApplyToAllPressed} size={'large'}
                            style={inline([styles.centeredColumn, styles.applyToAllButon])}>
                            <SpectrumText style={inline([styles.primaryColorText])} size={'c13'} weight={'semibold'}>
                                Aplicar à todos os nodos [A]
                            </SpectrumText>
                        </Button>
                        <Button onClick={onApplyPressed} size={'large'}
                            style={inline([styles.centeredColumn, styles.xSmallMarginLeft, styles.applyButon])}>
                            <SpectrumText style={inline([styles.whiteText])} size={'c13'} weight={'semibold'}>
                                Aplicar [S]
                            </SpectrumText>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
});
