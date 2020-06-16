import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './ClassConfigurationModalStyles';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { Grow, Container, Grid, Divider, Checkbox, Modal, Fade, Zoom, IconButton } from '@material-ui/core';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/Theme';
import { faTrash, faCross, faCrosshairs, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { CallDegradationConfiguration } from 'app/Models/CallDegradationConfiguration';
import { CallClassConfiguration } from '../../Models/CallClassConfiguration';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
interface IProps {
    // Props type definition
    isVisible: boolean
    flowClass: CallClassConfiguration
    onClose: () => void
}

interface IState {
    // State type definition
}

export const ClassConfigurationModal: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)

    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onRemoveClassPressed = () => {

        // Update available colors
        simulationConfigurationStore.availableColors.push(props.flowClass.color)

        const newClasses = simulationConfigurationStore.classesConfiguration.flowClasses.filter((classes) => {
            return classes.id !== simulationConfigurationStore.classesConfiguration.selectedFlowClass.id
        })
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.id = null
        simulationConfigurationStore.classesConfiguration.flowClasses = newClasses
    }

    const onClassNameTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.name = text
    }
    const onMinBandwidthTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.minBandwidth = parseInt(text)
    }
    const onMaxBandwidthTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth = parseInt(text)
    }
    const onMinHoldingTimeTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.minHoldingTime = parseInt(text)
    }
    const onMaxHoldingTimeTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime = parseInt(text)
    }
    const onBandDegradationTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.bandwidthDegradationRate = parseInt(text)
    }
    const onDelayToleranceTextChanged = (text: string) => {
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.delayToleranceRate = parseInt(text)
    }

    const onToggleDegradationClicked = (checked) => {
        const isDegradationTolerant = simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.isDegradationTolerant
        if (isDegradationTolerant) {
            simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration = new CallDegradationConfiguration()
            return
        }
        const degradationConfiguration: CallDegradationConfiguration = {
            isDegradationTolerant: true,
            bandwidthDegradationRate: 0,
            delayToleranceRate: 0
        }
        simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration = degradationConfiguration
    }

    return (
        <Modal
            open={props.isVisible}
            onClose={props.onClose}
            closeAfterTransition
            style={inline([styles.centeredColumn])}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={props.isVisible}>
                {simulationConfigurationStore.classesConfiguration.selectedFlowClass && <div style={inline([
                    styles.leftAlignedColumn,
                    styles.padding,
                    styles.modalContent,
                    styles.textWithoutSelection
                ])}>

                    <div style={inline([styles.centeredRow, styles.spaceBetween, styles.fullWidthContainer])}>
                        <SpectrumText size={'h2'} weight={'bold'}>
                            Configuração de Classe
                        </SpectrumText>
                        <div style={inline([styles.centeredRow])}>

                            <Button
                                onClick={onRemoveClassPressed}
                                style={inline([
                                    styles.deleteButton,
                                    styles.centeredColumn, styles.xSmallPaddingHorizontal])}>
                                <SpectrumText style={inline([styles.whiteText, styles.xSmallMarginRight])} size={'c13'} weight={'semibold'}>
                                    Deletar
                                </SpectrumText>
                                <FontAwesomeIcon color={Colors.colors.white} size={'1x'} icon={faTrash} />
                            </Button>
                            <IconButton style={inline([styles.smallMarginLeft])} onClick={props.onClose} size="small">
                                <FontAwesomeIcon color={Colors.colors.primary} icon={faTimesCircle} />
                            </IconButton>
                        </div>
                    </div>
                    <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.smallMarginTop])}>
                        <SpectrumText size={'b17'} weight={'semibold'}>
                            Nome da Classe
                                </SpectrumText>
                        <SpectrumTextInput
                            style={inline([styles.xSmallMarginLeft])}
                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.name}
                            onChange={onClassNameTextChanged}
                        />
                    </div>
                    <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                        <SpectrumText size={'b17'} weight={'semibold'}>
                            Banda requisitada
                        </SpectrumText>
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                            Requisitar entre
                        </SpectrumText>
                        <SpectrumTextInput
                            style={inline([styles.xSmallMarginLeft])}
                            type={'number'}
                            max={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth}
                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.minBandwidth}
                            onChange={onMinBandwidthTextChanged}
                        />
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                            e
                    </SpectrumText>
                        <SpectrumTextInput
                            style={inline([styles.xSmallMarginLeft])}
                            type={'number'}
                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxBandwidth}
                            onChange={onMaxBandwidthTextChanged}
                        />
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                            GB/s
                        </SpectrumText>
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                            de banda passante.
                    </SpectrumText>
                    </div>
                    <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                        <SpectrumText size={'b17'} weight={'semibold'}>
                            Duração
                            </SpectrumText>
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                            Durar entre
                            </SpectrumText>
                        <SpectrumTextInput
                            style={inline([styles.xSmallMarginLeft])}
                            type={'number'}
                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.minHoldingTime}
                            min={1}
                            max={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime}
                            onChange={onMinHoldingTimeTextChanged}
                        />
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                            e
                            </SpectrumText>
                        <SpectrumTextInput
                            style={inline([styles.xSmallMarginLeft])}
                            type={'number'}
                            min={1}
                            value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.maxHoldingTime}
                            onChange={onMaxHoldingTimeTextChanged}
                        />
                        <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                            Unidades de tempo.
                        </SpectrumText>
                    </div>
                    {/* <Divider style={inline([styles.xSmallMarginTop])} /> */}
                    {/* <SpectrumText style={inline([styles.xSmallMarginTop])} size={'b20'} weight={'semibold'}>
                        Degradação de Serviço no estabelecimento
                            <Checkbox
                            checked={simulationConfigurationStore.classesConfiguration.selectedFlowClass &&
                                simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration &&
                                simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.isDegradationTolerant === true}
                            onChange={onToggleDegradationClicked}
                            value="checkedA"
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                    </SpectrumText> */}
                    {/* {isDegradationTolerant && <Fade in={true}>
                            <div style={inline([styles.fullWidthContainer])}>
                                <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow])}>
                                    <SpectrumText size={'b17'} weight={'semibold'}>
                                        Degradação de Banda
                            </SpectrumText>
                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                        Permitir que a conexão seja estabelecida com até
                            </SpectrumText>
                                    <SpectrumTextInput
                                        type={'number'}
                                        style={inline([styles.xSmallMarginLeft])}
                                        value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.bandwidthDegradationRate}
                                        max={99}
                                        onChange={onBandDegradationTextChanged} />
                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'} >
                                        %
                            </SpectrumText>
                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                        de banda à menos.
                            </SpectrumText>
                                </div>
                                <div style={inline([styles.fullWidthContainer, styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                                    <SpectrumText size={'b17'} weight={'semibold'}>
                                        Atraso
                            </SpectrumText>
                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'}>
                                        Permitir que a conexão atrase até
                            </SpectrumText>
                                    <SpectrumTextInput
                                        type={'number'}
                                        style={inline([styles.xSmallMarginLeft])}
                                        value={simulationConfigurationStore.classesConfiguration.selectedFlowClass.degradationConfiguration.delayToleranceRate}
                                        max={99}
                                        onChange={onDelayToleranceTextChanged} />
                                    <SpectrumText style={inline([styles.xSmallMarginLeft])} size={'b15'} weight={'semibold'}>
                                        Instantes
                            </SpectrumText>
                                </div>
                            </div>
                        </Fade>} */}
                    <KeyboardEventHandler handleKeys={['d', 'del']}
                        onKeyEvent={onRemoveClassPressed}
                    />
                </div>}

            </Zoom>

        </Modal>
    );
});
