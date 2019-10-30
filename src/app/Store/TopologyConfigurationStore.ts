import { NodeComponent } from 'app/Containers/TopologyConfiguration/NodeComponent';
import { TopologyNode } from 'app/Models/TopologyNode';
import { action, computed, IObservableArray, observable, ObservableMap } from 'mobx';
import { create, persist } from 'mobx-persist';
import { createContext } from 'react';
import { v4 } from "uuid";
import LinkComponent from '../Containers/TopologyConfiguration/LinkComponent';
import { TopologyLink } from '../Models/TopologyLink';

export class TopologyConfigurationStore {
    @observable public selectedNodes: IObservableArray<TopologyNode> = observable.array([]);
    @persist('object') public nodes: ObservableMap<string, TopologyNode> = observable.map(new Map());
    @persist('object') public links: ObservableMap<string, TopologyLink> = observable.map(new Map());
    @observable public isGridEnabled: boolean
    @observable public gridSize: number
    @observable public selectedLink?: TopologyLink
    @observable public selectedLinkComponent?: LinkComponent
    @observable public selectedNode?: TopologyNode
    @observable public selectedNodeComponent?: NodeComponent

    constructor() {
        this.selectedNodes = observable.array([]);
        this.nodes = observable.map(new Map());
        this.links = observable.map(new Map());
        this.isGridEnabled = true
        this.gridSize = 40
        this.selectedLink = null
    }

    @computed get areTopologyConfigurationsReady() {
        return this.nodes.size > 1 && this.links.size > 0
    }

    @action public deleteNode(node: TopologyNode) {
        this.links.forEach((link, id) => {
            if (link.nodeA.id === node.id || link.nodeB.id === node.id) {
                this.deleteLink(link)
            }
        })
        if (this.nodes.has(node.id)) {
            this.nodes.delete(node.id)
        }
    }

    @action public deleteLink(link: TopologyLink) {
        if (this.links.has(link.id)) {
            this.links.delete(link.id)
        }
    }

    @action public createLink() {
        const nodeA = this.selectedNodes[0]
        const nodeB = this.selectedNodes[1]
        if (nodeA === nodeB) {
            this.selectedNodes = observable.array([]);
            return
        }
        const id = v4()
        const link: TopologyLink = {
            id: id,
            name: id,
            nodeA: nodeA,
            nodeB: nodeB,
            distance: 100,
            slotSize: 12.5,
            slots: 100
        }
        this.links.set(link.id, link)
        this.selectedNodes = observable.array([nodeB]);
    }
    @action public cancelLink() {
        this.selectedNodes = observable.array([]);
    }

}

const persistStore = create({
    storage: localStorage
});


const topologyConfigurationStore = new TopologyConfigurationStore();
export const topologyConfigurationStoreContext = createContext(topologyConfigurationStore)
persistStore('topologyConfigurationStore', topologyConfigurationStore);
export default topologyConfigurationStore
