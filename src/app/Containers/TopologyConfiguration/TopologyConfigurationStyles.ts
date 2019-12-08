import { ApplicationStyles, Colors, Fonts } from "app/Theme";

export default {
    ...ApplicationStyles,
    topologyConfigurationScreenContainer: {
        background: Colors.colors.extraLightGray
    } as React.CSSProperties,
    gridSlider: {
        color: Colors.colors.healthPink
    } as React.CSSProperties,
    gridSliderOff: {
        color: Colors.colors.gray
    } as React.CSSProperties,
    gridButton: {
        borderRadius: 10,
        border: '1px dashed',
        width: 220,
        borderColor: Colors.colors.gray,
    } as React.CSSProperties,
    gridButtonOff: {
        border: '1px dashed',
        borderRadius: 10,
        width: 220,
        borderColor: Colors.colors.healthPink,
    } as React.CSSProperties,
    toolbarContainer: {
        // ...ApplicationStyles.shadowView,
        // backgroundColor: Colors.colors.white,
        // border: '1px dashed',
        // borderColor: Colors.colors.lightGray,
        borderTopWidth: '0px',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        top: -5
    } as React.CSSProperties,
    toolbarButton: {
        width: 50,
        height: 60,
        borderRadius: 15,
        border: '1px solid ' + Colors.colors.lightGray,
        transition: 'all 0.4s'
    } as React.CSSProperties,
    toolbarButtonPressed: {
        border: '1px solid',
        borderColor: Colors.colors.healthPink,
        WebkitBoxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        MozBoxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        boxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        transition: 'all 0.4s'
    } as React.CSSProperties,
    nodeIcon: {
        height: 25,
        width: 25
    } as React.CSSProperties,
    linkNode: {
        width: 25,
        height: 25,
        objectFit: 'contain'
    } as React.CSSProperties,
    cursorIcon: {
        height: 25,
        width: 15,
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
        border: '2px solid',
        borderColor: Colors.colors.lightGray,
        height: 15,
        width: 15,
        borderRadius: 15,
        position: 'absolute',
        top: -5,
        right: -10
    } as React.CSSProperties,
    openToolbarButton: {
        ...ApplicationStyles.shadowView,
        borderRadius: 40,
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        border: '2px dashed',
        borderColor: Colors.colors.primary,
        backgroundColor: Colors.colors.white,
        fontFamily: Fonts.appFont,
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