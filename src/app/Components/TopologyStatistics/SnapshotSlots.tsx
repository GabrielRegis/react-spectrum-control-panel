import { topologySnapshotStoreContext } from 'app/Store/TopologySnapshotStore';
import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { CriticalEventSnapshot } from '../../Models/CriticalEventSnapshot';
import { SlotSnapshot } from '../../Models/SlotSnapshot';
import styles from './SnapshotSlotsStyles';
interface IProps {
    // Props type definition
    criticalEvent?: CriticalEventSnapshot
}

interface IState {
    // State type definition

}

export const SnapshotSlots: FunctionComponent<IProps> = observer((props) => {
    const topologySnapshotStore = React.useContext(topologySnapshotStoreContext)
    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const renderSlot = (slot: SlotSnapshot) => {
        return <div key={slot.slotId} style={inline([styles.slot, styles.flex1, { backgroundColor: slot.occupied ? Colors.colors.primaryPink : Colors.colors.lightGray }])}>

        </div>
    }

    const selectedLink = topologySnapshotStore.selectedLink
    const criticalEvent = props.criticalEvent
    const topologySnapshot = criticalEvent && criticalEvent.topologySnapshot ? criticalEvent.topologySnapshot : null
    let slots = []

    if (selectedLink && topologySnapshot) {
        const selectedLinkSnapshot = topologySnapshot.linkSnapshots.filter((linkSnapshot) => {
            return linkSnapshot.linkId.toLowerCase().toString() === selectedLink.id.toLowerCase().toString()
        })
        if (selectedLinkSnapshot.length > 0) {
            slots = selectedLinkSnapshot[0].slotSnapshots
        }
    }

    return (
        <div style={inline([styles.flex1, styles.centeredRow, styles.spaceBetween])}>
            {slots.map((slot) => {
                return renderSlot(slot)
            })}
        </div>
    );
});
