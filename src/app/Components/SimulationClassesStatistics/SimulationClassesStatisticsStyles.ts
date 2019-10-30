import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    classButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1.5px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 25,
        padding: 0,
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 10,
    } as React.CSSProperties,
    selectedLoadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: '0.5s all'
    } as React.CSSProperties,
    selectedLoadButtonText: {
        color: Colors.colors.spectrumDarkPurple
    } as React.CSSProperties,
    buttonsContainer: {
        marginTop: 10
    } as React.CSSProperties,
} 