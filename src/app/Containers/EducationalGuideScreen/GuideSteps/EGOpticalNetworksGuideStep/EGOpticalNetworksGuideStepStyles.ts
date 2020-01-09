
import { ApplicationStyles } from 'app/Theme';
export default {
    ...ApplicationStyles,
    infoContainer: {
        ...ApplicationStyles.shadowView,
        borderRadius: 10,
        background: 'white',
        width: '50%'
    } as React.CSSProperties,
    headerText: {
        fontSize: 40
    } as React.CSSProperties,
    rainbowDivider: {
        height: 4,
        width: '100%',
        marginTop: 10
    } as React.CSSProperties,
    muxDemuxImg: {
        width: '70%',
        objectFit: 'contain',
        marginTop: 10
    } as React.CSSProperties
};
