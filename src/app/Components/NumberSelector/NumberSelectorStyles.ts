
import { ApplicationStyles } from 'app/Theme';
import { Colors } from 'app/Theme';
import { Fonts } from 'app/Theme';
export default {
    ...ApplicationStyles,
    slotsSuggestionButton: {
        backgroundColor: Colors.colors.lightGray,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        borderRadius: 20,
        width: 35,
        height: 35,
        padding: 0,
        minWidth: 0,
        fontFamily: Fonts.fontFamilies.primary,
        color: Colors.colors.primary,
        marginLeft: 5
    } as React.CSSProperties,
    selectedSlotsSuggestionButton: {
        backgroundColor: Colors.colors.healthPink,
        color: Colors.colors.white,
    } as React.CSSProperties,
};
