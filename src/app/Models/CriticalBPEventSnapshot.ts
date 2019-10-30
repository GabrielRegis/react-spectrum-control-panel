import { CriticalEventSnapshot } from './CriticalEventSnapshot';
export class CriticalBPEventSnapshot extends CriticalEventSnapshot {
    gainRate?: number
    blockedAmount?: number
    absoluteDifference?: number
}
