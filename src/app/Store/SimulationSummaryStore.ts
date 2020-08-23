import { SimulationConfiguration } from 'app/Models/SimulationConfiguration';
import { SimulationSummary } from 'app/Models/SimulationSummary';
import simulationApi from 'app/Services/SimulationApi';
import { action, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { createContext } from 'react';
import SpectrumStore from './SpectrumStore';

export class SimulationSummaryStore extends SpectrumStore {
    @persist('object') @observable simulationSummary?: SimulationSummary
    constructor() {
        super();
        this.simulationSummary = null
    }
    @action
    public async runSimulation(simulationConfiguration: SimulationConfiguration) {
        this.isLoading = true
        const response = await simulationApi.runSimulation(simulationConfiguration)
        this.isLoading = false
        if (response.ok) {
            this.simulationSummary = response.data
            console.log(response.data)
        }
        return response
    }
}

const persistStore = create({
    storage: localStorage
});

const simulationSummaryStore = new SimulationSummaryStore();
export const simulationSummaryStoreContext = createContext(simulationSummaryStore)
persistStore('simulationSummaryStore', simulationSummaryStore);
export default simulationSummaryStore
