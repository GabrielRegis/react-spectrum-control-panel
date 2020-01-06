import { observable } from "mobx";
import { persist } from "mobx-persist";

export class GeneralConfigurations {
    // Número de ciclos
    @observable @persist simulationCycles?: number;
    // Carga mínima
    @observable @persist minLoad?: number;
    // Carga máxima
    @observable @persist maxLoad?: number;
    // Incremento de carga
    @observable @persist loadStep?: number;
    // Número de iterações à cada ciclo de simulação
    @observable @persist iterations?: number;

    constructor() {
        this.simulationCycles = 2
        this.minLoad = 50
        this.maxLoad = 150
        this.loadStep = 50
    }
}