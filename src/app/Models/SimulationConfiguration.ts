import TopologyConfiguration from '../Containers/TopologyConfiguration/TopologyConfiguration';
import { FlowsConfiguration } from './FlowsConfiguration';
import { SimulationGeneralConfiguration } from "./SimulationGeneralConfiguration";

export class SimulationConfiguration {
    private generalConfigurations: SimulationGeneralConfiguration
    private classesConfiguration: FlowsConfiguration
    private topologyConfiguration: TopologyConfiguration
}