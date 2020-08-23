
import { ApplicationStyles } from 'app/Theme';
export default {
    ...ApplicationStyles,
    configurationContainer: {
        ...ApplicationStyles.shadowView,
        background: 'white',
        borderRadius: 10, marginTop: 8
    } as React.CSSProperties
};
