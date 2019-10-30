import { CriticalFragmentationEventSnapshot } from 'app/Models/CriticalFragmentationEventSnapshot';
import { CriticalBPEventSnapshot } from './CriticalBPEventSnapshot';
import { SimulationInstanceSummary } from './SimulationInstanceSummary';
import { SimulationInstanceSummaryStatistics } from './SimulationInstanceSummaryStatistics';
export class SimulationSummary {
    id?: string
    cycleNum?: number
    load?: number
    criticalBPEventSnapshots?: CriticalBPEventSnapshot[]
    criticalFragmentationEventSnapshots?: CriticalFragmentationEventSnapshot[]
    simulationInstanceSummaries?: SimulationInstanceSummary[]
    statistics?: SimulationInstanceSummaryStatistics
    startLoad?: number
    loadStep?: number
}