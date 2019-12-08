import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    bar: {
        WebkitBoxShadow: '2px 2px 15px 0px rgba(0, 0, 0, 0.2)',
        MozBoxShadow: '2px 2px 15px 0px rgba(0, 0, 0, 0.2)',
        boxShadow: '2px 2px 15px 0px rgba(0, 0, 0, 0.2)',
        backgroundColor: Colors.colors.white,
        flex: 1,
        maxWidth: 35,
        minWidth: 35,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 2,
        transition: 'all .2s ease-in-out'
    } as React.CSSProperties,
    axisText: {
        fontSize: 8
    } as React.CSSProperties,
    xAxis: {
        marginTop: 5,
        paddingTop: 20,
        position: 'absolute',
        borderTop: '1px dashed',
        top: 175,
        borderColor: Colors.colors.white
    } as React.CSSProperties,
    yAxis: {
        position: 'absolute',
        marginBottom: 5,
        transform: 'rotate(-90deg)',
        paddingBottom: 5,
        borderBottom: '1px dashed',
        top: 100,
        left: -80,
        width: 170,
        borderColor: Colors.colors.white
    } as React.CSSProperties,
    barChart: {
        height: 200,
        minWidth: 200,
        maxWidth: 250
    } as React.CSSProperties,
    checkbox: {
        padding: 0,
        marginLeft: 10,
        minWidth: null,
        maxWidth: null
    } as React.CSSProperties,
    confidenceInterval: {
        width: 1,
        borderRadius: 5,
        backgroundColor: Colors.colors.darkGray
    } as React.CSSProperties
} 