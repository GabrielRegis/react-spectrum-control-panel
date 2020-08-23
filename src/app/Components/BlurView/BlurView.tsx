import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './BlurViewStyles';
interface IProps {
    // Props type definition
    style?: React.CSSProperties | React.CSSProperties[]
    backgroundSource?: string
    blurAmount?: number
}

interface IState {
    // State type definition
}

export const BlurView: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.fullWidthContainer, styles.flex1, styles.centeredColumn, styles.hiddenContainer,
        //@ts-ignore
        props.style
        ])}>
            <div style={inline([styles.blurView, {
                backgroundImage: `url(${props.backgroundSource})`,
                WebkitFilter: `blur(${props.blurAmount ? props.blurAmount : 20}px)`,
                filter: `blur(${props.blurAmount ? props.blurAmount : 20}px)`,
                opacity: 0.2
            }])} />
            {props.children}
        </div>
    );
};
