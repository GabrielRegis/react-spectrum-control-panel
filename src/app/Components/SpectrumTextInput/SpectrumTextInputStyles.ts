import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    teste: {
        backgroundColor: 'yellow'
    } as React.CSSProperties,
    textInputContainer: {
        borderRadius: 20,
        backgroundColor: Colors.colors.silentWhite,
        paddingTop: 4,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    } as React.CSSProperties,
    textInputContainerError: {
        borderRadius: 20,
        backgroundColor: Colors.colors.silentWhite,
        paddingTop: 4,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        border: '2px solid red',
        transition: 'all 2s'
    } as React.CSSProperties,
    textInput: {
        border: 'none',
        textAlign: 'center',
        whiteSpace: 'pre',
        borderColor: 'none',
        borderInline: 'none',
        WebkitAppearance: 'none',
        outline: 'none',
        appearance: 'none',
        backgroundColor: 'transparent',
        fontSize: 15
    } as React.CSSProperties
} 