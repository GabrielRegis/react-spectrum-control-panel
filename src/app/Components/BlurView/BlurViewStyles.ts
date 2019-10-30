import { ApplicationStyles } from "app/Theme";

export default {
    ...ApplicationStyles,
    blurView: {
        overflow: 'hidden',
        WebkitFilter: 'blur(20px)',
        filter: 'blur(20px)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none'
    } as React.CSSProperties,
    hiddenContainer: {
        overflow: 'hidden',
        position: 'relative',
    } as React.CSSProperties
} 