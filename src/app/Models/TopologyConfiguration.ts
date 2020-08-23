import { TopologyLink } from "./TopologyLink";
import { TopologyNode } from "./TopologyNode";

export class TopologyConfiguration {
    id?: string
    name?: string
    nodes?: TopologyNode[]
    links?: TopologyLink[]
}