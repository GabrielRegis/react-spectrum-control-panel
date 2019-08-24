import { observable } from "mobx";
import { persist } from "mobx-persist";
import { CallDegradationConfiguration } from "./CallDegradationConfiguration";

export class CallClassConfiguration {
    @observable @persist id?: string
    @observable @persist name?: string
    @observable @persist minBandwidth?: number;
    @observable @persist maxBandwidth?: number;
    @observable @persist minHoldingTime?: number;
    @observable @persist maxHoldingTime?: number;
    @observable @persist frequency?: number
    @observable @persist('object') degradationConfiguration?: CallDegradationConfiguration

    constructor() {
        this.name = null
        this.minBandwidth = 2
        this.maxBandwidth = 10
        this.minHoldingTime = 1
        this.maxHoldingTime = 2
        this.frequency = 0.5
        this.degradationConfiguration = new CallDegradationConfiguration()
    }
}