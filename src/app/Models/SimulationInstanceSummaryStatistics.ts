export class SimulationInstanceSummaryStatistics {
    totalAllocatedAmount?: number
    totalBlockedAmount?: number
    totalSuccessAmount?: number
    totalDelayedAmount?: number
    totalDroppedAmount?: number
    totalCallsAmount?: number
    totalBandwidthAmount?: number
    totalBlockedBandwidthAmount?: number

    totalAllocatedAmountMean?: number
    totalBlockedAmountMean?: number
    totalSuccessAmountMean?: number
    totalDelayedAmountMean?: number
    totalDroppedAmountMean?: number
    totalCallsAmountMean?: number
    totalBandwidthAmountMean?: number
    totalBlockedBandwidthAmountMean?: number
    blockProbabilityMean?: number
    blockedBandWidthProbabilityMean?: number

    totalAllocatedAmountConfidenceInterval?: number
    totalBlockedAmountConfidenceInterval?: number
    totalSuccessAmountConfidenceInterval?: number
    totalDelayedAmountConfidenceInterval?: number
    totalDroppedAmountConfidenceInterval?: number
    totalCallsAmountConfidenceInterval?: number
    blockProbabilityConfidenceInterval?: number
    totalBlockedBandwidthConfidenceInterval?: number
    totalBandwidthConfidenceInterval?: number

    allocatedAmountPerCycle?: number[]
    blockedAmountPerCycle?: number[]
    successAmountPerCycle?: number[]
    delayedAmountPerCycle?: number[]
    droppedAmountPerCycle?: number[]
    totalAmountPerCycle?: number[]
    blockProbabilityPerCycle?: number[]
    totalBandwidthAmountPerCycle?: number[]
    totalBlockedBandwidthAmountPerCycle?: number[]
    bandwidthBlockProbabilityPerCycle?: number[]

}