
import { ApplicationStyles, Colors } from 'app/Theme';
export default {
    ...ApplicationStyles,
    slider: {
        color: Colors.colors.primary
    } as React.CSSProperties,
    classContainer: {
        ...ApplicationStyles.shadowView,
        background: Colors.colors.silentWhite,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        borderRadius: 10

    } as React.CSSProperties
};
