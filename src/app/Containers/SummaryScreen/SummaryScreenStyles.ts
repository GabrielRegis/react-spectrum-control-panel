import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    startSimulationButton: {
        ...ApplicationStyles.shadowView,
        backgroundColor: Colors.colors.white,
        borderRadius: 100,
        position: 'absolute',
        top: 10,
        padding: 15
    } as React.CSSProperties,
    startSimulationButtonText: {
        color: Colors.colors.primary,
    } as React.CSSProperties,
    addIcon: {
        color: Colors.colors.healthGreen,
        marginLeft: 10
    } as React.CSSProperties,
    placeholder: {
        width: 1020,
        marginTop: 60
    } as React.CSSProperties,
} 