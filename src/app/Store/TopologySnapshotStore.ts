import SnapshotLinkComponent from 'app/Components/TopologyStatistics/SnapshotLinkComponent';
import { SnapshotNodeComponent } from 'app/Components/TopologyStatistics/SnapshotNodeComponent';
import { TopologyNode } from 'app/Models/TopologyNode';
import { observable, ObservableMap } from 'mobx';
import { create } from 'mobx-persist';
import { createContext } from 'react';
import { TopologyLink } from '../Models/TopologyLink';

export class TopologySnapshotStore {
    public nodes: ObservableMap<string, TopologyNode> = observable.map(new Map());
    public links: ObservableMap<string, TopologyLink> = observable.map(new Map());
    @observable public selectedLink?: TopologyLink
    @observable public selectedLinkComponent?: SnapshotLinkComponent
    @observable public selectedNode?: TopologyNode
    @observable public selectedNodeComponent?: SnapshotNodeComponent
    @observable public stageWidth?: number
    @observable public stageHeight?: number

    constructor() {
        this.nodes = observable.map(new Map());
        this.links = observable.map(new Map());
        this.selectedLink = null
    }
}

const persistStore = create({
    storage: localStorage
});


const topologySnapshotStore = new TopologySnapshotStore();
export const topologySnapshotStoreContext = createContext(topologySnapshotStore)
persistStore('topologySnapshotStore', topologySnapshotStore);
export default topologySnapshotStore
