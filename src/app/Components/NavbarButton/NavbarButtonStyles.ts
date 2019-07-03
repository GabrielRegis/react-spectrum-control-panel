import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    navbarButton: {
        ...ApplicationStyles.shadowView,
        backgroundColor: Colors.colors.white,
        borderRadius: 40,
        marginLeft: 15,
        padding: 15,
    } as React.CSSProperties,
    buttonStatusContainer: {
        ...ApplicationStyles.shadowView,
        width: 30,
        height: 30,
        borderRadius: 23,
        backgroundColor: Colors.colors.silentWhite,
        marginLeft: 10
    } as React.CSSProperties,
    buttonStatusContainerOn: {
        width: 25,
        height: 25,
        borderRadius: 23,
        backgroundColor: Colors.colors.patifeGreen,
        marginLeft: 10
    } as React.CSSProperties,
    checkIconOn: {
        fontSize: 20,
        color: Colors.colors.patifeGreen
    } as React.CSSProperties,
    checkIconOff: {
        fontSize: 24,
        color: Colors.colors.lightGray,
        transition: 'all 1s',
        WebkitTransition: 'all 1s',
        MozTransition: 'all 1s',
        OTransition: 'all 1s'
    } as React.CSSProperties,
} 