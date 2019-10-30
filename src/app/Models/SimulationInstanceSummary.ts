import { ClassSummary } from './ClassSummary';
import { SimulationInstanceSummaryStatistics } from "./SimulationInstanceSummaryStatistics";

export class SimulationInstanceSummary {
    id?: string
    load?: number
    cycleNum?: number
    statistics?: SimulationInstanceSummaryStatistics
    classSummaries?: ClassSummary[]
}