import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    simulationTitle: {
        fontSize: 30,
        fontFamily: 'Gilroy'
    } as React.CSSProperties,
    simulationSubtitle: {
        fontSize: 20,
        fontWeight: 200
    } as React.CSSProperties,
    navbarButton: {
        width: 120,
    } as React.CSSProperties,
    infosContainer: {
        borderRadius: 20,
        backgroundColor: Colors.colors.white
    } as React.CSSProperties,
    startSimulationButton: {
        ...ApplicationStyles.shadowView,
        backgroundColor: Colors.colors.white,
        borderRadius: 100,
        padding: 15,
        paddingRight: 25,
        paddingLeft: 25,
    } as React.CSSProperties,
    startSimulationButtonText: {
        color: Colors.colors.primary,
    } as React.CSSProperties,
    addIconOn: {
        color: Colors.colors.healthGreen,
        marginLeft: 10
    } as React.CSSProperties,
    addIconOff: {
        color: Colors.colors.lightGray,
        marginLeft: 10
    } as React.CSSProperties,
}