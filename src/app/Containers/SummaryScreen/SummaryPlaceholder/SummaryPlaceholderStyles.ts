import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    titleContainer: {
        borderRadius: 10,
        height: 65,
        background: 'white',
    } as React.CSSProperties,
    spectrumTitleText: {
        fontSize: 60,
        letterSpacing: -6,
        marginLeft: -5,
        lineHeight: '0.8',
    } as React.CSSProperties,
    spectrumSubtitleText: {
        fontSize: 27.2,
        letterSpacing: -1,
        color: Colors.colors.secondary
    } as React.CSSProperties,
    rainbowA: {
        width: '100%',
        marginTop: 5,
        borderRadius: 10,
        height: 8
    } as React.CSSProperties,
    startText: {
        letterSpacing: -2,
        fontSize: 30
    } as React.CSSProperties,
    background: {
        background: "linear-gradient(45deg, #0f0f14 12.66%, #ffffff 12.66%, #ffffff 50%, #0f0f14 50%, #0f0f14 62.66%, #ffffff 62.66%, #ffffff 100%)",
        backgroundSize: "111.72px 111.72px",
        opacity: 0.02
    } as React.CSSProperties,
    simulationTitle: {
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