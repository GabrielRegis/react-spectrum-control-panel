import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './SpectrumGuideStyles';
import Tour from 'reactour';
import { Colors } from 'app/Theme';
interface IProps {
    // Props type definition
    tourSteps: any[]
    shouldLaunchGuideOnRender: boolean
}

interface IState {
    // State type definition
    isOpened: boolean
}

export const SpectrumGuide: FunctionComponent<IProps> = (props, ref) => {
    const initialState: IState = {
        isOpened: props.shouldLaunchGuideOnRender
    };

    const [isOpened, setIsOpened] = React.useState(initialState.isOpened)
    React.useImperativeHandle(ref, () => ({
        openGuide: () => {
            setIsOpened(true)
        }
    }));

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const closeTour = () => {
        setIsOpened(false)
    }

    return (
        <Tour
            steps={props.tourSteps}
            isOpen={isOpened}
            accentColor={Colors.colors.pink}
            rounded={10}
            onRequestClose={closeTour}
        />
    );
};

export default React.forwardRef(SpectrumGuide)
