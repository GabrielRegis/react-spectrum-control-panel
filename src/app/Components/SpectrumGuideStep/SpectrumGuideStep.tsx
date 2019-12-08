import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './SpectrumGuideStepStyles';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
import FlareComponent from 'flare-react';
//@ts-ignore
import anim from './Conexoes.flr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
    // Props type definition
    title: string
    content: string[]
    icon?: IconProp
    renderExtraComponent?: () => React.ReactNode
}

interface IState {
    // State type definition
}

export const SpectrumGuideStep: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.leftAlignedColumn, styles.fullContainer])} >
            <div style={inline([styles.row])}>

            </div>
            <SpectrumText size={'h2'} weight={'bold'} color={'white'}>
                {props.title + ' '}
                {props.icon && <FontAwesomeIcon color={'white'} icon={props.icon} />}
            </SpectrumText>
            <div style={inline([styles.xSmallMarginTop])}>
                {props.content.map((contentParagraph, index) => <SpectrumText style={inline([index !== 0 && styles.xSmallMarginTop])} color={'white'}>
                    {contentParagraph}
                </SpectrumText>)}

            </div>
            {props.renderExtraComponent && <div style={inline([styles.xSmallMarginTop, styles.fullWidthContainer])}>
                {props.renderExtraComponent()}
            </div>}
        </div>
    );
};
