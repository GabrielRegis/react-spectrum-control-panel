import { ApiResponse, ApisauceConfig, ApisauceInstance, create } from 'apisauce';
import { SimulationConfiguration } from 'app/Models/SimulationConfiguration';
import { SimulationSummary } from 'app/Models/SimulationSummary';


const apiInstance: ApisauceInstance = create({
    baseURL: 'http://localhost:8090/api/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 30000000
} as ApisauceConfig);

export const runSimulation = (simulationConfiguration: SimulationConfiguration): Promise<ApiResponse<SimulationSummary>> => {
    return apiInstance.post('simulation/', simulationConfiguration)
}

export default apiInstance