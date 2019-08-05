import { action, computed, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { createContext } from 'react';
import { CallClassConfiguration } from '../Models/CallClassConfiguration';
import { ClassesConfiguration } from '../Models/ClassesConfiguration';
import { GeneralConfigurations } from '../Models/GeneralConfigurations';
import SpectrumStore from './SpectrumStore';
export class SimulationConfigurationStore extends SpectrumStore {
    @persist('object') @observable public generalConfiguration: GeneralConfigurations;
    @persist('object') @observable public classesConfiguration: ClassesConfiguration;

    constructor() {
        super();
        this.generalConfiguration = new GeneralConfigurations();
        this.classesConfiguration = new ClassesConfiguration()
    }

    @computed get areGeneralConfigurationsReady() {
        return this.generalConfiguration.iterations
            && this.generalConfiguration.loadStep
            && this.generalConfiguration.maxLoad
            && this.generalConfiguration.simulationCycles
    }
    @computed get areClassesConfigurationsReady() {
        return this.classesConfiguration.flowClasses.length > 1 && this.classesConfiguration.callsNumber
    }

    @action public updateGeneralConfigurations = (newConfigurations: GeneralConfigurations) => {
        const updatedConfigs = {
            ...this.generalConfiguration,
            ...newConfigurations
        }
        this.generalConfiguration = updatedConfigs
    }

    @action public addFlowClass = (flowClass: CallClassConfiguration) => {
        this.classesConfiguration.flowClasses.push(flowClass)
    }

}

const persistStore = create({
    storage: localStorage
});

const simulationConfigurationStore = new SimulationConfigurationStore();
export const simulationConfigurationStoreContext = createContext(simulationConfigurationStore)
persistStore('simulationConfigurationStore', simulationConfigurationStore);
export default simulationConfigurationStore
