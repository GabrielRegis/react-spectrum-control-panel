import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    circularContainer: {
        marginTop: 15
    } as React.CSSProperties,
    circularProgressViewBackground: {
        width: 60,
        height: 60,
        color: Colors.colors.white,
        opacity: 0.2
    } as React.CSSProperties,
    circularProgressView: {
        width: 60,
        height: 60,
        color: Colors.colors.white,
        opacity: 0.6
    } as React.CSSProperties,
    result: {
    } as React.CSSProperties,
    label: {
    } as React.CSSProperties,
} 