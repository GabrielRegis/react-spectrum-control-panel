import { CSSProperties, StyleSheet } from 'aphrodite';
import { ApplicationStyles, Colors } from "app/Theme";

const selectedFlowAnimation = {
    '0%': {
        transform: 'scale(1)',
        border: '1px solid ' + Colors.colors.healthGreen,
    },

    '50%': {
        transform: 'scale(1.01)',
        border: '2px solid ' + Colors.colors.healthGreen,
    },

    '100%': {
        transform: 'scale(1)',
        border: '1px solid ' + Colors.colors.healthGreen,
    },
};

export default {
    ...ApplicationStyles,

    aphroditeStyles: StyleSheet.create({
        selectedFlowContainer: {
            animationName: selectedFlowAnimation,
            animationDuration: '5s',
            animationIterationCount: 'infinite'
        } as CSSProperties
    }),
    deleteButton: {
        backgroundColor: Colors.colors.pink,
        borderRadius: 20,
        animation: 'changewidth'
    } as React.CSSProperties,
    flowsContainer: {
        borderRadius: 10,
        backgroundColor: Colors.colors.extraLightGray,
        padding: 20,
    } as React.CSSProperties,
    selectedClassContainer: {
        ...ApplicationStyles.shadowView,
        borderRadius: 10,
        borderWidth: 2,
        border: '5px solid ' + Colors.colors.extraLightGray,
    } as React.CSSProperties,
    listPlaceholder: {
        bottom: 20,
        zIndex: 0,
        width: 400,
        marginTop: 100,
        marginBottom: 50
    } as React.CSSProperties,
    flowContainer: {
        borderRadius: 10,
        maxHeight: 60,
        backgroundColor: Colors.colors.white
    } as React.CSSProperties,
    draggingFlowContainer: {
        borderRadius: 10,
        border: '2px solid',
        borderColor: Colors.colors.healthGreen,
        backgroundColor: Colors.colors.white,
    } as React.CSSProperties,
    flowClassIndicator: {
        backgroundColor: Colors.colors.primary,
        height: 20,
        width: 20,
        borderRadius: 10
    } as React.CSSProperties,
    addClassButton: {
        backgroundColor: Colors.colors.white,
        borderRadius: 10,
        color: Colors.colors.primary
    } as React.CSSProperties,
    addIcon: {
        color: Colors.colors.healthGreen
    } as React.CSSProperties
} 