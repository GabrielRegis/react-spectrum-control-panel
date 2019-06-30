import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    navbar: {
        backgroundColor: Colors.colors.extraLightGray
    } as React.CSSProperties,
    navbarButton: {
        width: 80,
        height: 80,
        borderRadius: 0
    } as React.CSSProperties,
    logo: {
        width: 45,
        height: 45,
        borderRadius: 0
    } as React.CSSProperties,

} 