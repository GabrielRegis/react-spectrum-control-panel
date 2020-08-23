import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    topologyContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20
    } as React.CSSProperties,
    simpleStatisticsContainer: {
        ...ApplicationStyles.marginRight
    } as React.CSSProperties,
    loadButtonContainer: {
        padding: 0,
        width: 40,
    } as React.CSSProperties,
    loadButton: {
        width: 40
    } as React.CSSProperties,
    selectedLoadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: '0.5s all'
    } as React.CSSProperties,
    categoryButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1.5px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 25,
        width: null,
        minWidth: null,
        flex: null,
        margin: 0,
        padding: 0,
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 5
    } as React.CSSProperties,
    selectedCategoryButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: '0.5s all'
    } as React.CSSProperties,
    selectedLoadButtonText: {
        color: Colors.colors.pink
    } as React.CSSProperties,
    buttonsContainer: {
        maxWidth: 210,
        margin: 0,
        paddingTop: 5,
    } as React.CSSProperties,
} 