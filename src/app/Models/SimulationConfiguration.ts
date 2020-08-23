
import { ClassesConfiguration } from './ClassesConfiguration';
import { GeneralConfigurations } from './GeneralConfigurations';
import { TopologyConfiguration } from './TopologyConfiguration';

export class SimulationConfiguration {
    generalConfigurations: GeneralConfigurations
    classesConfiguration: ClassesConfiguration
    topologyConfiguration: TopologyConfiguration
    constructor() {
        this.generalConfigurations = new GeneralConfigurations()
        this.classesConfiguration = new ClassesConfiguration()
        this.topologyConfiguration = new TopologyConfiguration()
    }
}