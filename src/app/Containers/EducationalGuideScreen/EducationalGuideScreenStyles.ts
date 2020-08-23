
import { ApplicationStyles } from 'app/Theme';
export default {
    ...ApplicationStyles,
    infoContainer: {
        ...ApplicationStyles.shadowView,
        borderRadius: 10,
        background: 'white',
        width: '50%'
    } as React.CSSProperties,
};
