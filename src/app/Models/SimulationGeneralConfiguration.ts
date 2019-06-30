import { observable } from "mobx";

export class SimulationGeneralConfiguration {
    // Número de ciclos
    @observable cycles?: number;
    // Carga mínima
    @observable minLoad?: number;
    // Carga máxima
    @observable maxLoad?: number;
    // Incremento de carga
    @observable loadStep?: number;
    // Número de iterações à cada ciclo de simulação
    @observable iterations?: number;

    constructor() {
        this.cycles = 1
        this.minLoad = 50
        this.maxLoad = 150
        this.loadStep = 50
    }
}