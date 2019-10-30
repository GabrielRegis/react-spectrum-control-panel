import { ApiResponse } from 'apisauce';
import { SimulationConfiguration } from "app/Models/SimulationConfiguration";
import { SimulationSummary } from "app/Models/SimulationSummary";
import apiInstance from "./Api";

export const runSimulation = (simulationConfiguration: SimulationConfiguration): Promise<ApiResponse<SimulationSummary>> => {
    return apiInstance.post('simulation/', simulationConfiguration)
}

export const simulationApi = {
    runSimulation: runSimulation
}
export default simulationApi