import { TopologyNode } from './TopologyNode';
export class TopologyLink {
    id?: string
    name?: string
    nodeA?: TopologyNode
    nodeB?: TopologyNode
    distance?: number
    slots?: number
    slotSize?: number

    constructor() {
        this.distance = 100
        this.slots = 10
        this.slotSize = 12.5
    }
}