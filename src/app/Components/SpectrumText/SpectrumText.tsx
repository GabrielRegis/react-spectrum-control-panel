import { Colors } from 'app/Theme';
import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from './SpectrumTextStyles';

interface IProps {
    // Props type definition
    style?: React.CSSProperties | React.CSSProperties[]
    type?: 'appText' | 'systemText'
    weight?: 'thin' | 'regular' | 'bold' | 'semibold' | 'light'
    size?: 'h1' | 'largeTitle' | 'h2' | 'h3' | 'b20' | 'b17' | 'b15' | 'c13' | 'c11'
    color?: 'white' | 'black' | string
}

interface IState {
    // State type definition
}
export const SpectrumText: FunctionComponent<IProps> = (props) => {

    const isSystemText = props.type === 'systemText'
    let appTypeStyle = isSystemText ? styles.secondaryText : styles.primaryText
    let textSizeStyle = styles.text13
    let textLetterSpacingStyle = styles.regularTextSpacing
    let textWeightStyle = isSystemText ? styles.regularSystemText : styles.regularText

    if (props.weight) {
        switch (props.weight) {
            case 'thin':
                textWeightStyle = isSystemText ? styles.thinText : styles.thinText
                break
            case 'light':
                textWeightStyle = isSystemText ? styles.lightText : styles.lightText
                break
            case 'bold':
                textWeightStyle = isSystemText ? styles.boldSystemText : styles.boldText
                break
            case 'semibold':
                textWeightStyle = isSystemText ? styles.semiBoldSystemText : styles.semiBoldText
                break
        }
    }

    const size = props.size ? props.size : 'b15'

    switch (size) {
        case 'h1':
            textSizeStyle = styles.text40
            textLetterSpacingStyle = styles.bigTextSpacing
            break
        case 'largeTitle':
            textSizeStyle = styles.text34
            textLetterSpacingStyle = styles.bigTextSpacing
            break
        case 'h2':
            textSizeStyle = styles.text28
            textLetterSpacingStyle = styles.bigTextSpacing
            break
        case 'h3':
            textSizeStyle = styles.text22
            textLetterSpacingStyle = styles.bigTextSpacing
            break
        case 'b20':
            textSizeStyle = styles.text20
            textLetterSpacingStyle = styles.bigTextSpacing
            break
        case 'b17':
            textSizeStyle = styles.text17
            textLetterSpacingStyle = styles.miniTextSpacing
            break
        case 'b15':
            textSizeStyle = styles.text15
            textLetterSpacingStyle = styles.miniTextSpacing
            break
        case 'c13':
            textSizeStyle = styles.text13
            break
        case 'c11':
            textSizeStyle = styles.text11
            break
    }

    //@ts-ignore
    return <div style={inline([appTypeStyle, textSizeStyle, textWeightStyle, textLetterSpacingStyle, props.color ? { color: props.color } : { color: Colors.colors.primary }, props.style])}>
        {props.children}
    </div>
};

