import { ApplicationStyles } from "app/Theme";

export default {
    ...ApplicationStyles,
    slot: {
        // backgroundColor: Colors.colors.lightGray,
        height: 30,
        marginLeft: 2,
        WebkitBoxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        MozBoxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        boxShadow: '2px 2px 15px 0px rgba(234, 82, 111, 0.2)',
        borderRadius: 5
    } as React.CSSProperties
} 