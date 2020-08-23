import { TopologyNode } from '../Models/TopologyNode';
import { v4 } from "uuid";
import { TopologyLink } from 'app/Models/TopologyLink';

export const getLinkDistance = (nodeA: TopologyNode, nodeB: TopologyNode) => {
    const x = nodeA.posX - nodeB.posX;
    const y = nodeA.posY - nodeB.posY;

    const distance = Math.sqrt(x * x + y * y);
    return distance * 3.125 * 1.609
}

export const generateDefaultTopology = (gridSize: number) => {
    const nodes = []
    const links = []

    const posX = gridSize * 5
    const posY = gridSize * 7

    const nodeA: TopologyNode = {
        id: v4().toString(),
        shouldConvert: true,
        name: 'Nodo A',
        posX: posX,
        posY: posY,
    }

    const nodeB: TopologyNode = {
        id: v4().toString(),
        shouldConvert: true,
        name: 'Nodo B',
        posX: posX * 4,
        posY: posY,
    }

    const nodeC: TopologyNode = {
        id: v4().toString(),
        shouldConvert: true,
        name: 'Nodo C',
        posX: posX * 2.5,
        posY: posY - gridSize * 4,
    }

    const nodeD: TopologyNode = {
        id: v4().toString(),
        shouldConvert: true,
        name: 'Nodo D',
        posX: posX * 2.5,
        posY: posY + gridSize * 4,
    }
    nodes.push(nodeA);
    nodes.push(nodeB);
    nodes.push(nodeC);
    nodes.push(nodeD);

    const linkA: TopologyLink = {
        id: v4().toString(),
        name: 'Link A',
        nodeA: nodeA,
        nodeB: nodeB,
        slotSize: 12.5,
        slots: 100
    }

    const linkB: TopologyLink = {
        id: v4().toString(),
        name: 'Link B',
        nodeA: nodeA,
        nodeB: nodeC,
        slotSize: 12.5,
        slots: 100
    }

    const linkC: TopologyLink = {
        id: v4().toString(),
        name: 'Link B',
        nodeA: nodeA,
        nodeB: nodeD,
        slotSize: 12.5,
        slots: 100
    }

    const linkD: TopologyLink = {
        id: v4().toString(),
        name: 'Link D',
        nodeA: nodeB,
        nodeB: nodeC,
        slotSize: 12.5,
        slots: 100
    }

    const linkE: TopologyLink = {
        id: v4().toString(),
        name: 'Link E',
        nodeA: nodeB,
        nodeB: nodeD,
        slotSize: 12.5,
        slots: 100
    }

    links.push(linkA)
    links.push(linkB)
    links.push(linkC)
    links.push(linkD)
    links.push(linkE)

    return {
        nodes: nodes,
        links: links
    }
}

export const TopologyUtils = {
    getLinkDistance: getLinkDistance,
    generateDefaultTopology: generateDefaultTopology
}

export default TopologyUtils