import { ClassSummary } from './ClassSummary';
import { SimulationInstanceSummaryStatistics } from "./SimulationInstanceSummaryStatistics";
import { CallClassGeneralStatistics } from './CallClassGeneralStatistics';

export class SimulationInstanceSummary {
    id?: string
    load?: number
    cycleNum?: number
    statistics?: SimulationInstanceSummaryStatistics
    classSummaries?: ClassSummary[]
    blockProbabilityPerClass?: CallClassGeneralStatistics[]
}