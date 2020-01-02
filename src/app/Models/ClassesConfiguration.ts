import { observable } from "mobx";
import { persist } from "mobx-persist";
import { CallClassConfiguration } from "./CallClassConfiguration";

export class ClassesConfiguration {
    @observable @persist callsNumber: number
    @observable @persist('list') flowClasses: CallClassConfiguration[]
    @persist('object') @observable public selectedFlowClass: CallClassConfiguration = {};

    constructor() {
        this.callsNumber = 10
        this.flowClasses = []
        this.selectedFlowClass = {
            id: null,
            name: ''
        }
    }


}