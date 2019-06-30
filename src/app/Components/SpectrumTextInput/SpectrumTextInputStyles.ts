import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    teste: {
        backgroundColor: 'yellow'
    } as React.CSSProperties,
    textInputContainer: {
        ...ApplicationStyles.shadowView,
        borderRadius: 20,
        backgroundColor: Colors.colors.silentWhite,
        paddingTop: 5,
        paddingBottom: 5
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