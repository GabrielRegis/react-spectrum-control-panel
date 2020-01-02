import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './FlowsFrequencyConfigurationStyles';
import CircularSlider from 'react-circular-slider-svg';
import { observer } from 'mobx-react-lite';
import { simulationConfigurationStoreContext } from 'app/Store/SimulationConfigurationStore';
import { FlowFrequencyConfiguration } from '../FlowFrequencyConfiguration/FlowFrequencyConfiguration';
import { SpectrumText } from '../SpectrumText/SpectrumText';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const FlowsFrequencyConfiguration: FunctionComponent<IProps> = observer((props) => {

    const simulationConfigurationStore = React.useContext(simulationConfigurationStoreContext)

    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.leftAlignedColumn, styles.flexStretch, styles.configurationContainer, styles.marginLeft, styles.smallPadding])} >
            <SpectrumText style={styles.marginBottom} weight={'bold'} size={'b20'}>
                Frequência das Classes
           </SpectrumText>
            {simulationConfigurationStore.classesConfiguration.flowClasses.map((flowClass) => {
                return <FlowFrequencyConfiguration flowClass={flowClass} />
            })}
        </div>
    );
});
