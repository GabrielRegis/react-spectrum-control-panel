import { Colors, Fonts } from "app/Theme";

export const getGuideContainerStyle = () => {
    return {
        backgroundColor: Colors.colors.white,
        borderRadius: 10,
        fontFamily: Fonts.appFont,
        fontSize: 14,
        color: Colors.colors.primary,
    } as React.CSSProperties
}
