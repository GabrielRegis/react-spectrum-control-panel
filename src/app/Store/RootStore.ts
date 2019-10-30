import simulationConfigurationStore, { SimulationConfigurationStore } from './SimulationConfigurationStore';
import simulationSummaryStore, { SimulationSummaryStore } from './SimulationSummaryStore';
import topologyConfigurationStore, { TopologyConfigurationStore } from "./TopologyConfigurationStore";
import topologySnapshotStore, { TopologySnapshotStore } from './TopologySnapshotStore';

export class RootStore {
    public topologyConfigurationStore: TopologyConfigurationStore
    public simulationConfigurationStore: SimulationConfigurationStore
    public simulationSummaryStore: SimulationSummaryStore
    public topologySnapshotStore: TopologySnapshotStore
    constructor() {
        this.topologyConfigurationStore = topologyConfigurationStore
        this.simulationConfigurationStore = simulationConfigurationStore
        this.simulationSummaryStore = simulationSummaryStore
        this.topologySnapshotStore = topologySnapshotStore
    }
}

export const rootStore = new RootStore()

export default rootStore;
