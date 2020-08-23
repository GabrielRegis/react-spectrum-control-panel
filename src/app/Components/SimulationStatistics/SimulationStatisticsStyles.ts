import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    simpleStatisticsContainer: {
        ...ApplicationStyles.marginRight
    } as React.CSSProperties,
    expandButton: {
        border: '2px dashed',
        borderColor: Colors.colors.healthPink
    } as React.CSSProperties
} 