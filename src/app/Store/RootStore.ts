import simulationConfigurationStore, { SimulationConfigurationStore } from './SimulationConfigurationStore';
import topologyConfigurationStore, { TopologyConfigurationStore } from "./TopologyConfigurationStore";

export class RootStore {
    public topologyConfigurationStore: TopologyConfigurationStore
    public simulationConfigurationStore: SimulationConfigurationStore
    constructor() {
        this.topologyConfigurationStore = topologyConfigurationStore
        this.simulationConfigurationStore = simulationConfigurationStore
    }
}

export const rootStore = new RootStore()

export default rootStore;
