
import { ApplicationStyles, Colors } from 'app/Theme';
export default {
    ...ApplicationStyles,
    modalContent: {
        background: Colors.colors.white,
        width: '50%',
        borderRadius: 10
    } as React.CSSProperties,
    deleteButton: {
        backgroundColor: Colors.colors.pink,
        borderRadius: 20,
    } as React.CSSProperties,
};
