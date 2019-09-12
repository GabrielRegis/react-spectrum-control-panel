import { Modulation } from "app/Models/Modulation";
import { Colors } from 'app/Theme';

export const BPSK: Modulation = {
    name: 'BPSK',
    maxReach: 8000,
    color: Colors.colors.spectrumPurple
}
export const QPSK: Modulation = {
    name: 'QPSK',
    maxReach: 4000,
    color: Colors.colors.mustard
}
export const EightQAM: Modulation = {
    name: '8QAM',
    maxReach: 2000,
    color: Colors.colors.pink
}
export const SixteenQAM: Modulation = {
    name: '16QAM',
    maxReach: 1000,
    color: Colors.colors.facebookBlue
}
export const ThirtyTwoQAM: Modulation = {
    name: '32QAM',
    maxReach: 500,
    color: Colors.colors.facebookBlue
}
export const SixtyFourQAM: Modulation = {
    name: '250QAM',
    maxReach: 250,
    color: Colors.colors.facebookBlue
}
export const OneHundredAndTwentyEightQAM: Modulation = {
    name: '128QAM',
    maxReach: 125,
    color: Colors.colors.facebookBlue
}
export const TwoHundredAndFiftySixQAM: Modulation = {
    name: '256QAM',
    maxReach: 62,
    color: Colors.colors.facebookBlue
}

export const modulations = [BPSK, QPSK, EightQAM, SixteenQAM, ThirtyTwoQAM, SixtyFourQAM, OneHundredAndTwentyEightQAM, TwoHundredAndFiftySixQAM]


export const getModulationsAvailable = (distance: number) => {
    return modulations.filter((modulation) => {
        return distance <= modulation.maxReach
    })
}

export const getBestModulation = (distance: number) => {
    // const reversedModulations = modulations.reverse()
    // let selectedModulation = null

    // for (let i = 0; i < reversedModulations.length; i++) {
    //     if (distance <= reversedModulations[i].maxReach) {
    //         selectedModulation = reversedModulations[i]
    //         return selectedModulation
    //     }
    // }

    if (distance <= TwoHundredAndFiftySixQAM.maxReach) {
        return TwoHundredAndFiftySixQAM;
    } else {
        if (distance <= OneHundredAndTwentyEightQAM.maxReach) {
            return OneHundredAndTwentyEightQAM;
        } else {
            if (distance <= SixtyFourQAM.maxReach) {
                return SixtyFourQAM;
            } else {
                if (distance <= ThirtyTwoQAM.maxReach) {
                    return ThirtyTwoQAM;
                } else {
                    if (distance <= SixteenQAM.maxReach) {
                        return SixteenQAM;
                    } else {
                        if (distance <= EightQAM.maxReach) {
                            return EightQAM;
                        } else {
                            if (distance <= QPSK.maxReach) {
                                return QPSK;
                            } else {
                                return BPSK;
                            }

                        }
                    }
                }
            }
        }
    }
}



export const ModulationUtils = {
    getModulationsAvailable: getModulationsAvailable,
    getBestModulation: getBestModulation
}

export default ModulationUtils