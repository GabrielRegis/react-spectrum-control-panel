import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './FlowFrequencyConfigurationStyles';
import { CallClassConfiguration } from 'app/Models/CallClassConfiguration';
import { SpectrumText } from '../SpectrumText/SpectrumText';
import { Slider } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
interface IProps {
    // Props type definition
    flowClass: CallClassConfiguration
}

interface IState {
    // State type definition
    localFrequency: number
}

export const FlowFrequencyConfiguration: FunctionComponent<IProps> = React.memo(observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)

    const initialState: IState = {
        localFrequency: 5
    };

    const [localFrequency, setLocalFrequency] = React.useState(initialState.localFrequency)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const onSliderChange = (event: React.ChangeEvent<{}>, value: number) => {
        const index = simulationConfigurationStore.classesConfiguration.flowClasses.indexOf(props.flowClass)
        if (index !== -1) {
            simulationConfigurationStore.classesConfiguration.flowClasses[index].localFrequency = value
            simulationConfigurationStore.updateClassesFrequency()
        }
    }

    return (
        <div style={inline([styles.centeredRow, styles.leftAlignedRow,])} >
            <SpectrumText style={styles.flex1} size={'b17'} weight={'semibold'}>
                {props.flowClass.name}
            </SpectrumText>
            <Slider value={props.flowClass.localFrequency} onChange={onSliderChange} min={5} max={100} step={5} marks style={inline([styles.xSmallMarginLeft, styles.slider, {
                color: props.flowClass.color
            }, styles.flex4])} />
            <SpectrumText style={inline([styles.smallMarginLeft, {
                flex: 0.4
            }])} size={'b17'} weight={'semibold'}>
                {(props.flowClass.frequency * 100).toPrecision(2) + '%'}
            </SpectrumText>
        </div>
    );
}));
