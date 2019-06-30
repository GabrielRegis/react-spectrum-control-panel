import { IObservableArray, observable } from "mobx";
import { Flow } from './Flow';

export class FlowsConfiguration {
    flows: IObservableArray<Flow>
    constructor() {
        this.flows = observable.array([])
    }
}