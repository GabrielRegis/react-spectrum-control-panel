import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    statisticsContainer: {
        ...ApplicationStyles.shadowView,
        backgroundColor: Colors.colors.secondary,
        border: '2px solid',
        borderColor: Colors.colors.healthPink,
        borderRadius: 10,
        WebkitBoxShadow: '2px 2px 15px 0px rgba(0, 0, 0, 0.2)',
        MozBoxShadow: '2px 2px 15px 0px rgba(0, 0, 0, 0.2)',
        boxShadow: '2px 2px 15px 0px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        display: 'block',
        width: '95%',
        padding: 0,
    } as React.CSSProperties,
    intanceStatisticsContainer: {
        borderColor: Colors.colors.spectrumDarkPurple,

    } as React.CSSProperties,
    criticalEventsContainer: {
        borderColor: Colors.colors.pxFeedSeconday,
    } as React.CSSProperties,

    loadButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1.5px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 25,
        padding: 0,
        marginRight: 10,
    } as React.CSSProperties,
    buttonsContainer: {
        marginTop: 10
    } as React.CSSProperties,
} 