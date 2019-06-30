import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    flowsContainer: {
        borderRadius: 10,
        backgroundColor: Colors.colors.extraLightGray,
    } as React.CSSProperties,
    flowContainer: {
        borderRadius: 60,
        backgroundColor: Colors.colors.white
    } as React.CSSProperties,
    draggingFlowContainer: {
        borderRadius: 60,
        border: '2px solid',
        borderColor: Colors.colors.patifeGreen,
        backgroundColor: Colors.colors.white
    } as React.CSSProperties,
    flowClassIndicator: {
        backgroundColor: Colors.colors.primary,
        height: 50,
        width: 50
    } as React.CSSProperties,
    addClassButton: {
        backgroundColor: Colors.colors.white,
        borderRadius: 60,
        color: Colors.colors.primary
    } as React.CSSProperties,
    addIcon: {
        color: Colors.colors.patifeGreen
    } as React.CSSProperties
} 