import { TopologyNode } from '../Models/TopologyNode';
export const getLinkDistance = (nodeA: TopologyNode, nodeB: TopologyNode) => {
    const x = nodeA.posX - nodeB.posX;
    const y = nodeA.posY - nodeB.posY;

    const distance = Math.sqrt(x * x + y * y);
    return distance * 3.125 * 1.609
}

export const TopologyUtils = {
    getLinkDistance: getLinkDistance
}

export default TopologyUtils