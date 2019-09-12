import { ApplicationStyles, Colors, Fonts } from "app/Theme";

export default {
    ...ApplicationStyles,
    toolbarContainer: {
        ...ApplicationStyles.shadowView,
        width: '50%',
        backgroundColor: Colors.colors.white,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'absolute',
        zIndex: 1
    } as React.CSSProperties,
    toolbarButton: {
        width: 70,
        height: 70,
        borderRadius: 20,
        border: '0px solid ' + Colors.colors.extraLightGray,
        transition: 'all 0.4s'
    } as React.CSSProperties,
    toolbarButtonPressed: {
        border: '1px solid rgba(234, 82, 111, 0.6)',
        WebkitBoxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        MozBoxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        boxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        transition: 'all 0.4s'
    } as React.CSSProperties,
    nodeIcon: {
        height: 40,
        width: 40
    } as React.CSSProperties,
    linkNode: {
        width: 40,
        height: 40,
        objectFit: 'contain'
    } as React.CSSProperties,
    cursorIcon: {
        height: 40,
        width: 30,
        objectFit: 'contain'
    } as React.CSSProperties,
    buttonText: {
        fontSize: 10
    } as React.CSSProperties,
    keyboardShortcutNumberContainer: {
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.8)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.8)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.8)',
        backgroundColor: Colors.colors.white,
        height: 25,
        width: 25,
        borderRadius: 15,
        position: 'absolute',
        top: -10,
        left: -10
    } as React.CSSProperties,
    openToolbarButton: {
        borderRadius: 40,
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: Colors.colors.white,
        fontFamily: Fonts.primaryFont,
        color: Colors.colors.primary,
        fontSize: 14
    } as React.CSSProperties,
    tipComponent: {
        position: 'absolute',
        backgroundColor: Colors.colors.lightGray,
        borderRadius: 10
    } as React.CSSProperties,
    navbarButtonsContainer: {
        position: 'absolute',
        top: 100,
        left: 20,
    } as React.CSSProperties,

} 