import { ListItem, Typography, Button, Fab, IconButton, Collapse } from '@material-ui/core';
import { css } from 'aphrodite';
import { inline } from 'app/utils/StylesUtils';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { CallClassConfiguration } from '../../Models/CallClassConfiguration';
import simulationConfigurationStore, { SimulationConfigurationStore } from '../../Store/SimulationConfigurationStore';
import styles from './FlowsConfigurationStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/Theme';
import { SpectrumText } from '../../Components/SpectrumText/SpectrumText';
import { ClassConfigurationModal } from '../../Components/ClassConfigurationModal/ClassConfigurationModal';
import { TwitterPicker, SketchPicker, GithubPicker } from 'react-color';
import { RainbowBorderButton } from 'app/Components/RainbowBorderButton/RainbowBorderButton';

interface IProps {
    // Props type definition
    flowClass: CallClassConfiguration
    provided: DraggableProvided
    snapshot: DraggableStateSnapshot
    simulationConfigurationStore?: SimulationConfigurationStore
}

interface IState {
    // State type definition
    isEditing: boolean
    isPickerVisible: boolean
}

@inject('simulationConfigurationStore')
@observer
export class CallClassConfigurationComponent extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            isPickerVisible: false
        }
    }

    public onFlowPressed = () => {
        this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass = this.props.flowClass
    }

    public onDeletePressed = () => {

        // Update available colors
        this.props.simulationConfigurationStore.availableColors.push(this.props.flowClass.color)

        this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass = this.props.flowClass

        const newClasses = this.props.simulationConfigurationStore.classesConfiguration.flowClasses.filter((classes) => {
            return classes.id !== this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass.id
        })
        this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass.id = null
        this.props.simulationConfigurationStore.classesConfiguration.flowClasses = newClasses

    }
    public onEditPressed = () => {
        this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass = this.props.flowClass

        this.setState({
            isEditing: true
        })
    }

    public onEditingModalClosed = () => {
        this.setState({
            isEditing: false
        })
        this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass = this.props.flowClass
    }

    public handlePickerChange = (color, event) => {
        const index = this.props.simulationConfigurationStore.classesConfiguration.flowClasses.indexOf(this.props.flowClass)
        if (index !== - 1) {
            const lastColor = this.props.simulationConfigurationStore.classesConfiguration.flowClasses[index].color
            this.props.simulationConfigurationStore.classesConfiguration.flowClasses[index].color = color.hex

            // Update available colors
            this.props.simulationConfigurationStore.availableColors.push(lastColor)
            this.props.simulationConfigurationStore.availableColors = this.props.simulationConfigurationStore.availableColors.filter((col) => {
                return col.toLocaleLowerCase() !== color.hex.toLocaleLowerCase()
            })
        }
        this.setState({
            isPickerVisible: false
        })
    }

    public render() {

        const isSelected = this.props.simulationConfigurationStore.classesConfiguration.selectedFlowClass === this.props.flowClass

        return (
            <ListItem
                ref={this.props.provided.innerRef}
                {...this.props.provided.draggableProps}
                {...this.props.provided.dragHandleProps}
                onClick={this.onFlowPressed}
                style={inline([styles.flex1,
                styles.shadowView,
                styles.flowContainer,
                styles.centeredRow,
                styles.spaceBetween,
                styles.xSmallMarginBottom,
                styles.fullWidthContainer,
                this.props.provided.draggableProps.style,
                this.props.snapshot.isDragging ? styles.draggingFlowContainer : {}
                ]
                )}
            >
                <ClassConfigurationModal flowClass={this.props.flowClass} isVisible={this.state.isEditing} onClose={this.onEditingModalClosed} />
                <div style={inline([styles.flex1, styles.centeredRow, styles.leftAlignedRow, styles.verticalPadding])}>
                    <Button style={inline([styles.pickerButton, {
                        background: this.props.flowClass.color
                    }])} onClick={() => {
                        this.setState({
                            isPickerVisible: !this.state.isPickerVisible
                        })
                    }} />

                    <SpectrumText
                        style={inline([styles.xSmallMarginLeft])}
                        color={Colors.colors.primary} size={'b15'} weight={'bold'}>
                        {this.props.flowClass.name}
                    </SpectrumText>

                </div>
                <div className={"classesHowTo"} style={inline([styles.centeredRow])}>

                    <IconButton onClick={this.onEditPressed} size="small">
                        <FontAwesomeIcon color={Colors.colors.darkHealthGreen} icon={faPen} />
                    </IconButton>
                    <IconButton style={inline([styles.xSmallMarginLeft, styles.zIndex3])} onClick={this.onDeletePressed} size="small">
                        <FontAwesomeIcon style={inline([styles.trashIcon])} icon={faTrash} />
                    </IconButton>
                </div>
                <Collapse in={this.state.isPickerVisible} style={inline([styles.positionAbsolute, { left: 10, top: 50, zIndex: 100 }])}>
                    <GithubPicker onChange={this.handlePickerChange} colors={simulationConfigurationStore.availableColors} />
                </Collapse>
            </ListItem>
        );
    }
};
