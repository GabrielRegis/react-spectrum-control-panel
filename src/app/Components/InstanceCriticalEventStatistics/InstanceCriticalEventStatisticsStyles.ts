import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    simpleStatisticsContainer: {
        ...ApplicationStyles.marginRight
    } as React.CSSProperties,
    loadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1.5px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 25,
        maxWidth: 35,
        minWidth: 35,
        margin: 0,
        padding: 0,
    } as React.CSSProperties,
    selectedLoadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: '0.5s all'
    } as React.CSSProperties,
    selectedLoadButtonText: {
        color: Colors.colors.spectrumDarkPurple
    } as React.CSSProperties,
    buttonsContainer: {
        maxWidth: 210,
        marginTop: 5
    } as React.CSSProperties,
} 