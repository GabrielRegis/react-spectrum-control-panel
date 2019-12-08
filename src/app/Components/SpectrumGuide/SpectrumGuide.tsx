import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './SpectrumGuideStyles';
import Tour from 'reactour';
interface IProps {
    // Props type definition
    tourSteps: any[]
    shouldLaunchGuideOnRender: boolean
}

interface IState {
    // State type definition
    isOpened: boolean
}

export const SpectrumGuide: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        isOpened: props.shouldLaunchGuideOnRender
    };

    const [isOpened, setIsOpened] = React.useState(initialState.isOpened)

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
            rounded={5}
            onRequestClose={closeTour}
        />
    );
};
