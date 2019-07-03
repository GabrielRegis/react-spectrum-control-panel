import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { colors } from './PlaceholderColors';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const Placeholder: FunctionComponent<IProps> = (props) => {


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <svg width="400" height="175" viewBox="0 0 800 370">
            <defs>
                <linearGradient id="green" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightGreen }} />
                    <stop offset="100%" style={{ stopColor: colors.darkGreen }} />
                </linearGradient>
                <linearGradient id="yellow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightYellow }} />
                    <stop offset="100%" style={{ stopColor: colors.darkYellow }} />
                </linearGradient>
                <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightOrange }} />
                    <stop offset="100%" style={{ stopColor: colors.darkOrange }} />
                </linearGradient>
                <linearGradient id="pink" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightPink }} />
                    <stop offset="100%" style={{ stopColor: colors.darkPink }} />
                </linearGradient>
                <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightPurple }} />
                    <stop offset="100%" style={{ stopColor: colors.darkPurple }} />
                </linearGradient>
                <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightBlue }} />
                    <stop offset="100%" style={{ stopColor: colors.darkBlue }} />
                </linearGradient>
                <linearGradient id="teal" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: colors.lightTeal }} />
                    <stop offset="100%" style={{ stopColor: colors.darkTeal }} />
                </linearGradient>
            </defs>
            <rect width="600" height="30" x={200} y="20" rx="15" ry="15" fill="url(#green)" />
            <rect width="700" height="30" x={0} y="70" rx="15" ry="15" fill="url(#yellow)" />
            <rect width="460" height="30" x={180} y="120" rx="15" ry="15" fill="url(#orange)" />
            <rect width="500" height="30" x={120} y="170" rx="15" ry="15" fill="url(#pink)" />
            <rect width="500" height="30" x={200} y="220" rx="15" ry="15" fill="url(#purple)" />
            <rect width="500" height="30" x={0} y="270" rx="15" ry="15" fill="url(#blue)" />
            <rect width="500" height="30" x={120} y="320" rx="15" ry="15" fill="url(#teal)" />
        </svg>
    );
};
