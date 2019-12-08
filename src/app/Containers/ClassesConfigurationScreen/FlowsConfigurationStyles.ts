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

    flowsContainer: {
        margin: 0,
        border: '2px solid',
        borderColor: Colors.colors.lightGray,
        borderRadius: 10,
        backgroundColor: Colors.colors.extraLightGray,
        padding: 20,
        ...ApplicationStyles.shadowView,
    } as React.CSSProperties,
    selectedClassContainer: {
        ...ApplicationStyles.shadowView,
        borderRadius: 10,
        borderWidth: 2,
        border: '5px solid ' + Colors.colors.extraLightGray,
    } as React.CSSProperties,
    listPlaceholder: {
        zIndex: 0,
        width: 400,
        marginBottom: 20
    } as React.CSSProperties,
    flowContainer: {
        borderRadius: 10,
        maxHeight: 60,
        outline: 'none',
        backgroundColor: Colors.colors.white
    } as React.CSSProperties,
    draggingFlowContainer: {
        borderRadius: 10,
        outline: 'none',
        border: '2px solid',
        borderColor: Colors.colors.healthPink,
        backgroundColor: Colors.colors.white,
    } as React.CSSProperties,
    flowClassIndicator: {
        backgroundColor: Colors.colors.primary,
        height: 20,
        width: 20,
        borderRadius: 10
    } as React.CSSProperties,
    addClassButton: {
        backgroundColor: 'transparent',
        border: '2px dashed',
        borderColor: Colors.colors.primary,
        borderRadius: 10,
        bottom: 0,
    } as React.CSSProperties,
    addIcon: {
        color: Colors.colors.healthPink
    } as React.CSSProperties
} 