import { observable } from 'mobx';

export default class SpectrumStore {
    @observable public isLoading: boolean;
    constructor() {
        this.isLoading = false;
    }
}
