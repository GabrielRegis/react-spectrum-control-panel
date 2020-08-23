import { observable } from "mobx";
import { persist } from "mobx-persist";

export class CallDegradationConfiguration {
    @observable @persist isDegradationTolerant?: boolean
    @observable @persist bandwidthDegradationRate?: number
    @observable @persist delayToleranceRate?: number
    @observable @persist failureSurvivorBandwidthDegradationRate?: number
    @observable @persist failureDisruptedBandwidthDegradationRate?: number
    @observable @persist failureDisruptedDelayToleranceRate?: number
    constructor() {
        this.isDegradationTolerant = false
    }
}