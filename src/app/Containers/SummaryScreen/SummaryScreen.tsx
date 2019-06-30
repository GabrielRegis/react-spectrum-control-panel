import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';

interface IProps {
    // Props type definition
    number: number;
}

interface IState {
    // State type definition
    number: number;
}

export const FunctionalComponentTemplate: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
        number: 0
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([])}>
            teste
        </div>
    );
};
