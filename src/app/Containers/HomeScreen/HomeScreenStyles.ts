import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    waveContainer: {
        padding: 0,
        margin: 0,
        width: '100%',
        zIndex: 5,
        overflow: 'hidden'
    } as React.CSSProperties,
    titleContainer: {
        borderRadius: 10,
        height: 120,
        background: 'white',
    } as React.CSSProperties,
    background: {
        background: "linear-gradient(45deg, #0f0f14 12.66%, #ffffff 12.66%, #ffffff 50%, #0f0f14 50%, #0f0f14 62.66%, #ffffff 62.66%, #ffffff 100%)",
        backgroundSize: "111.72px 111.72px",
        opacity: 0.02
    } as React.CSSProperties,
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
    } as React.CSSProperties,
    spectrumTitleText: {
        fontSize: 100,
        letterSpacing: -8,
        marginLeft: -5,
        lineHeight: '0.8',
    } as React.CSSProperties,
    spectrumSubtitleText: {
        fontSize: 27.2,
        letterSpacing: -1,
        color: Colors.colors.secondary
    } as React.CSSProperties,
    rainbowA: {
        width: '100%',
        marginTop: 2,
        borderRadius: 10,
        height: 8
    } as React.CSSProperties,
    startText: {
        letterSpacing: -2,
        fontSize: 30
    } as React.CSSProperties,
    footer: {
        bottom: 0,
        position: 'fixed',
        zIndex: 5
    } as React.CSSProperties,
    utfprLogo: {
        width: 100,
        bottom: 20,
        right: 20,
        zIndex: 4
    } as React.CSSProperties,
} 