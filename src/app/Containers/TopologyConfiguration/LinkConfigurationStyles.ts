import { ApplicationStyles, Colors, Fonts } from "app/Theme";

export default {
    ...ApplicationStyles,
    slotSizeInput: {
        width: 35,
        textAlign: 'left'
    } as React.CSSProperties,
    shortcutText: {
        marginLeft: 4
    } as React.CSSProperties,
    linkConfigurationContainer: {
        verticalAlign: 'center',
        backgroundColor: Colors.colors.white,
        maxWidth: 520,
        borderRadius: 30,
        outline: 'none',
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        transition: 'all 0.4s'
    } as React.CSSProperties,
    nodeConfigurationContainer: {
        verticalAlign: 'center',
        position: 'fixed',
        backgroundColor: Colors.colors.white,
        right: -480,
        top: 560,
        maxWidth: 520,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        transition: 'all 0.4s'
    } as React.CSSProperties,
    applyButon: {
        backgroundColor: Colors.colors.healthGreen,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(80, 204, 80, 0.6)',
        MozBoxShadow: '2px 2px 20px 0px rgba(80, 204, 80, 0.6)',
        boxShadow: '2px 2px 20px 0px rgba(80, 204, 80, 0.6)',
        borderRadius: 30
    } as React.CSSProperties,
    closeButton: {
        backgroundColor: Colors.colors.lightGray,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        borderRadius: 30,
        minWidth: 0,
        minHeight: 0,
        padding: 0,
        width: 50,
        height: 50,
        fontSize: 12,
        marginLeft: 10
    } as React.CSSProperties,
    trashButton: {
        backgroundColor: Colors.colors.pink,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        borderRadius: 30,
        minWidth: 0,
        minHeight: 0,
        padding: 0,
        width: 35,
        height: 35,
        fontSize: 12
    } as React.CSSProperties,
    slotsSuggestionButton: {
        backgroundColor: Colors.colors.lightGray,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.3)',
        borderRadius: 5,
        width: 35,
        height: 35,
        padding: 0,
        minWidth: 0,
        fontFamily: Fonts.fontFamilies.primary,
        color: Colors.colors.primary,
        marginRight: 5
    } as React.CSSProperties,
    applyToAllButon: {
        backgroundColor: Colors.colors.lightGray,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        borderRadius: 30
    } as React.CSSProperties,
}