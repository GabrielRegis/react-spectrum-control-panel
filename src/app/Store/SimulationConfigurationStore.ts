import { action, computed, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { createContext } from 'react';
import { CallClassConfiguration } from '../Models/CallClassConfiguration';
import { ClassesConfiguration } from '../Models/ClassesConfiguration';
import { GeneralConfigurations } from '../Models/GeneralConfigurations';
import SpectrumStore from './SpectrumStore';
import { Colors } from 'app/Theme';
export class SimulationConfigurationStore extends SpectrumStore {
    @persist('object') @observable public generalConfiguration: GeneralConfigurations;
    @persist('object') @observable public classesConfiguration: ClassesConfiguration;
    @observable public colors: string[] = ['#EE7752', '#E73C7E', '#23A6D5', '#23D5AB', '#7f7ce3']
    @persist('list') @observable public availableColors: string[];

    constructor() {
        super();
        this.generalConfiguration = new GeneralConfigurations();
        this.classesConfiguration = new ClassesConfiguration()
        this.availableColors = this.colors;
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
        const color = this.availableColors.pop()
        const updatedFlow = {
            ...flowClass,
            color: color
        }
        this.classesConfiguration.flowClasses.push(updatedFlow)
    }

    @action public updateClassesFrequency() {
        let totalLocalFrequencies = 0

        this.classesConfiguration.flowClasses.forEach((flowClass) => {
            totalLocalFrequencies += flowClass.localFrequency
        })
        this.classesConfiguration.flowClasses = this.classesConfiguration.flowClasses.map((flowClass) => {
            return {
                ...flowClass,
                frequency: flowClass.localFrequency / totalLocalFrequencies
            }
        })
    }

}

const persistStore = create({
    storage: localStorage
});

const simulationConfigurationStore = new SimulationConfigurationStore();
export const simulationConfigurationStoreContext = createContext(simulationConfigurationStore)
persistStore('simulationConfigurationStore', simulationConfigurationStore);
export default simulationConfigurationStore
