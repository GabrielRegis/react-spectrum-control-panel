import { Flow } from 'app/Models/Flow';
import { action, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { createContext } from 'react';
import { FlowsConfiguration } from '../Models/FlowsConfiguration';
import { SimulationGeneralConfiguration } from '../Models/SimulationGeneralConfiguration';
import SpectrumStore from './SpectrumStore';
export class SimulationConfigurationStore extends SpectrumStore {
    @persist('object') @observable public simulationGeneralConfiguration: SimulationGeneralConfiguration;
    @persist('object') @observable public flowsConfiguration: FlowsConfiguration;

    constructor() {
        super();
        this.simulationGeneralConfiguration = new SimulationGeneralConfiguration();
        this.flowsConfiguration = new FlowsConfiguration()
    }

    @action public updateGeneralConfigurations = (newConfigurations: SimulationGeneralConfiguration) => {
        const updatedConfigs = {
            ...this.simulationGeneralConfiguration,
            ...newConfigurations
        }
        this.simulationGeneralConfiguration = updatedConfigs
    }

    @action public addFlowClass = (flow: Flow) => {
        this.flowsConfiguration.flows.push(flow)
    }

}

const persistStore = create({
    storage: localStorage
});

const simulationConfigurationStore = new SimulationConfigurationStore();
export const simulationConfigurationStoreContext = createContext(simulationConfigurationStore)
persistStore('simulationConfigurationStore', simulationConfigurationStore);
export default simulationConfigurationStore
