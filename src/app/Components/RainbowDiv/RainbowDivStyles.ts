
import { ApplicationStyles } from 'app/Theme';
import { CSSProperties, StyleSheet } from 'aphrodite';


const gradientAnimation = {
    '0%': {
        backgroundPosition: '0% 50%'
    },

    '50%': {
        backgroundPosition: '100% 50%'
    },

    '100%': {
        backgroundPosition: '0% 50%'
    },
};

export default {
    ...ApplicationStyles,
    aphroditeStyles: StyleSheet.create({
        rainbowView: {
            animationName: gradientAnimation,
            animationDuration: '5s',
            animationIterationCount: 'infinite',
            background: 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
            backgroundSize: '400% 400%',
        } as CSSProperties,
        disabledRainbowView: {
            animationName: gradientAnimation,
            animationDuration: '5s',
            animationIterationCount: 'infinite',
            background: 'linear-gradient(-45deg, #EFEFEF, #AAAAAA, #EFEFEF)',
            backgroundSize: '400% 400%',
        } as CSSProperties,
    }),
};
