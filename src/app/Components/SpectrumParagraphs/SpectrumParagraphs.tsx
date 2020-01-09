import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './SpectrumParagraphsStyles';
import { SpectrumText } from '../SpectrumText/SpectrumText';
import { Colors } from 'app/Theme';
interface IProps {
    // Props type definition
    paragraphs: string[]
}

interface IState {
    // State type definition
}

export const SpectrumParagraphs: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.xSmallMarginTop, styles.leftAlignedColumn, styles.fullWidthContainer])}>
            {props.paragraphs.map((contentParagraph, index) => <SpectrumText size={'b17'} style={inline([index !== 0 && styles.xSmallMarginTop,])} color={Colors.colors.primary}>
                {contentParagraph}
            </SpectrumText>)}

        </div>
    );
};
