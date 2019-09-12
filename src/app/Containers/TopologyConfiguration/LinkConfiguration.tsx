import { faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography } from '@material-ui/core';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import styles from './LinkConfigurationStyles';

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
    const onSlotSizeChanged = (text) => {
        setSlotSize(parseFloat(text))
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

    const linkDistance = topologyConfigurationStore.selectedLink ? topologyConfigurationStore.selectedLink.distance : 0

    return (

        <div style={inline([styles.linkConfigurationContainer, topologyConfigurationStore.selectedLink ? { right: 0 } : {}])}>

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
                    <Typography variant={'h5'} style={inline([styles.primaryText])}>
                        Configurações de Enlace
                    </Typography>
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
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                Slots
                            </Typography>
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
                        </div>
                        <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                Capacidade
                            </Typography>
                            <SpectrumTextInput
                                type={'number'}
                                style={inline([styles.xSmallMarginLeft])}
                                inputStyle={inline([styles.slotSizeInput])}
                                value={slotSize}
                                min={1}
                                step={0.5}
                                onChange={onSlotSizeChanged} />
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                Ghz
                            </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                por slot.
                            </Typography>
                        </div>

                    </Grid>
                    <Grid style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])} item xs={12}>
                        <Button onClick={onApplyToAllPressed} size={'large'}
                            style={inline([styles.centeredColumn, styles.applyToAllButon])}>
                            <Typography style={inline([styles.primaryText, styles.primaryColorText])} variant={'button'}>
                                Aplicar à todos os enlaces [A]
                            </Typography>
                        </Button>
                        <Button onClick={onApplyPressed} size={'large'}
                            style={inline([styles.centeredColumn, styles.xSmallMarginLeft, styles.applyButon])}>
                            <Typography style={inline([styles.primaryText, styles.whiteText])} variant={'button'}>
                                Aplicar [S]
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
});
