
import { ApplicationStyles, Colors } from 'app/Theme';
export default {
    ...ApplicationStyles,
    slot: {
        width: 20,
        height: 20,
        borderRadius: 5,
        background: Colors.colors.pink
    } as React.CSSProperties,
    freeSlot: {
        width: 20,
        height: 20,
        borderRadius: 5,
        background: Colors.colors.silentWhite
    } as React.CSSProperties,
    link: {
        padding: 5,
        backgroundColor: Colors.colors.darkGray,
        borderRadius: 5
    } as React.CSSProperties
};
