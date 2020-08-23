import { faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Modal, Zoom } from '@material-ui/core';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { SpectrumText } from '../../Components/SpectrumText/SpectrumText';
import styles from './LinkConfigurationStyles';
import { NumberSelector } from '../../Components/NumberSelector/NumberSelector';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
    slots: number,
    slotSize: number,
}

export const LinkConfiguration: FunctionComponent<IProps> = observer((props) => {

    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    const initialState: IState = {
        slots: 0,
        slotSize: 0
    };

    const [slots, setSlots] = React.useState(initialState.slots)
    const [slotSize, setSlotSize] = React.useState(initialState.slotSize)

    useEffect(() => {
        if (topologyConfigurationStore.selectedLink) {
            setSlots(topologyConfigurationStore.selectedLink.slots)
            setSlotSize(topologyConfigurationStore.selectedLink.slotSize)
        } else {
            setSlots(0)
            setSlotSize(0)
        }
    }, [topologyConfigurationStore.selectedLink])

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onSlotsChanged = (text) => {
        setSlots(parseInt(text))
    }
    const onSlotSizeChanged = (number: number) => {
        setSlotSize(number)
    }

    const onClosePressed = () => {
        if (topologyConfigurationStore.selectedLinkComponent) {
            topologyConfigurationStore.selectedLinkComponent.deselectLink()
        }
    }

    const onApplyPressed = () => {
        if (topologyConfigurationStore.selectedLink) {
            topologyConfigurationStore.selectedLink.slots = slots
            topologyConfigurationStore.selectedLink.slotSize = slotSize
            topologyConfigurationStore.selectedLinkComponent.deselectLink()
        }
    }
    const onApplyToAllPressed = () => {
        if (topologyConfigurationStore.selectedLink) {
            topologyConfigurationStore.links.forEach((link) => {
                topologyConfigurationStore.links.get(link.id).slots = slots
                topologyConfigurationStore.links.get(link.id).slotSize = slotSize
            })
            topologyConfigurationStore.selectedLinkComponent.deselectLink()
        }
    }

    const onSlotsSuggestionPressed = (slots: number) => {
        setSlots(slots)
    }

    const onDeletePressed = () => {
        if (topologyConfigurationStore.selectedLink) {
            topologyConfigurationStore.deleteLink(topologyConfigurationStore.selectedLink)
            topologyConfigurationStore.selectedLink = null
            topologyConfigurationStore.selectedLinkComponent = null
        }
    }

    return (

        <Modal
            open={topologyConfigurationStore.selectedLink !== null}
            onClose={onClosePressed}
            closeAfterTransition
            style={inline([styles.centeredColumn])}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={topologyConfigurationStore.selectedLink !== null}>
                <div style={inline([styles.linkConfigurationContainer,])}>
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
                                Configurações de Enlace
                    </SpectrumText>
                            <div style={inline([styles.centeredRow])}>

                                <Button onClick={onDeletePressed}
                                    style={inline([styles.centeredRow, styles.trashButton])}>
                                    <FontAwesomeIcon color={Colors.colors.white} size={'lg'} icon={faTrash} />
                                </Button>
                            </div>

                        </div>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                    <SpectrumText size={'b17'} weight={'bold'}>
                                        Slots
                            </SpectrumText>
                                    <SpectrumTextInput
                                        type={'number'}
                                        style={inline([styles.xSmallMarginLeft])}
                                        inputStyle={inline([styles.slotSizeInput])}
                                        value={slots}
                                        min={1}
                                        onChange={onSlotsChanged} />
                                    <Button onClick={() => onSlotsSuggestionPressed(50)} style={inline([styles.xSmallMarginLeft, styles.slotsSuggestionButton])}>
                                        50
                            </Button>
                                    <Button onClick={() => onSlotsSuggestionPressed(100)} style={inline([styles.slotsSuggestionButton])}>
                                        100
                            </Button>
                                    <Button onClick={() => onSlotsSuggestionPressed(150)} style={inline([styles.slotsSuggestionButton])}>
                                        150
                            </Button>
                                    <Button onClick={() => onSlotsSuggestionPressed(200)} style={inline([styles.slotsSuggestionButton])}>
                                        200
                            </Button>
                                </div>
                                <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                    <SpectrumText size={'b17'} weight={'bold'}>
                                        Capacidade
                            </SpectrumText>
                                    <NumberSelector style={inline([styles.xSmallMarginLeft])} onNumberSelected={onSlotSizeChanged} numbers={[12.5, 25, 50, 75, 100]} selectedNumber={slotSize} />
                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                                        Ghz
                            </SpectrumText>

                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                        por slot.
                            </SpectrumText>
                                </div>

                            </Grid>
                            <Grid style={inline([styles.centeredRow, styles.rightAlignedRow, styles.smallMarginTop])} item xs={12}>
                                <RainbowBorderButton onClick={onApplyToAllPressed}>
                                    <SpectrumText style={inline([styles.primaryColorText])} size={'c13'} weight={'semibold'}>
                                        Aplicar à todos os enlaces
                                    </SpectrumText>
                                </RainbowBorderButton>
                                <RainbowBorderButton onClick={onApplyPressed}
                                    style={inline([styles.centeredColumn, styles.applyButon])}>
                                    <SpectrumText size={'c13'} weight={'semibold'}>
                                        Aplicar
                                    </SpectrumText>
                                </RainbowBorderButton>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Zoom>
        </Modal>
    );
});
