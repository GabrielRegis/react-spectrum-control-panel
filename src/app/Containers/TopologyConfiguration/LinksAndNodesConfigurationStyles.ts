import { ApplicationStyles, Colors } from "app/Theme";

export default {
    ...ApplicationStyles,
    linksAndNodesConfigContainer: {
        verticalAlign: 'center',
        position: 'fixed',
        backgroundColor: Colors.colors.white,
        right: -180,
        top: 200,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.6)',
        transition: 'all 0.4s'
    } as React.CSSProperties
} 