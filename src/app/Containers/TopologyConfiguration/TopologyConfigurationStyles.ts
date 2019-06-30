import { ApplicationStyles, Colors } from "app/Theme";

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
        ...ApplicationStyles.shadowView,
        backgroundColor: Colors.colors.lightGray,
        height: 30,
        width: 30,
        borderRadius: 15,
        position: 'absolute',
        top: -15,
        left: -15
    } as React.CSSProperties,
    openToolbarButton: {
        borderRadius: 40,
        padding: 15,
    } as React.CSSProperties,
    tipComponent: {
        position: 'absolute',
        backgroundColor: Colors.colors.lightGray,
        borderRadius: 10
    } as React.CSSProperties,
    navbarButtonsContainer: {
        position: 'absolute',
        top: 15,
    } as React.CSSProperties,

} 