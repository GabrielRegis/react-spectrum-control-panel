import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './NextStepButtonStyles';
import { Link } from 'react-router-dom';
import { RainbowBorderButton } from '../RainbowBorderButton/RainbowBorderButton';
import { SpectrumText } from '../SpectrumText/SpectrumText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/Theme';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
interface IProps {
    // Props type definition
    style?: React.CSSProperties
    nextRoute: string
}

interface IState {
    // State type definition
}

export const NextStepButton: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <Link style={{ textDecoration: "none" }} to={props.nextRoute}>
            <RainbowBorderButton
                style={inline([
                    props.style
                ])}
                innerStyle={inline([
                    styles.centeredRow
                ])}
            >
                <SpectrumText style={inline([styles.xSmallMarginRight])} size={'b15'} weight={'bold'}>
                    Próxima Etapa
                </SpectrumText>
                <FontAwesomeIcon
                    color={Colors.colors.primary}
                    size={"1x"}
                    icon={faArrowRight}
                />
            </RainbowBorderButton>
        </Link>
    );
};
