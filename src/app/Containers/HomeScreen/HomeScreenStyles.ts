import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    teste: {
        backgroundColor: 'yellow',
        opacity: 0,
        transition: 'opacity 600ms ease-in-out'
    } as React.CSSProperties,
    testeOn: {
        backgroundColor: 'yellow',
        opacity: 1,
    } as React.CSSProperties,
    homescreenBackground: {
        backgroundColor: Colors.colors.extraLightGray,
        display: 'flex',
        height: '100%',
        width: '100%'
    } as React.CSSProperties
} 