import Colors from "./Colors";
import Fonts from "./Fonts";


//-webkit-box-shadow: 2px 2px 20px 0px rgba(204, 204, 204, 0.27);
//-moz-box-shadow: 2px 2px 20px 0px rgba(204, 204, 204, 0.27);
//box-shadow: 2px 2px 20px 0px rgba(204, 204, 204, 0.27);

export default {
    secondaryColorText: {
        color: Colors.colors.secondary
    } as React.CSSProperties,
    primaryColorText: {
        color: Colors.colors.primary
    } as React.CSSProperties,
    secondaryText: {
        fontFamily: Fonts.secondaryFont
    } as React.CSSProperties,
    primaryText: {
        fontFamily: Fonts.primaryFont
    } as React.CSSProperties,
    configurationContainer: {
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.27)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.27)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.27)',
        zIndex: 1
    } as React.CSSProperties,
    shadowView: {
        WebkitBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.27)',
        MozBoxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.27)',
        boxShadow: '2px 2px 20px 0px rgba(204, 204, 204, 0.27)'
    } as React.CSSProperties,
    primaryColorBackground: {
        backgroundColor: Colors.colors.primary
    } as React.CSSProperties,
    navbarButtonMargin: {
        marginRight: 15
    } as React.CSSProperties,
    blackBackground: {
        backgroundColor: Colors.colors.black
    } as React.CSSProperties,
    iOSTouchableIndicator: {
        height: 5,
        width: 40,
        borderRadius: 3,
        backgroundColor: Colors.colors.lightDarkGray
    } as React.CSSProperties,
    overflowHidden: {
        overflow: 'hidden',
    } as React.CSSProperties,
    listTopSpace: {
        paddingTop: 30
    } as React.CSSProperties,
    grayBorder: {
        borderColor: Colors.colors.gray
    } as React.CSSProperties,
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.colors.lightGray,
        opacity: 0.75
    } as React.CSSProperties,
    iosDarkGrayContainer: {
        backgroundColor: Colors.colors.iosDarkGray
    } as React.CSSProperties,
    iosSmallTopSimpleCell: {
        borderTopWidth: 0.8,
        borderTopColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        paddingLeft: 15,
        height: 44,
    } as React.CSSProperties,
    iosSmallBottomSimpleCell: {
        borderBottomWidth: 0.8,
        padding: 0,
        borderBottomColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        paddingLeft: 15,
        height: 44,
    } as React.CSSProperties,
    iosSmallSimpleCell: {
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        borderLeftWidth: 15,
        borderLeftColor: Colors.colors.white,
        height: 44,
        padding: 0,
    } as React.CSSProperties,
    iosTopSimpleCell: {
        borderTopWidth: 0.8,
        borderTopColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        paddingLeft: 15,
        height: 60,
    } as React.CSSProperties,
    iosBottomSimpleCell: {
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        padding: 0,
        paddingLeft: 15,
        height: 60,
    } as React.CSSProperties,
    iosSimpleCell: {
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        borderLeftWidth: 15,
        borderLeftColor: Colors.colors.white,
        height: 60,
        padding: 0,
    } as React.CSSProperties,
    iosFreeTopSimpleCell: {
        borderTopWidth: 0.8,
        borderTopColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        paddingLeft: 15,
    } as React.CSSProperties,
    iosFreeBottomSimpleCell: {
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        padding: 0,
        paddingLeft: 15,
    } as React.CSSProperties,
    iosFreeSimpleCell: {
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.colors.lightGray,
        backgroundColor: Colors.colors.white,
        borderLeftWidth: 15,
        borderLeftColor: Colors.colors.white,
        padding: 0,
    } as React.CSSProperties,
    iOSBottomBorder: {
        borderBottomWidth: 0.8,
        borderColor: Colors.colors.lightGray,
    } as React.CSSProperties,
    zIndexN1: {
        zIndex: -1
    } as React.CSSProperties,
    zIndex1: {
        zIndex: 1
    } as React.CSSProperties,
    zIndex2: {
        zIndex: 2
    } as React.CSSProperties,
    zIndex3: {
        zIndex: 3
    } as React.CSSProperties,
    secondaryColorBackground: {
        backgroundColor: Colors.colors.secondary
    } as React.CSSProperties,
    facebookButton: {
        backgroundColor: Colors.colors.facebookBlue
    } as React.CSSProperties,
    silentWhiteContainer: {
        backgroundColor: Colors.colors.silentWhite
    } as React.CSSProperties,
    // Border
    border0: {
        borderWidth: 0
    } as React.CSSProperties,
    border1: {
        border: '1px solid black',
        borderWidth: 1,
        borderColor: 'black'
    } as React.CSSProperties,

    border2: {
        borderWidth: 2
    } as React.CSSProperties,

    border3: {
        borderWidth: 3
    } as React.CSSProperties,

    border5: {
        borderWidth: 5
    } as React.CSSProperties,

    // Flex
    flex1: {
        display: 'flex',
        flex: 1
    } as React.CSSProperties,
    flex2: {
        display: 'flex',
        flex: 2
    } as React.CSSProperties,
    flex3: {
        display: 'flex',
        flex: 3
    } as React.CSSProperties,
    flex4: {
        display: 'flex',
        flex: 4
    } as React.CSSProperties,

    // Containers
    fullContainer: {
        width: '100%',
        height: '100%'
    } as React.CSSProperties,

    fullHeightContainer: {
        height: '100%'
    } as React.CSSProperties,

    fullWidthContainer: {
        width: '100%'
    } as React.CSSProperties,

    halfWidthContainer: {
        width: '50%',
        height: '100%'
    } as React.CSSProperties,

    halfHeightContainer: {
        width: '100%',
        height: '50%'
    } as React.CSSProperties,
    halfContainer: {
        width: '100%',
        height: '50%'
    } as React.CSSProperties,
    whiteContainer: {
        backgroundColor: Colors.colors.white
    } as React.CSSProperties,

    // Big Padding
    bigPadding: {
        padding: 50
    } as React.CSSProperties,
    bigVerticalPadding: {
        paddingTop: 50,
        paddingBottom: 50
    } as React.CSSProperties,
    bigPaddingHorizontal: {
        paddingRight: 50,
        paddingLeft: 50
    } as React.CSSProperties,
    bigPaddingBottom: {
        paddingBottom: 50
    } as React.CSSProperties,
    bigPaddingTop: {
        paddingTop: 50
    } as React.CSSProperties,
    bigPaddingLeft: {
        paddingLeft: 50
    } as React.CSSProperties,
    bigPaddingRight: {
        paddingRight: 50
    } as React.CSSProperties,

    // Regular Padding
    padding: {
        padding: 40
    } as React.CSSProperties,
    verticalPadding: {
        paddingTop: 40,
        paddingBottom: 40
    } as React.CSSProperties,
    paddingHorizontal: {
        paddingRight: 40,
        paddingLeft: 40
    } as React.CSSProperties,
    paddingBottom: {
        paddingBottom: 40
    } as React.CSSProperties,
    paddingTop: {
        paddingTop: 40
    } as React.CSSProperties,
    paddingLeft: {
        paddingLeft: 40
    } as React.CSSProperties,
    paddingRight: {
        paddingRight: 40
    } as React.CSSProperties,

    // Small Padding
    smallPadding: {
        padding: 30
    } as React.CSSProperties,
    smallVerticalPadding: {
        paddingTop: 30,
        paddingBottom: 30
    } as React.CSSProperties,
    smallPaddingHorizontal: {
        paddingRight: 30,
        paddingLeft: 30
    } as React.CSSProperties,
    smallPaddingBottom: {
        paddingBottom: 30
    } as React.CSSProperties,
    smallPaddingTop: {
        paddingTop: 30
    } as React.CSSProperties,
    smallPaddingLeft: {
        paddingLeft: 30
    } as React.CSSProperties,
    smallPaddingRight: {
        paddingRight: 30
    } as React.CSSProperties,

    // XSmall Padding
    xSmallPadding: {
        padding: 20
    } as React.CSSProperties,
    xSmallVerticalPadding: {
        paddingTop: 20,
        paddingBottom: 20
    } as React.CSSProperties,
    xSmallPaddingHorizontal: {
        paddingRight: 20,
        paddingLeft: 20
    } as React.CSSProperties,
    xSmallPaddingBottom: {
        paddingBottom: 20
    } as React.CSSProperties,
    xSmallPaddingTop: {
        paddingTop: 20
    } as React.CSSProperties,
    xSmallPaddingLeft: {
        paddingLeft: 20
    } as React.CSSProperties,
    xSmallPaddingRight: {
        paddingRight: 20
    } as React.CSSProperties,

    // Big Margin
    bigMargin: {
        margin: 50
    } as React.CSSProperties,
    bigVerticalMargin: {
        paddingTop: 50,
        paddingBottom: 50
    } as React.CSSProperties,
    bigHorizontalMargin: {
        paddingRight: 50,
        paddingLeft: 50
    } as React.CSSProperties,
    bigMarginBottom: {
        marginBottom: 50
    } as React.CSSProperties,
    bigMarginTop: {
        marginTop: 50
    } as React.CSSProperties,
    bigMarginLeft: {
        marginLeft: 50
    } as React.CSSProperties,
    bigMarginRight: {
        marginRight: 50
    } as React.CSSProperties,

    // Regular Margin
    margin: {
        margin: 40
    } as React.CSSProperties,
    verticalMargin: {
        paddingTop: 40,
        paddingBottom: 40
    } as React.CSSProperties,
    horizontalMargin: {
        paddingRight: 40,
        paddingLeft: 40
    } as React.CSSProperties,
    marginBottom: {
        marginBottom: 40
    } as React.CSSProperties,
    marginTop: {
        marginTop: 40
    } as React.CSSProperties,
    marginLeft: {
        marginLeft: 40
    } as React.CSSProperties,
    marginRight: {
        marginRight: 40
    } as React.CSSProperties,

    // Small Margin
    smallMargin: {
        margin: 30
    } as React.CSSProperties,
    smallVerticalMargin: {
        paddingTop: 30,
        paddingBottom: 30
    } as React.CSSProperties,
    smallHorizontalMargin: {
        paddingRight: 30,
        paddingLeft: 30
    } as React.CSSProperties,
    smallMarginBottom: {
        marginBottom: 30
    } as React.CSSProperties,
    smallMarginTop: {
        marginTop: 30
    } as React.CSSProperties,
    smallMarginLeft: {
        marginLeft: 30
    } as React.CSSProperties,
    smallMarginRight: {
        marginRight: 30
    } as React.CSSProperties,

    // XSmall Margin
    xSmallMargin: {
        margin: 20
    } as React.CSSProperties,
    xSmallVerticalMargin: {
        paddingTop: 20,
        paddingBottom: 20
    } as React.CSSProperties,
    xSmallHorizontalMargin: {
        paddingRight: 20,
        paddingLeft: 20
    } as React.CSSProperties,
    xSmallMarginBottom: {
        marginBottom: 20
    } as React.CSSProperties,
    xSmallMarginTop: {
        marginTop: 20
    } as React.CSSProperties,
    xSmallMarginLeft: {
        marginLeft: 20
    } as React.CSSProperties,
    xSmallMarginRight: {
        marginRight: 20
    } as React.CSSProperties,

    // FlexDirection
    row: {
        flexDirection: 'row',
        display: 'flex'
    } as React.CSSProperties,
    column: {
        flexDirection: 'column',
        display: 'flex'
    } as React.CSSProperties,

    // Common Align and Justify
    spaceBetween: {
        justifyContent: 'space-between',
        display: 'flex'
    } as React.CSSProperties,
    spaceAround: {
        justifyContent: 'space-around',
        display: 'flex'
    } as React.CSSProperties,

    // AlignAndJustify Rows
    upAlignedRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    botAlignedRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,

    verticalCenterAlignedRow: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    } as React.CSSProperties,

    leftAlignedRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    rightAlignedRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,
    horizontalCenterAlignedRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex'
    } as React.CSSProperties,

    // AlignAndJustify Columns
    upAlignedColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    botAlignedColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,
    verticalCenterAlignedColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex'
    } as React.CSSProperties,
    leftAlignedColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    rightAlignedColumn: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,
    horizontalCenterAlignedColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex'
    } as React.CSSProperties,
    positionAbsolute: {
        position: 'absolute'
    } as React.CSSProperties,
    transparentView: {
        backgroundColor: Colors.colors.black,
        opacity: 0
    } as React.CSSProperties,
    centeredRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    } as React.CSSProperties,
    simpleRow: {
        flexDirection: 'row',
        display: 'flex'
    } as React.CSSProperties,
    justifyLeft: {
        justifyContent: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    justifyRight: {
        justifyContent: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,
    alignLeft: {
        alignItems: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    alignRight: {
        alignItems: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,
    leftAligned: {
        alignSelf: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    rightAligned: {
        alignSelf: 'flex-end',
        display: 'flex'
    } as React.CSSProperties,
    centeredColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    } as React.CSSProperties,
    topCenteredColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex'
    } as React.CSSProperties,

    topAligned: {
        justifyContent: 'flex-start',
        display: 'flex'
    } as React.CSSProperties,
    backgroundContainer: {
        width: '100%',
        height: '100%',
        padding: '3%',
        alignItems: 'center',
        overflow: 'visible'
    } as React.CSSProperties,
    foregroundContainer: {
        width: '100%',
        height: '100%',
        margin: '3%',
        alignItems: 'center'
    } as React.CSSProperties,
    mainContainer: {
        flex: 1
    } as React.CSSProperties,
    touchableView: {
        width: '100%',
        height: '100%'
    } as React.CSSProperties,
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        display: 'flex',
        backgroundColor: Colors.colors.white
    }
}

