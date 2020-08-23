import simulationConfigurationStore, { SimulationConfigurationStore } from './SimulationConfigurationStore';
import simulationSummaryStore, { SimulationSummaryStore } from './SimulationSummaryStore';
import topologyConfigurationStore, { TopologyConfigurationStore } from "./TopologyConfigurationStore";
import topologySnapshotStore, { TopologySnapshotStore } from './TopologySnapshotStore';
import mainStore, { MainStore } from './MainStore';

export class RootStore {
    public topologyConfigurationStore: TopologyConfigurationStore
    public simulationConfigurationStore: SimulationConfigurationStore
    public simulationSummaryStore: SimulationSummaryStore
    public topologySnapshotStore: TopologySnapshotStore
    public mainStore: MainStore
    constructor() {
        this.topologyConfigurationStore = topologyConfigurationStore
        this.simulationConfigurationStore = simulationConfigurationStore
        this.simulationSummaryStore = simulationSummaryStore
        this.topologySnapshotStore = topologySnapshotStore
        this.mainStore = mainStore
    }
}

export const rootStore = new RootStore()

export default rootStore;
