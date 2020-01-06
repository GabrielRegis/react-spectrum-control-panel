import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,

    loadButtonContainer: {
        padding: 0,
        width: 40,
    } as React.CSSProperties,
    loadButton: {
        width: 40,
    } as React.CSSProperties,
    selectedLoadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: '0.5s all'
    } as React.CSSProperties,
    selectedLoadButtonText: {
        color: Colors.colors.pink,
        transition: '0.5s all',
    } as React.CSSProperties,
    buttonsContainer: {
        maxWidth: 210,
        marginTop: 5,
        marginLeft: 0,
        paddingLeft: 0,
    } as React.CSSProperties,
} 